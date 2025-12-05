/* ============================================
   Keyboard & 3D Style Components - Part 3
   ============================================ */

const keyboardComponents3 = [
    {
        id: 151,
        name: "Touch ID Button",
        category: "buttons",
        tags: ["3d", "keyboard", "mac", "biometric"],
        html: `<button class="key-touchid">
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z"/>
    </svg>
</button>`,
        css: `.key-touchid {
    width: 65px;
    height: 45px;
    background: linear-gradient(145deg, #2a2a2a, #1a1a1a);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    box-shadow: 0 4px 0 #0a0a0a, 0 6px 12px rgba(0,0,0,0.4),
        inset 0 1px 0 rgba(255,255,255,0.1);
    transition: all 0.1s ease;
}

.key-touchid svg {
    width: 24px;
    height: 24px;
}

.key-touchid:hover {
    color: #22c55e;
}

.key-touchid:active {
    transform: translateY(3px);
    box-shadow: 0 1px 0 #0a0a0a, 0 2px 5px rgba(0,0,0,0.4);
    color: #22c55e;
    box-shadow: 0 1px 0 #0a0a0a, 0 0 15px rgba(34, 197, 94, 0.4);
}`
    },
    {
        id: 152,
        name: "Face ID Button",
        category: "buttons",
        tags: ["3d", "keyboard", "ios", "biometric"],
        html: `<button class="key-faceid">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M4 8V6a2 2 0 012-2h2M4 16v2a2 2 0 002 2h2M16 4h2a2 2 0 012 2v2M16 20h2a2 2 0 002-2v-2"/>
        <circle cx="9" cy="10" r="1" fill="currentColor"/>
        <circle cx="15" cy="10" r="1" fill="currentColor"/>
        <path d="M9 15c.83.67 2.17.67 3 .67s2.17 0 3-.67"/>
    </svg>
</button>`,
        css: `.key-faceid {
    width: 60px;
    height: 60px;
    background: linear-gradient(145deg, #1a1a1a, #0f0f0f);
    border: 2px solid #333;
    border-radius: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    box-shadow: 0 5px 0 #000, 0 7px 15px rgba(0,0,0,0.5),
        inset 0 1px 0 rgba(255,255,255,0.05);
    transition: all 0.15s ease;
}

.key-faceid svg {
    width: 30px;
    height: 30px;
}

.key-faceid:hover {
    color: #3b82f6;
    border-color: #3b82f6;
}

.key-faceid:active {
    transform: translateY(4px);
    box-shadow: 0 1px 0 #000, 0 2px 5px rgba(0,0,0,0.5);
}`
    },
    {
        id: 153,
        name: "Numpad Enter Key",
        category: "buttons",
        tags: ["3d", "keyboard", "numpad", "key"],
        html: `<button class="key-numpad-enter">
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7h-2z"/>
    </svg>
</button>`,
        css: `.key-numpad-enter {
    width: 55px;
    height: 95px;
    background: linear-gradient(145deg, #333, #222);
    border: none;
    border-radius: 7px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #888;
    box-shadow: 0 5px 0 #111, 0 7px 12px rgba(0,0,0,0.4),
        inset 0 1px 0 rgba(255,255,255,0.1);
    transition: all 0.1s ease;
}

.key-numpad-enter svg {
    width: 20px;
    height: 20px;
}

.key-numpad-enter:hover {
    background: linear-gradient(145deg, #3b82f6, #2563eb);
    color: #fff;
}

.key-numpad-enter:active {
    transform: translateY(4px);
    box-shadow: 0 1px 0 #111, 0 2px 5px rgba(0,0,0,0.4);
}`
    },
    {
        id: 154,
        name: "Numeric Plus Key",
        category: "buttons",
        tags: ["3d", "keyboard", "numpad", "operator"],
        html: `<button class="key-numpad-plus">+</button>`,
        css: `.key-numpad-plus {
    width: 55px;
    height: 95px;
    background: linear-gradient(145deg, #444, #333);
    color: #ccc;
    font-size: 24px;
    font-weight: 300;
    border: none;
    border-radius: 7px;
    cursor: pointer;
    box-shadow: 0 5px 0 #1a1a1a, 0 7px 12px rgba(0,0,0,0.4),
        inset 0 1px 0 rgba(255,255,255,0.15);
    transition: all 0.1s ease;
}

.key-numpad-plus:hover {
    color: #fff;
}

.key-numpad-plus:active {
    transform: translateY(4px);
    box-shadow: 0 1px 0 #1a1a1a, 0 2px 5px rgba(0,0,0,0.4);
}`
    },
    {
        id: 155,
        name: "Lock Key",
        category: "buttons",
        tags: ["3d", "keyboard", "lock", "security"],
        html: `<button class="key-lock">
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
    </svg>
</button>`,
        css: `.key-lock {
    width: 50px;
    height: 50px;
    background: linear-gradient(145deg, #333, #222);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    box-shadow: 0 5px 0 #111, 0 7px 12px rgba(0,0,0,0.4),
        inset 0 1px 0 rgba(255,255,255,0.1);
    transition: all 0.2s ease;
}

.key-lock svg {
    width: 22px;
    height: 22px;
    transition: transform 0.2s;
}

.key-lock:hover {
    color: #fbbf24;
}

.key-lock:active {
    transform: translateY(4px);
    box-shadow: 0 1px 0 #111, 0 2px 5px rgba(0,0,0,0.4);
    color: #22c55e;
}

.key-lock:active svg {
    transform: scale(1.1);
}`
    },
    {
        id: 156,
        name: "Home Key",
        category: "buttons",
        tags: ["3d", "keyboard", "home", "navigation"],
        html: `<button class="key-home">
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    </svg>
</button>`,
        css: `.key-home {
    width: 45px;
    height: 45px;
    background: linear-gradient(145deg, #333, #222);
    border: none;
    border-radius: 7px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #888;
    box-shadow: 0 4px 0 #111, 0 6px 10px rgba(0,0,0,0.4),
        inset 0 1px 0 rgba(255,255,255,0.1);
    transition: all 0.1s ease;
}

.key-home svg {
    width: 18px;
    height: 18px;
}

.key-home:hover {
    color: #fff;
}

.key-home:active {
    transform: translateY(3px);
    box-shadow: 0 1px 0 #111, 0 2px 4px rgba(0,0,0,0.4);
}`
    },
    {
        id: 157,
        name: "End Key",
        category: "buttons",
        tags: ["3d", "keyboard", "end", "navigation"],
        html: `<button class="key-end">End</button>`,
        css: `.key-end {
    width: 45px;
    height: 35px;
    background: linear-gradient(145deg, #2a2a2a, #1f1f1f);
    color: #888;
    font-size: 10px;
    font-weight: 500;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 4px 0 #0a0a0a, 0 5px 10px rgba(0,0,0,0.4),
        inset 0 1px 0 rgba(255,255,255,0.1);
    transition: all 0.1s ease;
}

.key-end:hover {
    color: #fff;
}

.key-end:active {
    transform: translateY(3px);
    box-shadow: 0 1px 0 #0a0a0a, 0 2px 4px rgba(0,0,0,0.4);
}`
    },
    {
        id: 158,
        name: "Page Up Key",
        category: "buttons",
        tags: ["3d", "keyboard", "pageup", "navigation"],
        html: `<button class="key-pageup">
    <span>Pg</span>
    <span>Up</span>
</button>`,
        css: `.key-pageup {
    width: 45px;
    height: 35px;
    background: linear-gradient(145deg, #2a2a2a, #1f1f1f);
    color: #888;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 0 #0a0a0a, 0 5px 10px rgba(0,0,0,0.4),
        inset 0 1px 0 rgba(255,255,255,0.1);
    transition: all 0.1s ease;
}

.key-pageup span {
    font-size: 8px;
    font-weight: 500;
    line-height: 1.2;
}

.key-pageup:hover {
    color: #fff;
}

.key-pageup:active {
    transform: translateY(3px);
    box-shadow: 0 1px 0 #0a0a0a, 0 2px 4px rgba(0,0,0,0.4);
}`
    },
    {
        id: 159,
        name: "Insert Key",
        category: "buttons",
        tags: ["3d", "keyboard", "insert", "editing"],
        html: `<button class="key-insert">Ins</button>`,
        css: `.key-insert {
    width: 45px;
    height: 35px;
    background: linear-gradient(145deg, #2a2a2a, #1f1f1f);
    color: #888;
    font-size: 10px;
    font-weight: 500;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 4px 0 #0a0a0a, 0 5px 10px rgba(0,0,0,0.4),
        inset 0 1px 0 rgba(255,255,255,0.1);
    transition: all 0.1s ease;
}

.key-insert:hover {
    color: #fff;
    background: linear-gradient(145deg, #f59e0b, #d97706);
}

.key-insert:active {
    transform: translateY(3px);
    box-shadow: 0 1px 0 #0a0a0a, 0 2px 4px rgba(0,0,0,0.4);
}`
    },
    {
        id: 160,
        name: "Print Screen Key",
        category: "buttons",
        tags: ["3d", "keyboard", "printscreen", "utility"],
        html: `<button class="key-prtsc">
    <span>Prt</span>
    <span>Sc</span>
</button>`,
        css: `.key-prtsc {
    width: 45px;
    height: 35px;
    background: linear-gradient(145deg, #2a2a2a, #1f1f1f);
    color: #888;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 0 #0a0a0a, 0 5px 10px rgba(0,0,0,0.4),
        inset 0 1px 0 rgba(255,255,255,0.1);
    transition: all 0.15s ease;
}

.key-prtsc span {
    font-size: 8px;
    font-weight: 500;
    line-height: 1.2;
}

.key-prtsc:hover {
    color: #fff;
}

.key-prtsc:active {
    transform: translateY(3px);
    box-shadow: 0 1px 0 #0a0a0a, 0 2px 4px rgba(0,0,0,0.4);
    background: linear-gradient(145deg, #22c55e, #16a34a);
}`
    },
    {
        id: 161,
        name: "Scroll Lock Key",
        category: "buttons",
        tags: ["3d", "keyboard", "scrolllock", "toggle"],
        html: `<button class="key-scrolllock">
    <span class="led"></span>
    <span>Scroll</span>
</button>`,
        css: `.key-scrolllock {
    width: 45px;
    height: 35px;
    background: linear-gradient(145deg, #2a2a2a, #1f1f1f);
    color: #888;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 4px;
    box-shadow: 0 4px 0 #0a0a0a, 0 5px 10px rgba(0,0,0,0.4),
        inset 0 1px 0 rgba(255,255,255,0.1);
    transition: all 0.1s ease;
}

.key-scrolllock .led {
    width: 5px;
    height: 5px;
    background: #333;
    border-radius: 50%;
    transition: all 0.2s;
}

.key-scrolllock span:last-child {
    font-size: 7px;
    font-weight: 500;
}

.key-scrolllock.active .led,
.key-scrolllock:focus .led {
    background: #22c55e;
    box-shadow: 0 0 6px #22c55e;
}

.key-scrolllock:active {
    transform: translateY(3px);
    box-shadow: 0 1px 0 #0a0a0a, 0 2px 4px rgba(0,0,0,0.4);
}`
    },
    {
        id: 162,
        name: "Pause Break Key",
        category: "buttons",
        tags: ["3d", "keyboard", "pause", "utility"],
        html: `<button class="key-pause">
    <span>Pause</span>
    <span>Break</span>
</button>`,
        css: `.key-pause {
    width: 45px;
    height: 35px;
    background: linear-gradient(145deg, #2a2a2a, #1f1f1f);
    color: #888;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 0 #0a0a0a, 0 5px 10px rgba(0,0,0,0.4),
        inset 0 1px 0 rgba(255,255,255,0.1);
    transition: all 0.1s ease;
}

.key-pause span {
    font-size: 7px;
    font-weight: 500;
    line-height: 1.3;
}

.key-pause:hover {
    color: #ef4444;
}

.key-pause:active {
    transform: translateY(3px);
    box-shadow: 0 1px 0 #0a0a0a, 0 2px 4px rgba(0,0,0,0.4);
}`
    },
    {
        id: 163,
        name: "Backquote Key",
        category: "buttons",
        tags: ["3d", "keyboard", "symbol", "key"],
        html: `<button class="key-backquote">
    <span>~</span>
    <span>\`</span>
</button>`,
        css: `.key-backquote {
    width: 45px;
    height: 45px;
    background: linear-gradient(145deg, #2a2a2a, #1f1f1f);
    color: #ddd;
    border: none;
    border-radius: 7px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
    box-shadow: 0 5px 0 #111, 0 7px 12px rgba(0,0,0,0.4),
        inset 0 1px 0 rgba(255,255,255,0.1);
    transition: all 0.1s ease;
}

.key-backquote span:first-child {
    font-size: 10px;
    color: #888;
}

.key-backquote span:last-child {
    font-size: 14px;
}

.key-backquote:active {
    transform: translateY(4px);
    box-shadow: 0 1px 0 #111, 0 2px 5px rgba(0,0,0,0.4);
}`
    },
    {
        id: 164,
        name: "Bracket Key",
        category: "buttons",
        tags: ["3d", "keyboard", "symbol", "key"],
        html: `<button class="key-bracket">
    <span>{</span>
    <span>[</span>
</button>`,
        css: `.key-bracket {
    width: 45px;
    height: 45px;
    background: linear-gradient(145deg, #2a2a2a, #1f1f1f);
    color: #ddd;
    border: none;
    border-radius: 7px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
    box-shadow: 0 5px 0 #111, 0 7px 12px rgba(0,0,0,0.4),
        inset 0 1px 0 rgba(255,255,255,0.1);
    transition: all 0.1s ease;
}

.key-bracket span:first-child {
    font-size: 10px;
    color: #888;
}

.key-bracket span:last-child {
    font-size: 14px;
}

.key-bracket:active {
    transform: translateY(4px);
    box-shadow: 0 1px 0 #111, 0 2px 5px rgba(0,0,0,0.4);
}`
    },
    {
        id: 165,
        name: "Backslash Key",
        category: "buttons",
        tags: ["3d", "keyboard", "symbol", "key"],
        html: `<button class="key-backslash">
    <span>|</span>
    <span>\\</span>
</button>`,
        css: `.key-backslash {
    width: 45px;
    height: 45px;
    background: linear-gradient(145deg, #2a2a2a, #1f1f1f);
    color: #ddd;
    border: none;
    border-radius: 7px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
    box-shadow: 0 5px 0 #111, 0 7px 12px rgba(0,0,0,0.4),
        inset 0 1px 0 rgba(255,255,255,0.1);
    transition: all 0.1s ease;
}

.key-backslash span:first-child {
    font-size: 10px;
    color: #888;
}

.key-backslash span:last-child {
    font-size: 14px;
}

.key-backslash:active {
    transform: translateY(4px);
    box-shadow: 0 1px 0 #111, 0 2px 5px rgba(0,0,0,0.4);
}`
    },
    {
        id: 166,
        name: "Semicolon Key",
        category: "buttons",
        tags: ["3d", "keyboard", "symbol", "key"],
        html: `<button class="key-semicolon">
    <span>:</span>
    <span>;</span>
</button>`,
        css: `.key-semicolon {
    width: 45px;
    height: 45px;
    background: linear-gradient(145deg, #2a2a2a, #1f1f1f);
    color: #ddd;
    border: none;
    border-radius: 7px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
    box-shadow: 0 5px 0 #111, 0 7px 12px rgba(0,0,0,0.4),
        inset 0 1px 0 rgba(255,255,255,0.1);
    transition: all 0.1s ease;
}

.key-semicolon span:first-child {
    font-size: 10px;
    color: #888;
}

.key-semicolon span:last-child {
    font-size: 14px;
}

.key-semicolon:active {
    transform: translateY(4px);
    box-shadow: 0 1px 0 #111, 0 2px 5px rgba(0,0,0,0.4);
}`
    },
    {
        id: 167,
        name: "Quote Key",
        category: "buttons",
        tags: ["3d", "keyboard", "symbol", "key"],
        html: `<button class="key-quote">
    <span>"</span>
    <span>'</span>
</button>`,
        css: `.key-quote {
    width: 45px;
    height: 45px;
    background: linear-gradient(145deg, #2a2a2a, #1f1f1f);
    color: #ddd;
    border: none;
    border-radius: 7px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
    box-shadow: 0 5px 0 #111, 0 7px 12px rgba(0,0,0,0.4),
        inset 0 1px 0 rgba(255,255,255,0.1);
    transition: all 0.1s ease;
}

.key-quote span:first-child {
    font-size: 10px;
    color: #888;
}

.key-quote span:last-child {
    font-size: 14px;
}

.key-quote:active {
    transform: translateY(4px);
    box-shadow: 0 1px 0 #111, 0 2px 5px rgba(0,0,0,0.4);
}`
    },
    {
        id: 168,
        name: "Comma Key",
        category: "buttons",
        tags: ["3d", "keyboard", "symbol", "key"],
        html: `<button class="key-comma">
    <span><</span>
    <span>,</span>
</button>`,
        css: `.key-comma {
    width: 45px;
    height: 45px;
    background: linear-gradient(145deg, #2a2a2a, #1f1f1f);
    color: #ddd;
    border: none;
    border-radius: 7px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
    box-shadow: 0 5px 0 #111, 0 7px 12px rgba(0,0,0,0.4),
        inset 0 1px 0 rgba(255,255,255,0.1);
    transition: all 0.1s ease;
}

.key-comma span:first-child {
    font-size: 10px;
    color: #888;
}

.key-comma span:last-child {
    font-size: 14px;
}

.key-comma:active {
    transform: translateY(4px);
    box-shadow: 0 1px 0 #111, 0 2px 5px rgba(0,0,0,0.4);
}`
    },
    {
        id: 169,
        name: "Period Key",
        category: "buttons",
        tags: ["3d", "keyboard", "symbol", "key"],
        html: `<button class="key-period">
    <span>></span>
    <span>.</span>
</button>`,
        css: `.key-period {
    width: 45px;
    height: 45px;
    background: linear-gradient(145deg, #2a2a2a, #1f1f1f);
    color: #ddd;
    border: none;
    border-radius: 7px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
    box-shadow: 0 5px 0 #111, 0 7px 12px rgba(0,0,0,0.4),
        inset 0 1px 0 rgba(255,255,255,0.1);
    transition: all 0.1s ease;
}

.key-period span:first-child {
    font-size: 10px;
    color: #888;
}

.key-period span:last-child {
    font-size: 14px;
}

.key-period:active {
    transform: translateY(4px);
    box-shadow: 0 1px 0 #111, 0 2px 5px rgba(0,0,0,0.4);
}`
    },
    {
        id: 170,
        name: "Slash Key",
        category: "buttons",
        tags: ["3d", "keyboard", "symbol", "key"],
        html: `<button class="key-slash">
    <span>?</span>
    <span>/</span>
</button>`,
        css: `.key-slash {
    width: 45px;
    height: 45px;
    background: linear-gradient(145deg, #2a2a2a, #1f1f1f);
    color: #ddd;
    border: none;
    border-radius: 7px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
    box-shadow: 0 5px 0 #111, 0 7px 12px rgba(0,0,0,0.4),
        inset 0 1px 0 rgba(255,255,255,0.1);
    transition: all 0.1s ease;
}

.key-slash span:first-child {
    font-size: 10px;
    color: #888;
}

.key-slash span:last-child {
    font-size: 14px;
}

.key-slash:active {
    transform: translateY(4px);
    box-shadow: 0 1px 0 #111, 0 2px 5px rgba(0,0,0,0.4);
}`
    },
    {
        id: 171,
        name: "Backspace Key",
        category: "buttons",
        tags: ["3d", "keyboard", "backspace", "key"],
        html: `<button class="key-backspace">
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"/>
    </svg>
    <span>delete</span>
</button>`,
        css: `.key-backspace {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    width: 85px;
    height: 45px;
    padding: 8px 10px;
    background: linear-gradient(145deg, #333, #222);
    color: #888;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 5px 0 #111, 0 7px 12px rgba(0,0,0,0.5),
        inset 0 1px 0 rgba(255,255,255,0.1);
    transition: all 0.1s ease;
}

.key-backspace svg {
    width: 14px;
    height: 14px;
}

.key-backspace span {
    font-size: 10px;
}

.key-backspace:hover {
    color: #fff;
}

.key-backspace:active {
    transform: translateY(4px);
    box-shadow: 0 1px 0 #111, 0 2px 5px rgba(0,0,0,0.5);
}`
    },
    {
        id: 172,
        name: "Globe/Fn Key",
        category: "buttons",
        tags: ["3d", "keyboard", "mac", "function"],
        html: `<button class="key-globe">
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
    </svg>
</button>`,
        css: `.key-globe {
    width: 45px;
    height: 45px;
    background: linear-gradient(145deg, #333, #222);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #888;
    box-shadow: 0 5px 0 #111, 0 7px 12px rgba(0,0,0,0.5),
        inset 0 1px 0 rgba(255,255,255,0.1);
    transition: all 0.1s ease;
}

.key-globe svg {
    width: 18px;
    height: 18px;
}

.key-globe:hover {
    color: #fff;
}

.key-globe:active {
    transform: translateY(4px);
    box-shadow: 0 1px 0 #111, 0 2px 5px rgba(0,0,0,0.5);
}`
    },
    {
        id: 173,
        name: "Eject Key",
        category: "buttons",
        tags: ["3d", "keyboard", "mac", "media"],
        html: `<button class="key-eject">
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 5l-8 9h16l-8-9zm-8 11v2h16v-2H4z"/>
    </svg>
</button>`,
        css: `.key-eject {
    width: 45px;
    height: 35px;
    background: linear-gradient(145deg, #2a2a2a, #1a1a1a);
    border: none;
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    box-shadow: 0 4px 0 #0a0a0a, 0 5px 10px rgba(0,0,0,0.4),
        inset 0 1px 0 rgba(255,255,255,0.08);
    transition: all 0.1s ease;
}

.key-eject svg {
    width: 16px;
    height: 16px;
}

.key-eject:hover {
    color: #fff;
}

.key-eject:active {
    transform: translateY(3px);
    box-shadow: 0 1px 0 #0a0a0a, 0 2px 4px rgba(0,0,0,0.4);
}`
    },
    {
        id: 174,
        name: "Mission Control Key",
        category: "buttons",
        tags: ["3d", "keyboard", "mac", "system"],
        html: `<button class="key-mission">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="3" y="3" width="7" height="7"/>
        <rect x="14" y="3" width="7" height="7"/>
        <rect x="3" y="14" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/>
    </svg>
</button>`,
        css: `.key-mission {
    width: 38px;
    height: 25px;
    background: linear-gradient(145deg, #1a1a1a, #111);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    box-shadow: 0 3px 0 #000, 0 4px 8px rgba(0,0,0,0.5),
        inset 0 1px 0 rgba(255,255,255,0.05);
    transition: all 0.1s ease;
}

.key-mission svg {
    width: 12px;
    height: 12px;
}

.key-mission:hover {
    color: #8b5cf6;
}

.key-mission:active {
    transform: translateY(2px);
    box-shadow: 0 1px 0 #000, 0 2px 4px rgba(0,0,0,0.5);
}`
    },
    {
        id: 175,
        name: "Launchpad Key",
        category: "buttons",
        tags: ["3d", "keyboard", "mac", "system"],
        html: `<button class="key-launchpad-mac">
    <svg viewBox="0 0 24 24" fill="currentColor">
        <circle cx="6" cy="6" r="2"/>
        <circle cx="12" cy="6" r="2"/>
        <circle cx="18" cy="6" r="2"/>
        <circle cx="6" cy="12" r="2"/>
        <circle cx="12" cy="12" r="2"/>
        <circle cx="18" cy="12" r="2"/>
        <circle cx="6" cy="18" r="2"/>
        <circle cx="12" cy="18" r="2"/>
        <circle cx="18" cy="18" r="2"/>
    </svg>
</button>`,
        css: `.key-launchpad-mac {
    width: 38px;
    height: 25px;
    background: linear-gradient(145deg, #1a1a1a, #111);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    box-shadow: 0 3px 0 #000, 0 4px 8px rgba(0,0,0,0.5),
        inset 0 1px 0 rgba(255,255,255,0.05);
    transition: all 0.1s ease;
}

.key-launchpad-mac svg {
    width: 12px;
    height: 12px;
}

.key-launchpad-mac:hover {
    color: #3b82f6;
}

.key-launchpad-mac:active {
    transform: translateY(2px);
    box-shadow: 0 1px 0 #000, 0 2px 4px rgba(0,0,0,0.5);
}`
    }
];
