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

// Auth DOM Elements
const authBtn = document.getElementById('authBtn');
const userProfile = document.getElementById('userProfile');
const userAvatar = document.getElementById('userAvatar');
const userName = document.getElementById('userName');
const logoutBtn = document.getElementById('logoutBtn');
const authModal = document.getElementById('authModal');
const authClose = document.getElementById('authClose');
const githubLogin = document.getElementById('githubLogin');
const googleLogin = document.getElementById('googleLogin');
const emailAuthForm = document.getElementById('emailAuthForm');
const toggleAuthMode = document.getElementById('toggleAuthMode');

// Favorites DOM Elements
const favoritesBtn = document.getElementById('favoritesBtn');
const favoritesCount = document.getElementById('favoritesCount');
const favoritesModal = document.getElementById('favoritesModal');
const favoritesClose = document.getElementById('favoritesClose');
const favoritesBody = document.getElementById('favoritesBody');

// Merge all component arrays into one
const allComponents = [
    ...(typeof uiComponents !== 'undefined' ? uiComponents : []),
    ...(typeof keyboardComponents !== 'undefined' ? keyboardComponents : []),
    ...(typeof keyboardComponents2 !== 'undefined' ? keyboardComponents2 : []),
    ...(typeof keyboardComponents3 !== 'undefined' ? keyboardComponents3 : []),
    ...(typeof cardComponents !== 'undefined' ? cardComponents : []),
    ...(typeof retroComponents !== 'undefined' ? retroComponents : []),
    ...(typeof loaderComponents !== 'undefined' ? loaderComponents : []),
    ...(typeof switchComponents !== 'undefined' ? switchComponents : []),
    ...(typeof threeDCardComponents !== 'undefined' ? threeDCardComponents : []),
    ...(typeof templateComponents !== 'undefined' ? templateComponents : [])
];

// State
let currentCategory = 'all';
let currentTag = 'all';
let currentComponent = null;
let currentUser = null;
let userLikes = new Set(); // Set of component IDs liked by user
let likeCounts = {}; // Map of component ID -> count
let userFavorites = new Set(); // Set of component IDs saved by user
let showingFavorites = false; // Whether we're showing the favorites view

// Initialize
document.addEventListener('DOMContentLoaded', async () => {
    // Initialize Auth
    await initAuth();

    // Load static components first
    renderComponents(allComponents);
    
    // Try to load dynamic components from Supabase
    if (window.supabaseClient) {
        try {
            const { data, error } = await window.supabaseClient
                .from('components')
                .select('*')
                .eq('status', 'approved');
                
            if (data && !error) {
                // Add dynamic components to the list
                const dynamicComponents = data.map(comp => ({
                    id: comp.id, // UUID from DB
                    name: comp.name,
                    category: comp.category,
                    tags: comp.tags || [],
                    html: comp.html,
                    css: comp.css
                }));
                
                allComponents.push(...dynamicComponents);
                // Re-render with new data
                filterComponents(); 
            }
        } catch (e) {
            console.log('Supabase not connected or empty');
        }
    }

    updateStats(); // Update stats after loading everything
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
}

// ==================== AUTHENTICATION LOGIC ====================

async function initAuth() {
    if (!window.supabaseClient) return;

    // Check initial session
    const { data: { session } } = await window.supabaseClient.auth.getSession();
    updateAuthUI(session?.user);

    // Listen for auth changes
    window.supabaseClient.auth.onAuthStateChange((_event, session) => {
        updateAuthUI(session?.user);
    });

    // Event Listeners
    if (authBtn) authBtn.addEventListener('click', () => authModal.classList.add('active'));
    if (authClose) authClose.addEventListener('click', () => authModal.classList.remove('active'));
    
    if (logoutBtn) {
        logoutBtn.addEventListener('click', async () => {
            await window.supabaseClient.auth.signOut();
            showToast('Logged out successfully');
        });
    }

    if (githubLogin) {
        githubLogin.addEventListener('click', async () => {
            await window.supabaseClient.auth.signInWithOAuth({ 
                provider: 'github',
                options: {
                    redirectTo: window.location.href
                }
            });
        });
    }

    if (googleLogin) {
        googleLogin.addEventListener('click', async () => {
            await window.supabaseClient.auth.signInWithOAuth({ 
                provider: 'google',
                options: {
                    redirectTo: window.location.href
                }
            });
        });
    }

    // Email Auth Logic
    let isSignUpMode = false;
    
    if (toggleAuthMode) {
        toggleAuthMode.addEventListener('click', (e) => {
            e.preventDefault();
            isSignUpMode = !isSignUpMode;
            const title = document.getElementById('authTitle');
            const submitBtn = emailAuthForm.querySelector('button[type="submit"]');
            const nameField = document.getElementById('nameField');
            
            if (isSignUpMode) {
                title.textContent = 'Create Account';
                submitBtn.textContent = 'Sign Up';
                toggleAuthMode.textContent = 'Sign In';
                if (nameField) nameField.classList.remove('hidden');
            } else {
                title.textContent = 'Welcome Back';
                submitBtn.textContent = 'Sign In';
                toggleAuthMode.textContent = 'Sign Up';
                if (nameField) nameField.classList.add('hidden');
            }
        });
    }

    if (emailAuthForm) {
        emailAuthForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('emailInput').value;
            const password = document.getElementById('passwordInput').value;
            const nameInput = document.getElementById('nameInput');
            
            try {
                if (isSignUpMode) {
                    const { error } = await window.supabaseClient.auth.signUp({
                        email,
                        password,
                        options: {
                            data: {
                                full_name: nameInput ? nameInput.value : ''
                            }
                        }
                    });
                    if (error) throw error;
                    showToast('Check your email for confirmation link!');
                } else {
                    const { error } = await window.supabaseClient.auth.signInWithPassword({
                        email,
                        password,
                    });
                    if (error) throw error;
                    showToast('Signed in successfully!');
                }
                authModal.classList.remove('active');
            } catch (error) {
                showToast(error.message, 'error');
            }
        });
    }

    // Fetch initial likes data
    await fetchLikes();

    // Favorites Modal Event Listeners
    if (favoritesBtn) {
        favoritesBtn.addEventListener('click', () => {
            renderFavoritesModal();
            favoritesModal.classList.add('active');
        });
    }
    
    if (favoritesClose) {
        favoritesClose.addEventListener('click', () => {
            favoritesModal.classList.remove('active');
        });
    }
    
    if (favoritesModal) {
        favoritesModal.addEventListener('click', (e) => {
            if (e.target === favoritesModal) {
                favoritesModal.classList.remove('active');
            }
        });
    }
}

function updateAuthUI(user) {
    currentUser = user;
    
    if (user) {
        authBtn.classList.add('hidden');
        userProfile.classList.remove('hidden');
        if (favoritesBtn) favoritesBtn.classList.remove('hidden');
        userName.textContent = user.user_metadata.full_name || user.email.split('@')[0];
        userAvatar.src = user.user_metadata.avatar_url || `https://ui-avatars.com/api/?name=${userName.textContent}&background=random`;
        
        // Refresh likes and favorites
        Promise.all([fetchLikes(), fetchFavorites()]).then(() => {
            filterComponents(); // Re-render to update UI
        });
        authModal.classList.remove('active');
    } else {
        authBtn.classList.remove('hidden');
        userProfile.classList.add('hidden');
        if (favoritesBtn) favoritesBtn.classList.add('hidden');
        userLikes.clear();
        userFavorites.clear();
        updateFavoritesCount();
        filterComponents(); // Re-render to remove states
    }
}

// ==================== LIKES LOGIC ====================

async function fetchLikes() {
    if (!window.supabaseClient) return;

    // Get all likes counts
    const { data: counts, error: countError } = await window.supabaseClient
        .from('likes')
        .select('component_id');
    
    if (!countError && counts) {
        likeCounts = {};
        counts.forEach(like => {
            likeCounts[like.component_id] = (likeCounts[like.component_id] || 0) + 1;
        });
    }

    // Get user's likes if logged in
    if (currentUser) {
        const { data: userLikesData, error: userError } = await window.supabaseClient
            .from('likes')
            .select('component_id')
            .eq('user_id', currentUser.id);
            
        if (!userError && userLikesData) {
            userLikes = new Set(userLikesData.map(l => l.component_id));
        }
    }
}

async function toggleLike(componentId, btnElement) {
    if (!currentUser) {
        authModal.classList.add('active');
        return;
    }

    const isLiked = userLikes.has(componentId);
    const icon = btnElement.querySelector('i');
    const countSpan = btnElement.querySelector('.like-count');
    let currentCount = parseInt(countSpan.textContent) || 0;

    // Optimistic UI Update
    if (isLiked) {
        userLikes.delete(componentId);
        btnElement.classList.remove('liked');
        icon.classList.replace('fas', 'far');
        countSpan.textContent = Math.max(0, currentCount - 1);
        
        await window.supabaseClient
            .from('likes')
            .delete()
            .match({ user_id: currentUser.id, component_id: componentId });
    } else {
        userLikes.add(componentId);
        btnElement.classList.add('liked');
        icon.classList.replace('far', 'fas');
        countSpan.textContent = currentCount + 1;

        await window.supabaseClient
            .from('likes')
            .insert({ user_id: currentUser.id, component_id: componentId });
    }
}

// ==================== FAVORITES LOGIC ====================

async function fetchFavorites() {
    if (!window.supabaseClient || !currentUser) return;

    const { data: favoritesData, error } = await window.supabaseClient
        .from('favorites')
        .select('component_id')
        .eq('user_id', currentUser.id);
        
    if (!error && favoritesData) {
        userFavorites = new Set(favoritesData.map(f => f.component_id));
        updateFavoritesCount();
    }
}

function updateFavoritesCount() {
    if (favoritesCount) {
        favoritesCount.textContent = userFavorites.size;
    }
}

async function toggleFavorite(componentId, btnElement) {
    if (!currentUser) {
        authModal.classList.add('active');
        return;
    }

    const isSaved = userFavorites.has(componentId);
    const icon = btnElement.querySelector('i');

    // Optimistic UI Update
    if (isSaved) {
        userFavorites.delete(componentId);
        btnElement.classList.remove('saved');
        icon.classList.replace('fas', 'far');
        showToast('Removed from saved');
        
        await window.supabaseClient
            .from('favorites')
            .delete()
            .match({ user_id: currentUser.id, component_id: componentId });
    } else {
        userFavorites.add(componentId);
        btnElement.classList.add('saved');
        icon.classList.replace('far', 'fas');
        showToast('Saved to collection!');

        await window.supabaseClient
            .from('favorites')
            .insert({ user_id: currentUser.id, component_id: componentId });
    }
    
    updateFavoritesCount();
}

function renderFavoritesModal() {
    if (!favoritesBody) return;
    
    const favoriteComponents = allComponents.filter(c => userFavorites.has(c.id));
    
    if (favoriteComponents.length === 0) {
        favoritesBody.innerHTML = `
            <div class="favorites-empty">
                <i class="far fa-bookmark"></i>
                <p>No saved components yet</p>
                <span>Click the bookmark icon on any component to save it here</span>
            </div>
        `;
        return;
    }
    
    favoritesBody.innerHTML = '<div class="favorites-grid"></div>';
    const grid = favoritesBody.querySelector('.favorites-grid');
    
    favoriteComponents.forEach(component => {
        const item = document.createElement('div');
        item.className = 'favorite-item';
        item.innerHTML = `
            <div class="favorite-preview">
                <div class="favorite-shadow-host"></div>
            </div>
            <div class="favorite-info">
                <h4>${component.name}</h4>
                <span>${capitalizeFirst(component.category)}</span>
            </div>
            <div class="favorite-actions">
                <button class="fav-action-btn view-btn" data-id="${component.id}" title="View Code">
                    <i class="fas fa-code"></i>
                </button>
                <button class="fav-action-btn remove-btn" data-id="${component.id}" title="Remove">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        
        // Add shadow DOM preview
        const shadowHost = item.querySelector('.favorite-shadow-host');
        const shadow = shadowHost.attachShadow({mode: 'open'});
        shadow.innerHTML = `
            <style>
                :host { display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; transform: scale(0.5); }
                * { box-sizing: border-box; }
                ${component.css}
            </style>
            ${component.html}
        `;
        
        // Event listeners
        item.querySelector('.view-btn').addEventListener('click', () => {
            favoritesModal.classList.remove('active');
            openModal(component);
        });
        
        item.querySelector('.remove-btn').addEventListener('click', async () => {
            await toggleFavorite(component.id, document.querySelector(`.save-btn[data-id="${component.id}"]`) || item);
            renderFavoritesModal();
            filterComponents(); // Re-render main grid
        });
        
        grid.appendChild(item);
    });
}

// Create Component Card
function createComponentCard(component) {
    const card = document.createElement('div');
    card.className = 'component-card';
    card.dataset.id = component.id;
    card.dataset.category = component.category;
    card.dataset.tags = component.tags.join(',');
    
    // Preview Container (Light DOM - keeps grid background)
    const previewContainer = document.createElement('div');
    previewContainer.className = 'card-preview';
    
    // Shadow Host (Inside preview container)
    const shadowHost = document.createElement('div');
    shadowHost.style.width = '100%';
    shadowHost.style.height = '100%';
    shadowHost.style.display = 'flex';
    shadowHost.style.alignItems = 'center';
    shadowHost.style.justifyContent = 'center';
    
    const shadow = shadowHost.attachShadow({mode: 'open'});
    shadow.innerHTML = `
        <style>
            /* Reset and Base Styles for Shadow DOM */
            :host {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
            }
            * { box-sizing: border-box; }
            
            /* Component CSS */
            ${component.css}
        </style>
        ${component.html}
    `;
    
    previewContainer.appendChild(shadowHost);

    // Info Container
    const isLiked = userLikes.has(component.id);
    const likeCount = likeCounts[component.id] || 0;
    const isSaved = userFavorites.has(component.id);

    // Creator info
    const creatorName = component.creator_name || component.creatorName || 'Community';
    const creatorAvatar = component.creator_avatar || component.creatorAvatar || `https://ui-avatars.com/api/?name=${creatorName}&background=8b5cf6&color=fff&size=24`;
    const creatorUrl = component.creator_url || component.creatorUrl || '#';

    const infoContainer = document.createElement('div');
    infoContainer.className = 'card-info';
    infoContainer.innerHTML = `
        <div class="card-info-top">
            <div>
                <h3>${component.name}</h3>
                <p class="category">${capitalizeFirst(component.category)}</p>
            </div>
            <a href="${creatorUrl}" class="creator-credit" target="_blank" title="Created by ${creatorName}">
                <img src="${creatorAvatar}" alt="${creatorName}" class="creator-avatar">
                <span class="creator-name">${creatorName}</span>
            </a>
        </div>
        <div class="card-actions">
            <button class="card-btn save-btn ${isSaved ? 'saved' : ''}" data-id="${component.id}" title="${isSaved ? 'Remove from Saved' : 'Save Component'}">
                <i class="${isSaved ? 'fas' : 'far'} fa-bookmark"></i>
            </button>
            <button class="card-btn like-btn ${isLiked ? 'liked' : ''}" data-id="${component.id}" title="Like">
                <i class="${isLiked ? 'fas' : 'far'} fa-heart"></i>
                <span class="like-count">${likeCount}</span>
            </button>
            <button class="card-btn codepen-btn" data-id="${component.id}" title="Open in CodePen">
                <i class="fab fa-codepen"></i>
            </button>
            <button class="card-btn get-code-btn" data-id="${component.id}">
                <i class="fas fa-code"></i>
                Get Code
            </button>
        </div>
    `;

    card.appendChild(previewContainer);
    card.appendChild(infoContainer);
    
    // Event Listeners
    const saveBtn = infoContainer.querySelector('.save-btn');
    saveBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(component.id, saveBtn);
    });

    const likeBtn = infoContainer.querySelector('.like-btn');
    likeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleLike(component.id, likeBtn);
    });

    const codepenBtn = infoContainer.querySelector('.codepen-btn');
    codepenBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openInCodePen(component);
    });

    const getCodeBtn = infoContainer.querySelector('.get-code-btn');
    getCodeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openModal(component);
    });
    
    return card;
}

// Open in CodePen
function openInCodePen(component) {
    const data = {
        title: component.name,
        description: `A ${component.category} component from Shades By Jay`,
        html: component.html,
        css: component.css,
        editors: "110", // Open HTML and CSS tabs
        layout: "left",
        tags: ["shades-by-jay", component.category, ...component.tags]
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

// Inject Component Styles (scoped)
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
    
    // Set preview with Shadow DOM
    modalPreview.innerHTML = '';
    const shadowHost = document.createElement('div');
    shadowHost.style.width = '100%';
    shadowHost.style.height = '100%';
    shadowHost.style.display = 'flex';
    shadowHost.style.alignItems = 'center';
    shadowHost.style.justifyContent = 'center';
    
    const shadow = shadowHost.attachShadow({mode: 'open'});
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
            ${component.css}
        </style>
        ${component.html}
    `;
    
    modalPreview.appendChild(shadowHost);
    
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
            // If it's a real link (like Submit), let it navigate
            if (!link.dataset.category) return;

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

// Update Hero Stats
function updateStats() {
    const totalEl = document.getElementById('totalStats');
    const loaderEl = document.getElementById('loaderStats');
    const threeDEl = document.getElementById('3dStats');

    if (totalEl) {
        totalEl.textContent = allComponents.length + '+';
    }

    if (loaderEl) {
        const loaderCount = allComponents.filter(c => 
            c.category === 'loaders' || (c.tags && c.tags.includes('loader'))
        ).length;
        loaderEl.textContent = loaderCount + '+';
    }

    if (threeDEl) {
        const threeDCount = allComponents.filter(c => 
            (c.tags && c.tags.includes('3d')) || (c.tags && c.tags.includes('3D'))
        ).length;
        threeDEl.textContent = threeDCount + '+';
    }

    // Update template count if element exists
    const templateEl = document.getElementById('templateStats');
    if (templateEl) {
        const templateCount = allComponents.filter(c => 
            c.category === 'templates' || (c.tags && c.tags.includes('template'))
        ).length;
        templateEl.textContent = templateCount + '+';
    }
}
