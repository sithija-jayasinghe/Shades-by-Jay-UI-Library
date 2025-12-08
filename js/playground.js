/* ============================================
   Component Playground - JavaScript
   ============================================ */

// Playground State
let playgroundActive = false;
let originalHtml = '';
let originalCss = '';
let debounceTimer = null;

// DOM Elements (will be initialized after DOM loads)
let playgroundToggleBtn = null;
let playgroundContainer = null;
let htmlEditor = null;
let cssEditor = null;
let playgroundPreview = null;

// Initialize Playground
function initPlayground() {
    playgroundToggleBtn = document.getElementById('playgroundToggle');
    playgroundContainer = document.getElementById('playgroundContainer');
    htmlEditor = document.getElementById('htmlEditor');
    cssEditor = document.getElementById('cssEditor');
    playgroundPreview = document.getElementById('playgroundPreview');
    
    if (!playgroundToggleBtn) return;
    
    // Toggle Playground Mode
    playgroundToggleBtn.addEventListener('click', togglePlaygroundMode);
    
    // Editor Input Listeners with debounce
    if (htmlEditor) {
        htmlEditor.addEventListener('input', () => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(updatePlaygroundPreview, 300);
        });
        htmlEditor.addEventListener('keydown', handleTabKey);
    }
    
    if (cssEditor) {
        cssEditor.addEventListener('input', () => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(updatePlaygroundPreview, 300);
        });
        cssEditor.addEventListener('keydown', handleTabKey);
    }
    
    // Reset Buttons
    const resetHtmlBtn = document.getElementById('resetHtml');
    const resetCssBtn = document.getElementById('resetCss');
    
    if (resetHtmlBtn) {
        resetHtmlBtn.addEventListener('click', () => resetCode('html'));
    }
    
    if (resetCssBtn) {
        resetCssBtn.addEventListener('click', () => resetCode('css'));
    }
    
    // Copy Buttons in Playground
    const copyHtmlBtn = document.getElementById('copyHtmlPlayground');
    const copyCssBtn = document.getElementById('copyCssPlayground');
    
    if (copyHtmlBtn) {
        copyHtmlBtn.addEventListener('click', () => copyPlaygroundCode('html'));
    }
    
    if (copyCssBtn) {
        copyCssBtn.addEventListener('click', () => copyPlaygroundCode('css'));
    }
    
    // Reset All Button
    const resetAllBtn = document.getElementById('resetAll');
    if (resetAllBtn) {
        resetAllBtn.addEventListener('click', resetAllCode);
    }
    
    // Open in CodePen Button
    const openCodePenBtn = document.getElementById('openInCodePen');
    if (openCodePenBtn) {
        openCodePenBtn.addEventListener('click', openPlaygroundInCodePen);
    }
    
    // Open in Playground Page Button
    const openPlaygroundPageBtn = document.getElementById('openPlaygroundPage');
    if (openPlaygroundPageBtn) {
        openPlaygroundPageBtn.addEventListener('click', openInPlaygroundPage);
    }
}

// Open in Full Playground Page
function openInPlaygroundPage(e) {
    if (e) e.preventDefault();
    
    const componentName = document.getElementById('modalTitle')?.textContent || 'Component';
    const html = originalHtml || '';
    const css = originalCss || '';
    
    // Encode the data for URL
    const encodedHtml = btoa(encodeURIComponent(html));
    const encodedCss = btoa(encodeURIComponent(css));
    const encodedName = encodeURIComponent(componentName);
    
    // Open playground page with data
    const url = `playground.html?name=${encodedName}&html=${encodedHtml}&css=${encodedCss}`;
    window.open(url, '_blank');
}

// Toggle Playground Mode
function togglePlaygroundMode() {
    playgroundActive = !playgroundActive;
    const modal = document.getElementById('codeModal');
    
    if (playgroundActive) {
        modal.classList.add('playground-active');
        playgroundToggleBtn.classList.add('active');
        playgroundToggleBtn.innerHTML = '<i class="fas fa-eye"></i><span>View Mode</span>';
        
        // Initialize editors with current code
        if (htmlEditor && cssEditor) {
            htmlEditor.value = originalHtml;
            cssEditor.value = originalCss;
            updatePlaygroundPreview();
        }
    } else {
        modal.classList.remove('playground-active');
        playgroundToggleBtn.classList.remove('active');
        playgroundToggleBtn.innerHTML = '<i class="fas fa-play"></i><span>Playground</span>';
    }
}

// Update Playground Preview
function updatePlaygroundPreview() {
    if (!playgroundPreview || !htmlEditor || !cssEditor) return;
    
    const html = htmlEditor.value;
    const css = cssEditor.value;
    
    try {
        playgroundPreview.innerHTML = '';
        
        const shadowHost = document.createElement('div');
        shadowHost.style.width = '100%';
        shadowHost.style.height = '100%';
        shadowHost.style.display = 'flex';
        shadowHost.style.alignItems = 'center';
        shadowHost.style.justifyContent = 'center';
        
        const shadow = shadowHost.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
            <style>
                :host {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    height: 100%;
                }
                * { box-sizing: border-box; }
                ${css}
            </style>
            ${html}
        `;
        
        playgroundPreview.appendChild(shadowHost);
    } catch (e) {
        console.error('Playground preview error:', e);
    }
}

// Handle Tab Key in Editors
function handleTabKey(e) {
    if (e.key === 'Tab') {
        e.preventDefault();
        const start = e.target.selectionStart;
        const end = e.target.selectionEnd;
        const value = e.target.value;
        
        // Insert 2 spaces
        e.target.value = value.substring(0, start) + '  ' + value.substring(end);
        e.target.selectionStart = e.target.selectionEnd = start + 2;
        
        // Trigger preview update
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(updatePlaygroundPreview, 300);
    }
}

// Reset Code
function resetCode(type) {
    if (type === 'html' && htmlEditor) {
        htmlEditor.value = originalHtml;
    } else if (type === 'css' && cssEditor) {
        cssEditor.value = originalCss;
    }
    
    updatePlaygroundPreview();
    showToast('Code reset to original');
}

// Reset All Code
function resetAllCode() {
    if (htmlEditor) htmlEditor.value = originalHtml;
    if (cssEditor) cssEditor.value = originalCss;
    updatePlaygroundPreview();
    showToast('All code reset to original');
}

// Copy Playground Code
async function copyPlaygroundCode(type) {
    let code = '';
    
    if (type === 'html' && htmlEditor) {
        code = htmlEditor.value;
    } else if (type === 'css' && cssEditor) {
        code = cssEditor.value;
    }
    
    try {
        await navigator.clipboard.writeText(code);
        showToast('Copied to clipboard!');
    } catch (err) {
        console.error('Failed to copy:', err);
        showToast('Failed to copy!');
    }
}

// Open Playground Code in CodePen
function openPlaygroundInCodePen() {
    const html = htmlEditor ? htmlEditor.value : '';
    const css = cssEditor ? cssEditor.value : '';
    
    const data = {
        title: 'Shades By Jay - Playground',
        description: 'Created with Shades By Jay UI Library',
        html: html,
        css: css,
        editors: "110",
        layout: "left"
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
}

// Set Original Code (called from app.js when modal opens)
function setPlaygroundOriginalCode(html, css) {
    originalHtml = html;
    originalCss = css;
    
    // Reset playground state when modal opens
    playgroundActive = false;
    const modal = document.getElementById('codeModal');
    if (modal) {
        modal.classList.remove('playground-active');
    }
    
    if (playgroundToggleBtn) {
        playgroundToggleBtn.classList.remove('active');
        playgroundToggleBtn.innerHTML = '<i class="fas fa-play"></i><span>Playground</span>';
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initPlayground();
});
