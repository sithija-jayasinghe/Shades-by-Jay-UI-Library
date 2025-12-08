/**
 * Shades By Jay - Playground Page JavaScript
 * Full-featured code playground with live preview
 */

(function() {
    'use strict';

    // ============================================
    // State
    // ============================================
    const state = {
        currentLayout: 'horizontal',
        isDragging: false,
        currentPreviewSize: 100,
        autoRun: true,
        htmlCode: '',
        cssCode: '',
        debounceTimer: null
    };

    // ============================================
    // DOM Elements (will be initialized after DOM ready)
    // ============================================
    let elements = {};

    // ============================================
    // Initialize
    // ============================================
    function init() {
        // Initialize elements
        elements = {
            main: document.querySelector('.pg-main'),
            htmlEditor: document.getElementById('htmlEditor'),
            cssEditor: document.getElementById('cssEditor'),
            htmlLines: document.getElementById('htmlLineNumbers'),
            cssLines: document.getElementById('cssLineNumbers'),
            htmlPanel: document.getElementById('htmlPanel'),
            cssPanel: document.getElementById('cssPanel'),
            previewContainer: document.getElementById('previewContainer'),
            resizer: document.getElementById('resizer'),
            componentName: document.getElementById('projectName'),
            toast: document.getElementById('toast'),
            toastMessage: document.getElementById('toastMessage')
        };
        
        loadFromURL();
        setupEventListeners();
        setupResizer();
        updateLineNumbers('html');
        updateLineNumbers('css');
        updatePreview();
        setupAutoSave();
        updateCharCounts();
    }

    // ============================================
    // Load from URL Parameters
    // ============================================
    function loadFromURL() {
        const params = new URLSearchParams(window.location.search);
        
        // Check for encoded data
        const htmlParam = params.get('html');
        const cssParam = params.get('css');
        const name = params.get('name');
        
        if (htmlParam) {
            try {
                elements.htmlEditor.value = decodeURIComponent(atob(htmlParam));
            } catch (e) {
                elements.htmlEditor.value = decodeURIComponent(htmlParam);
            }
        }
        
        if (cssParam) {
            try {
                elements.cssEditor.value = decodeURIComponent(atob(cssParam));
            } catch (e) {
                elements.cssEditor.value = decodeURIComponent(cssParam);
            }
        }
        
        if (name) {
            if (elements.componentName) {
                elements.componentName.value = decodeURIComponent(name);
            }
        }
        
        // Check localStorage for saved work
        if (!htmlParam && !cssParam) {
            const saved = localStorage.getItem('playground-autosave');
            if (saved) {
                try {
                    const data = JSON.parse(saved);
                    if (data.html) elements.htmlEditor.value = data.html;
                    if (data.css) elements.cssEditor.value = data.css;
                    if (data.name && elements.componentName) elements.componentName.value = data.name;
                } catch (e) {
                    console.error('Failed to load autosave:', e);
                }
            }
        }
        
        // Set default code if empty
        if (!elements.htmlEditor.value) {
            elements.htmlEditor.value = `<div class="demo-card">
  <div class="card-icon">✨</div>
  <h2>Welcome to Playground</h2>
  <p>Start editing HTML and CSS to see live changes!</p>
  <button class="demo-btn">Click Me</button>
</div>`;
        }
        
        if (!elements.cssEditor.value) {
            elements.cssEditor.value = `.demo-card {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  max-width: 320px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.demo-card h2 {
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
}

.demo-card p {
  color: #a1a1aa;
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.demo-btn {
  background: linear-gradient(135deg, #8b5cf6, #6366f1);
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.demo-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(139, 92, 246, 0.4);
}`;
        }
    }

    // ============================================
    // Event Listeners
    // ============================================
    function setupEventListeners() {
        // Editor input
        elements.htmlEditor.addEventListener('input', () => {
            updateLineNumbers('html');
            updateCharCounts();
            debouncePreview();
        });
        
        elements.cssEditor.addEventListener('input', () => {
            updateLineNumbers('css');
            updateCharCounts();
            debouncePreview();
        });
        
        // Editor scroll sync with line numbers
        elements.htmlEditor.addEventListener('scroll', () => {
            if (elements.htmlLines) {
                elements.htmlLines.scrollTop = elements.htmlEditor.scrollTop;
            }
        });
        
        elements.cssEditor.addEventListener('scroll', () => {
            if (elements.cssLines) {
                elements.cssLines.scrollTop = elements.cssEditor.scrollTop;
            }
        });
        
        // Tab key support
        elements.htmlEditor.addEventListener('keydown', handleTab);
        elements.cssEditor.addEventListener('keydown', handleTab);
        
        // Layout buttons
        document.querySelectorAll('.pg-layout-btn').forEach(btn => {
            btn.addEventListener('click', () => setLayout(btn.dataset.layout));
        });
        
        // Preview size buttons
        document.querySelectorAll('.pg-size-btn').forEach(btn => {
            btn.addEventListener('click', () => setPreviewSize(parseInt(btn.dataset.size)));
        });
        
        // Action buttons
        document.getElementById('resetBtn')?.addEventListener('click', resetCode);
        document.getElementById('copyHtml')?.addEventListener('click', () => copyCode('html'));
        document.getElementById('copyCss')?.addEventListener('click', () => copyCode('css'));
        document.getElementById('codepenBtn')?.addEventListener('click', exportToCodePen);
        document.getElementById('downloadBtn')?.addEventListener('click', downloadFiles);
        document.getElementById('refreshPreview')?.addEventListener('click', updatePreview);
        
        // Minimize buttons
        document.querySelectorAll('.minimize-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const panel = this.dataset.panel === 'html' ? elements.htmlPanel : elements.cssPanel;
                panel.classList.toggle('minimized');
                const icon = this.querySelector('i');
                if (panel.classList.contains('minimized')) {
                    icon.className = 'fas fa-plus';
                } else {
                    icon.className = 'fas fa-minus';
                }
            });
        });
    }

    // ============================================
    // Line Numbers
    // ============================================
    function updateLineNumbers(type) {
        const editor = type === 'html' ? elements.htmlEditor : elements.cssEditor;
        const linesEl = type === 'html' ? elements.htmlLines : elements.cssLines;
        
        const lines = editor.value.split('\n');
        const lineCount = lines.length;
        
        let html = '';
        for (let i = 1; i <= lineCount; i++) {
            html += i + '\n';
        }
        
        linesEl.textContent = html;
    }

    // ============================================
    // Tab Key Support
    // ============================================
    function handleTab(e) {
        if (e.key === 'Tab') {
            e.preventDefault();
            const start = this.selectionStart;
            const end = this.selectionEnd;
            
            this.value = this.value.substring(0, start) + '  ' + this.value.substring(end);
            this.selectionStart = this.selectionEnd = start + 2;
            
            // Trigger update
            this.dispatchEvent(new Event('input'));
        }
    }

    // ============================================
    // Preview
    // ============================================
    function debouncePreview() {
        if (state.autoRun) {
            clearTimeout(state.debounceTimer);
            state.debounceTimer = setTimeout(updatePreview, 300);
        }
    }

    function updatePreview() {
        const html = elements.htmlEditor.value;
        const css = elements.cssEditor.value;
        
        const previewContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Inter', system-ui, sans-serif;
            background: #0a0a0b;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            color: #fafafa;
        }
        ${css}
    </style>
</head>
<body>
    ${html}
</body>
</html>`;
        
        // Create or update iframe
        let iframe = elements.previewContainer.querySelector('iframe');
        if (!iframe) {
            iframe = document.createElement('iframe');
            iframe.id = 'previewFrame';
            iframe.title = 'Preview';
            iframe.style.cssText = 'width: 100%; height: 100%; border: none; background: #0a0a0b; border-radius: 8px;';
            elements.previewContainer.appendChild(iframe);
        }
        
        // Use srcdoc for better isolation
        iframe.srcdoc = previewContent;
    }

    // ============================================
    // Layout
    // ============================================
    function setLayout(layout) {
        state.currentLayout = layout;
        elements.main.dataset.layout = layout;
        
        // Update active button
        document.querySelectorAll('.pg-layout-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.layout === layout);
        });
    }

    // ============================================
    // Preview Size
    // ============================================
    function setPreviewSize(size) {
        state.currentPreviewSize = size;
        
        // Update active button
        document.querySelectorAll('.pg-size-btn').forEach(btn => {
            btn.classList.toggle('active', parseInt(btn.dataset.size) === size);
        });
        
        // Apply transform scale to preview
        const iframe = elements.previewContainer.querySelector('iframe');
        if (iframe) {
            const scale = size / 100;
            elements.previewContainer.style.transform = `scale(${scale})`;
            elements.previewContainer.style.transformOrigin = 'top left';
        }
    }

    // ============================================
    // Resizer
    // ============================================
    function setupResizer() {
        let startPos, startSize;
        
        elements.resizer.addEventListener('mousedown', (e) => {
            state.isDragging = true;
            document.body.style.cursor = state.currentLayout === 'horizontal' ? 'col-resize' : 'row-resize';
            document.body.style.userSelect = 'none';
            
            if (state.currentLayout === 'horizontal') {
                startPos = e.clientX;
                startSize = document.querySelector('.pg-editors').offsetWidth;
            } else {
                startPos = e.clientY;
                startSize = document.querySelector('.pg-editors').offsetHeight;
            }
        });
        
        document.addEventListener('mousemove', (e) => {
            if (!state.isDragging) return;
            
            const editors = document.querySelector('.pg-editors');
            const main = elements.main;
            
            if (state.currentLayout === 'horizontal') {
                const delta = e.clientX - startPos;
                const newWidth = Math.max(200, Math.min(startSize + delta, main.offsetWidth - 200));
                editors.style.width = newWidth + 'px';
                editors.style.flex = 'none';
            } else if (state.currentLayout === 'vertical') {
                const delta = e.clientY - startPos;
                const newHeight = Math.max(100, Math.min(startSize + delta, main.offsetHeight - 100));
                editors.style.height = newHeight + 'px';
                editors.style.flex = 'none';
            }
        });
        
        document.addEventListener('mouseup', () => {
            if (state.isDragging) {
                state.isDragging = false;
                document.body.style.cursor = '';
                document.body.style.userSelect = '';
            }
        });
    }

    // ============================================
    // Actions
    // ============================================
    function resetCode() {
        if (confirm('Reset to default code? Your changes will be lost.')) {
            elements.htmlEditor.value = `<div class="demo-card">
  <div class="card-icon">✨</div>
  <h2>Welcome to Playground</h2>
  <p>Start editing HTML and CSS to see live changes!</p>
  <button class="demo-btn">Click Me</button>
</div>`;
            
            elements.cssEditor.value = `.demo-card {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  max-width: 320px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.demo-card h2 {
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
}

.demo-card p {
  color: #a1a1aa;
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.demo-btn {
  background: linear-gradient(135deg, #8b5cf6, #6366f1);
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.demo-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(139, 92, 246, 0.4);
}`;
            
            updateLineNumbers('html');
            updateLineNumbers('css');
            updatePreview();
            showToast('Code reset successfully!');
        }
    }

    function copyCode(type) {
        const code = type === 'html' ? elements.htmlEditor.value : elements.cssEditor.value;
        
        navigator.clipboard.writeText(code).then(() => {
            showToast(`${type.toUpperCase()} copied to clipboard!`);
        }).catch(() => {
            // Fallback
            const textarea = document.createElement('textarea');
            textarea.value = code;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            showToast(`${type.toUpperCase()} copied to clipboard!`);
        });
    }

    function exportToCodePen() {
        const html = elements.htmlEditor.value;
        const css = elements.cssEditor.value;
        const title = elements.componentName ? elements.componentName.value : 'Shades By Jay Component';
        
        const data = {
            title: title,
            html: html,
            css: css,
            css_external: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
            editors: '110'
        };
        
        const form = document.createElement('form');
        form.action = 'https://codepen.io/pen/define';
        form.method = 'POST';
        form.target = '_blank';
        
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = 'data';
        input.value = JSON.stringify(data);
        
        form.appendChild(input);
        document.body.appendChild(form);
        form.submit();
        document.body.removeChild(form);
        
        showToast('Opening in CodePen...');
    }

    function toggleFullscreen() {
        const previewPanel = document.querySelector('.pg-preview-panel');
        
        if (!document.fullscreenElement) {
            previewPanel.requestFullscreen().catch(err => {
                showToast('Fullscreen not available');
            });
        } else {
            document.exitFullscreen();
        }
    }

    // ============================================
    // Auto Save
    // ============================================
    function setupAutoSave() {
        setInterval(() => {
            const data = {
                html: elements.htmlEditor.value,
                css: elements.cssEditor.value,
                name: elements.componentName ? elements.componentName.value : 'Untitled'
            };
            localStorage.setItem('playground-autosave', JSON.stringify(data));
        }, 5000);
    }

    // ============================================
    // Character Counts
    // ============================================
    function updateCharCounts() {
        const htmlChars = elements.htmlEditor.value.length;
        const cssChars = elements.cssEditor.value.length;
        
        const htmlCount = document.getElementById('htmlCharCount');
        const cssCount = document.getElementById('cssCharCount');
        
        if (htmlCount) htmlCount.textContent = `HTML: ${htmlChars} chars`;
        if (cssCount) cssCount.textContent = `CSS: ${cssChars} chars`;
    }

    // ============================================
    // Download Files
    // ============================================
    function downloadFiles() {
        const html = elements.htmlEditor.value;
        const css = elements.cssEditor.value;
        const name = elements.componentName ? elements.componentName.value : 'component';
        
        // Create full HTML file
        const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${name}</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Inter', system-ui, sans-serif;
            background: #0a0a0b;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            color: #fafafa;
        }
${css}
    </style>
</head>
<body>
${html}
</body>
</html>`;
        
        // Download
        const blob = new Blob([fullHtml], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${name.replace(/\s+/g, '-').toLowerCase()}.html`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        showToast('File downloaded!');
    }

    // ============================================
    // Toast
    // ============================================
    function showToast(message) {
        if (elements.toastMessage) {
            elements.toastMessage.textContent = message;
        }
        elements.toast.classList.add('show');
        
        setTimeout(() => {
            elements.toast.classList.remove('show');
        }, 2500);
    }

    // ============================================
    // Start
    // ============================================
    document.addEventListener('DOMContentLoaded', init);

    // Expose for external use
    window.playgroundPage = {
        updatePreview,
        setLayout,
        setPreviewSize,
        copyCode,
        exportToCodePen
    };

})();
