/* ============================================
   Shades By Jay - Full Page Templates
   ============================================ */

const templateComponents = [
    {
        id: 'template-hero-1',
        name: 'Gradient Hero Section',
        category: 'templates',
        tags: ['template', 'landing', 'hero', 'gradient'],
        creator_name: 'Shades By Jay',
        creator_avatar: 'https://ui-avatars.com/api/?name=SBJ&background=8b5cf6&color=fff',
        creator_url: 'https://github.com/sithija-jayasinghe',
        html: `<section class="hero-section">
    <div class="hero-content">
        <h1 class="hero-title">Build Amazing Products</h1>
        <p class="hero-subtitle">Create stunning websites with our modern UI components. Fast, responsive, and beautiful.</p>
        <div class="hero-buttons">
            <button class="btn-primary">Get Started</button>
            <button class="btn-secondary">Learn More</button>
        </div>
    </div>
    <div class="hero-visual">
        <div class="floating-card card-1"></div>
        <div class="floating-card card-2"></div>
        <div class="floating-card card-3"></div>
    </div>
</section>`,
        css: `.hero-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 400px;
    padding: 40px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 20px;
    color: white;
    position: relative;
    overflow: hidden;
}

.hero-content {
    max-width: 50%;
    z-index: 1;
}

.hero-title {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 16px;
    line-height: 1.2;
}

.hero-subtitle {
    font-size: 1.1rem;
    opacity: 0.9;
    margin-bottom: 24px;
    line-height: 1.6;
}

.hero-buttons {
    display: flex;
    gap: 12px;
}

.btn-primary {
    padding: 12px 24px;
    background: white;
    color: #764ba2;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.2s;
}

.btn-primary:hover {
    transform: translateY(-2px);
}

.btn-secondary {
    padding: 12px 24px;
    background: transparent;
    color: white;
    border: 2px solid rgba(255,255,255,0.5);
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
}

.btn-secondary:hover {
    background: rgba(255,255,255,0.1);
    border-color: white;
}

.hero-visual {
    position: relative;
    width: 200px;
    height: 200px;
}

.floating-card {
    position: absolute;
    background: rgba(255,255,255,0.2);
    backdrop-filter: blur(10px);
    border-radius: 12px;
    animation: float 3s ease-in-out infinite;
}

.card-1 {
    width: 80px;
    height: 80px;
    top: 0;
    right: 0;
    animation-delay: 0s;
}

.card-2 {
    width: 60px;
    height: 60px;
    top: 50%;
    left: 0;
    animation-delay: 0.5s;
}

.card-3 {
    width: 100px;
    height: 100px;
    bottom: 0;
    right: 20px;
    animation-delay: 1s;
}

@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}`
    },
    {
        id: 'template-pricing-1',
        name: 'Pricing Cards Section',
        category: 'templates',
        tags: ['template', 'pricing', 'cards', 'landing'],
        creator_name: 'Shades By Jay',
        creator_avatar: 'https://ui-avatars.com/api/?name=SBJ&background=8b5cf6&color=fff',
        creator_url: 'https://github.com/sithija-jayasinghe',
        html: `<section class="pricing-section">
    <h2 class="pricing-title">Simple Pricing</h2>
    <p class="pricing-subtitle">Choose the plan that fits your needs</p>
    <div class="pricing-grid">
        <div class="pricing-card">
            <h3>Starter</h3>
            <div class="price">$9<span>/mo</span></div>
            <ul class="features">
                <li>✓ 5 Projects</li>
                <li>✓ Basic Analytics</li>
                <li>✓ Email Support</li>
            </ul>
            <button class="pricing-btn">Get Started</button>
        </div>
        <div class="pricing-card featured">
            <div class="badge">Popular</div>
            <h3>Pro</h3>
            <div class="price">$29<span>/mo</span></div>
            <ul class="features">
                <li>✓ Unlimited Projects</li>
                <li>✓ Advanced Analytics</li>
                <li>✓ Priority Support</li>
                <li>✓ Custom Domain</li>
            </ul>
            <button class="pricing-btn primary">Get Started</button>
        </div>
        <div class="pricing-card">
            <h3>Enterprise</h3>
            <div class="price">$99<span>/mo</span></div>
            <ul class="features">
                <li>✓ Everything in Pro</li>
                <li>✓ Dedicated Manager</li>
                <li>✓ SLA Guarantee</li>
            </ul>
            <button class="pricing-btn">Contact Us</button>
        </div>
    </div>
</section>`,
        css: `.pricing-section {
    padding: 40px;
    text-align: center;
    background: #f8fafc;
    border-radius: 20px;
}

.pricing-title {
    font-size: 2rem;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 8px;
}

.pricing-subtitle {
    color: #64748b;
    margin-bottom: 32px;
}

.pricing-grid {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
}

.pricing-card {
    background: white;
    padding: 32px 24px;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    min-width: 200px;
    position: relative;
    transition: transform 0.3s;
}

.pricing-card:hover {
    transform: translateY(-5px);
}

.pricing-card.featured {
    border: 2px solid #8b5cf6;
    transform: scale(1.05);
}

.pricing-card.featured:hover {
    transform: scale(1.05) translateY(-5px);
}

.badge {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background: #8b5cf6;
    color: white;
    padding: 4px 16px;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
}

.pricing-card h3 {
    font-size: 1.25rem;
    color: #1e293b;
    margin-bottom: 16px;
}

.price {
    font-size: 2.5rem;
    font-weight: 700;
    color: #8b5cf6;
    margin-bottom: 24px;
}

.price span {
    font-size: 1rem;
    color: #64748b;
    font-weight: 400;
}

.features {
    list-style: none;
    padding: 0;
    margin-bottom: 24px;
    text-align: left;
}

.features li {
    padding: 8px 0;
    color: #475569;
    font-size: 0.9rem;
}

.pricing-btn {
    width: 100%;
    padding: 12px;
    border: 2px solid #e2e8f0;
    background: transparent;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
}

.pricing-btn:hover {
    border-color: #8b5cf6;
    color: #8b5cf6;
}

.pricing-btn.primary {
    background: #8b5cf6;
    border-color: #8b5cf6;
    color: white;
}

.pricing-btn.primary:hover {
    background: #7c3aed;
}`
    },
    {
        id: 'template-features-1',
        name: 'Features Grid Section',
        category: 'templates',
        tags: ['template', 'features', 'grid', 'landing'],
        creator_name: 'Shades By Jay',
        creator_avatar: 'https://ui-avatars.com/api/?name=SBJ&background=8b5cf6&color=fff',
        creator_url: 'https://github.com/sithija-jayasinghe',
        html: `<section class="features-section">
    <h2 class="section-title">Why Choose Us</h2>
    <div class="features-grid">
        <div class="feature-card">
            <div class="feature-icon">🚀</div>
            <h3>Lightning Fast</h3>
            <p>Optimized for speed and performance. Your users will love the experience.</p>
        </div>
        <div class="feature-card">
            <div class="feature-icon">🎨</div>
            <h3>Beautiful Design</h3>
            <p>Crafted with attention to detail. Every pixel is perfectly placed.</p>
        </div>
        <div class="feature-card">
            <div class="feature-icon">🔒</div>
            <h3>Secure & Reliable</h3>
            <p>Enterprise-grade security. Your data is always protected.</p>
        </div>
        <div class="feature-card">
            <div class="feature-icon">📱</div>
            <h3>Mobile Ready</h3>
            <p>Responsive design that works perfectly on all devices.</p>
        </div>
    </div>
</section>`,
        css: `.features-section {
    padding: 40px;
    text-align: center;
}

.section-title {
    font-size: 2rem;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 40px;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    max-width: 600px;
    margin: 0 auto;
}

.feature-card {
    background: white;
    padding: 32px 24px;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.06);
    text-align: center;
    transition: all 0.3s;
    border: 1px solid #f1f5f9;
}

.feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0,0,0,0.1);
}

.feature-icon {
    font-size: 2.5rem;
    margin-bottom: 16px;
}

.feature-card h3 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 8px;
}

.feature-card p {
    font-size: 0.9rem;
    color: #64748b;
    line-height: 1.6;
}`
    },
    {
        id: 'template-cta-1',
        name: 'Call to Action Banner',
        category: 'templates',
        tags: ['template', 'cta', 'banner', 'gradient'],
        creator_name: 'Shades By Jay',
        creator_avatar: 'https://ui-avatars.com/api/?name=SBJ&background=8b5cf6&color=fff',
        creator_url: 'https://github.com/sithija-jayasinghe',
        html: `<section class="cta-section">
    <div class="cta-content">
        <h2>Ready to Get Started?</h2>
        <p>Join thousands of developers building amazing products with our UI library.</p>
        <div class="cta-buttons">
            <button class="cta-btn primary">Start Free Trial</button>
            <button class="cta-btn secondary">View Documentation</button>
        </div>
    </div>
    <div class="cta-decoration">
        <div class="circle c1"></div>
        <div class="circle c2"></div>
        <div class="circle c3"></div>
    </div>
</section>`,
        css: `.cta-section {
    position: relative;
    padding: 60px 40px;
    background: linear-gradient(135deg, #1e1b4b 0%, #4c1d95 50%, #7c3aed 100%);
    border-radius: 24px;
    color: white;
    text-align: center;
    overflow: hidden;
}

.cta-content {
    position: relative;
    z-index: 1;
}

.cta-section h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 12px;
}

.cta-section p {
    font-size: 1.1rem;
    opacity: 0.9;
    margin-bottom: 28px;
}

.cta-buttons {
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;
}

.cta-btn {
    padding: 14px 32px;
    border-radius: 12px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s;
    border: none;
}

.cta-btn.primary {
    background: white;
    color: #7c3aed;
}

.cta-btn.primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.cta-btn.secondary {
    background: transparent;
    color: white;
    border: 2px solid rgba(255,255,255,0.4);
}

.cta-btn.secondary:hover {
    background: rgba(255,255,255,0.1);
    border-color: white;
}

.cta-decoration {
    position: absolute;
    inset: 0;
    overflow: hidden;
}

.circle {
    position: absolute;
    border-radius: 50%;
    background: rgba(255,255,255,0.1);
}

.c1 {
    width: 200px;
    height: 200px;
    top: -100px;
    right: -50px;
}

.c2 {
    width: 150px;
    height: 150px;
    bottom: -50px;
    left: -30px;
}

.c3 {
    width: 80px;
    height: 80px;
    top: 50%;
    left: 20%;
}`
    },
    {
        id: 'template-testimonial-1',
        name: 'Testimonial Cards',
        category: 'templates',
        tags: ['template', 'testimonial', 'cards', 'social-proof'],
        creator_name: 'Shades By Jay',
        creator_avatar: 'https://ui-avatars.com/api/?name=SBJ&background=8b5cf6&color=fff',
        creator_url: 'https://github.com/sithija-jayasinghe',
        html: `<section class="testimonials-section">
    <h2 class="section-title">What People Say</h2>
    <div class="testimonials-grid">
        <div class="testimonial-card">
            <div class="stars">★★★★★</div>
            <p class="quote">"This UI library saved us weeks of development time. The components are beautiful and well-documented."</p>
            <div class="author">
                <div class="author-avatar">JD</div>
                <div class="author-info">
                    <span class="author-name">John Doe</span>
                    <span class="author-role">CTO at TechCorp</span>
                </div>
            </div>
        </div>
        <div class="testimonial-card">
            <div class="stars">★★★★★</div>
            <p class="quote">"Best UI library I've ever used. The attention to detail is incredible. Highly recommended!"</p>
            <div class="author">
                <div class="author-avatar">SM</div>
                <div class="author-info">
                    <span class="author-name">Sarah Miller</span>
                    <span class="author-role">Designer at Studio</span>
                </div>
            </div>
        </div>
    </div>
</section>`,
        css: `.testimonials-section {
    padding: 40px;
    text-align: center;
}

.section-title {
    font-size: 2rem;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 32px;
}

.testimonials-grid {
    display: flex;
    gap: 24px;
    justify-content: center;
    flex-wrap: wrap;
}

.testimonial-card {
    background: white;
    padding: 32px;
    border-radius: 20px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    max-width: 320px;
    text-align: left;
    border: 1px solid #f1f5f9;
}

.stars {
    color: #fbbf24;
    font-size: 1.25rem;
    margin-bottom: 16px;
}

.quote {
    font-size: 1rem;
    color: #475569;
    line-height: 1.7;
    margin-bottom: 24px;
}

.author {
    display: flex;
    align-items: center;
    gap: 12px;
}

.author-avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: linear-gradient(135deg, #8b5cf6, #ec4899);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 600;
}

.author-info {
    display: flex;
    flex-direction: column;
}

.author-name {
    font-weight: 600;
    color: #1e293b;
}

.author-role {
    font-size: 0.875rem;
    color: #64748b;
}`
    }
];
