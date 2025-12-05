/* ============================================
   UI Components Data
   ============================================ */

const uiComponents = [
    // ==================== BUTTONS ====================
    {
        id: 1,
        name: "Gradient Glow Button",
        category: "buttons",
        tags: ["gradient", "animated", "glow"],
        html: `<button class="btn-gradient-glow">
    <span>Hover Me</span>
</button>`,
        css: `.btn-gradient-glow {
    position: relative;
    padding: 15px 40px;
    font-size: 16px;
    font-weight: 600;
    color: white;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.btn-gradient-glow:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
}

.btn-gradient-glow::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: left 0.5s ease;
}

.btn-gradient-glow:hover::before {
    left: 100%;
}`
    },
    {
        id: 2,
        name: "Neon Pulse Button",
        category: "buttons",
        tags: ["neon", "animated", "cyberpunk"],
        html: `<button class="btn-neon-pulse">
    CLICK ME
</button>`,
        css: `.btn-neon-pulse {
    position: relative;
    padding: 15px 35px;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 2px;
    color: #0ff;
    background: transparent;
    border: 2px solid #0ff;
    border-radius: 8px;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s ease;
    text-shadow: 0 0 10px #0ff, 0 0 20px #0ff;
    box-shadow: 0 0 10px #0ff, inset 0 0 10px rgba(0,255,255,0.1);
}

.btn-neon-pulse:hover {
    background: #0ff;
    color: #000;
    text-shadow: none;
    box-shadow: 0 0 30px #0ff, 0 0 60px #0ff, 0 0 90px #0ff;
}

.btn-neon-pulse::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(0,255,255,0.3) 0%, transparent 70%);
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.5s ease;
}

.btn-neon-pulse:hover::before {
    transform: translate(-50%, -50%) scale(1);
}`
    },
    {
        id: 3,
        name: "3D Push Button",
        category: "buttons",
        tags: ["3d", "animated", "minimal"],
        html: `<button class="btn-3d-push">
    Push Me
</button>`,
        css: `.btn-3d-push {
    position: relative;
    padding: 15px 40px;
    font-size: 16px;
    font-weight: 600;
    color: white;
    background: #5c6bc0;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0 6px 0 #3949ab, 0 8px 15px rgba(0,0,0,0.3);
    transition: all 0.1s ease;
}

.btn-3d-push:hover {
    background: #7986cb;
}

.btn-3d-push:active {
    transform: translateY(4px);
    box-shadow: 0 2px 0 #3949ab, 0 4px 8px rgba(0,0,0,0.3);
}`
    },
    {
        id: 4,
        name: "Neumorphic Button",
        category: "buttons",
        tags: ["neumorphism", "minimal", "soft"],
        html: `<button class="btn-neumorphic">
    <span>Click</span>
</button>`,
        css: `.btn-neumorphic {
    padding: 18px 40px;
    font-size: 16px;
    font-weight: 600;
    color: #6b7280;
    background: #e0e5ec;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    box-shadow: 8px 8px 16px #b8bcc2, -8px -8px 16px #ffffff;
    transition: all 0.2s ease;
}

.btn-neumorphic:hover {
    color: #4f46e5;
}

.btn-neumorphic:active {
    box-shadow: inset 8px 8px 16px #b8bcc2, inset -8px -8px 16px #ffffff;
}`
    },
    {
        id: 5,
        name: "Glassy Button",
        category: "buttons",
        tags: ["glassmorphism", "gradient", "blur"],
        html: `<button class="btn-glassy">
    <i class="icon">✨</i>
    <span>Explore</span>
</button>`,
        css: `.btn-glassy {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 15px 35px;
    font-size: 16px;
    font-weight: 600;
    color: white;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-glassy:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.btn-glassy .icon {
    font-style: normal;
}`
    },
    {
        id: 6,
        name: "Animated Border Button",
        category: "buttons",
        tags: ["animated", "border", "gradient"],
        html: `<button class="btn-animated-border">
    <span>Hover Me</span>
</button>`,
        css: `.btn-animated-border {
    position: relative;
    padding: 15px 40px;
    font-size: 16px;
    font-weight: 600;
    color: white;
    background: #1a1a2e;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    overflow: hidden;
    z-index: 1;
}

.btn-animated-border::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #ff0080, #ff8c00, #40e0d0, #ff0080);
    background-size: 400% 400%;
    border-radius: 10px;
    z-index: -2;
    animation: gradient-rotate 3s ease infinite;
}

.btn-animated-border::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    background: #1a1a2e;
    border-radius: 6px;
    z-index: -1;
}

@keyframes gradient-rotate {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}`
    },

    // ==================== CARDS ====================
    {
        id: 7,
        name: "Glassmorphism Card",
        category: "cards",
        tags: ["glassmorphism", "blur", "modern"],
        html: `<div class="glass-card">
    <div class="card-icon">🚀</div>
    <h3>Glass Card</h3>
    <p>Beautiful glassmorphism effect with blur backdrop.</p>
</div>`,
        css: `.glass-card {
    width: 280px;
    padding: 30px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    text-align: center;
    color: white;
    transition: all 0.3s ease;
}

.glass-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.glass-card .card-icon {
    font-size: 48px;
    margin-bottom: 15px;
}

.glass-card h3 {
    font-size: 20px;
    margin-bottom: 10px;
}

.glass-card p {
    font-size: 14px;
    opacity: 0.8;
    line-height: 1.6;
}`
    },
    {
        id: 8,
        name: "Hover Lift Card",
        category: "cards",
        tags: ["animated", "minimal", "shadow"],
        html: `<div class="hover-lift-card">
    <div class="card-image">📷</div>
    <div class="card-content">
        <h3>Card Title</h3>
        <p>Some description text goes here.</p>
        <button>Learn More</button>
    </div>
</div>`,
        css: `.hover-lift-card {
    width: 280px;
    background: #1e1e2e;
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.3s ease;
    cursor: pointer;
}

.hover-lift-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.hover-lift-card .card-image {
    height: 160px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
}

.hover-lift-card .card-content {
    padding: 20px;
}

.hover-lift-card h3 {
    color: white;
    margin-bottom: 8px;
}

.hover-lift-card p {
    color: #a0a0a0;
    font-size: 14px;
    margin-bottom: 15px;
}

.hover-lift-card button {
    padding: 10px 20px;
    background: #667eea;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s;
}

.hover-lift-card button:hover {
    background: #764ba2;
}`
    },
    {
        id: 9,
        name: "Neon Border Card",
        category: "cards",
        tags: ["neon", "animated", "cyberpunk"],
        html: `<div class="neon-border-card">
    <h3>Neon Card</h3>
    <p>Glowing neon border effect on hover.</p>
</div>`,
        css: `.neon-border-card {
    width: 280px;
    padding: 30px;
    background: #0a0a0a;
    border: 2px solid #333;
    border-radius: 16px;
    text-align: center;
    transition: all 0.3s ease;
}

.neon-border-card:hover {
    border-color: #0ff;
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.5),
                inset 0 0 20px rgba(0, 255, 255, 0.1);
}

.neon-border-card h3 {
    color: white;
    font-size: 20px;
    margin-bottom: 10px;
    transition: all 0.3s;
}

.neon-border-card:hover h3 {
    color: #0ff;
    text-shadow: 0 0 10px #0ff;
}

.neon-border-card p {
    color: #888;
    font-size: 14px;
    line-height: 1.6;
}`
    },
    {
        id: 10,
        name: "Gradient Border Card",
        category: "cards",
        tags: ["gradient", "animated", "modern"],
        html: `<div class="gradient-border-card">
    <div class="card-inner">
        <h3>Gradient Border</h3>
        <p>Animated gradient border effect.</p>
    </div>
</div>`,
        css: `.gradient-border-card {
    width: 280px;
    padding: 3px;
    background: linear-gradient(135deg, #667eea, #764ba2, #f093fb, #f5576c);
    background-size: 300% 300%;
    border-radius: 16px;
    animation: gradient-animation 4s ease infinite;
}

.gradient-border-card .card-inner {
    padding: 30px;
    background: #1a1a2e;
    border-radius: 14px;
    text-align: center;
}

.gradient-border-card h3 {
    color: white;
    font-size: 18px;
    margin-bottom: 10px;
}

.gradient-border-card p {
    color: #a0a0a0;
    font-size: 14px;
}

@keyframes gradient-animation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}`
    },

    // ==================== LOADERS ====================
    {
        id: 11,
        name: "Spinning Ring Loader",
        category: "loaders",
        tags: ["animated", "minimal", "spinner"],
        html: `<div class="loader-ring">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
</div>`,
        css: `.loader-ring {
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
}

.loader-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 51px;
    height: 51px;
    margin: 6px;
    border: 4px solid;
    border-radius: 50%;
    animation: loader-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #6366f1 transparent transparent transparent;
}

.loader-ring div:nth-child(1) { animation-delay: -0.45s; }
.loader-ring div:nth-child(2) { animation-delay: -0.3s; }
.loader-ring div:nth-child(3) { animation-delay: -0.15s; }

@keyframes loader-ring {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}`
    },
    {
        id: 12,
        name: "Bouncing Dots Loader",
        category: "loaders",
        tags: ["animated", "dots", "bounce"],
        html: `<div class="loader-dots">
    <span></span>
    <span></span>
    <span></span>
</div>`,
        css: `.loader-dots {
    display: flex;
    gap: 8px;
    align-items: center;
}

.loader-dots span {
    width: 12px;
    height: 12px;
    background: #6366f1;
    border-radius: 50%;
    animation: bounce 1.4s ease-in-out infinite both;
}

.loader-dots span:nth-child(1) { animation-delay: -0.32s; }
.loader-dots span:nth-child(2) { animation-delay: -0.16s; }

@keyframes bounce {
    0%, 80%, 100% {
        transform: scale(0);
    }
    40% {
        transform: scale(1);
    }
}`
    },
    {
        id: 13,
        name: "Gradient Spinner",
        category: "loaders",
        tags: ["gradient", "animated", "modern"],
        html: `<div class="loader-gradient"></div>`,
        css: `.loader-gradient {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: conic-gradient(from 0deg, transparent, #6366f1);
    animation: spin 1s linear infinite;
    position: relative;
}

.loader-gradient::before {
    content: '';
    position: absolute;
    inset: 4px;
    background: #1a1a2e;
    border-radius: 50%;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}`
    },
    {
        id: 14,
        name: "Pulse Loader",
        category: "loaders",
        tags: ["animated", "pulse", "minimal"],
        html: `<div class="loader-pulse">
    <div class="pulse-ring"></div>
    <div class="pulse-ring"></div>
    <div class="pulse-core"></div>
</div>`,
        css: `.loader-pulse {
    position: relative;
    width: 60px;
    height: 60px;
}

.loader-pulse .pulse-ring {
    position: absolute;
    inset: 0;
    border: 3px solid #6366f1;
    border-radius: 50%;
    animation: pulse-ring 2s ease-out infinite;
}

.loader-pulse .pulse-ring:nth-child(2) {
    animation-delay: 1s;
}

.loader-pulse .pulse-core {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 16px;
    height: 16px;
    background: #6366f1;
    border-radius: 50%;
    transform: translate(-50%, -50%);
}

@keyframes pulse-ring {
    0% {
        transform: scale(0.5);
        opacity: 1;
    }
    100% {
        transform: scale(1.5);
        opacity: 0;
    }
}`
    },
    {
        id: 15,
        name: "Wave Bars Loader",
        category: "loaders",
        tags: ["animated", "bars", "wave"],
        html: `<div class="loader-wave">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>`,
        css: `.loader-wave {
    display: flex;
    gap: 4px;
    align-items: center;
    height: 40px;
}

.loader-wave span {
    width: 6px;
    height: 100%;
    background: linear-gradient(180deg, #6366f1, #ec4899);
    border-radius: 3px;
    animation: wave 1.2s ease-in-out infinite;
}

.loader-wave span:nth-child(1) { animation-delay: 0s; }
.loader-wave span:nth-child(2) { animation-delay: 0.1s; }
.loader-wave span:nth-child(3) { animation-delay: 0.2s; }
.loader-wave span:nth-child(4) { animation-delay: 0.3s; }
.loader-wave span:nth-child(5) { animation-delay: 0.4s; }

@keyframes wave {
    0%, 40%, 100% {
        transform: scaleY(0.4);
    }
    20% {
        transform: scaleY(1);
    }
}`
    },

    // ==================== SWITCHES ====================
    {
        id: 16,
        name: "iOS Style Toggle",
        category: "switches",
        tags: ["minimal", "ios", "toggle"],
        html: `<label class="switch-ios">
    <input type="checkbox">
    <span class="slider"></span>
</label>`,
        css: `.switch-ios {
    position: relative;
    display: inline-block;
    width: 52px;
    height: 28px;
}

.switch-ios input {
    opacity: 0;
    width: 0;
    height: 0;
}

.switch-ios .slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background: #3a3a4a;
    border-radius: 28px;
    transition: all 0.3s ease;
}

.switch-ios .slider::before {
    content: '';
    position: absolute;
    height: 22px;
    width: 22px;
    left: 3px;
    bottom: 3px;
    background: white;
    border-radius: 50%;
    transition: all 0.3s ease;
}

.switch-ios input:checked + .slider {
    background: #6366f1;
}

.switch-ios input:checked + .slider::before {
    transform: translateX(24px);
}`
    },
    {
        id: 17,
        name: "Day/Night Toggle",
        category: "switches",
        tags: ["animated", "creative", "theme"],
        html: `<label class="switch-daynight">
    <input type="checkbox">
    <span class="slider">
        <span class="icon">🌙</span>
    </span>
</label>`,
        css: `.switch-daynight {
    position: relative;
    display: inline-block;
    width: 70px;
    height: 34px;
}

.switch-daynight input {
    opacity: 0;
    width: 0;
    height: 0;
}

.switch-daynight .slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background: linear-gradient(135deg, #1a1a2e, #16213e);
    border-radius: 34px;
    transition: all 0.4s ease;
    overflow: hidden;
}

.switch-daynight .slider::before {
    content: '';
    position: absolute;
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background: #f0f0f0;
    border-radius: 50%;
    transition: all 0.4s ease;
    box-shadow: inset -3px -3px 0 0 #e0e0e0;
}

.switch-daynight .icon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 16px;
    transition: all 0.4s ease;
}

.switch-daynight input:checked + .slider {
    background: linear-gradient(135deg, #87ceeb, #ffd700);
}

.switch-daynight input:checked + .slider::before {
    transform: translateX(36px);
    background: #ffd700;
    box-shadow: none;
}

.switch-daynight input:checked + .slider .icon {
    opacity: 0;
}`
    },
    {
        id: 18,
        name: "Neon Toggle Switch",
        category: "switches",
        tags: ["neon", "animated", "glow"],
        html: `<label class="switch-neon">
    <input type="checkbox">
    <span class="slider"></span>
</label>`,
        css: `.switch-neon {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 30px;
}

.switch-neon input {
    opacity: 0;
    width: 0;
    height: 0;
}

.switch-neon .slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background: #1a1a2e;
    border: 2px solid #333;
    border-radius: 30px;
    transition: all 0.3s ease;
}

.switch-neon .slider::before {
    content: '';
    position: absolute;
    height: 20px;
    width: 20px;
    left: 3px;
    bottom: 3px;
    background: #666;
    border-radius: 50%;
    transition: all 0.3s ease;
}

.switch-neon input:checked + .slider {
    border-color: #0ff;
    box-shadow: 0 0 15px rgba(0, 255, 255, 0.5),
                inset 0 0 15px rgba(0, 255, 255, 0.1);
}

.switch-neon input:checked + .slider::before {
    transform: translateX(30px);
    background: #0ff;
    box-shadow: 0 0 10px #0ff;
}`
    },

    // ==================== INPUTS ====================
    {
        id: 19,
        name: "Floating Label Input",
        category: "inputs",
        tags: ["animated", "minimal", "form"],
        html: `<div class="input-floating">
    <input type="text" id="name" placeholder=" " required>
    <label for="name">Your Name</label>
</div>`,
        css: `.input-floating {
    position: relative;
    width: 280px;
}

.input-floating input {
    width: 100%;
    padding: 16px 12px 8px;
    font-size: 16px;
    color: white;
    background: #1e1e2e;
    border: 2px solid #333;
    border-radius: 10px;
    outline: none;
    transition: all 0.3s ease;
}

.input-floating label {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #888;
    font-size: 16px;
    pointer-events: none;
    transition: all 0.3s ease;
}

.input-floating input:focus,
.input-floating input:not(:placeholder-shown) {
    border-color: #6366f1;
}

.input-floating input:focus + label,
.input-floating input:not(:placeholder-shown) + label {
    top: 8px;
    font-size: 12px;
    color: #6366f1;
}`
    },
    {
        id: 20,
        name: "Search Input with Icon",
        category: "inputs",
        tags: ["minimal", "search", "form"],
        html: `<div class="input-search">
    <span class="icon">🔍</span>
    <input type="text" placeholder="Search...">
</div>`,
        css: `.input-search {
    position: relative;
    width: 280px;
    display: flex;
    align-items: center;
}

.input-search .icon {
    position: absolute;
    left: 14px;
    font-size: 16px;
}

.input-search input {
    width: 100%;
    padding: 14px 14px 14px 44px;
    font-size: 15px;
    color: white;
    background: #1e1e2e;
    border: 2px solid #333;
    border-radius: 50px;
    outline: none;
    transition: all 0.3s ease;
}

.input-search input::placeholder {
    color: #666;
}

.input-search input:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.2);
}`
    },
    {
        id: 21,
        name: "Underline Input",
        category: "inputs",
        tags: ["minimal", "animated", "form"],
        html: `<div class="input-underline">
    <input type="text" placeholder="Enter email" required>
    <span class="line"></span>
</div>`,
        css: `.input-underline {
    position: relative;
    width: 280px;
}

.input-underline input {
    width: 100%;
    padding: 12px 0;
    font-size: 16px;
    color: white;
    background: transparent;
    border: none;
    border-bottom: 2px solid #333;
    outline: none;
    transition: all 0.3s ease;
}

.input-underline input::placeholder {
    color: #666;
}

.input-underline .line {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #6366f1, #ec4899);
    transition: width 0.3s ease;
}

.input-underline input:focus + .line {
    width: 100%;
}`
    },
    {
        id: 22,
        name: "Gradient Border Input",
        category: "inputs",
        tags: ["gradient", "animated", "form"],
        html: `<div class="input-gradient-border">
    <input type="text" placeholder="Type something...">
</div>`,
        css: `.input-gradient-border {
    position: relative;
    width: 280px;
    padding: 2px;
    background: linear-gradient(135deg, #6366f1, #ec4899, #f59e0b);
    background-size: 200% 200%;
    border-radius: 12px;
    animation: gradient-shift 3s ease infinite;
}

.input-gradient-border input {
    width: 100%;
    padding: 14px 16px;
    font-size: 15px;
    color: white;
    background: #1a1a2e;
    border: none;
    border-radius: 10px;
    outline: none;
}

.input-gradient-border input::placeholder {
    color: #666;
}

@keyframes gradient-shift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}`
    },

    // ==================== MORE BUTTONS ====================
    {
        id: 23,
        name: "Liquid Fill Button",
        category: "buttons",
        tags: ["animated", "creative", "liquid"],
        html: `<button class="btn-liquid">
    <span>Hover Me</span>
</button>`,
        css: `.btn-liquid {
    position: relative;
    padding: 15px 40px;
    font-size: 16px;
    font-weight: 600;
    color: #6366f1;
    background: transparent;
    border: 2px solid #6366f1;
    border-radius: 8px;
    cursor: pointer;
    overflow: hidden;
    transition: color 0.4s ease;
    z-index: 1;
}

.btn-liquid span {
    position: relative;
    z-index: 2;
}

.btn-liquid::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #6366f1;
    transform: translateY(100%);
    transition: transform 0.4s ease;
    z-index: 1;
}

.btn-liquid:hover {
    color: white;
}

.btn-liquid:hover::before {
    transform: translateY(0);
}`
    },
    {
        id: 24,
        name: "Icon Slide Button",
        category: "buttons",
        tags: ["animated", "icon", "minimal"],
        html: `<button class="btn-icon-slide">
    <span class="text">Send Message</span>
    <span class="icon">→</span>
</button>`,
        css: `.btn-icon-slide {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 15px 30px;
    font-size: 15px;
    font-weight: 600;
    color: white;
    background: #6366f1;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s ease;
}

.btn-icon-slide .icon {
    transition: transform 0.3s ease;
}

.btn-icon-slide:hover {
    background: #4f46e5;
    padding-right: 25px;
}

.btn-icon-slide:hover .icon {
    transform: translateX(5px);
}`
    },

    // ==================== MORE LOADERS ====================
    {
        id: 25,
        name: "Rotating Square Loader",
        category: "loaders",
        tags: ["animated", "geometric", "modern"],
        html: `<div class="loader-square"></div>`,
        css: `.loader-square {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #6366f1, #ec4899);
    border-radius: 4px;
    animation: rotate-square 1.2s ease-in-out infinite;
}

@keyframes rotate-square {
    0% {
        transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    }
    50% {
        transform: perspective(120px) rotateX(-180deg) rotateY(0deg);
    }
    100% {
        transform: perspective(120px) rotateX(-180deg) rotateY(-180deg);
    }
}`
    },

    // ==================== LIVING/ORGANIC COMPONENTS ====================
    
    {
        id: 26,
        name: "Breathing Button",
        category: "buttons",
        tags: ["animated", "living", "organic"],
        html: `<button class="btn-breathing">
    <span>I'm Alive</span>
</button>`,
        css: `.btn-breathing {
    padding: 18px 45px;
    font-size: 16px;
    font-weight: 600;
    color: white;
    background: linear-gradient(135deg, #f093fb, #f5576c);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    animation: breathing 3s ease-in-out infinite;
    box-shadow: 0 0 0 0 rgba(245, 87, 108, 0.5);
}

.btn-breathing:hover {
    animation-play-state: paused;
    transform: scale(1.05);
}

@keyframes breathing {
    0%, 100% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(245, 87, 108, 0.5);
    }
    50% {
        transform: scale(1.05);
        box-shadow: 0 0 20px 10px rgba(245, 87, 108, 0.3);
    }
}`
    },
    {
        id: 27,
        name: "Heartbeat Button",
        category: "buttons",
        tags: ["animated", "living", "pulse"],
        html: `<button class="btn-heartbeat">
    <span class="heart">❤️</span>
    <span>Love This</span>
</button>`,
        css: `.btn-heartbeat {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 15px 30px;
    font-size: 16px;
    font-weight: 600;
    color: white;
    background: linear-gradient(135deg, #ff6b6b, #ee5a5a);
    border: none;
    border-radius: 12px;
    cursor: pointer;
    transition: transform 0.2s;
}

.btn-heartbeat .heart {
    display: inline-block;
    animation: heartbeat 1.2s ease-in-out infinite;
}

.btn-heartbeat:hover {
    transform: scale(1.05);
}

.btn-heartbeat:hover .heart {
    animation-duration: 0.6s;
}

@keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    14% { transform: scale(1.3); }
    28% { transform: scale(1); }
    42% { transform: scale(1.3); }
    70% { transform: scale(1); }
}`
    },
    {
        id: 28,
        name: "Blob Morphing Button",
        category: "buttons",
        tags: ["animated", "living", "morph"],
        html: `<button class="btn-blob">
    <span>Morphing</span>
    <div class="blob"></div>
</button>`,
        css: `.btn-blob {
    position: relative;
    padding: 18px 40px;
    font-size: 16px;
    font-weight: 700;
    color: white;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 1;
}

.btn-blob .blob {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    animation: blob-morph 8s ease-in-out infinite;
    z-index: -1;
}

.btn-blob:hover .blob {
    animation-duration: 3s;
}

@keyframes blob-morph {
    0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
    25% { border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%; }
    50% { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; }
    75% { border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%; }
}`
    },
    {
        id: 29,
        name: "Jelly Button",
        category: "buttons",
        tags: ["animated", "living", "bounce"],
        html: `<button class="btn-jelly">
    Squish Me!
</button>`,
        css: `.btn-jelly {
    padding: 16px 40px;
    font-size: 16px;
    font-weight: 700;
    color: white;
    background: linear-gradient(135deg, #11998e, #38ef7d);
    border: none;
    border-radius: 12px;
    cursor: pointer;
    transition: transform 0.1s;
}

.btn-jelly:hover {
    animation: jelly 0.5s ease;
}

.btn-jelly:active {
    transform: scale(0.95);
}

@keyframes jelly {
    0%, 100% { transform: scale(1, 1); }
    25% { transform: scale(0.9, 1.1); }
    50% { transform: scale(1.1, 0.9); }
    75% { transform: scale(0.95, 1.05); }
}`
    },
    {
        id: 30,
        name: "Floating Action Button",
        category: "buttons",
        tags: ["animated", "living", "float"],
        html: `<button class="btn-floating-action">
    <span>+</span>
</button>`,
        css: `.btn-floating-action {
    width: 60px;
    height: 60px;
    font-size: 28px;
    font-weight: 300;
    color: white;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
    animation: float 3s ease-in-out infinite;
    transition: all 0.3s ease;
}

.btn-floating-action:hover {
    animation-play-state: paused;
    transform: scale(1.1) rotate(90deg);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
}

@keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(5deg); }
}`
    },
    {
        id: 31,
        name: "Ripple Water Button",
        category: "buttons",
        tags: ["animated", "living", "ripple"],
        html: `<button class="btn-ripple-water">
    <span>Touch Me</span>
    <div class="ripple-container">
        <span class="ripple"></span>
        <span class="ripple"></span>
        <span class="ripple"></span>
    </div>
</button>`,
        css: `.btn-ripple-water {
    position: relative;
    padding: 16px 40px;
    font-size: 16px;
    font-weight: 600;
    color: white;
    background: linear-gradient(135deg, #00c6fb, #005bea);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    overflow: hidden;
}

.btn-ripple-water .ripple-container {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.btn-ripple-water .ripple {
    position: absolute;
    width: 10px;
    height: 10px;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 50%;
    animation: ripple-effect 3s ease-out infinite;
}

.btn-ripple-water .ripple:nth-child(2) { animation-delay: 1s; }
.btn-ripple-water .ripple:nth-child(3) { animation-delay: 2s; }

@keyframes ripple-effect {
    0% { transform: scale(0); opacity: 1; }
    100% { transform: scale(20); opacity: 0; }
}`
    },
    
    // ==================== LIVING CARDS ====================
    {
        id: 32,
        name: "Floating Island Card",
        category: "cards",
        tags: ["animated", "living", "float"],
        html: `<div class="card-floating-island">
    <div class="island-content">
        <div class="island-icon">🏝️</div>
        <h3>Paradise</h3>
        <p>A floating island of dreams</p>
    </div>
    <div class="island-shadow"></div>
</div>`,
        css: `.card-floating-island {
    position: relative;
    width: 260px;
}

.card-floating-island .island-content {
    padding: 30px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 20px;
    text-align: center;
    color: white;
    animation: island-float 4s ease-in-out infinite;
    position: relative;
    z-index: 1;
}

.card-floating-island .island-icon {
    font-size: 48px;
    margin-bottom: 15px;
}

.card-floating-island h3 {
    font-size: 20px;
    margin-bottom: 8px;
}

.card-floating-island p {
    font-size: 14px;
    opacity: 0.9;
}

.card-floating-island .island-shadow {
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 20px;
    background: radial-gradient(ellipse, rgba(0,0,0,0.3) 0%, transparent 70%);
    animation: shadow-pulse 4s ease-in-out infinite;
}

@keyframes island-float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
}

@keyframes shadow-pulse {
    0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.3; }
    50% { transform: translateX(-50%) scale(0.8); opacity: 0.15; }
}`
    },
    {
        id: 33,
        name: "Breathing Glow Card",
        category: "cards",
        tags: ["animated", "living", "glow"],
        html: `<div class="card-breathing-glow">
    <div class="glow-orb"></div>
    <h3>Living Light</h3>
    <p>Watch me breathe with light</p>
</div>`,
        css: `.card-breathing-glow {
    position: relative;
    width: 280px;
    padding: 40px 30px;
    background: #1a1a2e;
    border-radius: 20px;
    text-align: center;
    color: white;
    overflow: hidden;
}

.card-breathing-glow .glow-orb {
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, #6366f1, transparent 70%);
    border-radius: 50%;
    filter: blur(20px);
    animation: glow-breathe 4s ease-in-out infinite;
}

.card-breathing-glow h3 {
    position: relative;
    font-size: 22px;
    margin-bottom: 10px;
    margin-top: 20px;
}

.card-breathing-glow p {
    position: relative;
    color: #888;
    font-size: 14px;
}

@keyframes glow-breathe {
    0%, 100% { 
        opacity: 0.5;
        transform: translateX(-50%) scale(1);
    }
    50% { 
        opacity: 1;
        transform: translateX(-50%) scale(1.3);
    }
}`
    },
    {
        id: 34,
        name: "Pulse Ring Card",
        category: "cards",
        tags: ["animated", "living", "pulse"],
        html: `<div class="card-pulse-ring">
    <div class="ring-container">
        <div class="ring"></div>
        <div class="ring"></div>
        <div class="ring"></div>
        <div class="center-dot"></div>
    </div>
    <h3>Signal Active</h3>
    <p>Broadcasting now</p>
</div>`,
        css: `.card-pulse-ring {
    width: 280px;
    padding: 30px;
    background: #0d0d1a;
    border-radius: 20px;
    text-align: center;
    color: white;
    border: 1px solid #222;
}

.card-pulse-ring .ring-container {
    position: relative;
    width: 120px;
    height: 120px;
    margin: 0 auto 20px;
}

.card-pulse-ring .ring {
    position: absolute;
    inset: 0;
    border: 2px solid #6366f1;
    border-radius: 50%;
    animation: ring-pulse 3s ease-out infinite;
}

.card-pulse-ring .ring:nth-child(2) { animation-delay: 1s; }
.card-pulse-ring .ring:nth-child(3) { animation-delay: 2s; }

.card-pulse-ring .center-dot {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background: #6366f1;
    border-radius: 50%;
    box-shadow: 0 0 20px #6366f1;
}

.card-pulse-ring h3 { font-size: 18px; margin-bottom: 5px; }
.card-pulse-ring p { color: #666; font-size: 13px; }

@keyframes ring-pulse {
    0% { transform: scale(0.3); opacity: 1; }
    100% { transform: scale(1); opacity: 0; }
}`
    },
    {
        id: 35,
        name: "Lava Lamp Card",
        category: "cards",
        tags: ["animated", "living", "morph"],
        html: `<div class="card-lava-lamp">
    <div class="lava-blob blob1"></div>
    <div class="lava-blob blob2"></div>
    <div class="lava-blob blob3"></div>
    <div class="card-content">
        <h3>Lava Flow</h3>
        <p>Mesmerizing motion</p>
    </div>
</div>`,
        css: `.card-lava-lamp {
    position: relative;
    width: 280px;
    height: 200px;
    background: linear-gradient(180deg, #1a1a2e 0%, #16213e 100%);
    border-radius: 20px;
    overflow: hidden;
}

.card-lava-lamp .lava-blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(15px);
    animation: lava-move 10s ease-in-out infinite;
}

.card-lava-lamp .blob1 {
    width: 100px;
    height: 100px;
    background: #f093fb;
    bottom: -20px;
    left: 20px;
}

.card-lava-lamp .blob2 {
    width: 80px;
    height: 80px;
    background: #f5576c;
    bottom: 40px;
    right: 30px;
    animation-delay: -3s;
    animation-duration: 12s;
}

.card-lava-lamp .blob3 {
    width: 60px;
    height: 60px;
    background: #667eea;
    top: 20px;
    left: 50%;
    animation-delay: -6s;
    animation-duration: 8s;
}

.card-lava-lamp .card-content {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: white;
    z-index: 1;
}

.card-lava-lamp h3 { font-size: 20px; margin-bottom: 5px; }
.card-lava-lamp p { font-size: 13px; opacity: 0.8; }

@keyframes lava-move {
    0%, 100% { transform: translateY(0) scale(1); }
    33% { transform: translateY(-60px) scale(1.1); }
    66% { transform: translateY(-30px) scale(0.9); }
}`
    },
    
    // ==================== LIVING LOADERS ====================
    {
        id: 36,
        name: "DNA Helix Loader",
        category: "loaders",
        tags: ["animated", "living", "dna"],
        html: `<div class="loader-dna">
    <div class="strand">
        <div class="pair"><span></span><span></span></div>
        <div class="pair"><span></span><span></span></div>
        <div class="pair"><span></span><span></span></div>
        <div class="pair"><span></span><span></span></div>
        <div class="pair"><span></span><span></span></div>
    </div>
</div>`,
        css: `.loader-dna {
    width: 60px;
    height: 60px;
    perspective: 200px;
}

.loader-dna .strand {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    animation: dna-rotate 2s linear infinite;
}

.loader-dna .pair {
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transform-style: preserve-3d;
}

.loader-dna .pair span {
    width: 12px;
    height: 12px;
    background: #6366f1;
    border-radius: 50%;
}

.loader-dna .pair span:last-child {
    background: #ec4899;
}

.loader-dna .pair:nth-child(1) { top: 0; }
.loader-dna .pair:nth-child(2) { top: 12px; animation-delay: 0.1s; }
.loader-dna .pair:nth-child(3) { top: 24px; animation-delay: 0.2s; }
.loader-dna .pair:nth-child(4) { top: 36px; animation-delay: 0.3s; }
.loader-dna .pair:nth-child(5) { top: 48px; animation-delay: 0.4s; }

@keyframes dna-rotate {
    0% { transform: rotateX(0deg); }
    100% { transform: rotateX(360deg); }
}`
    },
    {
        id: 37,
        name: "Orbiting Planets Loader",
        category: "loaders",
        tags: ["animated", "living", "orbit"],
        html: `<div class="loader-orbit">
    <div class="sun"></div>
    <div class="orbit orbit1"><div class="planet"></div></div>
    <div class="orbit orbit2"><div class="planet"></div></div>
    <div class="orbit orbit3"><div class="planet"></div></div>
</div>`,
        css: `.loader-orbit {
    position: relative;
    width: 80px;
    height: 80px;
}

.loader-orbit .sun {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 16px;
    height: 16px;
    background: #ffd700;
    border-radius: 50%;
    box-shadow: 0 0 20px #ffd700;
}

.loader-orbit .orbit {
    position: absolute;
    top: 50%;
    left: 50%;
    border: 1px dashed rgba(255,255,255,0.2);
    border-radius: 50%;
    animation: orbit-spin 3s linear infinite;
}

.loader-orbit .orbit1 {
    width: 40px;
    height: 40px;
    margin: -20px 0 0 -20px;
}

.loader-orbit .orbit2 {
    width: 60px;
    height: 60px;
    margin: -30px 0 0 -30px;
    animation-duration: 5s;
    animation-direction: reverse;
}

.loader-orbit .orbit3 {
    width: 80px;
    height: 80px;
    margin: -40px 0 0 -40px;
    animation-duration: 7s;
}

.loader-orbit .planet {
    position: absolute;
    top: -4px;
    left: 50%;
    transform: translateX(-50%);
    width: 8px;
    height: 8px;
    background: #6366f1;
    border-radius: 50%;
}

.loader-orbit .orbit2 .planet { background: #ec4899; }
.loader-orbit .orbit3 .planet { background: #06b6d4; }

@keyframes orbit-spin {
    to { transform: rotate(360deg); }
}`
    },
    {
        id: 38,
        name: "Breathing Circle Loader",
        category: "loaders",
        tags: ["animated", "living", "breathe"],
        html: `<div class="loader-breathe">
    <div class="breathe-circle"></div>
</div>`,
        css: `.loader-breathe {
    display: flex;
    align-items: center;
    justify-content: center;
}

.loader-breathe .breathe-circle {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 50%;
    animation: deep-breathe 4s ease-in-out infinite;
    box-shadow: 0 0 0 0 rgba(102, 126, 234, 0.5);
}

@keyframes deep-breathe {
    0%, 100% {
        transform: scale(0.8);
        box-shadow: 0 0 0 0 rgba(102, 126, 234, 0.7);
    }
    50% {
        transform: scale(1);
        box-shadow: 0 0 30px 15px rgba(102, 126, 234, 0);
    }
}`
    },
    {
        id: 39,
        name: "Jellyfish Loader",
        category: "loaders",
        tags: ["animated", "living", "organic"],
        html: `<div class="loader-jellyfish">
    <div class="jelly-body"></div>
    <div class="tentacles">
        <span></span><span></span><span></span><span></span><span></span>
    </div>
</div>`,
        css: `.loader-jellyfish {
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: jelly-float 3s ease-in-out infinite;
}

.loader-jellyfish .jelly-body {
    width: 50px;
    height: 30px;
    background: linear-gradient(180deg, rgba(147, 112, 219, 0.8), rgba(147, 112, 219, 0.4));
    border-radius: 50px 50px 20px 20px;
    animation: jelly-pulse 2s ease-in-out infinite;
}

.loader-jellyfish .tentacles {
    display: flex;
    gap: 4px;
    margin-top: -5px;
}

.loader-jellyfish .tentacles span {
    width: 3px;
    height: 25px;
    background: linear-gradient(180deg, rgba(147, 112, 219, 0.6), transparent);
    border-radius: 3px;
    animation: tentacle-wave 1.5s ease-in-out infinite;
}

.loader-jellyfish .tentacles span:nth-child(1) { animation-delay: 0s; height: 20px; }
.loader-jellyfish .tentacles span:nth-child(2) { animation-delay: 0.1s; }
.loader-jellyfish .tentacles span:nth-child(3) { animation-delay: 0.2s; height: 30px; }
.loader-jellyfish .tentacles span:nth-child(4) { animation-delay: 0.1s; }
.loader-jellyfish .tentacles span:nth-child(5) { animation-delay: 0s; height: 20px; }

@keyframes jelly-float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

@keyframes jelly-pulse {
    0%, 100% { transform: scaleX(1); }
    50% { transform: scaleX(1.1); }
}

@keyframes tentacle-wave {
    0%, 100% { transform: rotate(-10deg); }
    50% { transform: rotate(10deg); }
}`
    },
    {
        id: 40,
        name: "Morphing Blob Loader",
        category: "loaders",
        tags: ["animated", "living", "morph"],
        html: `<div class="loader-morph-blob"></div>`,
        css: `.loader-morph-blob {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #f093fb, #f5576c, #ffecd2);
    background-size: 200% 200%;
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    animation: 
        blob-shape 8s ease-in-out infinite,
        blob-gradient 4s ease infinite,
        blob-rotate 10s linear infinite;
}

@keyframes blob-shape {
    0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
    25% { border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%; }
    50% { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; }
    75% { border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%; }
}

@keyframes blob-gradient {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}

@keyframes blob-rotate {
    to { transform: rotate(360deg); }
}`
    },
    
    // ==================== LIVING SWITCHES ====================
    {
        id: 41,
        name: "Liquid Toggle",
        category: "switches",
        tags: ["animated", "living", "liquid"],
        html: `<label class="switch-liquid">
    <input type="checkbox">
    <span class="slider">
        <span class="liquid"></span>
    </span>
</label>`,
        css: `.switch-liquid {
    position: relative;
    display: inline-block;
    width: 70px;
    height: 36px;
}

.switch-liquid input {
    opacity: 0;
    width: 0;
    height: 0;
}

.switch-liquid .slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background: #2a2a3a;
    border-radius: 36px;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.switch-liquid .liquid {
    position: absolute;
    left: 4px;
    top: 4px;
    width: 28px;
    height: 28px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 50%;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    animation: liquid-wobble 3s ease-in-out infinite;
}

.switch-liquid input:checked + .slider {
    background: #1a1a2e;
}

.switch-liquid input:checked + .slider .liquid {
    transform: translateX(34px);
    background: linear-gradient(135deg, #f093fb, #f5576c);
}

@keyframes liquid-wobble {
    0%, 100% { border-radius: 50%; }
    25% { border-radius: 45% 55% 55% 45% / 55% 45% 55% 45%; }
    50% { border-radius: 55% 45% 45% 55% / 45% 55% 45% 55%; }
    75% { border-radius: 45% 55% 55% 45% / 55% 45% 55% 45%; }
}`
    },
    {
        id: 42,
        name: "Fire/Ice Toggle",
        category: "switches",
        tags: ["animated", "living", "theme"],
        html: `<label class="switch-fire-ice">
    <input type="checkbox">
    <span class="slider">
        <span class="icon fire">🔥</span>
        <span class="knob"></span>
        <span class="icon ice">❄️</span>
    </span>
</label>`,
        css: `.switch-fire-ice {
    position: relative;
    display: inline-block;
    width: 80px;
    height: 40px;
}

.switch-fire-ice input { opacity: 0; width: 0; height: 0; }

.switch-fire-ice .slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background: linear-gradient(90deg, #ff6b35, #f7931e);
    border-radius: 40px;
    transition: all 0.5s ease;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 8px;
}

.switch-fire-ice .icon {
    font-size: 16px;
    z-index: 1;
    transition: all 0.3s;
}

.switch-fire-ice .knob {
    position: absolute;
    left: 4px;
    width: 32px;
    height: 32px;
    background: white;
    border-radius: 50%;
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    box-shadow: 0 2px 10px rgba(0,0,0,0.3);
}

.switch-fire-ice input:checked + .slider {
    background: linear-gradient(90deg, #00d4ff, #0099cc);
}

.switch-fire-ice input:checked + .slider .knob {
    left: calc(100% - 36px);
}

.switch-fire-ice .fire { animation: flicker 0.5s ease-in-out infinite; }
.switch-fire-ice input:checked + .slider .fire { opacity: 0.3; animation: none; }
.switch-fire-ice input:checked + .slider .ice { animation: sparkle 1s ease-in-out infinite; }

@keyframes flicker {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}

@keyframes sparkle {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(15deg); }
}`
    },
    
    // ==================== LIVING INPUTS ====================
    {
        id: 43,
        name: "Breathing Focus Input",
        category: "inputs",
        tags: ["animated", "living", "focus"],
        html: `<div class="input-breathing-focus">
    <input type="text" placeholder="Start typing...">
    <div class="focus-ring"></div>
</div>`,
        css: `.input-breathing-focus {
    position: relative;
    width: 280px;
}

.input-breathing-focus input {
    width: 100%;
    padding: 16px 20px;
    font-size: 16px;
    color: white;
    background: #1e1e2e;
    border: 2px solid #333;
    border-radius: 12px;
    outline: none;
    transition: all 0.3s ease;
}

.input-breathing-focus input::placeholder {
    color: #666;
}

.input-breathing-focus .focus-ring {
    position: absolute;
    inset: -4px;
    border-radius: 16px;
    border: 2px solid transparent;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s;
}

.input-breathing-focus input:focus {
    border-color: #6366f1;
}

.input-breathing-focus input:focus + .focus-ring {
    opacity: 1;
    border-color: #6366f1;
    animation: ring-breathe 2s ease-in-out infinite;
}

@keyframes ring-breathe {
    0%, 100% { 
        transform: scale(1);
        opacity: 0.5;
    }
    50% { 
        transform: scale(1.02);
        opacity: 1;
    }
}`
    },
    {
        id: 44,
        name: "Particle Input",
        category: "inputs",
        tags: ["animated", "living", "particles"],
        html: `<div class="input-particles">
    <input type="text" placeholder="Magic input...">
    <div class="particle-container">
        <span class="particle">✨</span>
        <span class="particle">⭐</span>
        <span class="particle">✨</span>
        <span class="particle">⭐</span>
    </div>
</div>`,
        css: `.input-particles {
    position: relative;
    width: 280px;
}

.input-particles input {
    width: 100%;
    padding: 16px 20px;
    font-size: 16px;
    color: white;
    background: linear-gradient(135deg, #1a1a2e, #16213e);
    border: 2px solid #333;
    border-radius: 12px;
    outline: none;
    transition: all 0.3s ease;
}

.input-particles input::placeholder { color: #666; }

.input-particles .particle-container {
    position: absolute;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
    border-radius: 12px;
    opacity: 0;
    transition: opacity 0.3s;
}

.input-particles input:focus + .particle-container {
    opacity: 1;
}

.input-particles .particle {
    position: absolute;
    font-size: 12px;
    animation: particle-float 3s ease-in-out infinite;
}

.input-particles .particle:nth-child(1) { left: 10%; top: 20%; animation-delay: 0s; }
.input-particles .particle:nth-child(2) { left: 80%; top: 60%; animation-delay: 0.5s; }
.input-particles .particle:nth-child(3) { left: 60%; top: 10%; animation-delay: 1s; }
.input-particles .particle:nth-child(4) { left: 30%; top: 70%; animation-delay: 1.5s; }

.input-particles input:focus {
    border-color: #6366f1;
    box-shadow: 0 0 20px rgba(99, 102, 241, 0.3);
}

@keyframes particle-float {
    0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { transform: translateY(-20px) rotate(180deg); opacity: 0; }
}`
    },
    
    // ==================== MORE LIVING ELEMENTS ====================
    {
        id: 45,
        name: "Bouncy Checkbox",
        category: "switches",
        tags: ["animated", "living", "bounce"],
        html: `<label class="checkbox-bouncy">
    <input type="checkbox">
    <span class="checkmark">
        <svg viewBox="0 0 24 24">
            <path d="M4 12l6 6L20 6"/>
        </svg>
    </span>
    <span class="label">Accept terms</span>
</label>`,
        css: `.checkbox-bouncy {
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    user-select: none;
}

.checkbox-bouncy input { display: none; }

.checkbox-bouncy .checkmark {
    width: 26px;
    height: 26px;
    background: #2a2a3a;
    border: 2px solid #444;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.checkbox-bouncy .checkmark svg {
    width: 16px;
    height: 16px;
    fill: none;
    stroke: white;
    stroke-width: 3;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 30;
    stroke-dashoffset: 30;
    transition: stroke-dashoffset 0.3s ease 0.1s;
}

.checkbox-bouncy .label {
    color: #888;
    font-size: 15px;
    transition: color 0.3s;
}

.checkbox-bouncy input:checked + .checkmark {
    background: #6366f1;
    border-color: #6366f1;
    animation: checkbox-bounce 0.4s ease;
}

.checkbox-bouncy input:checked + .checkmark svg {
    stroke-dashoffset: 0;
}

.checkbox-bouncy input:checked ~ .label {
    color: white;
}

@keyframes checkbox-bounce {
    0% { transform: scale(1); }
    30% { transform: scale(1.2); }
    50% { transform: scale(0.9); }
    70% { transform: scale(1.1); }
    100% { transform: scale(1); }
}`
    },
    {
        id: 46,
        name: "Wiggle Button",
        category: "buttons",
        tags: ["animated", "living", "attention"],
        html: `<button class="btn-wiggle">
    <span>🔔</span> Notice Me!
</button>`,
        css: `.btn-wiggle {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 14px 28px;
    font-size: 16px;
    font-weight: 600;
    color: white;
    background: linear-gradient(135deg, #ff9a56, #ff6b6b);
    border: none;
    border-radius: 12px;
    cursor: pointer;
    animation: wiggle-attention 2s ease-in-out infinite;
}

.btn-wiggle:hover {
    animation: none;
    transform: scale(1.05);
}

@keyframes wiggle-attention {
    0%, 100% { transform: rotate(0deg); }
    5% { transform: rotate(-3deg); }
    10% { transform: rotate(3deg); }
    15% { transform: rotate(-3deg); }
    20% { transform: rotate(3deg); }
    25% { transform: rotate(0deg); }
}`
    },
    {
        id: 47,
        name: "Typing Cursor Input",
        category: "inputs",
        tags: ["animated", "living", "cursor"],
        html: `<div class="input-typing-cursor">
    <input type="text" placeholder="">
    <span class="placeholder-text">Type here<span class="cursor">|</span></span>
</div>`,
        css: `.input-typing-cursor {
    position: relative;
    width: 280px;
}

.input-typing-cursor input {
    width: 100%;
    padding: 16px 20px;
    font-size: 16px;
    color: white;
    background: #1e1e2e;
    border: 2px solid #333;
    border-radius: 12px;
    outline: none;
    transition: all 0.3s ease;
}

.input-typing-cursor .placeholder-text {
    position: absolute;
    left: 22px;
    top: 50%;
    transform: translateY(-50%);
    color: #666;
    font-size: 16px;
    pointer-events: none;
    transition: opacity 0.2s;
}

.input-typing-cursor .cursor {
    animation: blink 1s step-end infinite;
    color: #6366f1;
}

.input-typing-cursor input:focus + .placeholder-text,
.input-typing-cursor input:not(:placeholder-shown) + .placeholder-text {
    opacity: 0;
}

.input-typing-cursor input:focus {
    border-color: #6366f1;
}

@keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
}`
    },
    {
        id: 48,
        name: "Wave Loader",
        category: "loaders",
        tags: ["animated", "living", "wave"],
        html: `<div class="loader-ocean-wave">
    <div class="wave wave1"></div>
    <div class="wave wave2"></div>
    <div class="wave wave3"></div>
</div>`,
        css: `.loader-ocean-wave {
    position: relative;
    width: 80px;
    height: 50px;
    overflow: hidden;
    border-radius: 8px;
    background: linear-gradient(180deg, #0a0a1a 0%, #1a1a3a 100%);
}

.loader-ocean-wave .wave {
    position: absolute;
    bottom: 0;
    left: -100%;
    width: 200%;
    height: 100%;
    background: linear-gradient(180deg, transparent 50%, rgba(99, 102, 241, 0.3) 50%);
    border-radius: 40%;
    animation: wave-flow 3s linear infinite;
}

.loader-ocean-wave .wave2 {
    animation-delay: -1s;
    opacity: 0.6;
    background: linear-gradient(180deg, transparent 55%, rgba(236, 72, 153, 0.3) 55%);
}

.loader-ocean-wave .wave3 {
    animation-delay: -2s;
    opacity: 0.4;
    background: linear-gradient(180deg, transparent 60%, rgba(6, 182, 212, 0.3) 60%);
}

@keyframes wave-flow {
    0% { transform: translateX(0) rotate(0deg); }
    100% { transform: translateX(50%) rotate(360deg); }
}`
    },
    {
        id: 49,
        name: "Glitch Button",
        category: "buttons",
        tags: ["animated", "living", "glitch"],
        html: `<button class="btn-glitch" data-text="GLITCH">
    GLITCH
</button>`,
        css: `.btn-glitch {
    position: relative;
    padding: 16px 40px;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 3px;
    color: white;
    background: #1a1a2e;
    border: 2px solid #6366f1;
    border-radius: 4px;
    cursor: pointer;
    overflow: hidden;
}

.btn-glitch::before,
.btn-glitch::after {
    content: attr(data-text);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1a1a2e;
    clip-path: inset(0);
}

.btn-glitch::before {
    color: #0ff;
    animation: glitch-1 2s infinite linear alternate-reverse;
}

.btn-glitch::after {
    color: #f0f;
    animation: glitch-2 3s infinite linear alternate-reverse;
}

.btn-glitch:hover::before,
.btn-glitch:hover::after {
    animation-duration: 0.3s;
}

@keyframes glitch-1 {
    0%, 100% { clip-path: inset(0 0 95% 0); transform: translate(-50%, -50%) translateX(-3px); }
    20% { clip-path: inset(30% 0 40% 0); transform: translate(-50%, -50%) translateX(3px); }
    40% { clip-path: inset(60% 0 20% 0); transform: translate(-50%, -50%) translateX(-3px); }
    60% { clip-path: inset(80% 0 5% 0); transform: translate(-50%, -50%) translateX(3px); }
    80% { clip-path: inset(10% 0 70% 0); transform: translate(-50%, -50%) translateX(-3px); }
}

@keyframes glitch-2 {
    0%, 100% { clip-path: inset(95% 0 0 0); transform: translate(-50%, -50%) translateX(3px); }
    20% { clip-path: inset(40% 0 30% 0); transform: translate(-50%, -50%) translateX(-3px); }
    40% { clip-path: inset(20% 0 60% 0); transform: translate(-50%, -50%) translateX(3px); }
    60% { clip-path: inset(5% 0 80% 0); transform: translate(-50%, -50%) translateX(-3px); }
    80% { clip-path: inset(70% 0 10% 0); transform: translate(-50%, -50%) translateX(3px); }
}`
    },
    {
        id: 50,
        name: "Firefly Card",
        category: "cards",
        tags: ["animated", "living", "fireflies"],
        html: `<div class="card-firefly">
    <div class="firefly"></div>
    <div class="firefly"></div>
    <div class="firefly"></div>
    <div class="firefly"></div>
    <div class="firefly"></div>
    <div class="content">
        <h3>Enchanted</h3>
        <p>Magic in the night</p>
    </div>
</div>`,
        css: `.card-firefly {
    position: relative;
    width: 280px;
    height: 180px;
    background: linear-gradient(135deg, #0a1628, #1a2a4a);
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.card-firefly .content {
    text-align: center;
    color: white;
    z-index: 1;
}

.card-firefly h3 { font-size: 24px; margin-bottom: 8px; }
.card-firefly p { font-size: 14px; opacity: 0.7; }

.card-firefly .firefly {
    position: absolute;
    width: 6px;
    height: 6px;
    background: #ffd700;
    border-radius: 50%;
    box-shadow: 0 0 10px #ffd700, 0 0 20px #ffd700;
    animation: firefly-move 8s ease-in-out infinite;
}

.card-firefly .firefly:nth-child(1) { top: 20%; left: 10%; animation-delay: 0s; }
.card-firefly .firefly:nth-child(2) { top: 70%; left: 80%; animation-delay: -2s; }
.card-firefly .firefly:nth-child(3) { top: 40%; left: 60%; animation-delay: -4s; }
.card-firefly .firefly:nth-child(4) { top: 80%; left: 30%; animation-delay: -6s; }
.card-firefly .firefly:nth-child(5) { top: 10%; left: 70%; animation-delay: -1s; }

@keyframes firefly-move {
    0%, 100% { 
        transform: translate(0, 0); 
        opacity: 0;
    }
    10% { opacity: 1; }
    25% { 
        transform: translate(30px, -20px); 
        opacity: 1;
    }
    50% { 
        transform: translate(-20px, -40px);
        opacity: 0.5;
    }
    75% { 
        transform: translate(20px, 10px);
        opacity: 1;
    }
    90% { opacity: 1; }
}`
    }
];

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = uiComponents;
}
