/* ============================================
   Keyboard & 3D Style Components - Part 2
   ============================================ */

const keyboardComponents2 = [
    {
        id: 126,
        name: "Piano Black Key",
        category: "buttons",
        tags: ["3d", "keyboard", "piano", "music"],
        html: `<button class="key-piano-black">C#</button>`,
        css: `.key-piano-black {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 8px;
    width: 30px;
    height: 90px;
    background: linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 90%, #0a0a0a 100%);
    color: #555;
    font-size: 9px;
    font-weight: 500;
    border: none;
    border-radius: 0 0 4px 4px;
    cursor: pointer;
    box-shadow: 0 6px 0 #000, 0 8px 12px rgba(0,0,0,0.4),
        inset 0 -3px 8px rgba(0,0,0,0.5);
    transition: all 0.05s ease;
    position: relative;
    z-index: 2;
}

.key-piano-black:active {
    height: 86px;
    box-shadow: 0 2px 0 #000, 0 4px 6px rgba(0,0,0,0.4);
}`
    },
    {
        id: 127,
        name: "Mechanical Switch Key",
        category: "buttons",
        tags: ["3d", "keyboard", "mechanical", "gaming"],
        html: `<button class="key-mech">
    <span class="keycap">G</span>
</button>`,
        css: `.key-mech {
    position: relative;
    width: 54px;
    height: 54px;
    background: linear-gradient(145deg, #1a1a1a, #0a0a0a);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    padding: 4px;
}

.key-mech .keycap {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: linear-gradient(145deg, #333, #222);
    color: #ddd;
    font-size: 16px;
    font-weight: 600;
    border-radius: 4px;
    box-shadow: 0 4px 0 #111, 
        inset 0 1px 0 rgba(255,255,255,0.15),
        inset 0 -1px 0 rgba(0,0,0,0.5);
    transition: all 0.08s ease;
}

.key-mech:active .keycap {
    transform: translateY(3px);
    box-shadow: 0 1px 0 #111,
        inset 0 1px 0 rgba(255,255,255,0.1);
}`
    },
    {
        id: 128,
        name: "Cherry MX Red",
        category: "buttons",
        tags: ["3d", "keyboard", "mechanical", "cherry"],
        html: `<button class="key-cherry-red">
    <span class="stem"></span>
    <span class="label">R</span>
</button>`,
        css: `.key-cherry-red {
    position: relative;
    width: 50px;
    height: 50px;
    background: #1a1a1a;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: inset 0 -4px 0 #0a0a0a;
}

.key-cherry-red .stem {
    position: absolute;
    width: 12px;
    height: 12px;
    background: #ef4444;
    border-radius: 2px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.2s;
}

.key-cherry-red .label {
    position: relative;
    z-index: 2;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    padding: 12px;
    background: linear-gradient(145deg, #2a2a2a, #1f1f1f);
    border-radius: 5px;
    box-shadow: 0 4px 0 #111, inset 0 1px 0 rgba(255,255,255,0.1);
    transition: all 0.08s ease;
}

.key-cherry-red:active .label {
    transform: translateY(3px);
    box-shadow: 0 1px 0 #111;
}

.key-cherry-red:active .stem {
    opacity: 1;
}`
    },
    {
        id: 129,
        name: "Elevator Button",
        category: "buttons",
        tags: ["3d", "keyboard", "elevator", "round"],
        html: `<button class="key-elevator">
    <span>5</span>
</button>`,
        css: `.key-elevator {
    width: 50px;
    height: 50px;
    background: linear-gradient(145deg, #c0c0c0, #a0a0a0);
    border: 3px solid #888;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 0 #666, 0 6px 15px rgba(0,0,0,0.3),
        inset 0 2px 0 rgba(255,255,255,0.5);
    transition: all 0.1s ease;
}

.key-elevator span {
    font-size: 18px;
    font-weight: 700;
    color: #333;
}

.key-elevator:hover {
    background: linear-gradient(145deg, #ffd700, #ffb700);
    border-color: #cc9900;
}

.key-elevator:active {
    transform: translateY(3px);
    box-shadow: 0 1px 0 #666, 0 2px 5px rgba(0,0,0,0.3);
    background: linear-gradient(145deg, #ff6b00, #ff4500);
    border-color: #cc3300;
}

.key-elevator:active span {
    color: #fff;
}`
    },
    {
        id: 130,
        name: "ATM Pin Button",
        category: "buttons",
        tags: ["3d", "keyboard", "atm", "number"],
        html: `<button class="key-atm">4</button>`,
        css: `.key-atm {
    width: 60px;
    height: 50px;
    background: linear-gradient(180deg, #e8e8e8, #d0d0d0);
    color: #222;
    font-size: 22px;
    font-weight: 600;
    border: 2px solid #bbb;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 0 #999, 0 5px 10px rgba(0,0,0,0.2),
        inset 0 1px 0 #fff;
    transition: all 0.1s ease;
}

.key-atm:hover {
    background: linear-gradient(180deg, #fff, #e8e8e8);
}

.key-atm:active {
    transform: translateY(3px);
    box-shadow: 0 1px 0 #999, 0 2px 5px rgba(0,0,0,0.2);
    background: linear-gradient(180deg, #4ade80, #22c55e);
    color: #fff;
    border-color: #16a34a;
}`
    },
    {
        id: 131,
        name: "Game Controller D-Pad",
        category: "buttons",
        tags: ["3d", "keyboard", "gaming", "dpad"],
        html: `<div class="dpad-container">
    <button class="dpad-up">▲</button>
    <button class="dpad-left">◄</button>
    <button class="dpad-center"></button>
    <button class="dpad-right">►</button>
    <button class="dpad-down">▼</button>
</div>`,
        css: `.dpad-container {
    display: grid;
    grid-template-columns: repeat(3, 35px);
    grid-template-rows: repeat(3, 35px);
    gap: 0;
}

.dpad-container button {
    background: linear-gradient(145deg, #2a2a2a, #1a1a1a);
    border: none;
    color: #666;
    font-size: 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.1s ease;
}

.dpad-up { grid-column: 2; border-radius: 8px 8px 0 0; }
.dpad-left { grid-column: 1; grid-row: 2; border-radius: 8px 0 0 8px; }
.dpad-center { grid-column: 2; grid-row: 2; background: #222 !important; }
.dpad-right { grid-column: 3; grid-row: 2; border-radius: 0 8px 8px 0; }
.dpad-down { grid-column: 2; grid-row: 3; border-radius: 0 0 8px 8px; }

.dpad-container button:not(.dpad-center):hover {
    color: #fff;
    background: linear-gradient(145deg, #3a3a3a, #2a2a2a);
}

.dpad-container button:not(.dpad-center):active {
    background: linear-gradient(145deg, #3b82f6, #2563eb);
    color: #fff;
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.3);
}`
    },
    {
        id: 132,
        name: "Xbox A Button",
        category: "buttons",
        tags: ["3d", "keyboard", "gaming", "xbox"],
        html: `<button class="key-xbox-a">A</button>`,
        css: `.key-xbox-a {
    width: 50px;
    height: 50px;
    background: linear-gradient(180deg, #22c55e, #16a34a);
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    border: 3px solid #15803d;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 5px 0 #166534, 0 7px 15px rgba(22, 163, 74, 0.4),
        inset 0 2px 0 rgba(255,255,255,0.3);
    transition: all 0.1s ease;
}

.key-xbox-a:hover {
    box-shadow: 0 5px 0 #166534, 0 7px 20px rgba(22, 163, 74, 0.6),
        inset 0 2px 0 rgba(255,255,255,0.3);
}

.key-xbox-a:active {
    transform: translateY(4px);
    box-shadow: 0 1px 0 #166534, 0 2px 5px rgba(22, 163, 74, 0.4);
}`
    },
    {
        id: 133,
        name: "PlayStation Circle",
        category: "buttons",
        tags: ["3d", "keyboard", "gaming", "playstation"],
        html: `<button class="key-ps-circle">○</button>`,
        css: `.key-ps-circle {
    width: 45px;
    height: 45px;
    background: linear-gradient(180deg, #333, #1a1a1a);
    color: #ef4444;
    font-size: 24px;
    font-weight: 300;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 4px 0 #0a0a0a, 0 6px 12px rgba(0,0,0,0.5),
        inset 0 1px 0 rgba(255,255,255,0.1);
    transition: all 0.1s ease;
}

.key-ps-circle:hover {
    color: #f87171;
    text-shadow: 0 0 10px rgba(239, 68, 68, 0.5);
}

.key-ps-circle:active {
    transform: translateY(3px);
    box-shadow: 0 1px 0 #0a0a0a, 0 2px 5px rgba(0,0,0,0.5);
}`
    },
    {
        id: 134,
        name: "Nintendo Switch Button",
        category: "buttons",
        tags: ["3d", "keyboard", "gaming", "switch"],
        html: `<button class="key-switch-b">B</button>`,
        css: `.key-switch-b {
    width: 40px;
    height: 40px;
    background: radial-gradient(circle at 30% 30%, #444, #222);
    color: #888;
    font-size: 14px;
    font-weight: 600;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 3px 0 #111, 0 5px 10px rgba(0,0,0,0.4),
        inset 0 1px 0 rgba(255,255,255,0.2);
    transition: all 0.08s ease;
}

.key-switch-b:hover {
    color: #fff;
}

.key-switch-b:active {
    transform: translateY(2px);
    box-shadow: 0 1px 0 #111, 0 2px 5px rgba(0,0,0,0.4);
    background: radial-gradient(circle at 30% 30%, #e60012, #a0000e);
    color: #fff;
}`
    },
    {
        id: 135,
        name: "Vintage Radio Button",
        category: "buttons",
        tags: ["3d", "keyboard", "vintage", "radio"],
        html: `<button class="key-radio-vintage">
    <span class="dial"></span>
</button>`,
        css: `.key-radio-vintage {
    width: 60px;
    height: 60px;
    background: linear-gradient(145deg, #8b7355, #6b5344);
    border: 4px solid #5c4533;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 6px 0 #4a3728, 0 8px 15px rgba(0,0,0,0.4),
        inset 0 2px 0 rgba(255,255,255,0.2);
    transition: all 0.2s ease;
}

.key-radio-vintage .dial {
    width: 8px;
    height: 25px;
    background: linear-gradient(90deg, #d4af37, #ffd700, #d4af37);
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    transition: transform 0.2s ease;
}

.key-radio-vintage:hover .dial {
    transform: rotate(30deg);
}

.key-radio-vintage:active {
    transform: translateY(4px);
    box-shadow: 0 2px 0 #4a3728, 0 3px 8px rgba(0,0,0,0.4);
}`
    },
    {
        id: 136,
        name: "Industrial Emergency Stop",
        category: "buttons",
        tags: ["3d", "keyboard", "industrial", "emergency"],
        html: `<button class="key-estop">
    <span>STOP</span>
</button>`,
        css: `.key-estop {
    width: 80px;
    height: 80px;
    background: radial-gradient(circle at 40% 40%, #ff0000, #cc0000, #990000);
    border: 5px solid #ffcc00;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 8px 0 #660000, 0 10px 25px rgba(255, 0, 0, 0.5),
        inset 0 -5px 15px rgba(0,0,0,0.3),
        inset 0 5px 15px rgba(255,255,255,0.2);
    transition: all 0.1s ease;
}

.key-estop span {
    color: #fff;
    font-size: 14px;
    font-weight: 900;
    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
}

.key-estop:hover {
    box-shadow: 0 8px 0 #660000, 0 10px 35px rgba(255, 0, 0, 0.7),
        inset 0 -5px 15px rgba(0,0,0,0.3);
}

.key-estop:active {
    transform: translateY(6px);
    box-shadow: 0 2px 0 #660000, 0 3px 10px rgba(255, 0, 0, 0.5);
}`
    },
    {
        id: 137,
        name: "Steampunk Gear Button",
        category: "buttons",
        tags: ["3d", "keyboard", "steampunk", "gear"],
        html: `<button class="key-steampunk">
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1 0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66z"/>
    </svg>
</button>`,
        css: `.key-steampunk {
    width: 70px;
    height: 70px;
    background: linear-gradient(145deg, #cd7f32, #8b4513);
    border: 4px solid #654321;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #2a1810;
    box-shadow: 0 6px 0 #3d2817, 0 8px 20px rgba(0,0,0,0.5),
        inset 0 2px 0 rgba(255,215,0,0.3),
        inset 0 -3px 8px rgba(0,0,0,0.3);
    transition: all 0.3s ease;
}

.key-steampunk svg {
    width: 35px;
    height: 35px;
    transition: transform 0.5s ease;
}

.key-steampunk:hover svg {
    transform: rotate(90deg);
}

.key-steampunk:active {
    transform: translateY(5px);
    box-shadow: 0 1px 0 #3d2817, 0 2px 10px rgba(0,0,0,0.5);
}

.key-steampunk:active svg {
    transform: rotate(180deg);
}`
    },
    {
        id: 138,
        name: "Sci-Fi Hologram Button",
        category: "buttons",
        tags: ["3d", "keyboard", "scifi", "hologram"],
        html: `<button class="key-hologram">
    <span class="glow"></span>
    <span class="text">ACTIVATE</span>
</button>`,
        css: `.key-hologram {
    position: relative;
    padding: 15px 35px;
    background: transparent;
    border: 2px solid rgba(0, 255, 255, 0.5);
    border-radius: 5px;
    cursor: pointer;
    overflow: hidden;
}

.key-hologram .glow {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, 
        transparent 0%,
        rgba(0, 255, 255, 0.1) 50%,
        transparent 100%);
    animation: hologram-scan 2s linear infinite;
}

@keyframes hologram-scan {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100%); }
}

.key-hologram .text {
    position: relative;
    z-index: 2;
    color: #0ff;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 4px;
    text-shadow: 0 0 10px #0ff, 0 0 20px #0ff;
}

.key-hologram:hover {
    border-color: #0ff;
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.3),
        inset 0 0 20px rgba(0, 255, 255, 0.1);
}

.key-hologram:active {
    background: rgba(0, 255, 255, 0.2);
}`
    },
    {
        id: 139,
        name: "Synthwave Button",
        category: "buttons",
        tags: ["3d", "keyboard", "synthwave", "retro"],
        html: `<button class="key-synthwave">PLAY</button>`,
        css: `.key-synthwave {
    padding: 15px 40px;
    background: linear-gradient(180deg, #1a1a2e 0%, #16213e 100%);
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 4px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    box-shadow: 0 6px 0 #0f0f1a, 
        0 0 20px rgba(255, 0, 128, 0.3),
        0 0 40px rgba(0, 255, 255, 0.2);
    transition: all 0.1s ease;
}

.key-synthwave::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 5px;
    padding: 2px;
    background: linear-gradient(135deg, #ff0080, #00ffff);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
}

.key-synthwave:hover {
    box-shadow: 0 6px 0 #0f0f1a,
        0 0 30px rgba(255, 0, 128, 0.5),
        0 0 60px rgba(0, 255, 255, 0.3);
}

.key-synthwave:active {
    transform: translateY(5px);
    box-shadow: 0 1px 0 #0f0f1a,
        0 0 20px rgba(255, 0, 128, 0.3);
}`
    },
    {
        id: 140,
        name: "Vaporwave Key",
        category: "buttons",
        tags: ["3d", "keyboard", "vaporwave", "aesthetic"],
        html: `<button class="key-vapor">夢</button>`,
        css: `.key-vapor {
    width: 60px;
    height: 60px;
    background: linear-gradient(145deg, #ff71ce, #01cdfe);
    color: #fff;
    font-size: 24px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    text-shadow: 2px 2px 0 #b967ff;
    box-shadow: 0 6px 0 #7b2cbf, 
        0 8px 20px rgba(255, 113, 206, 0.4),
        inset 0 2px 0 rgba(255,255,255,0.3);
    transition: all 0.1s ease;
}

.key-vapor:hover {
    box-shadow: 0 6px 0 #7b2cbf,
        0 8px 30px rgba(255, 113, 206, 0.6);
}

.key-vapor:active {
    transform: translateY(5px);
    box-shadow: 0 1px 0 #7b2cbf,
        0 2px 10px rgba(255, 113, 206, 0.4);
}`
    },
    {
        id: 141,
        name: "Pixel Art Button",
        category: "buttons",
        tags: ["3d", "keyboard", "pixel", "retro"],
        html: `<button class="key-pixel">START</button>`,
        css: `.key-pixel {
    padding: 12px 25px;
    background: #4a4a4a;
    color: #fff;
    font-family: 'Courier New', monospace;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 2px;
    border: none;
    cursor: pointer;
    image-rendering: pixelated;
    box-shadow: 
        4px 0 0 #2a2a2a,
        -4px 0 0 #2a2a2a,
        0 4px 0 #2a2a2a,
        0 -4px 0 #2a2a2a,
        4px 4px 0 #1a1a1a,
        -4px 4px 0 #1a1a1a,
        4px -4px 0 #6a6a6a,
        -4px -4px 0 #6a6a6a;
    transition: all 0.05s ease;
}

.key-pixel:hover {
    background: #5a5a5a;
}

.key-pixel:active {
    transform: translate(2px, 2px);
    box-shadow: 
        2px 0 0 #2a2a2a,
        -2px 0 0 #2a2a2a,
        0 2px 0 #2a2a2a,
        0 -2px 0 #2a2a2a;
}`
    },
    {
        id: 142,
        name: "8-Bit Controller Button",
        category: "buttons",
        tags: ["3d", "keyboard", "8bit", "gaming"],
        html: `<button class="key-8bit">A</button>`,
        css: `.key-8bit {
    width: 45px;
    height: 45px;
    background: #cc0000;
    color: #fff;
    font-family: 'Courier New', monospace;
    font-size: 16px;
    font-weight: 900;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 
        0 6px 0 #990000,
        3px 0 0 #ff3333,
        -3px 0 0 #990000,
        0 -3px 0 #ff3333,
        inset 0 -3px 0 rgba(0,0,0,0.2);
    transition: all 0.05s ease;
}

.key-8bit:active {
    transform: translateY(4px);
    box-shadow: 
        0 2px 0 #990000,
        2px 0 0 #ff3333,
        -2px 0 0 #990000;
}`
    },
    {
        id: 143,
        name: "Jukebox Button",
        category: "buttons",
        tags: ["3d", "keyboard", "jukebox", "music"],
        html: `<button class="key-jukebox">
    <span>A1</span>
</button>`,
        css: `.key-jukebox {
    width: 50px;
    height: 40px;
    background: linear-gradient(145deg, #ffd700, #daa520);
    border: 3px solid #b8860b;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 5px 0 #8b6914, 0 7px 15px rgba(0,0,0,0.3),
        inset 0 2px 0 rgba(255,255,255,0.5);
    transition: all 0.1s ease;
}

.key-jukebox span {
    color: #4a3000;
    font-size: 14px;
    font-weight: 800;
}

.key-jukebox:hover {
    background: linear-gradient(145deg, #ffe44d, #ffd700);
}

.key-jukebox:active {
    transform: translateY(4px);
    box-shadow: 0 1px 0 #8b6914, 0 2px 5px rgba(0,0,0,0.3);
    background: linear-gradient(145deg, #ff6b6b, #ee5a5a);
}

.key-jukebox:active span {
    color: #fff;
}`
    },
    {
        id: 144,
        name: "Pinball Flipper Button",
        category: "buttons",
        tags: ["3d", "keyboard", "pinball", "arcade"],
        html: `<button class="key-flipper">FLIP</button>`,
        css: `.key-flipper {
    padding: 20px 40px;
    background: radial-gradient(ellipse at 30% 30%, #ff0000, #aa0000);
    color: #fff;
    font-size: 14px;
    font-weight: 900;
    letter-spacing: 2px;
    border: 4px solid #660000;
    border-radius: 30px;
    cursor: pointer;
    box-shadow: 0 8px 0 #440000, 0 10px 25px rgba(0,0,0,0.5),
        inset 0 3px 0 rgba(255,255,255,0.3),
        inset 0 -5px 10px rgba(0,0,0,0.2);
    transition: all 0.05s ease;
}

.key-flipper:hover {
    box-shadow: 0 8px 0 #440000, 0 10px 35px rgba(255,0,0,0.4),
        inset 0 3px 0 rgba(255,255,255,0.3);
}

.key-flipper:active {
    transform: translateY(6px);
    box-shadow: 0 2px 0 #440000, 0 3px 10px rgba(0,0,0,0.5);
}`
    },
    {
        id: 145,
        name: "Slot Machine Button",
        category: "buttons",
        tags: ["3d", "keyboard", "slot", "casino"],
        html: `<button class="key-slot">
    <span class="lever"></span>
    SPIN
</button>`,
        css: `.key-slot {
    position: relative;
    padding: 15px 35px;
    background: linear-gradient(145deg, #c41e3a, #8b0000);
    color: #ffd700;
    font-size: 16px;
    font-weight: 900;
    letter-spacing: 3px;
    border: 4px solid #ffd700;
    border-radius: 12px;
    cursor: pointer;
    box-shadow: 0 8px 0 #5c0000, 0 10px 25px rgba(0,0,0,0.5),
        inset 0 2px 0 rgba(255,255,255,0.2);
    transition: all 0.1s ease;
}

.key-slot .lever {
    position: absolute;
    right: -15px;
    top: 50%;
    transform: translateY(-50%);
    width: 10px;
    height: 30px;
    background: linear-gradient(90deg, #888, #ccc, #888);
    border-radius: 5px;
    transition: transform 0.2s;
}

.key-slot .lever::after {
    content: '';
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 16px;
    height: 16px;
    background: radial-gradient(circle, #ff0000, #aa0000);
    border-radius: 50%;
    border: 2px solid #ffd700;
}

.key-slot:active {
    transform: translateY(6px);
    box-shadow: 0 2px 0 #5c0000, 0 3px 10px rgba(0,0,0,0.5);
}

.key-slot:active .lever {
    transform: translateY(-50%) rotate(45deg);
}`
    },
    {
        id: 146,
        name: "Turbo Button",
        category: "buttons",
        tags: ["3d", "keyboard", "turbo", "gaming"],
        html: `<button class="key-turbo">TURBO</button>`,
        css: `.key-turbo {
    padding: 12px 30px;
    background: linear-gradient(145deg, #1a1a1a, #0a0a0a);
    color: #00ff00;
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 3px;
    border: 2px solid #00ff00;
    border-radius: 6px;
    cursor: pointer;
    box-shadow: 0 5px 0 #001a00, 
        0 0 15px rgba(0, 255, 0, 0.3),
        inset 0 0 10px rgba(0, 255, 0, 0.1);
    text-shadow: 0 0 10px #00ff00;
    transition: all 0.1s ease;
    animation: turbo-pulse 0.5s ease-in-out infinite alternate;
}

@keyframes turbo-pulse {
    from { box-shadow: 0 5px 0 #001a00, 0 0 15px rgba(0, 255, 0, 0.3); }
    to { box-shadow: 0 5px 0 #001a00, 0 0 25px rgba(0, 255, 0, 0.6); }
}

.key-turbo:active {
    transform: translateY(4px);
    box-shadow: 0 1px 0 #001a00, 0 0 30px rgba(0, 255, 0, 0.8);
    animation: none;
}`
    },
    {
        id: 147,
        name: "DJ Pad Button",
        category: "buttons",
        tags: ["3d", "keyboard", "dj", "music"],
        html: `<button class="key-dj-pad"></button>`,
        css: `.key-dj-pad {
    width: 60px;
    height: 60px;
    background: linear-gradient(145deg, #2a2a2a, #1a1a1a);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 5px 0 #0a0a0a, 0 7px 15px rgba(0,0,0,0.5),
        inset 0 1px 0 rgba(255,255,255,0.1);
    transition: all 0.05s ease;
}

.key-dj-pad:hover {
    background: linear-gradient(145deg, #8b5cf6, #7c3aed);
    box-shadow: 0 5px 0 #5b21b6, 0 7px 20px rgba(139, 92, 246, 0.4);
}

.key-dj-pad:active {
    transform: translateY(4px);
    box-shadow: 0 1px 0 #5b21b6, 0 2px 10px rgba(139, 92, 246, 0.6);
    background: linear-gradient(145deg, #a78bfa, #8b5cf6);
}`
    },
    {
        id: 148,
        name: "Launchpad Button",
        category: "buttons",
        tags: ["3d", "keyboard", "launchpad", "music"],
        html: `<button class="key-launchpad"></button>`,
        css: `.key-launchpad {
    width: 50px;
    height: 50px;
    background: rgba(30, 30, 30, 0.9);
    border: 1px solid #333;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 0 3px 0 #111, inset 0 0 20px rgba(0,0,0,0.5);
    transition: all 0.05s ease;
}

.key-launchpad:nth-child(4n+1):hover { background: #ef4444; box-shadow: 0 0 20px rgba(239, 68, 68, 0.6); }
.key-launchpad:nth-child(4n+2):hover { background: #22c55e; box-shadow: 0 0 20px rgba(34, 197, 94, 0.6); }
.key-launchpad:nth-child(4n+3):hover { background: #3b82f6; box-shadow: 0 0 20px rgba(59, 130, 246, 0.6); }
.key-launchpad:nth-child(4n):hover { background: #f59e0b; box-shadow: 0 0 20px rgba(245, 158, 11, 0.6); }

.key-launchpad:active {
    transform: translateY(2px) scale(0.95);
    box-shadow: 0 1px 0 #111;
}`
    },
    {
        id: 149,
        name: "Drum Machine Pad",
        category: "buttons",
        tags: ["3d", "keyboard", "drum", "music"],
        html: `<button class="key-drum">
    <span>KICK</span>
</button>`,
        css: `.key-drum {
    width: 70px;
    height: 70px;
    background: linear-gradient(145deg, #333, #222);
    border: 2px solid #444;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 8px;
    box-shadow: 0 5px 0 #111, 0 7px 15px rgba(0,0,0,0.4),
        inset 0 1px 0 rgba(255,255,255,0.1);
    transition: all 0.05s ease;
}

.key-drum span {
    color: #888;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1px;
}

.key-drum:hover {
    border-color: #f97316;
}

.key-drum:active {
    transform: translateY(4px);
    box-shadow: 0 1px 0 #111, 0 2px 5px rgba(0,0,0,0.4);
    background: linear-gradient(145deg, #f97316, #ea580c);
    border-color: #c2410c;
}

.key-drum:active span {
    color: #fff;
}`
    },
    {
        id: 150,
        name: "Mixer Fader Button",
        category: "buttons",
        tags: ["3d", "keyboard", "mixer", "music"],
        html: `<button class="key-fader">
    <span class="track"></span>
    <span class="knob"></span>
</button>`,
        css: `.key-fader {
    position: relative;
    width: 40px;
    height: 120px;
    background: linear-gradient(90deg, #1a1a1a, #2a2a2a, #1a1a1a);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 0;
}

.key-fader .track {
    position: absolute;
    left: 50%;
    top: 10px;
    bottom: 10px;
    width: 4px;
    transform: translateX(-50%);
    background: linear-gradient(180deg, #22c55e, #eab308, #ef4444);
    border-radius: 2px;
}

.key-fader .knob {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 30px;
    height: 20px;
    background: linear-gradient(145deg, #555, #333);
    border-radius: 3px;
    box-shadow: 0 3px 0 #222, 
        inset 0 1px 0 rgba(255,255,255,0.2);
    transition: top 0.1s ease;
}

.key-fader:active .knob {
    top: 70%;
    box-shadow: 0 1px 0 #222;
}`
    }
];
