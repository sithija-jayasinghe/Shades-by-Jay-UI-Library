/* ============================================
   Keyboard & 3D Style Components
   ============================================ */

const keyboardComponents = [
    {
        id: 101,
        name: "Command Key",
        category: "buttons",
        tags: ["3d", "keyboard", "mac", "key"],
        html: `<button class="key-command">
    <svg viewBox="0 0 80 80" fill="#ffffff">
        <path d="M64,48h-8V32h8c8.836,0,16-7.164,16-16S72.836,0,64,0c-8.837,0-16,7.164-16,16v8H32v-8c0-8.836-7.164-16-16-16S0,7.164,0,16s7.164,16,16,16h8v16h-8C7.164,48,0,55.164,0,64s7.164,16,16,16c8.837,0,16-7.164,16-16v-8h16v7.98c0,8.836,7.164,16,16,16s16-7.164,16-16S72.836,48,64,48z M64,8c4.418,0,8,3.582,8,8s-3.582,8-8,8h-8v-8C56,11.582,59.582,8,64,8z M8,16c0-4.418,3.582-8,8-8s8,3.582,8,8v8h-8C11.582,24,8,20.417,8,16z M16,72c-4.418,0-8-3.582-8-8s3.582-8,8-8h8v8C24,68.418,20.418,72,16,72z M32,48V32h16v16H32z M64,72c-4.418,0-8-3.582-8-8v-8h8c4.418,0,8,3.582,8,8S68.418,72,64,72z"/>
    </svg>
    <span>command</span>
</button>`,
        css: `.key-command {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    background-color: #000;
    color: #fff;
    font-size: 13px;
    border: 0.5px solid rgba(0, 0, 0, 0.1);
    height: 65px;
    padding: 12px;
    border-radius: 15px 15px 12px 12px;
    cursor: pointer;
    position: relative;
    transition: all .1s ease-in-out;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)),
        linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
    box-shadow: inset -4px -10px 0px rgba(255, 255, 255, 0.4),
        inset -4px -8px 0px rgba(0, 0, 0, 0.3),
        0px 2px 1px rgba(0, 0, 0, 0.3),
        0px 2px 1px rgba(255, 255, 255, 0.1);
    transform: perspective(70px) rotateX(5deg) rotateY(0deg);
}

.key-command svg {
    width: 15px;
    height: 15px;
}

.key-command:active {
    transform: perspective(80px) rotateX(5deg) rotateY(1deg) translateY(3px) scale(0.96);
    height: 62px;
    box-shadow: inset -4px -8px 0px rgba(255, 255, 255, 0.2),
        inset -4px -6px 0px rgba(0, 0, 0, 0.8),
        0px 1px 0px rgba(0, 0, 0, 0.9);
}`
    },
    {
        id: 102,
        name: "Escape Key",
        category: "buttons",
        tags: ["3d", "keyboard", "key", "minimal"],
        html: `<button class="key-escape">esc</button>`,
        css: `.key-escape {
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(145deg, #2a2a2a, #1a1a1a);
    color: #888;
    font-size: 11px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    width: 50px;
    height: 35px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    box-shadow: 0 4px 0 #0a0a0a, 0 6px 10px rgba(0,0,0,0.4),
        inset 0 1px 0 rgba(255,255,255,0.1);
    transform: translateY(0);
    transition: all 0.1s ease;
}

.key-escape:active {
    transform: translateY(3px);
    box-shadow: 0 1px 0 #0a0a0a, 0 2px 5px rgba(0,0,0,0.4),
        inset 0 1px 0 rgba(255,255,255,0.1);
}`
    },
    {
        id: 103,
        name: "Enter Key",
        category: "buttons",
        tags: ["3d", "keyboard", "key", "action"],
        html: `<button class="key-enter">
    <span>return</span>
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7h-2z"/>
    </svg>
</button>`,
        css: `.key-enter {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    background: linear-gradient(145deg, #3b82f6, #2563eb);
    color: white;
    font-size: 11px;
    font-weight: 500;
    width: 80px;
    height: 65px;
    padding: 10px 12px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0 6px 0 #1d4ed8, 0 8px 15px rgba(37, 99, 235, 0.4),
        inset 0 1px 0 rgba(255,255,255,0.2);
    transform: translateY(0);
    transition: all 0.1s ease;
}

.key-enter svg {
    width: 18px;
    height: 18px;
}

.key-enter:active {
    transform: translateY(4px);
    box-shadow: 0 2px 0 #1d4ed8, 0 3px 8px rgba(37, 99, 235, 0.4),
        inset 0 1px 0 rgba(255,255,255,0.2);
}`
    },
    {
        id: 104,
        name: "Shift Key",
        category: "buttons",
        tags: ["3d", "keyboard", "key", "modifier"],
        html: `<button class="key-shift">
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
    </svg>
    <span>shift</span>
</button>`,
        css: `.key-shift {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    background: linear-gradient(145deg, #333, #222);
    color: #aaa;
    font-size: 11px;
    width: 90px;
    height: 50px;
    padding: 8px 12px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 5px 0 #111, 0 7px 12px rgba(0,0,0,0.5),
        inset 0 1px 0 rgba(255,255,255,0.1);
    transform: translateY(0);
    transition: all 0.1s ease;
}

.key-shift svg {
    width: 14px;
    height: 14px;
}

.key-shift:active {
    transform: translateY(4px);
    box-shadow: 0 1px 0 #111, 0 2px 5px rgba(0,0,0,0.5);
    background: linear-gradient(145deg, #444, #333);
}`
    },
    {
        id: 105,
        name: "Space Bar",
        category: "buttons",
        tags: ["3d", "keyboard", "key", "wide"],
        html: `<button class="key-space"></button>`,
        css: `.key-space {
    width: 200px;
    height: 45px;
    background: linear-gradient(145deg, #2a2a2a, #1f1f1f);
    border: none;
    border-radius: 6px;
    cursor: pointer;
    box-shadow: 0 5px 0 #111, 0 7px 15px rgba(0,0,0,0.4),
        inset 0 1px 0 rgba(255,255,255,0.08),
        inset 0 -2px 5px rgba(0,0,0,0.3);
    transform: translateY(0);
    transition: all 0.1s ease;
}

.key-space:active {
    transform: translateY(4px);
    box-shadow: 0 1px 0 #111, 0 2px 5px rgba(0,0,0,0.4),
        inset 0 1px 0 rgba(255,255,255,0.08);
}`
    },
    {
        id: 106,
        name: "Delete Key",
        category: "buttons",
        tags: ["3d", "keyboard", "key", "danger"],
        html: `<button class="key-delete">
    <span>delete</span>
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z"/>
    </svg>
</button>`,
        css: `.key-delete {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    background: linear-gradient(145deg, #333, #222);
    color: #888;
    font-size: 10px;
    width: 70px;
    height: 50px;
    padding: 8px 10px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 5px 0 #111, 0 7px 12px rgba(0,0,0,0.5),
        inset 0 1px 0 rgba(255,255,255,0.1);
    transition: all 0.1s ease;
}

.key-delete svg {
    width: 16px;
    height: 16px;
}

.key-delete:hover {
    background: linear-gradient(145deg, #ef4444, #dc2626);
    color: white;
}

.key-delete:active {
    transform: translateY(4px);
    box-shadow: 0 1px 0 #111, 0 2px 5px rgba(0,0,0,0.5);
}`
    },
    {
        id: 107,
        name: "Tab Key",
        category: "buttons",
        tags: ["3d", "keyboard", "key"],
        html: `<button class="key-tab">
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.59 7.41L15.17 11H1v2h14.17l-3.59 3.59L13 18l6-6-6-6-1.41 1.41zM20 6v12h2V6h-2z"/>
    </svg>
    <span>tab</span>
</button>`,
        css: `.key-tab {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    background: linear-gradient(145deg, #333, #222);
    color: #888;
    font-size: 11px;
    width: 65px;
    height: 50px;
    padding: 8px 10px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 5px 0 #111, 0 7px 12px rgba(0,0,0,0.5),
        inset 0 1px 0 rgba(255,255,255,0.1);
    transition: all 0.1s ease;
}

.key-tab svg {
    width: 14px;
    height: 14px;
}

.key-tab:active {
    transform: translateY(4px);
    box-shadow: 0 1px 0 #111, 0 2px 5px rgba(0,0,0,0.5);
}`
    },
    {
        id: 108,
        name: "Caps Lock Key",
        category: "buttons",
        tags: ["3d", "keyboard", "key", "toggle"],
        html: `<button class="key-caps">
    <span class="indicator"></span>
    <span>caps lock</span>
</button>`,
        css: `.key-caps {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    background: linear-gradient(145deg, #333, #222);
    color: #888;
    font-size: 10px;
    width: 75px;
    height: 50px;
    padding: 8px 10px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 5px 0 #111, 0 7px 12px rgba(0,0,0,0.5),
        inset 0 1px 0 rgba(255,255,255,0.1);
    transition: all 0.1s ease;
}

.key-caps .indicator {
    width: 6px;
    height: 6px;
    background: #444;
    border-radius: 50%;
    transition: all 0.2s;
}

.key-caps:focus .indicator,
.key-caps.active .indicator {
    background: #22c55e;
    box-shadow: 0 0 8px #22c55e;
}

.key-caps:active {
    transform: translateY(4px);
    box-shadow: 0 1px 0 #111, 0 2px 5px rgba(0,0,0,0.5);
}`
    },
    {
        id: 109,
        name: "Arrow Up Key",
        category: "buttons",
        tags: ["3d", "keyboard", "key", "arrow"],
        html: `<button class="key-arrow-up">
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
    </svg>
</button>`,
        css: `.key-arrow-up {
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(145deg, #333, #222);
    color: #888;
    width: 40px;
    height: 30px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 4px 0 #111, 0 5px 10px rgba(0,0,0,0.4),
        inset 0 1px 0 rgba(255,255,255,0.1);
    transition: all 0.1s ease;
}

.key-arrow-up svg {
    width: 16px;
    height: 16px;
}

.key-arrow-up:hover {
    color: white;
}

.key-arrow-up:active {
    transform: translateY(3px);
    box-shadow: 0 1px 0 #111, 0 2px 4px rgba(0,0,0,0.4);
}`
    },
    {
        id: 110,
        name: "Option/Alt Key",
        category: "buttons",
        tags: ["3d", "keyboard", "key", "mac"],
        html: `<button class="key-option">
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M15 5h6v2h-6zM9 5H3v2h4.85l6.92 12H21v-2h-5.07z"/>
    </svg>
    <span>option</span>
</button>`,
        css: `.key-option {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    background: linear-gradient(145deg, #333, #222);
    color: #888;
    font-size: 10px;
    width: 55px;
    height: 50px;
    padding: 8px 10px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 5px 0 #111, 0 7px 12px rgba(0,0,0,0.5),
        inset 0 1px 0 rgba(255,255,255,0.1);
    transition: all 0.1s ease;
}

.key-option svg {
    width: 12px;
    height: 12px;
}

.key-option:active {
    transform: translateY(4px);
    box-shadow: 0 1px 0 #111, 0 2px 5px rgba(0,0,0,0.5);
}`
    },
    {
        id: 111,
        name: "Control Key",
        category: "buttons",
        tags: ["3d", "keyboard", "key", "modifier"],
        html: `<button class="key-control">
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.23 20.23L8 22l4-4 4 4 1.77-1.77L12 14z"/>
    </svg>
    <span>control</span>
</button>`,
        css: `.key-control {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    background: linear-gradient(145deg, #333, #222);
    color: #888;
    font-size: 10px;
    width: 60px;
    height: 50px;
    padding: 8px 10px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 5px 0 #111, 0 7px 12px rgba(0,0,0,0.5),
        inset 0 1px 0 rgba(255,255,255,0.1);
    transition: all 0.1s ease;
}

.key-control svg {
    width: 12px;
    height: 12px;
}

.key-control:active {
    transform: translateY(4px);
    box-shadow: 0 1px 0 #111, 0 2px 5px rgba(0,0,0,0.5);
}`
    },
    {
        id: 112,
        name: "Function Key F1",
        category: "buttons",
        tags: ["3d", "keyboard", "key", "function"],
        html: `<button class="key-fn">F1</button>`,
        css: `.key-fn {
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(145deg, #2a2a2a, #1a1a1a);
    color: #666;
    font-size: 10px;
    font-weight: 600;
    width: 38px;
    height: 25px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 0 3px 0 #0a0a0a, 0 4px 8px rgba(0,0,0,0.4),
        inset 0 1px 0 rgba(255,255,255,0.08);
    transition: all 0.1s ease;
}

.key-fn:hover {
    color: #fff;
    background: linear-gradient(145deg, #3b82f6, #2563eb);
}

.key-fn:active {
    transform: translateY(2px);
    box-shadow: 0 1px 0 #0a0a0a, 0 2px 4px rgba(0,0,0,0.4);
}`
    },
    {
        id: 113,
        name: "Play/Pause Media Key",
        category: "buttons",
        tags: ["3d", "keyboard", "key", "media"],
        html: `<button class="key-media-play">
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z"/>
    </svg>
</button>`,
        css: `.key-media-play {
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(145deg, #1a1a1a, #111);
    color: #666;
    width: 38px;
    height: 25px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 0 3px 0 #000, 0 4px 8px rgba(0,0,0,0.5),
        inset 0 1px 0 rgba(255,255,255,0.05);
    transition: all 0.15s ease;
}

.key-media-play svg {
    width: 12px;
    height: 12px;
    transition: transform 0.2s;
}

.key-media-play:hover {
    color: #1DB954;
}

.key-media-play:hover svg {
    transform: scale(1.2);
}

.key-media-play:active {
    transform: translateY(2px);
    box-shadow: 0 1px 0 #000, 0 2px 4px rgba(0,0,0,0.5);
}`
    },
    {
        id: 114,
        name: "Brightness Key",
        category: "buttons",
        tags: ["3d", "keyboard", "key", "brightness"],
        html: `<button class="key-brightness">
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>
    </svg>
</button>`,
        css: `.key-brightness {
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(145deg, #1a1a1a, #111);
    color: #666;
    width: 38px;
    height: 25px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 0 3px 0 #000, 0 4px 8px rgba(0,0,0,0.5),
        inset 0 1px 0 rgba(255,255,255,0.05);
    transition: all 0.15s ease;
}

.key-brightness svg {
    width: 14px;
    height: 14px;
}

.key-brightness:hover {
    color: #fbbf24;
    box-shadow: 0 3px 0 #000, 0 4px 15px rgba(251, 191, 36, 0.2);
}

.key-brightness:active {
    transform: translateY(2px);
    box-shadow: 0 1px 0 #000, 0 2px 4px rgba(0,0,0,0.5);
}`
    },
    {
        id: 115,
        name: "Volume Key",
        category: "buttons",
        tags: ["3d", "keyboard", "key", "volume"],
        html: `<button class="key-volume">
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
    </svg>
</button>`,
        css: `.key-volume {
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(145deg, #1a1a1a, #111);
    color: #666;
    width: 38px;
    height: 25px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 0 3px 0 #000, 0 4px 8px rgba(0,0,0,0.5),
        inset 0 1px 0 rgba(255,255,255,0.05);
    transition: all 0.15s ease;
}

.key-volume svg {
    width: 14px;
    height: 14px;
}

.key-volume:hover {
    color: #3b82f6;
}

.key-volume:active {
    transform: translateY(2px);
    box-shadow: 0 1px 0 #000, 0 2px 4px rgba(0,0,0,0.5);
}`
    },
    {
        id: 116,
        name: "Letter Key A",
        category: "buttons",
        tags: ["3d", "keyboard", "key", "letter"],
        html: `<button class="key-letter">A</button>`,
        css: `.key-letter {
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(145deg, #2a2a2a, #1f1f1f);
    color: #ddd;
    font-size: 14px;
    font-weight: 500;
    width: 45px;
    height: 45px;
    border: none;
    border-radius: 7px;
    cursor: pointer;
    box-shadow: 0 5px 0 #111, 0 7px 12px rgba(0,0,0,0.4),
        inset 0 1px 0 rgba(255,255,255,0.1);
    transition: all 0.1s ease;
}

.key-letter:hover {
    background: linear-gradient(145deg, #333, #282828);
    color: #fff;
}

.key-letter:active {
    transform: translateY(4px);
    box-shadow: 0 1px 0 #111, 0 2px 5px rgba(0,0,0,0.4);
    background: linear-gradient(145deg, #3b82f6, #2563eb);
}`
    },
    {
        id: 117,
        name: "Number Key",
        category: "buttons",
        tags: ["3d", "keyboard", "key", "number"],
        html: `<button class="key-number">
    <span class="symbol">!</span>
    <span class="num">1</span>
</button>`,
        css: `.key-number {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
    background: linear-gradient(145deg, #2a2a2a, #1f1f1f);
    color: #ddd;
    width: 45px;
    height: 45px;
    border: none;
    border-radius: 7px;
    cursor: pointer;
    box-shadow: 0 5px 0 #111, 0 7px 12px rgba(0,0,0,0.4),
        inset 0 1px 0 rgba(255,255,255,0.1);
    transition: all 0.1s ease;
}

.key-number .symbol {
    font-size: 10px;
    color: #888;
}

.key-number .num {
    font-size: 14px;
    font-weight: 500;
}

.key-number:active {
    transform: translateY(4px);
    box-shadow: 0 1px 0 #111, 0 2px 5px rgba(0,0,0,0.4);
}`
    },
    {
        id: 118,
        name: "Windows Key",
        category: "buttons",
        tags: ["3d", "keyboard", "key", "windows"],
        html: `<button class="key-windows">
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 12V6.75l6-1.32v6.48L3 12zm17-9v8.75l-10 .15V5.21L20 3zM3 13l6 .1v6.35l-6-1.17V13zm7 .25L20 13v8.75l-10-1.55V13.25z"/>
    </svg>
</button>`,
        css: `.key-windows {
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(145deg, #333, #222);
    color: #888;
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 5px 0 #111, 0 7px 12px rgba(0,0,0,0.5),
        inset 0 1px 0 rgba(255,255,255,0.1);
    transition: all 0.1s ease;
}

.key-windows svg {
    width: 18px;
    height: 18px;
}

.key-windows:hover {
    color: #00a4ef;
}

.key-windows:active {
    transform: translateY(4px);
    box-shadow: 0 1px 0 #111, 0 2px 5px rgba(0,0,0,0.5);
}`
    },
    {
        id: 119,
        name: "Power Button 3D",
        category: "buttons",
        tags: ["3d", "keyboard", "power", "toggle"],
        html: `<button class="key-power-3d">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 2v10M18.4 6.6a9 9 0 1 1-12.8 0"/>
    </svg>
</button>`,
        css: `.key-power-3d {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    background: linear-gradient(145deg, #1a1a1a, #0f0f0f);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    color: #444;
    box-shadow: 0 6px 0 #000, 0 8px 20px rgba(0,0,0,0.6),
        inset 0 2px 0 rgba(255,255,255,0.05),
        inset 0 -2px 5px rgba(0,0,0,0.5);
    transition: all 0.15s ease;
}

.key-power-3d svg {
    width: 24px;
    height: 24px;
}

.key-power-3d:hover {
    color: #22c55e;
    box-shadow: 0 6px 0 #000, 0 8px 25px rgba(34, 197, 94, 0.2),
        inset 0 2px 0 rgba(255,255,255,0.05);
}

.key-power-3d:active {
    transform: translateY(5px);
    box-shadow: 0 1px 0 #000, 0 2px 10px rgba(0,0,0,0.6),
        inset 0 2px 5px rgba(0,0,0,0.5);
    color: #22c55e;
}`
    },
    {
        id: 120,
        name: "RGB Gaming Key",
        category: "buttons",
        tags: ["3d", "keyboard", "gaming", "rgb"],
        html: `<button class="key-rgb">W</button>`,
        css: `.key-rgb {
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(145deg, #1a1a1a, #111);
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    width: 50px;
    height: 50px;
    border: 2px solid transparent;
    border-radius: 8px;
    cursor: pointer;
    position: relative;
    box-shadow: 0 5px 0 #000, 0 7px 15px rgba(0,0,0,0.5),
        inset 0 1px 0 rgba(255,255,255,0.1);
    transition: all 0.1s ease;
    animation: rgb-glow 3s linear infinite;
}

@keyframes rgb-glow {
    0% { border-color: #ff0000; box-shadow: 0 5px 0 #000, 0 0 15px rgba(255,0,0,0.5); }
    33% { border-color: #00ff00; box-shadow: 0 5px 0 #000, 0 0 15px rgba(0,255,0,0.5); }
    66% { border-color: #0000ff; box-shadow: 0 5px 0 #000, 0 0 15px rgba(0,0,255,0.5); }
    100% { border-color: #ff0000; box-shadow: 0 5px 0 #000, 0 0 15px rgba(255,0,0,0.5); }
}

.key-rgb:active {
    transform: translateY(4px);
    box-shadow: 0 1px 0 #000;
}`
    },
    {
        id: 121,
        name: "Retro Typewriter Key",
        category: "buttons",
        tags: ["3d", "keyboard", "retro", "vintage"],
        html: `<button class="key-typewriter">Q</button>`,
        css: `.key-typewriter {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background: radial-gradient(ellipse at top, #f5f5dc, #d4c4a8);
    color: #2a2a2a;
    font-family: 'Courier New', monospace;
    font-size: 18px;
    font-weight: 700;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 6px 0 #8b7355, 0 8px 15px rgba(0,0,0,0.4),
        inset 0 2px 0 rgba(255,255,255,0.8),
        inset 0 -3px 5px rgba(0,0,0,0.1);
    transition: all 0.08s ease;
}

.key-typewriter:hover {
    background: radial-gradient(ellipse at top, #fff, #e5d5b9);
}

.key-typewriter:active {
    transform: translateY(5px);
    box-shadow: 0 1px 0 #8b7355, 0 2px 5px rgba(0,0,0,0.4),
        inset 0 2px 0 rgba(255,255,255,0.8);
}`
    },
    {
        id: 122,
        name: "Neon Arcade Button",
        category: "buttons",
        tags: ["3d", "keyboard", "arcade", "neon"],
        html: `<button class="key-arcade">START</button>`,
        css: `.key-arcade {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 30px;
    background: linear-gradient(180deg, #1a1a2e, #0f0f1a);
    color: #0ff;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 3px;
    border: 3px solid #0ff;
    border-radius: 10px;
    cursor: pointer;
    text-shadow: 0 0 10px #0ff;
    box-shadow: 0 8px 0 #0a0a15, 0 10px 20px rgba(0,255,255,0.3),
        inset 0 0 20px rgba(0,255,255,0.1);
    transition: all 0.1s ease;
}

.key-arcade:hover {
    box-shadow: 0 8px 0 #0a0a15, 0 10px 30px rgba(0,255,255,0.5),
        inset 0 0 30px rgba(0,255,255,0.2);
}

.key-arcade:active {
    transform: translateY(6px);
    box-shadow: 0 2px 0 #0a0a15, 0 3px 10px rgba(0,255,255,0.3),
        inset 0 0 20px rgba(0,255,255,0.1);
}`
    },
    {
        id: 123,
        name: "Calculator Button",
        category: "buttons",
        tags: ["3d", "keyboard", "calculator", "number"],
        html: `<button class="key-calc">7</button>`,
        css: `.key-calc {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 55px;
    height: 45px;
    background: linear-gradient(145deg, #4a4a4a, #3a3a3a);
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 4px 0 #2a2a2a, 0 5px 10px rgba(0,0,0,0.3),
        inset 0 1px 0 rgba(255,255,255,0.2);
    transition: all 0.1s ease;
}

.key-calc:hover {
    background: linear-gradient(145deg, #5a5a5a, #4a4a4a);
}

.key-calc:active {
    transform: translateY(3px);
    box-shadow: 0 1px 0 #2a2a2a, 0 2px 5px rgba(0,0,0,0.3);
}`
    },
    {
        id: 124,
        name: "Calculator Orange Button",
        category: "buttons",
        tags: ["3d", "keyboard", "calculator", "operator"],
        html: `<button class="key-calc-op">+</button>`,
        css: `.key-calc-op {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 55px;
    height: 45px;
    background: linear-gradient(145deg, #ff9500, #e68600);
    color: #fff;
    font-size: 24px;
    font-weight: 400;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 4px 0 #cc7700, 0 5px 10px rgba(255, 149, 0, 0.3),
        inset 0 1px 0 rgba(255,255,255,0.3);
    transition: all 0.1s ease;
}

.key-calc-op:hover {
    background: linear-gradient(145deg, #ffaa33, #ff9500);
}

.key-calc-op:active {
    transform: translateY(3px);
    box-shadow: 0 1px 0 #cc7700, 0 2px 5px rgba(255, 149, 0, 0.3);
}`
    },
    {
        id: 125,
        name: "Piano White Key",
        category: "buttons",
        tags: ["3d", "keyboard", "piano", "music"],
        html: `<button class="key-piano-white">C</button>`,
        css: `.key-piano-white {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 10px;
    width: 45px;
    height: 140px;
    background: linear-gradient(180deg, #fff 0%, #f0f0f0 90%, #ddd 100%);
    color: #888;
    font-size: 12px;
    font-weight: 500;
    border: 1px solid #ccc;
    border-radius: 0 0 5px 5px;
    cursor: pointer;
    box-shadow: 0 8px 0 #bbb, 0 10px 15px rgba(0,0,0,0.2),
        inset 0 -5px 10px rgba(0,0,0,0.05);
    transition: all 0.05s ease;
}

.key-piano-white:active {
    height: 135px;
    box-shadow: 0 3px 0 #bbb, 0 5px 8px rgba(0,0,0,0.2);
    background: linear-gradient(180deg, #f8f8f8 0%, #e8e8e8 90%, #d5d5d5 100%);
}`
    }
];
