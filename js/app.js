/* ============================================
   UI Verse - Main Application JavaScript
   ============================================ */

// DOM Elements
const componentsGrid = document.getElementById('componentsGrid');
const searchInput = document.getElementById('searchInput');
const navLinks = document.querySelectorAll('.nav-link');
const tags = document.querySelectorAll('.tag');
const themeToggle = document.getElementById('themeToggle');
const modal = document.getElementById('codeModal');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalPreview = document.getElementById('modalPreview');
const htmlContent = document.getElementById('htmlContent');
const cssContent = document.getElementById('cssContent');
const codeTabs = document.querySelectorAll('.code-tab');
const codeBlocks = document.querySelectorAll('.code-block');
const copyButtons = document.querySelectorAll('.copy-btn');
const toast = document.getElementById('toast');

// Merge all component arrays into one
const allComponents = [
    ...(typeof uiComponents !== 'undefined' ? uiComponents : []),
    ...(typeof keyboardComponents !== 'undefined' ? keyboardComponents : []),
    ...(typeof keyboardComponents2 !== 'undefined' ? keyboardComponents2 : []),
    ...(typeof keyboardComponents3 !== 'undefined' ? keyboardComponents3 : []),
    ...(typeof cardComponents !== 'undefined' ? cardComponents : []),
    ...(typeof retroComponents !== 'undefined' ? retroComponents : [])
];

// State
let currentCategory = 'all';
let currentTag = 'all';
let currentComponent = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderComponents(allComponents);
    initializeEventListeners();
    loadTheme();
});

// Render Components Grid
function renderComponents(components) {
    componentsGrid.innerHTML = '';
    
    if (components.length === 0) {
        componentsGrid.innerHTML = `
            <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 4rem; color: var(--text-secondary);">
                <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">No components found</h3>
                <p>Try adjusting your search or filters</p>
            </div>
        `;
        return;
    }
    
    components.forEach(component => {
        const card = createComponentCard(component);
        componentsGrid.appendChild(card);
    });
    
    // Apply component styles
    injectComponentStyles(components);
}

// Create Component Card
function createComponentCard(component) {
    const card = document.createElement('div');
    card.className = 'component-card';
    card.dataset.id = component.id;
    card.dataset.category = component.category;
    card.dataset.tags = component.tags.join(',');
    
    card.innerHTML = `
        <div class="card-preview">
            <style>${component.css}</style>
            ${component.html}
        </div>
        <div class="card-info">
            <div>
                <h3>${component.name}</h3>
                <p class="category">${capitalizeFirst(component.category)}</p>
            </div>
            <div class="card-actions">
                <button class="card-btn get-code-btn" data-id="${component.id}">
                    <i class="fas fa-code"></i>
                    Get Code
                </button>
            </div>
        </div>
    `;
    
    // Add click event for get code button
    const getCodeBtn = card.querySelector('.get-code-btn');
    getCodeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openModal(component);
    });
    
    return card;
}

// Inject Component Styles (scoped)
function injectComponentStyles(components) {
    // Remove existing injected styles
    const existingStyles = document.querySelectorAll('[data-component-style]');
    existingStyles.forEach(style => style.remove());
}

// Filter Components
function filterComponents() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    let filtered = allComponents.filter(component => {
        const matchesCategory = currentCategory === 'all' || component.category === currentCategory;
        const matchesTag = currentTag === 'all' || component.tags.includes(currentTag);
        const matchesSearch = searchTerm === '' || 
            component.name.toLowerCase().includes(searchTerm) ||
            component.category.toLowerCase().includes(searchTerm) ||
            component.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        
        return matchesCategory && matchesTag && matchesSearch;
    });
    
    renderComponents(filtered);
}

// Open Modal
function openModal(component) {
    currentComponent = component;
    modalTitle.textContent = component.name;
    
    // Set preview with scoped styles
    modalPreview.innerHTML = `
        <style>${component.css}</style>
        ${component.html}
    `;
    
    // Set code content
    htmlContent.textContent = formatCode(component.html);
    cssContent.textContent = formatCode(component.css);
    
    // Reset to HTML tab
    codeTabs.forEach(tab => tab.classList.remove('active'));
    codeBlocks.forEach(block => block.classList.remove('active'));
    codeTabs[0].classList.add('active');
    document.getElementById('htmlCode').classList.add('active');
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    currentComponent = null;
}

// Format Code for Display
function formatCode(code) {
    return code.trim();
}

// Copy to Clipboard
async function copyToClipboard(type) {
    if (!currentComponent) return;
    
    const code = type === 'html' ? currentComponent.html : currentComponent.css;
    
    try {
        await navigator.clipboard.writeText(code);
        showToast('Copied to clipboard!');
        
        // Update button state
        const btn = document.querySelector(`.copy-btn[data-type="${type}"]`);
        btn.classList.add('copied');
        btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        
        setTimeout(() => {
            btn.classList.remove('copied');
            btn.innerHTML = '<i class="fas fa-copy"></i> Copy';
        }, 2000);
    } catch (err) {
        console.error('Failed to copy:', err);
        showToast('Failed to copy!');
    }
}

// Show Toast Notification
function showToast(message) {
    toast.querySelector('span').textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}

// Toggle Theme
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update icon
    const icon = themeToggle.querySelector('i');
    icon.className = newTheme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
}

// Load Theme from localStorage
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    const icon = themeToggle.querySelector('i');
    icon.className = savedTheme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
}

// Utility Functions
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Initialize Event Listeners
function initializeEventListeners() {
    // Search
    searchInput.addEventListener('input', debounce(filterComponents, 300));
    
    // Category Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            currentCategory = link.dataset.category;
            filterComponents();
        });
    });
    
    // Tags
    tags.forEach(tag => {
        tag.addEventListener('click', () => {
            tags.forEach(t => t.classList.remove('active'));
            tag.classList.add('active');
            currentTag = tag.dataset.tag;
            filterComponents();
        });
    });
    
    // Theme Toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Modal Close
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    
    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    
    // Code Tabs
    codeTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabType = tab.dataset.tab;
            
            codeTabs.forEach(t => t.classList.remove('active'));
            codeBlocks.forEach(b => b.classList.remove('active'));
            
            tab.classList.add('active');
            document.getElementById(`${tabType}Code`).classList.add('active');
        });
    });
    
    // Copy Buttons
    copyButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            copyToClipboard(btn.dataset.type);
        });
    });
}

// Debounce Function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
