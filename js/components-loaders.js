/* ============================================
   Loader Components
   ============================================ */

const loaderComponents = [
    {
        id: 204,
        name: "Classic Spinner",
        category: "loaders",
        tags: ["loader", "spinner", "animated", "minimal"],
        html: `<div class="loader-classic"></div>`,
        css: `.loader-classic {
    width: 48px;
    height: 48px;
    border: 4px solid #e0e0e0;
    border-top-color: #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}`
    },
    {
        id: 205,
        name: "Pulse Loader",
        category: "loaders",
        tags: ["loader", "pulse", "animated", "minimal"],
        html: `<div class="loader-pulse"></div>`,
        css: `.loader-pulse {
    width: 48px;
    height: 48px;
    background: #3498db;
    border-radius: 50%;
    animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% { transform: scale(0.8); opacity: 0.5; }
    50% { transform: scale(1.2); opacity: 1; }
}`
    },
    {
        id: 206,
        name: "Bouncing Dots",
        category: "loaders",
        tags: ["loader", "dots", "bounce", "animated"],
        html: `<div class="loader-dots">
    <span></span>
    <span></span>
    <span></span>
</div>`,
        css: `.loader-dots {
    display: flex;
    gap: 8px;
}

.loader-dots span {
    width: 12px;
    height: 12px;
    background: #3498db;
    border-radius: 50%;
    animation: bounce 1.4s ease-in-out infinite both;
}

.loader-dots span:nth-child(1) { animation-delay: -0.32s; }
.loader-dots span:nth-child(2) { animation-delay: -0.16s; }

@keyframes bounce {
    0%, 80%, 100% { transform: scale(0); }
    40% { transform: scale(1); }
}`
    },
    {
        id: 207,
        name: "Ring Loader",
        category: "loaders",
        tags: ["loader", "ring", "animated", "gradient"],
        html: `<div class="loader-ring"></div>`,
        css: `.loader-ring {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 4px solid transparent;
    border-top-color: #e74c3c;
    border-bottom-color: #e74c3c;
    animation: ring-spin 1s linear infinite;
}

@keyframes ring-spin {
    to { transform: rotate(360deg); }
}`
    },
    {
        id: 208,
        name: "Wave Bars",
        category: "loaders",
        tags: ["loader", "bars", "wave", "animated"],
        html: `<div class="loader-wave">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>`,
        css: `.loader-wave {
    display: flex;
    align-items: center;
    gap: 4px;
    height: 40px;
}

.loader-wave span {
    width: 6px;
    height: 100%;
    background: #9b59b6;
    animation: wave 1.2s ease-in-out infinite;
}

.loader-wave span:nth-child(1) { animation-delay: 0s; }
.loader-wave span:nth-child(2) { animation-delay: 0.1s; }
.loader-wave span:nth-child(3) { animation-delay: 0.2s; }
.loader-wave span:nth-child(4) { animation-delay: 0.3s; }
.loader-wave span:nth-child(5) { animation-delay: 0.4s; }

@keyframes wave {
    0%, 40%, 100% { transform: scaleY(0.4); }
    20% { transform: scaleY(1); }
}`
    },
    {
        id: 209,
        name: "Dual Ring",
        category: "loaders",
        tags: ["loader", "ring", "dual", "animated"],
        html: `<div class="loader-dual-ring"></div>`,
        css: `.loader-dual-ring {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 4px solid #2ecc71;
    border-top-color: transparent;
    border-bottom-color: transparent;
    animation: dual-ring 1s linear infinite;
    position: relative;
}

.loader-dual-ring::after {
    content: '';
    position: absolute;
    top: 6px;
    left: 6px;
    right: 6px;
    bottom: 6px;
    border-radius: 50%;
    border: 4px solid #27ae60;
    border-left-color: transparent;
    border-right-color: transparent;
    animation: dual-ring 0.5s linear infinite reverse;
}

@keyframes dual-ring {
    to { transform: rotate(360deg); }
}`
    },
    {
        id: 210,
        name: "Cube Flip",
        category: "loaders",
        tags: ["loader", "cube", "3d", "animated"],
        html: `<div class="loader-cube"></div>`,
        css: `.loader-cube {
    width: 40px;
    height: 40px;
    background: #e74c3c;
    animation: cube-flip 1.2s ease-in-out infinite;
}

@keyframes cube-flip {
    0% { transform: perspective(120px) rotateX(0deg) rotateY(0deg); }
    50% { transform: perspective(120px) rotateX(-180deg) rotateY(0deg); }
    100% { transform: perspective(120px) rotateX(-180deg) rotateY(-180deg); }
}`
    },
    {
        id: 211,
        name: "Ripple Effect",
        category: "loaders",
        tags: ["loader", "ripple", "animated", "minimal"],
        html: `<div class="loader-ripple">
    <div></div>
    <div></div>
</div>`,
        css: `.loader-ripple {
    position: relative;
    width: 60px;
    height: 60px;
}

.loader-ripple div {
    position: absolute;
    border: 4px solid #3498db;
    border-radius: 50%;
    animation: ripple 1.5s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

.loader-ripple div:nth-child(2) {
    animation-delay: -0.5s;
}

@keyframes ripple {
    0% { width: 0; height: 0; opacity: 1; }
    100% { width: 60px; height: 60px; opacity: 0; }
}`
    },
    {
        id: 212,
        name: "Orbit Loader",
        category: "loaders",
        tags: ["loader", "orbit", "animated", "creative"],
        html: `<div class="loader-orbit">
    <div class="orbit-dot"></div>
</div>`,
        css: `.loader-orbit {
    width: 50px;
    height: 50px;
    border: 2px solid #ddd;
    border-radius: 50%;
    position: relative;
    animation: orbit-rotate 2s linear infinite;
}

.orbit-dot {
    width: 12px;
    height: 12px;
    background: #e74c3c;
    border-radius: 50%;
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%);
}

@keyframes orbit-rotate {
    to { transform: rotate(360deg); }
}`
    },
    {
        id: 213,
        name: "DNA Helix",
        category: "loaders",
        tags: ["loader", "dna", "animated", "creative"],
        html: `<div class="loader-dna">
    <span></span><span></span><span></span>
    <span></span><span></span><span></span>
</div>`,
        css: `.loader-dna {
    display: flex;
    gap: 6px;
    height: 40px;
    align-items: center;
}

.loader-dna span {
    width: 8px;
    height: 8px;
    background: #3498db;
    border-radius: 50%;
    animation: dna 1.2s ease-in-out infinite;
}

.loader-dna span:nth-child(1) { animation-delay: 0s; }
.loader-dna span:nth-child(2) { animation-delay: 0.1s; }
.loader-dna span:nth-child(3) { animation-delay: 0.2s; }
.loader-dna span:nth-child(4) { animation-delay: 0.3s; }
.loader-dna span:nth-child(5) { animation-delay: 0.4s; }
.loader-dna span:nth-child(6) { animation-delay: 0.5s; }

@keyframes dna {
    0%, 100% { transform: translateY(-15px); background: #3498db; }
    50% { transform: translateY(15px); background: #e74c3c; }
}`
    },
    {
        id: 214,
        name: "Gradient Spinner",
        category: "loaders",
        tags: ["loader", "gradient", "spinner", "animated"],
        html: `<div class="loader-gradient"></div>`,
        css: `.loader-gradient {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: conic-gradient(from 0deg, transparent 0%, #6c5ce7 100%);
    mask: radial-gradient(farthest-side, transparent calc(100% - 6px), #000 calc(100% - 6px));
    -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 6px), #000 calc(100% - 6px));
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}`
    },
    {
        id: 215,
        name: "Square Loader",
        category: "loaders",
        tags: ["loader", "square", "animated", "minimal"],
        html: `<div class="loader-square"></div>`,
        css: `.loader-square {
    width: 40px;
    height: 40px;
    border: 4px solid #2ecc71;
    animation: square-spin 2s ease infinite;
}

@keyframes square-spin {
    0% { transform: rotate(0deg); border-radius: 0; }
    25% { transform: rotate(90deg); border-radius: 50% 0 50% 0; }
    50% { transform: rotate(180deg); border-radius: 50%; }
    75% { transform: rotate(270deg); border-radius: 0 50% 0 50%; }
    100% { transform: rotate(360deg); border-radius: 0; }
}`
    },
    {
        id: 216,
        name: "Dot Grid",
        category: "loaders",
        tags: ["loader", "dots", "grid", "animated"],
        html: `<div class="loader-grid">
    <span></span><span></span><span></span>
    <span></span><span></span><span></span>
    <span></span><span></span><span></span>
</div>`,
        css: `.loader-grid {
    display: grid;
    grid-template-columns: repeat(3, 12px);
    gap: 6px;
}

.loader-grid span {
    width: 12px;
    height: 12px;
    background: #3498db;
    border-radius: 50%;
    animation: grid-pulse 1.3s ease-in-out infinite;
}

.loader-grid span:nth-child(1) { animation-delay: 0s; }
.loader-grid span:nth-child(2) { animation-delay: 0.1s; }
.loader-grid span:nth-child(3) { animation-delay: 0.2s; }
.loader-grid span:nth-child(4) { animation-delay: 0.1s; }
.loader-grid span:nth-child(5) { animation-delay: 0.2s; }
.loader-grid span:nth-child(6) { animation-delay: 0.3s; }
.loader-grid span:nth-child(7) { animation-delay: 0.2s; }
.loader-grid span:nth-child(8) { animation-delay: 0.3s; }
.loader-grid span:nth-child(9) { animation-delay: 0.4s; }

@keyframes grid-pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.3; transform: scale(0.5); }
}`
    },
    {
        id: 217,
        name: "Hourglass",
        category: "loaders",
        tags: ["loader", "hourglass", "animated", "creative"],
        html: `<div class="loader-hourglass"></div>`,
        css: `.loader-hourglass {
    width: 40px;
    height: 40px;
    border: 4px solid #f39c12;
    border-radius: 0 50% 50% 50%;
    animation: hourglass 2s ease infinite;
}

@keyframes hourglass {
    0% { transform: rotate(0deg); }
    25% { transform: rotate(180deg); }
    50% { transform: rotate(180deg); }
    75% { transform: rotate(360deg); }
    100% { transform: rotate(360deg); }
}`
    },
    {
        id: 218,
        name: "Progress Bar",
        category: "loaders",
        tags: ["loader", "progress", "bar", "animated"],
        html: `<div class="loader-progress">
    <div class="progress-fill"></div>
</div>`,
        css: `.loader-progress {
    width: 150px;
    height: 6px;
    background: #e0e0e0;
    border-radius: 3px;
    overflow: hidden;
}

.progress-fill {
    width: 40%;
    height: 100%;
    background: linear-gradient(90deg, #3498db, #9b59b6);
    border-radius: 3px;
    animation: progress 1.5s ease-in-out infinite;
}

@keyframes progress {
    0% { width: 0%; margin-left: 0; }
    50% { width: 40%; margin-left: 30%; }
    100% { width: 0%; margin-left: 100%; }
}`
    },
    {
        id: 219,
        name: "Infinity Loop",
        category: "loaders",
        tags: ["loader", "infinity", "animated", "creative"],
        html: `<div class="loader-infinity">
    <div></div>
    <div></div>
</div>`,
        css: `.loader-infinity {
    position: relative;
    width: 80px;
    height: 40px;
}

.loader-infinity div {
    position: absolute;
    width: 30px;
    height: 30px;
    border: 4px solid #e74c3c;
    border-radius: 50%;
}

.loader-infinity div:first-child {
    left: 0;
    animation: infinity-left 2s linear infinite;
}

.loader-infinity div:last-child {
    right: 0;
    animation: infinity-right 2s linear infinite;
}

@keyframes infinity-left {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(50px); }
}

@keyframes infinity-right {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(-50px); }
}`
    },
    {
        id: 220,
        name: "Atom Loader",
        category: "loaders",
        tags: ["loader", "atom", "animated", "creative"],
        html: `<div class="loader-atom">
    <div class="nucleus"></div>
    <div class="electron e1"></div>
    <div class="electron e2"></div>
    <div class="electron e3"></div>
</div>`,
        css: `.loader-atom {
    width: 60px;
    height: 60px;
    position: relative;
}

.nucleus {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 12px;
    height: 12px;
    background: #e74c3c;
    border-radius: 50%;
    transform: translate(-50%, -50%);
}

.electron {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid #3498db;
    border-radius: 50%;
    animation: electron-spin 1.5s linear infinite;
}

.e1 { transform: rotateX(60deg); }
.e2 { transform: rotateY(60deg); animation-delay: -0.5s; }
.e3 { transform: rotateZ(60deg); animation-delay: -1s; }

@keyframes electron-spin {
    to { transform: rotateZ(360deg); }
}`
    },
    {
        id: 221,
        name: "Morphing Blob",
        category: "loaders",
        tags: ["loader", "blob", "morph", "animated"],
        html: `<div class="loader-blob"></div>`,
        css: `.loader-blob {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 50%;
    animation: blob 2s ease-in-out infinite;
}

@keyframes blob {
    0%, 100% { border-radius: 50%; transform: scale(1); }
    25% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; transform: scale(1.1); }
    50% { border-radius: 50% 50% 30% 70% / 70% 30% 70% 30%; transform: scale(0.9); }
    75% { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; transform: scale(1.05); }
}`
    },
    {
        id: 222,
        name: "Clock Loader",
        category: "loaders",
        tags: ["loader", "clock", "animated", "minimal"],
        html: `<div class="loader-clock">
    <div class="hand hour"></div>
    <div class="hand minute"></div>
</div>`,
        css: `.loader-clock {
    width: 50px;
    height: 50px;
    border: 3px solid #333;
    border-radius: 50%;
    position: relative;
}

.hand {
    position: absolute;
    background: #333;
    transform-origin: bottom center;
    bottom: 50%;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
}

.hour {
    width: 4px;
    height: 14px;
    animation: clock-hour 8s linear infinite;
}

.minute {
    width: 3px;
    height: 18px;
    animation: clock-minute 2s linear infinite;
}

@keyframes clock-hour {
    to { transform: translateX(-50%) rotate(360deg); }
}

@keyframes clock-minute {
    to { transform: translateX(-50%) rotate(360deg); }
}`
    },
    {
        id: 223,
        name: "Heartbeat",
        category: "loaders",
        tags: ["loader", "heart", "animated", "creative"],
        html: `<div class="loader-heart">❤</div>`,
        css: `.loader-heart {
    font-size: 40px;
    color: #e74c3c;
    animation: heartbeat 1s ease-in-out infinite;
}

@keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    15% { transform: scale(1.3); }
    30% { transform: scale(1); }
    45% { transform: scale(1.2); }
    60% { transform: scale(1); }
}`
    },
    {
        id: 224,
        name: "Typing Dots",
        category: "loaders",
        tags: ["loader", "typing", "chat", "animated"],
        html: `<div class="loader-typing">
    <span></span>
    <span></span>
    <span></span>
</div>`,
        css: `.loader-typing {
    display: flex;
    gap: 6px;
    padding: 15px 20px;
    background: #e8e8e8;
    border-radius: 20px;
}

.loader-typing span {
    width: 10px;
    height: 10px;
    background: #888;
    border-radius: 50%;
    animation: typing 1.4s ease-in-out infinite;
}

.loader-typing span:nth-child(1) { animation-delay: 0s; }
.loader-typing span:nth-child(2) { animation-delay: 0.2s; }
.loader-typing span:nth-child(3) { animation-delay: 0.4s; }

@keyframes typing {
    0%, 60%, 100% { transform: translateY(0); }
    30% { transform: translateY(-10px); }
}`
    },
    {
        id: 225,
        name: "Gear Spinner",
        category: "loaders",
        tags: ["loader", "gear", "animated", "industrial"],
        html: `<div class="loader-gear">⚙</div>`,
        css: `.loader-gear {
    font-size: 50px;
    color: #555;
    animation: gear-spin 2s linear infinite;
}

@keyframes gear-spin {
    to { transform: rotate(360deg); }
}`
    },
    {
        id: 226,
        name: "Neon Ring",
        category: "loaders",
        tags: ["loader", "neon", "ring", "glow"],
        html: `<div class="loader-neon"></div>`,
        css: `.loader-neon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 4px solid transparent;
    border-top-color: #00ff88;
    animation: spin 1s linear infinite;
    box-shadow: 
        0 0 10px #00ff88,
        0 0 20px #00ff88,
        0 0 30px #00ff88,
        inset 0 0 10px rgba(0, 255, 136, 0.1);
}

@keyframes spin {
    to { transform: rotate(360deg); }
}`
    },
    {
        id: 227,
        name: "Folding Cube",
        category: "loaders",
        tags: ["loader", "cube", "3d", "animated"],
        html: `<div class="loader-fold">
    <div class="cube c1"></div>
    <div class="cube c2"></div>
    <div class="cube c3"></div>
    <div class="cube c4"></div>
</div>`,
        css: `.loader-fold {
    width: 40px;
    height: 40px;
    position: relative;
    transform: rotateZ(45deg);
}

.cube {
    width: 50%;
    height: 50%;
    background: #3498db;
    position: absolute;
    animation: fold 2.4s linear infinite both;
    transform-origin: 100% 100%;
}

.c2 { transform: rotateZ(90deg); animation-delay: 0.3s; }
.c3 { transform: rotateZ(180deg); animation-delay: 0.6s; }
.c4 { transform: rotateZ(270deg); animation-delay: 0.9s; }

@keyframes fold {
    0%, 10% { transform: perspective(140px) rotateX(-180deg); opacity: 0; }
    25%, 75% { transform: perspective(140px) rotateX(0deg); opacity: 1; }
    90%, 100% { transform: perspective(140px) rotateY(180deg); opacity: 0; }
}`
    },
    {
        id: 228,
        name: "Solar System",
        category: "loaders",
        tags: ["loader", "solar", "orbit", "animated"],
        html: `<div class="loader-solar">
    <div class="sun"></div>
    <div class="orbit o1"><div class="planet"></div></div>
    <div class="orbit o2"><div class="planet"></div></div>
</div>`,
        css: `.loader-solar {
    width: 80px;
    height: 80px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.sun {
    width: 16px;
    height: 16px;
    background: #f1c40f;
    border-radius: 50%;
    box-shadow: 0 0 20px #f1c40f;
}

.orbit {
    position: absolute;
    border: 1px dashed rgba(255,255,255,0.3);
    border-radius: 50%;
    animation: orbit-spin 3s linear infinite;
}

.o1 { width: 40px; height: 40px; }
.o2 { width: 65px; height: 65px; animation-duration: 5s; }

.planet {
    width: 8px;
    height: 8px;
    background: #3498db;
    border-radius: 50%;
    position: absolute;
    top: -4px;
    left: 50%;
    transform: translateX(-50%);
}

@keyframes orbit-spin {
    to { transform: rotate(360deg); }
}`
    },
    {
        id: 229,
        name: "Spinning Dots Circle",
        category: "loaders",
        tags: ["loader", "dots", "circle", "animated"],
        html: `<div class="loader-circle-dots">
    <span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span>
</div>`,
        css: `.loader-circle-dots {
    width: 50px;
    height: 50px;
    position: relative;
    animation: spin 1.2s linear infinite;
}

.loader-circle-dots span {
    position: absolute;
    width: 8px;
    height: 8px;
    background: #e74c3c;
    border-radius: 50%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    transform-origin: 4px 25px;
}

.loader-circle-dots span:nth-child(1) { transform: translateX(-50%) rotate(0deg); opacity: 1; }
.loader-circle-dots span:nth-child(2) { transform: translateX(-50%) rotate(45deg); opacity: 0.875; }
.loader-circle-dots span:nth-child(3) { transform: translateX(-50%) rotate(90deg); opacity: 0.75; }
.loader-circle-dots span:nth-child(4) { transform: translateX(-50%) rotate(135deg); opacity: 0.625; }
.loader-circle-dots span:nth-child(5) { transform: translateX(-50%) rotate(180deg); opacity: 0.5; }
.loader-circle-dots span:nth-child(6) { transform: translateX(-50%) rotate(225deg); opacity: 0.375; }
.loader-circle-dots span:nth-child(7) { transform: translateX(-50%) rotate(270deg); opacity: 0.25; }
.loader-circle-dots span:nth-child(8) { transform: translateX(-50%) rotate(315deg); opacity: 0.125; }

@keyframes spin {
    to { transform: rotate(360deg); }
}`
    },
    {
        id: 230,
        name: "Glitch Loader",
        category: "loaders",
        tags: ["loader", "glitch", "animated", "creative"],
        html: `<div class="loader-glitch" data-text="LOADING">LOADING</div>`,
        css: `.loader-glitch {
    font-size: 20px;
    font-weight: bold;
    font-family: 'Courier New', monospace;
    color: #fff;
    position: relative;
    text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff, 0.025em 0.04em 0 #fffc00;
    animation: glitch 725ms infinite;
}

@keyframes glitch {
    0% { text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff, 0.025em 0.04em 0 #fffc00; }
    15% { text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff, 0.025em 0.04em 0 #fffc00; }
    16% { text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff, -0.05em -0.05em 0 #fffc00; }
    49% { text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff, -0.05em -0.05em 0 #fffc00; }
    50% { text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff, 0 -0.04em 0 #fffc00; }
    99% { text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff, 0 -0.04em 0 #fffc00; }
    100% { text-shadow: -0.05em 0 0 #00fffc, -0.025em -0.04em 0 #fc00ff, -0.04em -0.025em 0 #fffc00; }
}`
    },
    {
        id: 231,
        name: "Windmill",
        category: "loaders",
        tags: ["loader", "windmill", "animated", "creative"],
        html: `<div class="loader-windmill">
    <div class="blade"></div>
    <div class="blade"></div>
    <div class="blade"></div>
    <div class="blade"></div>
</div>`,
        css: `.loader-windmill {
    width: 50px;
    height: 50px;
    position: relative;
    animation: windmill-spin 2s linear infinite;
}

.blade {
    position: absolute;
    width: 8px;
    height: 20px;
    background: #e74c3c;
    border-radius: 4px;
    left: 50%;
    transform: translateX(-50%);
    transform-origin: center bottom;
}

.blade:nth-child(1) { transform: translateX(-50%) rotate(0deg); top: 5px; }
.blade:nth-child(2) { transform: translateX(-50%) rotate(90deg); top: 5px; }
.blade:nth-child(3) { transform: translateX(-50%) rotate(180deg); top: 5px; }
.blade:nth-child(4) { transform: translateX(-50%) rotate(270deg); top: 5px; }

@keyframes windmill-spin {
    to { transform: rotate(360deg); }
}`
    },
    {
        id: 232,
        name: "Bounce Loader",
        category: "loaders",
        tags: ["loader", "bounce", "ball", "animated"],
        html: `<div class="loader-bounce">
    <div class="ball"></div>
    <div class="shadow"></div>
</div>`,
        css: `.loader-bounce {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
}

.ball {
    width: 30px;
    height: 30px;
    background: #3498db;
    border-radius: 50%;
    animation: ball-bounce 0.6s ease infinite alternate;
}

.shadow {
    width: 30px;
    height: 8px;
    background: rgba(0,0,0,0.2);
    border-radius: 50%;
    animation: shadow-scale 0.6s ease infinite alternate;
}

@keyframes ball-bounce {
    from { transform: translateY(0) scaleY(1); }
    to { transform: translateY(-30px) scaleY(0.9); }
}

@keyframes shadow-scale {
    from { transform: scaleX(1); opacity: 0.5; }
    to { transform: scaleX(0.5); opacity: 0.2; }
}`
    },
    {
        id: 233,
        name: "Wifi Loader",
        category: "loaders",
        tags: ["loader", "wifi", "signal", "animated"],
        html: `<div class="loader-wifi">
    <span></span>
    <span></span>
    <span></span>
</div>`,
        css: `.loader-wifi {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
}

.loader-wifi span {
    display: block;
    border: 4px solid transparent;
    border-top-color: #2ecc71;
    border-radius: 50%;
}

.loader-wifi span:nth-child(1) {
    width: 50px;
    height: 25px;
    animation: wifi 1.5s ease infinite;
    animation-delay: 0s;
}

.loader-wifi span:nth-child(2) {
    width: 35px;
    height: 18px;
    animation: wifi 1.5s ease infinite;
    animation-delay: 0.2s;
}

.loader-wifi span:nth-child(3) {
    width: 20px;
    height: 10px;
    animation: wifi 1.5s ease infinite;
    animation-delay: 0.4s;
}

@keyframes wifi {
    0%, 100% { opacity: 0.2; }
    50% { opacity: 1; }
}`
    },
    {
        id: 234,
        name: "Pacman Loader",
        category: "loaders",
        tags: ["loader", "pacman", "game", "animated"],
        html: `<div class="loader-pacman">
    <div class="pacman"></div>
    <div class="dots">
        <span></span><span></span><span></span>
    </div>
</div>`,
        css: `.loader-pacman {
    display: flex;
    align-items: center;
    gap: 10px;
}

.pacman {
    width: 40px;
    height: 40px;
    background: #f1c40f;
    border-radius: 50%;
    position: relative;
    animation: pacman-eat 0.5s ease infinite;
}

.pacman::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 20px;
    width: 6px;
    height: 6px;
    background: #000;
    border-radius: 50%;
}

.dots {
    display: flex;
    gap: 8px;
    animation: dots-move 0.5s linear infinite;
}

.dots span {
    width: 8px;
    height: 8px;
    background: #f1c40f;
    border-radius: 50%;
}

@keyframes pacman-eat {
    0%, 100% { clip-path: polygon(100% 50%, 80% 0%, 0% 0%, 0% 100%, 80% 100%); }
    50% { clip-path: polygon(100% 50%, 100% 0%, 0% 0%, 0% 100%, 100% 100%); }
}

@keyframes dots-move {
    to { transform: translateX(-20px); }
}`
    },
    {
        id: 235,
        name: "Battery Charging",
        category: "loaders",
        tags: ["loader", "battery", "charging", "animated"],
        html: `<div class="loader-battery">
    <div class="battery-body">
        <div class="charge"></div>
    </div>
    <div class="battery-head"></div>
</div>`,
        css: `.loader-battery {
    display: flex;
    align-items: center;
}

.battery-body {
    width: 50px;
    height: 25px;
    border: 3px solid #2ecc71;
    border-radius: 4px;
    padding: 2px;
    overflow: hidden;
}

.charge {
    height: 100%;
    background: #2ecc71;
    animation: charge 2s ease-in-out infinite;
}

.battery-head {
    width: 4px;
    height: 12px;
    background: #2ecc71;
    border-radius: 0 2px 2px 0;
}

@keyframes charge {
    0% { width: 0%; }
    100% { width: 100%; }
}`
    },
    {
        id: 236,
        name: "Flip Card",
        category: "loaders",
        tags: ["loader", "flip", "card", "3d"],
        html: `<div class="loader-flip-card"></div>`,
        css: `.loader-flip-card {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    animation: flip-card 1.5s ease-in-out infinite;
}

@keyframes flip-card {
    0% { transform: perspective(200px) rotateX(0deg) rotateY(0deg); }
    50% { transform: perspective(200px) rotateX(180deg) rotateY(0deg); }
    100% { transform: perspective(200px) rotateX(180deg) rotateY(180deg); }
}`
    },
    {
        id: 237,
        name: "Radar Sweep",
        category: "loaders",
        tags: ["loader", "radar", "scan", "animated"],
        html: `<div class="loader-radar">
    <div class="sweep"></div>
</div>`,
        css: `.loader-radar {
    width: 60px;
    height: 60px;
    border: 3px solid #2ecc71;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
}

.loader-radar::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 6px;
    background: #2ecc71;
    border-radius: 50%;
    transform: translate(-50%, -50%);
}

.sweep {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 50%;
    background: linear-gradient(90deg, transparent, rgba(46, 204, 113, 0.5));
    transform-origin: bottom left;
    animation: radar-sweep 2s linear infinite;
}

@keyframes radar-sweep {
    to { transform: rotate(360deg); }
}`
    },
    {
        id: 238,
        name: "Newton Cradle",
        category: "loaders",
        tags: ["loader", "newton", "physics", "animated"],
        html: `<div class="loader-newton">
    <span></span><span></span><span></span><span></span><span></span>
</div>`,
        css: `.loader-newton {
    display: flex;
    gap: 2px;
    height: 50px;
}

.loader-newton span {
    width: 10px;
    height: 10px;
    background: #3498db;
    border-radius: 50%;
    position: relative;
}

.loader-newton span::before {
    content: '';
    position: absolute;
    width: 2px;
    height: 30px;
    background: #666;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
}

.loader-newton span:first-child {
    animation: newton-left 1s ease-in-out infinite;
    transform-origin: top center;
}

.loader-newton span:last-child {
    animation: newton-right 1s ease-in-out infinite;
    transform-origin: top center;
}

@keyframes newton-left {
    0%, 50%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(-30deg); }
}

@keyframes newton-right {
    0%, 50%, 100% { transform: rotate(0deg); }
    75% { transform: rotate(30deg); }
}`
    },
    {
        id: 239,
        name: "Loading Text",
        category: "loaders",
        tags: ["loader", "text", "typing", "animated"],
        html: `<div class="loader-text">Loading<span class="dots-anim"></span></div>`,
        css: `.loader-text {
    font-size: 20px;
    font-weight: bold;
    color: #333;
    font-family: 'Courier New', monospace;
}

.dots-anim::after {
    content: '';
    animation: dots 1.5s steps(4, end) infinite;
}

@keyframes dots {
    0% { content: ''; }
    25% { content: '.'; }
    50% { content: '..'; }
    75% { content: '...'; }
}`
    },
    {
        id: 240,
        name: "Hexagon Spinner",
        category: "loaders",
        tags: ["loader", "hexagon", "animated", "geometric"],
        html: `<div class="loader-hexagon"></div>`,
        css: `.loader-hexagon {
    width: 50px;
    height: 55px;
    background: #9b59b6;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    animation: hex-spin 1.5s ease-in-out infinite;
}

@keyframes hex-spin {
    0% { transform: rotate(0deg) scale(1); }
    50% { transform: rotate(180deg) scale(0.8); }
    100% { transform: rotate(360deg) scale(1); }
}`
    },
    {
        id: 241,
        name: "Snake Loader",
        category: "loaders",
        tags: ["loader", "snake", "animated", "creative"],
        html: `<div class="loader-snake">
    <span></span><span></span><span></span><span></span>
</div>`,
        css: `.loader-snake {
    display: flex;
    gap: 4px;
}

.loader-snake span {
    width: 12px;
    height: 12px;
    background: #e74c3c;
    border-radius: 2px;
    animation: snake 0.8s ease-in-out infinite;
}

.loader-snake span:nth-child(1) { animation-delay: 0s; }
.loader-snake span:nth-child(2) { animation-delay: 0.1s; }
.loader-snake span:nth-child(3) { animation-delay: 0.2s; }
.loader-snake span:nth-child(4) { animation-delay: 0.3s; }

@keyframes snake {
    0%, 100% { transform: translateY(0) scale(1); background: #e74c3c; }
    50% { transform: translateY(-15px) scale(1.2); background: #c0392b; }
}`
    },
    {
        id: 242,
        name: "Rotating Squares",
        category: "loaders",
        tags: ["loader", "squares", "rotating", "animated"],
        html: `<div class="loader-squares">
    <div class="sq"></div>
    <div class="sq"></div>
</div>`,
        css: `.loader-squares {
    width: 40px;
    height: 40px;
    position: relative;
}

.sq {
    width: 100%;
    height: 100%;
    position: absolute;
    border: 3px solid #3498db;
    animation: squares 2s ease infinite;
}

.sq:last-child {
    animation-delay: -1s;
}

@keyframes squares {
    0% { transform: rotate(0deg); }
    25% { transform: rotate(90deg); }
    50% { transform: rotate(180deg); }
    75% { transform: rotate(270deg); }
    100% { transform: rotate(360deg); }
}`
    },
    {
        id: 243,
        name: "Hopping Balls",
        category: "loaders",
        tags: ["loader", "balls", "hop", "animated"],
        html: `<div class="loader-hop">
    <span></span><span></span><span></span>
</div>`,
        css: `.loader-hop {
    display: flex;
    gap: 8px;
}

.loader-hop span {
    width: 16px;
    height: 16px;
    background: #1abc9c;
    border-radius: 50%;
    animation: hop 1s ease-in-out infinite;
}

.loader-hop span:nth-child(1) { animation-delay: 0s; }
.loader-hop span:nth-child(2) { animation-delay: 0.15s; }
.loader-hop span:nth-child(3) { animation-delay: 0.3s; }

@keyframes hop {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-25px) rotate(180deg); }
}`
    },
    {
        id: 244,
        name: "Circular Progress",
        category: "loaders",
        tags: ["loader", "circular", "progress", "animated"],
        html: `<div class="loader-circular">
    <svg viewBox="0 0 36 36">
        <circle cx="18" cy="18" r="16"></circle>
        <circle cx="18" cy="18" r="16" class="progress-ring"></circle>
    </svg>
</div>`,
        css: `.loader-circular {
    width: 60px;
    height: 60px;
}

.loader-circular svg {
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
}

.loader-circular circle {
    fill: none;
    stroke-width: 3;
    stroke: #e0e0e0;
}

.progress-ring {
    stroke: #3498db;
    stroke-dasharray: 100;
    stroke-dashoffset: 100;
    animation: circular-progress 2s ease-in-out infinite;
}

@keyframes circular-progress {
    0% { stroke-dashoffset: 100; }
    50% { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: -100; }
}`
    },
    {
        id: 245,
        name: "Spinning Coin",
        category: "loaders",
        tags: ["loader", "coin", "3d", "animated"],
        html: `<div class="loader-coin">$</div>`,
        css: `.loader-coin {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #f1c40f, #f39c12);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    animation: coin-spin 1s ease-in-out infinite;
    box-shadow: 0 4px 15px rgba(241, 196, 15, 0.4);
}

@keyframes coin-spin {
    0% { transform: rotateY(0deg); }
    100% { transform: rotateY(360deg); }
}`
    },
    {
        id: 246,
        name: "Elastic Bar",
        category: "loaders",
        tags: ["loader", "elastic", "bar", "animated"],
        html: `<div class="loader-elastic"></div>`,
        css: `.loader-elastic {
    width: 80px;
    height: 8px;
    background: #9b59b6;
    border-radius: 4px;
    animation: elastic 1s ease-in-out infinite;
}

@keyframes elastic {
    0%, 100% { transform: scaleX(1); }
    50% { transform: scaleX(0.3); }
}`
    },
    {
        id: 247,
        name: "Fire Loader",
        category: "loaders",
        tags: ["loader", "fire", "flame", "animated"],
        html: `<div class="loader-fire">🔥</div>`,
        css: `.loader-fire {
    font-size: 40px;
    animation: fire-flicker 0.3s ease-in-out infinite alternate;
    filter: drop-shadow(0 0 10px #ff6b35);
}

@keyframes fire-flicker {
    0% { transform: scale(1) rotate(-2deg); }
    100% { transform: scale(1.1) rotate(2deg); }
}`
    },
    {
        id: 248,
        name: "Rotating Triangle",
        category: "loaders",
        tags: ["loader", "triangle", "rotating", "geometric"],
        html: `<div class="loader-triangle"></div>`,
        css: `.loader-triangle {
    width: 0;
    height: 0;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    border-bottom: 45px solid #e74c3c;
    animation: triangle-spin 1.5s linear infinite;
}

@keyframes triangle-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}`
    },
    {
        id: 249,
        name: "Music Equalizer",
        category: "loaders",
        tags: ["loader", "music", "equalizer", "animated"],
        html: `<div class="loader-equalizer">
    <span></span><span></span><span></span><span></span><span></span>
</div>`,
        css: `.loader-equalizer {
    display: flex;
    align-items: flex-end;
    gap: 3px;
    height: 40px;
}

.loader-equalizer span {
    width: 6px;
    background: linear-gradient(to top, #e74c3c, #f39c12);
    border-radius: 3px;
    animation: equalizer 0.8s ease-in-out infinite;
}

.loader-equalizer span:nth-child(1) { animation-delay: 0s; }
.loader-equalizer span:nth-child(2) { animation-delay: 0.1s; }
.loader-equalizer span:nth-child(3) { animation-delay: 0.2s; }
.loader-equalizer span:nth-child(4) { animation-delay: 0.3s; }
.loader-equalizer span:nth-child(5) { animation-delay: 0.4s; }

@keyframes equalizer {
    0%, 100% { height: 10px; }
    50% { height: 40px; }
}`
    },
    {
        id: 250,
        name: "Morphing Circle",
        category: "loaders",
        tags: ["loader", "morph", "circle", "animated"],
        html: `<div class="loader-morph-circle"></div>`,
        css: `.loader-morph-circle {
    width: 50px;
    height: 50px;
    background: #2ecc71;
    animation: morph-circle 2s ease-in-out infinite;
}

@keyframes morph-circle {
    0%, 100% { border-radius: 50%; transform: rotate(0deg); }
    25% { border-radius: 50% 0 50% 50%; transform: rotate(90deg); }
    50% { border-radius: 50% 50% 0 50%; transform: rotate(180deg); }
    75% { border-radius: 50% 50% 50% 0; transform: rotate(270deg); }
}`
    },
    {
        id: 251,
        name: "Stacked Rings",
        category: "loaders",
        tags: ["loader", "rings", "stacked", "animated"],
        html: `<div class="loader-stacked">
    <div class="ring r1"></div>
    <div class="ring r2"></div>
    <div class="ring r3"></div>
</div>`,
        css: `.loader-stacked {
    width: 60px;
    height: 60px;
    position: relative;
}

.ring {
    position: absolute;
    border: 3px solid transparent;
    border-radius: 50%;
    animation: stacked-spin 1.5s linear infinite;
}

.r1 {
    width: 100%;
    height: 100%;
    border-top-color: #e74c3c;
    border-bottom-color: #e74c3c;
}

.r2 {
    width: 75%;
    height: 75%;
    top: 12.5%;
    left: 12.5%;
    border-left-color: #f39c12;
    border-right-color: #f39c12;
    animation-direction: reverse;
}

.r3 {
    width: 50%;
    height: 50%;
    top: 25%;
    left: 25%;
    border-top-color: #3498db;
    border-bottom-color: #3498db;
}

@keyframes stacked-spin {
    to { transform: rotate(360deg); }
}`
    },
    {
        id: 252,
        name: "Pendulum",
        category: "loaders",
        tags: ["loader", "pendulum", "swing", "animated"],
        html: `<div class="loader-pendulum">
    <div class="ball-p"></div>
</div>`,
        css: `.loader-pendulum {
    width: 4px;
    height: 60px;
    background: #666;
    position: relative;
    transform-origin: top center;
    animation: pendulum-swing 1s ease-in-out infinite;
}

.ball-p {
    width: 20px;
    height: 20px;
    background: #e74c3c;
    border-radius: 50%;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
}

@keyframes pendulum-swing {
    0%, 100% { transform: rotate(30deg); }
    50% { transform: rotate(-30deg); }
}`
    },
    {
        id: 253,
        name: "Fading Squares",
        category: "loaders",
        tags: ["loader", "squares", "fading", "animated"],
        html: `<div class="loader-fading-squares">
    <span></span><span></span><span></span><span></span>
</div>`,
        css: `.loader-fading-squares {
    display: grid;
    grid-template-columns: repeat(2, 20px);
    gap: 4px;
}

.loader-fading-squares span {
    width: 20px;
    height: 20px;
    background: #3498db;
    animation: fade-square 1.2s ease-in-out infinite;
}

.loader-fading-squares span:nth-child(1) { animation-delay: 0s; }
.loader-fading-squares span:nth-child(2) { animation-delay: 0.3s; }
.loader-fading-squares span:nth-child(4) { animation-delay: 0.3s; }
.loader-fading-squares span:nth-child(3) { animation-delay: 0.6s; }

@keyframes fade-square {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.3; transform: scale(0.8); }
}`
    }
];
