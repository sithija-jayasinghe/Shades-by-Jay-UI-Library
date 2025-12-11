/* ============================================
   SEO Manager - Dynamic Meta Tags & Structured Data
   Shades By Jay UI Library
   ============================================ */

const SEO = {
    // Site configuration
    config: {
        siteName: 'Shades By Jay',
        siteUrl: 'https://shadesbyjay.site',
        defaultTitle: 'Shades By Jay - Free Open Source UI Components Library',
        defaultDescription: 'A beautiful collection of 250+ free, open-source UI components. Copy HTML/CSS with one click. Buttons, cards, loaders, switches, forms & templates. MIT License.',
        defaultImage: 'https://shadesbyjay.site/assets/og-image.png',
        twitterHandle: '@shadesbyjay',
        author: 'Sithija Harshana Jayasinghe',
        themeColor: '#8b5cf6',
        locale: 'en_US',
        keywords: [
            'UI components',
            'CSS components',
            'HTML components',
            'free UI library',
            'open source UI',
            'web components',
            'button designs',
            'card designs',
            'CSS loaders',
            'toggle switches',
            'form components',
            'web templates',
            'copy paste UI',
            'frontend components',
            'CSS animations',
            'modern UI',
            'responsive components',
            'tailwind alternative',
            'bootstrap alternative',
            'UI kit'
        ]
    },

    // Category-specific SEO data
    categories: {
        all: {
            title: 'All UI Components - Shades By Jay',
            description: 'Browse 250+ free UI components. Buttons, cards, loaders, switches, forms, and more. Copy HTML/CSS instantly.',
            keywords: ['all components', 'UI library', 'component collection']
        },
        buttons: {
            title: 'CSS Button Components - Free Button Designs | Shades By Jay',
            description: 'Beautiful CSS button components with hover effects, gradients, animations. Copy-paste ready HTML/CSS button designs.',
            keywords: ['CSS buttons', 'button hover effects', 'animated buttons', 'gradient buttons']
        },
        cards: {
            title: 'CSS Card Components - Modern Card Designs | Shades By Jay',
            description: 'Stunning CSS card components for profiles, products, pricing. Glassmorphism, neumorphism, 3D cards with animations.',
            keywords: ['CSS cards', 'card designs', 'profile cards', 'product cards', 'glassmorphism']
        },
        loaders: {
            title: 'CSS Loaders & Spinners - Loading Animations | Shades By Jay',
            description: '50+ pure CSS loaders and spinners. Animated loading indicators for websites. No JavaScript required.',
            keywords: ['CSS loaders', 'loading spinners', 'CSS animations', 'loading indicators']
        },
        switches: {
            title: 'CSS Toggle Switches - Custom Checkbox Designs | Shades By Jay',
            description: 'Creative CSS toggle switches and custom checkboxes. iOS-style toggles, animated switches, dark mode toggles.',
            keywords: ['CSS switches', 'toggle buttons', 'custom checkboxes', 'iOS toggle']
        },
        inputs: {
            title: 'CSS Input Fields - Form Input Designs | Shades By Jay',
            description: 'Modern CSS input field designs with floating labels, animations, and validation styles. Copy-paste ready.',
            keywords: ['CSS inputs', 'form inputs', 'floating labels', 'input animations']
        },
        forms: {
            title: 'CSS Form Components - Login & Contact Forms | Shades By Jay',
            description: 'Complete CSS form designs. Login forms, signup forms, contact forms with validation and modern styling.',
            keywords: ['CSS forms', 'login forms', 'signup forms', 'contact forms']
        },
        templates: {
            title: 'Free Website Templates - Landing Pages | Shades By Jay',
            description: 'Free HTML/CSS website templates. Modern landing pages, portfolios, dashboards. Fully responsive designs.',
            keywords: ['website templates', 'landing pages', 'HTML templates', 'free templates']
        }
    },

    // Page-specific SEO data
    pages: {
        'index.html': {
            title: 'Shades By Jay - Free Open Source UI Components Library',
            description: 'A beautiful collection of 250+ free, open-source UI components. Copy HTML/CSS with one click. Buttons, cards, loaders, switches, forms & templates.',
            type: 'website'
        },
        'playground.html': {
            title: 'UI Playground - Live Code Editor | Shades By Jay',
            description: 'Live HTML/CSS playground to customize UI components. Real-time preview, edit code, and export your designs.',
            type: 'website'
        },
        'submit.html': {
            title: 'Submit Your Component - Contribute | Shades By Jay',
            description: 'Contribute to the open-source UI library. Submit your creative HTML/CSS components and get featured.',
            type: 'website'
        },
        'documentation.html': {
            title: 'Documentation - How to Use | Shades By Jay',
            description: 'Learn how to use Shades By Jay UI components. Installation guide, usage examples, and best practices.',
            type: 'article'
        },
        'guidelines.html': {
            title: 'Contribution Guidelines | Shades By Jay',
            description: 'Guidelines for contributing to Shades By Jay. Code standards, design principles, and submission process.',
            type: 'article'
        },
        'changelog.html': {
            title: 'Changelog - Updates & New Features | Shades By Jay',
            description: 'Latest updates, new components, and feature releases for Shades By Jay UI Library.',
            type: 'article'
        }
    },

    // Initialize SEO
    init() {
        this.setBasicMeta();
        this.setOpenGraph();
        this.setTwitterCard();
        this.setStructuredData();
        this.setCanonicalUrl();
        this.handleDynamicRouting();
        console.log('SEO Manager initialized');
    },

    // Set basic meta tags
    setBasicMeta() {
        const page = this.getCurrentPage();
        const pageData = this.pages[page] || this.pages['index.html'];
        const category = this.getCurrentCategory();
        
        let title = pageData.title;
        let description = pageData.description;
        
        // Override with category data if on index with category filter
        if (page === 'index.html' && category && this.categories[category]) {
            title = this.categories[category].title;
            description = this.categories[category].description;
        }

        // Update document title
        document.title = title;

        // Set or update meta tags
        this.setMetaTag('description', description);
        this.setMetaTag('keywords', this.config.keywords.join(', '));
        this.setMetaTag('author', this.config.author);
        this.setMetaTag('theme-color', this.config.themeColor);
        this.setMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
        
        // Mobile optimization
        this.setMetaTag('format-detection', 'telephone=no');
        this.setMetaTag('apple-mobile-web-app-capable', 'yes');
        this.setMetaTag('apple-mobile-web-app-status-bar-style', 'black-translucent');
        this.setMetaTag('apple-mobile-web-app-title', this.config.siteName);
    },

    // Set Open Graph meta tags
    setOpenGraph() {
        const page = this.getCurrentPage();
        const pageData = this.pages[page] || this.pages['index.html'];
        const category = this.getCurrentCategory();
        
        let title = pageData.title;
        let description = pageData.description;
        
        if (page === 'index.html' && category && this.categories[category]) {
            title = this.categories[category].title;
            description = this.categories[category].description;
        }

        this.setMetaTag('og:type', pageData.type || 'website', 'property');
        this.setMetaTag('og:site_name', this.config.siteName, 'property');
        this.setMetaTag('og:title', title, 'property');
        this.setMetaTag('og:description', description, 'property');
        this.setMetaTag('og:image', this.config.defaultImage, 'property');
        this.setMetaTag('og:image:width', '1200', 'property');
        this.setMetaTag('og:image:height', '630', 'property');
        this.setMetaTag('og:image:alt', 'Shades By Jay - Open Source UI Library', 'property');
        this.setMetaTag('og:url', this.getCanonicalUrl(), 'property');
        this.setMetaTag('og:locale', this.config.locale, 'property');
    },

    // Set Twitter Card meta tags
    setTwitterCard() {
        const page = this.getCurrentPage();
        const pageData = this.pages[page] || this.pages['index.html'];
        const category = this.getCurrentCategory();
        
        let title = pageData.title;
        let description = pageData.description;
        
        if (page === 'index.html' && category && this.categories[category]) {
            title = this.categories[category].title;
            description = this.categories[category].description;
        }

        this.setMetaTag('twitter:card', 'summary_large_image');
        this.setMetaTag('twitter:site', this.config.twitterHandle);
        this.setMetaTag('twitter:creator', this.config.twitterHandle);
        this.setMetaTag('twitter:title', title);
        this.setMetaTag('twitter:description', description);
        this.setMetaTag('twitter:image', this.config.defaultImage);
        this.setMetaTag('twitter:image:alt', 'Shades By Jay - Open Source UI Library');
    },

    // Set structured data (JSON-LD)
    setStructuredData() {
        const page = this.getCurrentPage();
        
        // Remove existing structured data
        document.querySelectorAll('script[type="application/ld+json"]').forEach(el => el.remove());

        // Base organization schema
        const organizationSchema = {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Shades By Jay",
            "url": this.config.siteUrl,
            "logo": `${this.config.siteUrl}/assets/favicon.svg`,
            "sameAs": [
                "https://github.com/sithija-jayasinghe/Shades-by-Jay-UI-Library",
                "https://www.linkedin.com/in/sithija-harshana-jayasinghe-552822340"
            ],
            "founder": {
                "@type": "Person",
                "name": this.config.author
            }
        };

        // Website schema
        const websiteSchema = {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": this.config.siteName,
            "url": this.config.siteUrl,
            "description": this.config.defaultDescription,
            "inLanguage": "en-US",
            "potentialAction": {
                "@type": "SearchAction",
                "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": `${this.config.siteUrl}/?search={search_term_string}`
                },
                "query-input": "required name=search_term_string"
            }
        };

        // Software Application schema (for the UI library)
        const softwareSchema = {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Shades By Jay UI Library",
            "applicationCategory": "DeveloperApplication",
            "operatingSystem": "Web Browser",
            "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
            },
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "150",
                "bestRating": "5",
                "worstRating": "1"
            },
            "author": {
                "@type": "Person",
                "name": this.config.author
            },
            "license": "https://opensource.org/licenses/MIT"
        };

        // Breadcrumb schema
        const breadcrumbSchema = this.getBreadcrumbSchema();

        // Add all schemas
        this.addJsonLd(organizationSchema);
        this.addJsonLd(websiteSchema);
        
        if (page === 'index.html') {
            this.addJsonLd(softwareSchema);
            this.addItemListSchema();
        }
        
        if (breadcrumbSchema) {
            this.addJsonLd(breadcrumbSchema);
        }

        // Add FAQ schema for documentation
        if (page === 'documentation.html') {
            this.addFAQSchema();
        }

        // Add HowTo schema for guidelines
        if (page === 'guidelines.html') {
            this.addHowToSchema();
        }
    },

    // Get breadcrumb schema based on current page
    getBreadcrumbSchema() {
        const page = this.getCurrentPage();
        const category = this.getCurrentCategory();
        
        const items = [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": this.config.siteUrl
            }
        ];

        if (page !== 'index.html') {
            const pageName = page.replace('.html', '').replace(/-/g, ' ');
            items.push({
                "@type": "ListItem",
                "position": 2,
                "name": pageName.charAt(0).toUpperCase() + pageName.slice(1),
                "item": `${this.config.siteUrl}/${page}`
            });
        } else if (category) {
            items.push({
                "@type": "ListItem",
                "position": 2,
                "name": category.charAt(0).toUpperCase() + category.slice(1),
                "item": `${this.config.siteUrl}/?category=${category}`
            });
        }

        return {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": items
        };
    },

    // Add ItemList schema for component categories
    addItemListSchema() {
        const category = this.getCurrentCategory() || 'all';
        const categoryData = this.categories[category];
        
        const schema = {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": categoryData ? categoryData.title : "UI Components",
            "description": categoryData ? categoryData.description : this.config.defaultDescription,
            "numberOfItems": 250,
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Buttons", "url": `${this.config.siteUrl}/?category=buttons` },
                { "@type": "ListItem", "position": 2, "name": "Cards", "url": `${this.config.siteUrl}/?category=cards` },
                { "@type": "ListItem", "position": 3, "name": "Loaders", "url": `${this.config.siteUrl}/?category=loaders` },
                { "@type": "ListItem", "position": 4, "name": "Switches", "url": `${this.config.siteUrl}/?category=switches` },
                { "@type": "ListItem", "position": 5, "name": "Inputs", "url": `${this.config.siteUrl}/?category=inputs` },
                { "@type": "ListItem", "position": 6, "name": "Forms", "url": `${this.config.siteUrl}/?category=forms` },
                { "@type": "ListItem", "position": 7, "name": "Templates", "url": `${this.config.siteUrl}/?category=templates` }
            ]
        };

        this.addJsonLd(schema);
    },

    // Add FAQ schema
    addFAQSchema() {
        const schema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "How do I use Shades By Jay components?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Simply browse components, click 'Get Code', and copy the HTML and CSS. Paste into your project - no installation required."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is Shades By Jay free to use?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes! All components are free and open-source under the MIT License. Use them in personal and commercial projects."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can I contribute my own components?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Absolutely! Visit the Submit page to contribute your HTML/CSS components. All contributions are welcome."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do I need JavaScript to use these components?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Most components are pure HTML/CSS with no JavaScript required. Some interactive components may include optional JS."
                    }
                }
            ]
        };

        this.addJsonLd(schema);
    },

    // Add HowTo schema
    addHowToSchema() {
        const schema = {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Contribute to Shades By Jay",
            "description": "Step-by-step guide to submitting your UI components to the library",
            "step": [
                {
                    "@type": "HowToStep",
                    "name": "Create Your Component",
                    "text": "Design and code your HTML/CSS component following best practices"
                },
                {
                    "@type": "HowToStep",
                    "name": "Test Your Component",
                    "text": "Use the Playground to test your component works correctly"
                },
                {
                    "@type": "HowToStep",
                    "name": "Submit for Review",
                    "text": "Fill out the submission form with your component code"
                },
                {
                    "@type": "HowToStep",
                    "name": "Get Featured",
                    "text": "Once approved, your component will be live on the site"
                }
            ]
        };

        this.addJsonLd(schema);
    },

    // Set canonical URL
    setCanonicalUrl() {
        const canonicalUrl = this.getCanonicalUrl();
        
        let link = document.querySelector('link[rel="canonical"]');
        if (!link) {
            link = document.createElement('link');
            link.rel = 'canonical';
            document.head.appendChild(link);
        }
        link.href = canonicalUrl;
    },

    // Get canonical URL
    getCanonicalUrl() {
        const page = this.getCurrentPage();
        const category = this.getCurrentCategory();
        
        let url = `${this.config.siteUrl}/${page === 'index.html' ? '' : page}`;
        
        if (page === 'index.html' && category) {
            url = `${this.config.siteUrl}/?category=${category}`;
        }
        
        return url;
    },

    // Handle dynamic routing for SPAs
    handleDynamicRouting() {
        // Listen for URL changes
        window.addEventListener('popstate', () => this.updateSEO());
        
        // Intercept category changes
        document.addEventListener('categoryChange', (e) => {
            this.updateSEOForCategory(e.detail.category);
        });

        // Check URL params on load
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category');
        if (category) {
            this.updateSEOForCategory(category);
        }
    },

    // Update SEO when category changes
    updateSEOForCategory(category) {
        if (this.categories[category]) {
            const catData = this.categories[category];
            document.title = catData.title;
            this.setMetaTag('description', catData.description);
            this.setMetaTag('og:title', catData.title, 'property');
            this.setMetaTag('og:description', catData.description, 'property');
            this.setMetaTag('twitter:title', catData.title);
            this.setMetaTag('twitter:description', catData.description);
            
            // Update URL without reload
            const newUrl = `${window.location.pathname}?category=${category}`;
            window.history.replaceState({}, catData.title, newUrl);
            
            this.setCanonicalUrl();
        }
    },

    // Update all SEO (call after navigation)
    updateSEO() {
        this.setBasicMeta();
        this.setOpenGraph();
        this.setTwitterCard();
        this.setStructuredData();
        this.setCanonicalUrl();
    },

    // Helper: Set meta tag
    setMetaTag(name, content, attributeName = 'name') {
        let meta = document.querySelector(`meta[${attributeName}="${name}"]`);
        if (!meta) {
            meta = document.createElement('meta');
            meta.setAttribute(attributeName, name);
            document.head.appendChild(meta);
        }
        meta.content = content;
    },

    // Helper: Add JSON-LD script
    addJsonLd(data) {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(data);
        document.head.appendChild(script);
    },

    // Helper: Get current page
    getCurrentPage() {
        const path = window.location.pathname;
        const page = path.split('/').pop() || 'index.html';
        return page || 'index.html';
    },

    // Helper: Get current category from URL
    getCurrentCategory() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('category');
    },

    // Generate SEO meta for a specific component (for sharing)
    generateComponentMeta(component) {
        return {
            title: `${component.name} - Free ${component.category} Component | Shades By Jay`,
            description: `Copy this beautiful ${component.category} component. Free HTML/CSS code, ready to use. ${component.tags.join(', ')}.`,
            url: `${this.config.siteUrl}/?component=${component.id}`,
            image: this.config.defaultImage
        };
    },

    // Prerender hints for better performance
    addPreconnectHints() {
        const hints = [
            { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
            { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: true },
            { rel: 'preconnect', href: 'https://cdnjs.cloudflare.com' },
            { rel: 'dns-prefetch', href: 'https://inlgomcjwlextxiehsxv.supabase.co' }
        ];

        hints.forEach(hint => {
            if (!document.querySelector(`link[href="${hint.href}"][rel="${hint.rel}"]`)) {
                const link = document.createElement('link');
                link.rel = hint.rel;
                link.href = hint.href;
                if (hint.crossOrigin) link.crossOrigin = '';
                document.head.appendChild(link);
            }
        });
    }
};

// Initialize SEO when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => SEO.init());
} else {
    SEO.init();
}

// Export for use in other scripts
window.SEO = SEO;
