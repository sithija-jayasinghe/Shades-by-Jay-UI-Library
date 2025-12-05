/* ============================================
   Switch/Toggle Components
   ============================================ */

const switchComponents = [
    {
        id: 254,
        name: "Cosmic Day/Night",
        category: "switches",
        tags: ["switch", "toggle", "animated", "complex", "space"],
        html: `<label class="theme-switch">
  <input class="theme-switch__checkbox" type="checkbox" />
  <div class="theme-switch__container">
    <div class="theme-switch__clouds"></div>
    <div class="theme-switch__stars-container">
      <svg fill="none" viewBox="0 0 144 55" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M135.831 3.00688C135.055 3.85027 134.111 4.29946 133 4.35447C134.111 4.40947 135.055 4.85867 135.831 5.71123C136.607 6.55462 136.996 7.56303 136.996 8.72727C136.996 7.95722 137.172 7.25134 137.525 6.59129C137.886 5.93124 138.372 5.39954 138.98 5.00535C139.598 4.60199 140.268 4.39114 141 4.35447C139.88 4.2903 138.936 3.85027 138.16 3.00688C137.384 2.16348 136.996 1.16425 136.996 0C136.996 1.16425 136.607 2.16348 135.831 3.00688ZM31 23.3545C32.1114 23.2995 33.0551 22.8503 33.8313 22.0069C34.6075 21.1635 34.9956 20.1642 34.9956 19C34.9956 20.1642 35.3837 21.1635 36.1599 22.0069C36.9361 22.8503 37.8798 23.2903 39 23.3545C38.2679 23.3911 37.5976 23.602 36.9802 24.0053C36.3716 24.3995 35.8864 24.9312 35.5248 25.5913C35.172 26.2513 34.9956 26.9572 34.9956 27.7273C34.9956 26.563 34.6075 25.5546 33.8313 24.7112C33.0551 23.8587 32.1114 23.4095 31 23.3545ZM0 36.3545C1.11136 36.2995 2.05513 35.8503 2.83131 35.0069C3.6075 34.1635 3.99559 33.1642 3.99559 32C3.99559 33.1642 4.38368 34.1635 5.15987 35.0069C5.93605 35.8503 6.87982 36.2903 8 36.3545C7.26792 36.3911 6.59757 36.602 5.98015 37.0053C5.37155 37.3995 4.88644 37.9312 4.52481 38.5913C4.172 39.2513 3.99559 39.9572 3.99559 40.7273C3.99559 39.563 3.6075 38.5546 2.83131 37.7112C2.05513 36.8587 1.11136 36.4095 0 36.3545ZM56.8313 24.0069C56.0551 24.8503 55.1114 25.2995 54 25.3545C55.1114 25.4095 56.0551 25.8587 56.8313 26.7112C57.6075 27.5546 57.9956 28.563 57.9956 29.7273C57.9956 28.9572 58.172 28.2513 58.5248 27.5913C58.8864 26.9312 59.3716 26.3995 59.9802 26.0053C60.5976 25.602 61.2679 25.3911 62 25.3545C60.8798 25.2903 59.9361 24.8503 59.1599 24.0069C58.3837 23.1635 57.9956 22.1642 57.9956 21C57.9956 22.1642 57.6075 23.1635 56.8313 24.0069ZM81 25.3545C82.1114 25.2995 83.0551 24.8503 83.8313 24.0069C84.6075 23.1635 84.9956 22.1642 84.9956 21C84.9956 22.1642 85.3837 23.1635 86.1599 24.0069C86.9361 24.8503 87.8798 25.2903 89 25.3545C88.2679 25.3911 87.5976 25.602 86.9802 26.0053C86.3716 26.3995 85.8864 26.9312 85.5248 27.5913C85.172 28.2513 84.9956 28.9572 84.9956 29.7273C84.9956 28.563 84.6075 27.5546 83.8313 26.7112C83.0551 25.8587 82.1114 25.4095 81 25.3545ZM136 36.3545C137.111 36.2995 138.055 35.8503 138.831 35.0069C139.607 34.1635 139.996 33.1642 139.996 32C139.996 33.1642 140.384 34.1635 141.16 35.0069C141.936 35.8503 142.88 36.2903 144 36.3545C143.268 36.3911 142.598 36.602 141.98 37.0053C141.372 37.3995 140.886 37.9312 140.525 38.5913C140.172 39.2513 139.996 39.9572 139.996 40.7273C139.996 39.563 139.607 38.5546 138.831 37.7112C138.055 36.8587 137.111 36.4095 136 36.3545ZM101.831 49.0069C101.055 49.8503 100.111 50.2995 99 50.3545C100.111 50.4095 101.055 50.8587 101.831 51.7112C102.607 52.5546 102.996 53.563 102.996 54.7273C102.996 53.9572 103.172 53.2513 103.525 52.5913C103.886 51.9312 104.372 51.3995 104.98 51.0053C105.598 50.602 106.268 50.3911 107 50.3545C105.88 50.2903 104.936 49.8503 104.16 49.0069C103.384 48.1635 102.996 47.1642 102.996 46C102.996 47.1642 102.607 48.1635 101.831 49.0069Z"
          clip-rule="evenodd"
          fill-rule="evenodd"
        ></path>
      </svg>
    </div>
    <div class="theme-switch__circle-container">
      <div class="theme-switch__sun-moon-container">
        <div class="theme-switch__moon">
          <div class="theme-switch__spot"></div>
          <div class="theme-switch__spot"></div>
          <div class="theme-switch__spot"></div>
        </div>
      </div>
    </div>
    <div class="theme-switch__shooting-star"></div>
    <div class="theme-switch__shooting-star-2"></div>
    <div class="theme-switch__meteor"></div>
    <div class="theme-switch__stars-cluster">
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
    </div>
    <div class="theme-switch__aurora"></div>
    <div class="theme-switch__comets">
      <div class="comet"></div>
      <div class="comet"></div>
    </div>
  </div>
</label>`,
        css: `.theme-switch {
  --toggle-size: 15px;
  --container-width: 5.625em;
  --container-height: 2.5em;
  --container-radius: 6.25em;
  --container-light-bg: #3d7eae;
  --container-night-bg: #1d1f2c;
  --circle-container-diameter: 3.375em;
  --sun-moon-diameter: 2.125em;
  --sun-bg: #ecca2f;
  --moon-bg: #c4c9d1;
  --spot-color: #959db1;
  --circle-container-offset: calc((var(--circle-container-diameter) - var(--container-height)) / 2 * -1);
  --stars-color: #fff;
  --clouds-color: #f3fdff;
  --back-clouds-color: #aacadf;
  --transition: 0.5s cubic-bezier(0, -0.02, 0.4, 1.25);
  --circle-transition: 0.3s cubic-bezier(0, -0.02, 0.35, 1.17);
}

.theme-switch, .theme-switch *, .theme-switch *::before, .theme-switch *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: var(--toggle-size);
}

.theme-switch__container {
  width: var(--container-width);
  height: var(--container-height);
  background-color: var(--container-light-bg);
  border-radius: var(--container-radius);
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0em -0.062em 0.062em rgba(0, 0, 0, 0.25), 0em 0.062em 0.125em rgba(255, 255, 255, 0.94);
  transition: var(--transition);
  position: relative;
  background-image: linear-gradient(to bottom, var(--container-light-bg) 0%, #5490c0 100%);
}

.theme-switch__container::before {
  content: "";
  position: absolute;
  z-index: 1;
  inset: 0;
  box-shadow: 0em 0.05em 0.187em rgba(0, 0, 0, 0.25) inset, 0em 0.05em 0.187em rgba(0, 0, 0, 0.25) inset;
  border-radius: var(--container-radius);
}

.theme-switch__checkbox {
  display: none;
}

.theme-switch__circle-container {
  width: var(--circle-container-diameter);
  height: var(--circle-container-diameter);
  background-color: rgba(255, 255, 255, 0.1);
  position: absolute;
  left: var(--circle-container-offset);
  top: var(--circle-container-offset);
  border-radius: var(--container-radius);
  box-shadow: inset 0 0 0 3.375em rgba(255, 255, 255, 0.1), inset 0 0 0 3.375em rgba(255, 255, 255, 0.1), 0 0 0 0.625em rgba(255, 255, 255, 0.1), 0 0 0 1.25em rgba(255, 255, 255, 0.1);
  display: flex;
  transition: var(--circle-transition);
  pointer-events: none;
}

.theme-switch__sun-moon-container {
  pointer-events: auto;
  position: relative;
  z-index: 2;
  width: var(--sun-moon-diameter);
  height: var(--sun-moon-diameter);
  margin: auto;
  border-radius: var(--container-radius);
  background-color: var(--sun-bg);
  box-shadow: 0.062em 0.062em 0.062em 0em rgba(254, 255, 239, 0.61) inset, 0em -0.062em 0.062em 0em #a1872a inset;
  filter: drop-shadow(0.062em 0.125em 0.125em rgba(0, 0, 0, 0.25)) drop-shadow(0em 0.062em 0.125em rgba(0, 0, 0, 0.25));
  overflow: hidden;
  transition: var(--transition);
  transform: scale(1);
}

.theme-switch__sun-moon-container:hover {
  transform: scale(1.1) rotate(5deg);
}

.theme-switch__moon {
  transform: translateX(100%);
  width: 100%;
  height: 100%;
  background-color: var(--moon-bg);
  border-radius: inherit;
  box-shadow: 0.062em 0.062em 0.062em 0em rgba(254, 255, 239, 0.61) inset, 0em -0.062em 0.062em 0em #969696 inset;
  transition: var(--transition);
  position: relative;
}

.theme-switch__moon:hover {
  transform: rotate(15deg);
}

.theme-switch__spot {
  position: absolute;
  top: 0.75em;
  left: 0.312em;
  width: 0.75em;
  height: 0.75em;
  border-radius: var(--container-radius);
  background-color: var(--spot-color);
  box-shadow: 0em 0.0312em 0.062em rgba(0, 0, 0, 0.25) inset;
  transition: background-color 0.3s ease;
}

.theme-switch__spot:nth-of-type(2) {
  width: 0.375em;
  height: 0.375em;
  top: 0.937em;
  left: 1.375em;
}

.theme-switch__spot:nth-last-of-type(3) {
  width: 0.25em;
  height: 0.25em;
  top: 0.312em;
  left: 0.812em;
}

.theme-switch__moon:hover .theme-switch__spot {
  background-color: #7a7f8c;
}

.theme-switch__clouds {
  width: 1.25em;
  height: 1.25em;
  background-color: var(--clouds-color);
  border-radius: var(--container-radius);
  position: absolute;
  bottom: -0.625em;
  left: 0.312em;
  box-shadow: 0.937em 0.312em var(--clouds-color), -0.312em -0.312em var(--back-clouds-color), 1.437em 0.375em var(--clouds-color), 0.5em -0.125em var(--back-clouds-color), 2.187em 0 var(--clouds-color), 1.25em -0.062em var(--back-clouds-color), 2.937em 0.312em var(--clouds-color), 2em -0.312em var(--back-clouds-color), 3.625em -0.062em var(--clouds-color), 2.625em 0em var(--back-clouds-color), 4.5em -0.312em var(--clouds-color), 3.375em -0.437em var(--back-clouds-color), 4.625em -1.75em 0 0.437em var(--clouds-color), 4em -0.625em var(--back-clouds-color), 4.125em -2.125em 0 0.437em var(--back-clouds-color);
  transition: 0.5s cubic-bezier(0, -0.02, 0.4, 1.25);
}

.theme-switch__stars-container {
  position: absolute;
  color: var(--stars-color);
  top: -100%;
  left: 0.312em;
  width: 2.75em;
  height: auto;
  transition: var(--transition);
}

.theme-switch__checkbox:checked + .theme-switch__container {
  background-color: var(--container-night-bg);
  background-image: linear-gradient(to bottom, var(--container-night-bg) 0%, #2d3142 100%);
}

.theme-switch__checkbox:checked + .theme-switch__container .theme-switch__circle-container {
  left: calc(100% - var(--circle-container-offset) - var(--circle-container-diameter));
}

.theme-switch__checkbox:checked + .theme-switch__container .theme-switch__circle-container:hover {
  left: calc(100% - var(--circle-container-offset) - var(--circle-container-diameter) - 0.187em);
}

.theme-switch__circle-container:hover {
  left: calc(var(--circle-container-offset) + 0.187em);
}

.theme-switch__checkbox:checked + .theme-switch__container .theme-switch__moon {
  transform: translate(0);
}

.theme-switch__checkbox:checked + .theme-switch__container .theme-switch__clouds {
  bottom: -4.062em;
}

.theme-switch__checkbox:checked + .theme-switch__container .theme-switch__stars-container {
  top: 50%;
  transform: translateY(-50%);
}

.theme-switch__container:hover .theme-switch__clouds {
  transform: translateX(15px) scale(1.02);
}

.theme-switch__sun-moon-container::after {
  content: "";
  position: absolute;
  inset: -5px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%);
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.theme-switch__sun-moon-container:hover::after {
  opacity: 1;
}

.theme-switch__shooting-star {
  position: absolute;
  width: 2px;
  height: 2px;
  background: white;
  top: 20%;
  left: -10%;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.theme-switch__shooting-star-2 {
  position: absolute;
  width: 1px;
  height: 1px;
  background: white;
  top: 35%;
  left: -10%;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.theme-switch__meteor {
  position: absolute;
  width: 3px;
  height: 3px;
  background: #ffd700;
  border-radius: 50%;
  top: -10%;
  left: 50%;
  opacity: 0;
  filter: blur(1px);
  transition: opacity 0.3s ease;
}

.theme-switch__checkbox:checked + .theme-switch__container .theme-switch__shooting-star {
  animation: shootingStar 2s linear infinite;
  opacity: 1;
}

.theme-switch__checkbox:checked + .theme-switch__container .theme-switch__shooting-star-2 {
  animation: shootingStar 3s linear infinite 1s;
  opacity: 1;
}

.theme-switch__checkbox:checked + .theme-switch__container .theme-switch__meteor {
  animation: meteor 4s linear infinite 2s;
  opacity: 1;
}

@keyframes shootingStar {
  0% { transform: translateX(0) translateY(0) rotate(45deg); opacity: 1; }
  100% { transform: translateX(150px) translateY(150px) rotate(45deg); opacity: 0; }
}

@keyframes meteor {
  0% { transform: translateY(0) scale(1); opacity: 1; }
  100% { transform: translateY(150px) scale(0.3); opacity: 0; }
}

.theme-switch__stars-cluster {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.theme-switch__stars-cluster .star {
  position: absolute;
  width: 2px;
  height: 2px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 0 4px 1px white;
}

.theme-switch__stars-cluster .star:nth-child(1) { top: 20%; left: 20%; animation: twinkle 1s infinite ease-in-out; }
.theme-switch__stars-cluster .star:nth-child(2) { top: 30%; left: 55%; animation: twinkle 1s infinite ease-in-out 0.3s; }
.theme-switch__stars-cluster .star:nth-child(3) { top: 40%; left: 80%; animation: twinkle 1s infinite ease-in-out 0.6s; }
.theme-switch__stars-cluster .star:nth-child(4) { top: 60%; left: 30%; animation: twinkle 1s infinite ease-in-out 0.9s; }
.theme-switch__stars-cluster .star:nth-child(5) { top: 70%; left: 65%; animation: twinkle 1s infinite ease-in-out 1.2s; }

.theme-switch__aurora {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 20px;
  background: linear-gradient(90deg, rgba(0, 255, 255, 0) 0%, rgba(0, 255, 255, 0.2) 25%, rgba(128, 0, 255, 0.2) 50%, rgba(0, 255, 255, 0.2) 75%, rgba(0, 255, 255, 0) 100%);
  opacity: 0;
  filter: blur(4px);
  transform: translateY(-100%);
  transition: opacity 0.3s ease;
}

.theme-switch__comets {
  position: absolute;
  inset: 0;
  overflow: hidden;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.theme-switch__comets .comet {
  position: absolute;
  width: 2px;
  height: 2px;
  background: linear-gradient(90deg, white 0%, transparent 90%);
  border-radius: 50%;
  filter: blur(1px);
}

.theme-switch__comets .comet:nth-child(1) { top: 30%; left: -10%; animation: cometMove 4s linear infinite; }
.theme-switch__comets .comet:nth-child(2) { top: 50%; left: -10%; animation: cometMove 6s linear infinite 2s; }

@keyframes twinkle {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
}

@keyframes cometMove {
  0% { transform: translateX(0) translateY(0) rotate(-45deg) scale(1); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateX(200px) translateY(200px) rotate(-45deg) scale(0.2); opacity: 0; }
}

.theme-switch__checkbox:checked + .theme-switch__container .theme-switch__stars-cluster { opacity: 1; }
.theme-switch__checkbox:checked + .theme-switch__container .theme-switch__aurora { opacity: 1; animation: auroraWave 8s linear infinite; }
.theme-switch__checkbox:checked + .theme-switch__container .theme-switch__comets { opacity: 1; }

@keyframes auroraWave {
  0% { transform: translateY(-100%) translateX(-50%); }
  100% { transform: translateY(-100%) translateX(50%); }
}`
    },
    {
        id: 255,
        name: "Neon Power",
        category: "switches",
        tags: ["switch", "neon", "glow", "power"],
        html: `<label class="switch-neon">
    <input type="checkbox">
    <div class="slider">
        <div class="icon">
            <i class="fas fa-power-off"></i>
        </div>
    </div>
</label>`,
        css: `.switch-neon {
    position: relative;
    display: inline-block;
    width: 80px;
    height: 40px;
}

.switch-neon input {
    opacity: 0;
    width: 0;
    height: 0;
}

.switch-neon .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #212121;
    transition: .4s;
    border-radius: 34px;
    box-shadow: inset 0 0 5px rgba(0,0,0,0.5);
}

.switch-neon .slider:before {
    position: absolute;
    content: "";
    height: 32px;
    width: 32px;
    left: 4px;
    bottom: 4px;
    background-color: #444;
    transition: .4s;
    border-radius: 50%;
    z-index: 2;
}

.switch-neon .icon {
    position: absolute;
    left: 4px;
    bottom: 4px;
    height: 32px;
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .4s;
    z-index: 3;
    color: #888;
    font-size: 14px;
}

.switch-neon input:checked + .slider {
    background-color: #1a1a1a;
}

.switch-neon input:checked + .slider:before {
    transform: translateX(40px);
    background-color: #fff;
    box-shadow: 0 0 10px #0ff, 0 0 20px #0ff;
}

.switch-neon input:checked + .slider .icon {
    transform: translateX(40px);
    color: #0ff;
    text-shadow: 0 0 5px #0ff;
}`
    },
    {
        id: 256,
        name: "Liquid Gooey",
        category: "switches",
        tags: ["switch", "liquid", "gooey", "animated"],
        html: `<label class="switch-liquid">
    <input type="checkbox">
    <span class="liquid-bg"></span>
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

.switch-liquid .liquid-bg {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: .4s;
    border-radius: 34px;
    overflow: hidden;
}

.switch-liquid .liquid-bg:before {
    position: absolute;
    content: "";
    height: 28px;
    width: 28px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
    z-index: 2;
}

.switch-liquid input:checked + .liquid-bg {
    background-color: #2196F3;
}

.switch-liquid input:checked + .liquid-bg:before {
    transform: translateX(34px);
    width: 34px; 
    border-radius: 14px;
    animation: liquid-bounce 0.4s ease-in-out;
}

@keyframes liquid-bounce {
    0% { width: 28px; border-radius: 50%; }
    50% { width: 45px; border-radius: 20px; }
    100% { width: 28px; border-radius: 50%; }
}`
    },
    {
        id: 257,
        name: "3D Flip",
        category: "switches",
        tags: ["switch", "3d", "flip", "perspective"],
        html: `<label class="switch-3d">
    <input type="checkbox">
    <div class="card-3d">
        <div class="face front">OFF</div>
        <div class="face back">ON</div>
    </div>
</label>`,
        css: `.switch-3d {
    position: relative;
    display: inline-block;
    width: 80px;
    height: 40px;
    perspective: 1000px;
}

.switch-3d input {
    display: none;
}

.switch-3d .card-3d {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.6s;
    cursor: pointer;
}

.switch-3d input:checked + .card-3d {
    transform: rotateX(180deg);
}

.switch-3d .face {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.2);
}

.switch-3d .front {
    background-color: #e74c3c;
    color: white;
}

.switch-3d .back {
    background-color: #2ecc71;
    color: white;
    transform: rotateX(180deg);
}`
    },
    {
        id: 258,
        name: "Cyberpunk Glitch",
        category: "switches",
        tags: ["switch", "cyberpunk", "glitch", "futuristic"],
        html: `<label class="switch-cyber">
    <input type="checkbox">
    <span class="cyber-slider"></span>
    <span class="cyber-glitch"></span>
</label>`,
        css: `.switch-cyber {
    position: relative;
    display: inline-block;
    width: 70px;
    height: 30px;
}

.switch-cyber input {
    opacity: 0;
    width: 0;
    height: 0;
}

.switch-cyber .cyber-slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #000;
    border: 2px solid #f0f;
    transition: .4s;
    clip-path: polygon(10% 0, 100% 0, 100% 80%, 90% 100%, 0 100%, 0 20%);
}

.switch-cyber .cyber-slider:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 4px;
    bottom: 3px;
    background-color: #f0f;
    transition: .4s;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}

.switch-cyber input:checked + .cyber-slider {
    border-color: #0ff;
}

.switch-cyber input:checked + .cyber-slider:before {
    transform: translateX(38px);
    background-color: #0ff;
}

.switch-cyber:hover .cyber-slider {
    box-shadow: 0 0 10px #f0f;
}

.switch-cyber input:checked:hover + .cyber-slider {
    box-shadow: 0 0 10px #0ff;
}`
    },
    {
        id: 259,
        name: "Minimal Line",
        category: "switches",
        tags: ["switch", "minimal", "line", "clean"],
        html: `<label class="switch-minimal">
    <input type="checkbox">
    <span class="line"></span>
    <span class="dot"></span>
</label>`,
        css: `.switch-minimal {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 30px;
    cursor: pointer;
}

.switch-minimal input {
    display: none;
}

.switch-minimal .line {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    background: #555;
    transform: translateY(-50%);
    transition: 0.3s;
}

.switch-minimal .dot {
    position: absolute;
    top: 50%;
    left: 0;
    width: 20px;
    height: 20px;
    background: #fff;
    border: 2px solid #555;
    border-radius: 50%;
    transform: translateY(-50%);
    transition: 0.3s;
}

.switch-minimal input:checked ~ .line {
    background: #2196F3;
}

.switch-minimal input:checked ~ .dot {
    left: 40px;
    border-color: #2196F3;
    background: #2196F3;
    box-shadow: 0 0 0 4px rgba(33, 150, 243, 0.2);
}`
    },
    {
        id: 260,
        name: "Emoji Slider",
        category: "switches",
        tags: ["switch", "emoji", "fun", "slider"],
        html: `<label class="switch-emoji">
    <input type="checkbox">
    <div class="emoji-slider">
        <div class="emoji-circle"></div>
    </div>
</label>`,
        css: `.switch-emoji {
    position: relative;
    display: inline-block;
    width: 70px;
    height: 36px;
}

.switch-emoji input {
    display: none;
}

.switch-emoji .emoji-slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #87CEEB;
    transition: .4s;
    border-radius: 34px;
}

.switch-emoji .emoji-circle {
    position: absolute;
    content: "";
    height: 28px;
    width: 28px;
    left: 4px;
    bottom: 4px;
    background-color: #FFD700;
    transition: .4s;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
}

.switch-emoji .emoji-circle:before {
    content: "☀️";
}

.switch-emoji input:checked + .emoji-slider {
    background-color: #2c3e50;
}

.switch-emoji input:checked + .emoji-slider .emoji-circle {
    transform: translateX(34px);
    background-color: #f1c40f;
}

.switch-emoji input:checked + .emoji-slider .emoji-circle:before {
    content: "🌙";
}`
    },
    {
        id: 261,
        name: "Retro Pixel",
        category: "switches",
        tags: ["switch", "retro", "pixel", "8bit"],
        html: `<label class="switch-pixel">
    <input type="checkbox">
    <span class="pixel-slider"></span>
</label>`,
        css: `.switch-pixel {
    position: relative;
    display: inline-block;
    width: 72px;
    height: 36px;
}

.switch-pixel input {
    display: none;
}

.switch-pixel .pixel-slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #b0b0b0;
    image-rendering: pixelated;
    box-shadow: 
        inset 4px 4px 0px 0px #ffffff,
        inset -4px -4px 0px 0px #808080;
}

.switch-pixel .pixel-slider:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 8px;
    bottom: 8px;
    background-color: #ff0000;
    transition: .2s steps(4);
    box-shadow: 
        inset 4px 4px 0px 0px #ff9999,
        inset -4px -4px 0px 0px #990000,
        4px 4px 0px 0px rgba(0,0,0,0.2);
}

.switch-pixel input:checked + .pixel-slider {
    background-color: #90EE90;
}

.switch-pixel input:checked + .pixel-slider:before {
    transform: translateX(36px);
    background-color: #008000;
    box-shadow: 
        inset 4px 4px 0px 0px #66cc66,
        inset -4px -4px 0px 0px #004d00,
        4px 4px 0px 0px rgba(0,0,0,0.2);
}`
    },
    {
        id: 262,
        name: "Neumorphic Press",
        category: "switches",
        tags: ["switch", "neumorphism", "soft", "ui"],
        html: `<label class="switch-neu">
    <input type="checkbox">
    <div class="neu-btn">
        <i class="fas fa-power-off"></i>
    </div>
</label>`,
        css: `.switch-neu {
    display: inline-block;
    cursor: pointer;
}

.switch-neu input {
    display: none;
}

.switch-neu .neu-btn {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #e0e5ec;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 
        9px 9px 16px rgb(163,177,198,0.6), 
        -9px -9px 16px rgba(255,255,255, 0.5);
    color: #a3b1c6;
    font-size: 24px;
    transition: 0.3s ease;
}

.switch-neu input:checked + .neu-btn {
    box-shadow: 
        inset 6px 6px 10px 0 rgba(163,177,198, 0.7), 
        inset -6px -6px 10px 0 rgba(255,255,255, 0.8);
    color: #6366f1;
    transform: scale(0.95);
}`
    },
    {
        id: 263,
        name: "Glassmorphic Slide",
        category: "switches",
        tags: ["switch", "glassmorphism", "glass", "blur"],
        html: `<label class="switch-glass">
    <input type="checkbox">
    <div class="glass-track">
        <div class="glass-knob"></div>
    </div>
</label>`,
        css: `.switch-glass {
    position: relative;
    display: inline-block;
    width: 80px;
    height: 40px;
}

.switch-glass input {
    display: none;
}

.switch-glass .glass-track {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 40px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transition: 0.4s;
}

.switch-glass .glass-knob {
    position: absolute;
    top: 4px;
    left: 4px;
    width: 32px;
    height: 32px;
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(4px);
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.3);
    transition: 0.4s;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.switch-glass input:checked + .glass-track {
    background: rgba(99, 102, 241, 0.2);
    border-color: rgba(99, 102, 241, 0.3);
}

.switch-glass input:checked + .glass-track .glass-knob {
    transform: translateX(40px);
    background: rgba(99, 102, 241, 0.6);
    border-color: rgba(99, 102, 241, 0.5);
}`
    },
    {
        id: 264,
        name: "Elastic Pull",
        category: "switches",
        tags: ["switch", "elastic", "animation", "bounce"],
        html: `<label class="switch-elastic">
    <input type="checkbox">
    <span class="elastic-slider"></span>
</label>`,
        css: `.switch-elastic {
    position: relative;
    display: inline-block;
    width: 70px;
    height: 36px;
}

.switch-elastic input {
    display: none;
}

.switch-elastic .elastic-slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: .4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    border-radius: 34px;
}

.switch-elastic .elastic-slider:before {
    position: absolute;
    content: "";
    height: 28px;
    width: 28px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    border-radius: 50%;
}

.switch-elastic input:checked + .elastic-slider {
    background-color: #FF4081;
}

.switch-elastic input:checked + .elastic-slider:before {
    transform: translateX(34px);
    width: 28px; 
}`
    },
    {
        id: 265,
        name: "Lightbulb Cord",
        category: "switches",
        tags: ["switch", "lightbulb", "cord", "creative"],
        html: `<label class="switch-bulb">
    <input type="checkbox">
    <div class="bulb-container">
        <div class="bulb"></div>
        <div class="cord"></div>
    </div>
</label>`,
        css: `.switch-bulb {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 80px;
    cursor: pointer;
}

.switch-bulb input {
    display: none;
}

.switch-bulb .bulb {
    width: 40px;
    height: 40px;
    background: #444;
    border-radius: 50%;
    margin: 0 auto;
    position: relative;
    transition: 0.3s;
    box-shadow: 0 0 0 rgba(255, 235, 59, 0);
}

.switch-bulb .bulb:after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 15px;
    background: #333;
    border-radius: 0 0 5px 5px;
}

.switch-bulb .cord {
    width: 2px;
    height: 30px;
    background: #666;
    margin: 0 auto;
    position: relative;
    top: 5px;
    transition: 0.2s;
}

.switch-bulb .cord:after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 8px;
    height: 8px;
    background: #888;
    border-radius: 50%;
}

.switch-bulb input:checked + .bulb-container .bulb {
    background: #FFEB3B;
    box-shadow: 0 0 20px #FFEB3B, 0 0 40px #FFEB3B;
}

.switch-bulb:active .cord {
    height: 40px;
}`
    },
    {
        id: 266,
        name: "Eye Blink",
        category: "switches",
        tags: ["switch", "eye", "blink", "darkmode"],
        html: `<label class="switch-eye">
    <input type="checkbox">
    <div class="eye">
        <div class="eyelid"></div>
        <div class="pupil"></div>
    </div>
</label>`,
        css: `.switch-eye {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 36px;
    cursor: pointer;
}

.switch-eye input {
    display: none;
}

.switch-eye .eye {
    width: 100%;
    height: 100%;
    background: #fff;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    border: 2px solid #333;
}

.switch-eye .pupil {
    width: 16px;
    height: 16px;
    background: #333;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.3s;
}

.switch-eye .eyelid {
    position: absolute;
    top: -100%;
    left: 0;
    width: 100%;
    height: 100%;
    background: #333;
    transition: 0.3s;
    z-index: 2;
}

.switch-eye input:checked + .eye .eyelid {
    top: 0;
}

.switch-eye input:checked + .eye .pupil {
    transform: translate(-50%, 20px);
}`
    },
    {
        id: 267,
        name: "Volume Knob",
        category: "switches",
        tags: ["switch", "knob", "rotate", "audio"],
        html: `<label class="switch-knob">
    <input type="checkbox">
    <div class="knob-base">
        <div class="knob-dial"></div>
        <div class="knob-indicator"></div>
    </div>
</label>`,
        css: `.switch-knob {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 60px;
}

.switch-knob input {
    display: none;
}

.switch-knob .knob-base {
    width: 100%;
    height: 100%;
    background: #e0e0e0;
    border-radius: 50%;
    position: relative;
    box-shadow: 
        inset 2px 2px 5px rgba(255,255,255,0.5),
        inset -2px -2px 5px rgba(0,0,0,0.1),
        5px 5px 10px rgba(0,0,0,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.switch-knob .knob-dial {
    width: 70%;
    height: 70%;
    background: #f5f5f5;
    border-radius: 50%;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.switch-knob .knob-indicator {
    position: absolute;
    top: 15%;
    width: 4px;
    height: 4px;
    background: #333;
    border-radius: 50%;
    transition: 0.4s;
}

.switch-knob input:checked + .knob-base .knob-dial {
    transform: rotate(180deg);
}

.switch-knob input:checked + .knob-base .knob-indicator {
    background: #2196F3;
    box-shadow: 0 0 5px #2196F3;
}`
    },
    {
        id: 268,
        name: "Paper Cutout",
        category: "switches",
        tags: ["switch", "paper", "cutout", "shadow"],
        html: `<label class="switch-paper">
    <input type="checkbox">
    <div class="paper-track">
        <div class="paper-thumb"></div>
    </div>
</label>`,
        css: `.switch-paper {
    position: relative;
    display: inline-block;
    width: 80px;
    height: 40px;
}

.switch-paper input {
    display: none;
}

.switch-paper .paper-track {
    width: 100%;
    height: 100%;
    background: #f0f0f0;
    border-radius: 20px;
    box-shadow: inset 2px 2px 5px rgba(0,0,0,0.1);
    position: relative;
    cursor: pointer;
    overflow: hidden;
}

.switch-paper .paper-thumb {
    position: absolute;
    top: 4px;
    left: 4px;
    width: 32px;
    height: 32px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
    transition: 0.4s;
}

.switch-paper input:checked + .paper-track {
    background: #4CAF50;
}

.switch-paper input:checked + .paper-track .paper-thumb {
    transform: translateX(40px);
    background: #fff;
}`
    },
    {
        id: 269,
        name: "Metallic Toggle",
        category: "switches",
        tags: ["switch", "metal", "industrial", "texture"],
        html: `<label class="switch-metal">
    <input type="checkbox">
    <div class="metal-plate">
        <div class="metal-lever"></div>
    </div>
</label>`,
        css: `.switch-metal {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 100px;
}

.switch-metal input {
    display: none;
}

.switch-metal .metal-plate {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #ccc, #999);
    border-radius: 10px;
    border: 2px solid #666;
    position: relative;
    box-shadow: inset 0 0 10px rgba(0,0,0,0.5);
    cursor: pointer;
}

.switch-metal .metal-lever {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 40px;
    background: linear-gradient(to right, #888, #ddd, #888);
    border-radius: 4px;
    box-shadow: 0 5px 10px rgba(0,0,0,0.5);
    transition: 0.3s;
}

.switch-metal input:checked + .metal-plate .metal-lever {
    top: 50px;
    background: linear-gradient(to right, #666, #bbb, #666);
}`
    },
    {
        id: 270,
        name: "Glowing Orb",
        category: "switches",
        tags: ["switch", "glow", "orb", "magic"],
        html: `<label class="switch-orb">
    <input type="checkbox">
    <div class="orb-track">
        <div class="orb"></div>
    </div>
</label>`,
        css: `.switch-orb {
    position: relative;
    display: inline-block;
    width: 80px;
    height: 40px;
}

.switch-orb input {
    display: none;
}

.switch-orb .orb-track {
    width: 100%;
    height: 100%;
    background: #222;
    border-radius: 20px;
    position: relative;
    cursor: pointer;
    box-shadow: inset 0 0 10px #000;
}

.switch-orb .orb {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 30px;
    height: 30px;
    background: #444;
    border-radius: 50%;
    transition: 0.4s;
    box-shadow: 0 0 5px rgba(0,0,0,0.5);
}

.switch-orb input:checked + .orb-track .orb {
    transform: translateX(40px);
    background: #fff;
    box-shadow: 
        0 0 10px #fff,
        0 0 20px #ff00de,
        0 0 30px #ff00de;
}`
    },
    {
        id: 271,
        name: "Swipe Button",
        category: "switches",
        tags: ["switch", "swipe", "mobile", "gesture"],
        html: `<label class="switch-swipe">
    <input type="checkbox">
    <div class="swipe-track">
        <span class="text-off">OFF</span>
        <span class="text-on">ON</span>
        <div class="swipe-thumb"></div>
    </div>
</label>`,
        css: `.switch-swipe {
    position: relative;
    display: inline-block;
    width: 100px;
    height: 40px;
}

.switch-swipe input {
    display: none;
}

.switch-swipe .swipe-track {
    width: 100%;
    height: 100%;
    background: #e0e0e0;
    border-radius: 20px;
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    font-size: 12px;
    font-weight: bold;
    color: #666;
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
}

.switch-swipe .swipe-thumb {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 36px;
    height: 36px;
    background: white;
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    transition: 0.3s;
}

.switch-swipe input:checked + .swipe-track {
    background: #4CAF50;
    color: white;
}

.switch-swipe input:checked + .swipe-track .swipe-thumb {
    transform: translateX(60px);
}`
    },
    {
        id: 272,
        name: "Vertical Rocker",
        category: "switches",
        tags: ["switch", "rocker", "vertical", "tactile"],
        html: `<label class="switch-rocker">
    <input type="checkbox">
    <div class="rocker-body">
        <div class="rocker-btn"></div>
    </div>
</label>`,
        css: `.switch-rocker {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 80px;
}

.switch-rocker input {
    display: none;
}

.switch-rocker .rocker-body {
    width: 100%;
    height: 100%;
    background: #333;
    border-radius: 5px;
    padding: 4px;
    cursor: pointer;
}

.switch-rocker .rocker-btn {
    width: 100%;
    height: 50%;
    background: linear-gradient(#555, #444);
    border-radius: 3px;
    position: relative;
    top: 0;
    transition: 0.2s;
    box-shadow: 0 2px 4px rgba(0,0,0,0.5);
}

.switch-rocker input:checked + .rocker-body .rocker-btn {
    top: 50%;
    background: linear-gradient(#444, #555);
    box-shadow: 0 -2px 4px rgba(0,0,0,0.5);
}

.switch-rocker .rocker-btn:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 4px;
    height: 4px;
    background: #0f0;
    border-radius: 50%;
    opacity: 0;
    box-shadow: 0 0 5px #0f0;
}

.switch-rocker input:checked + .rocker-body .rocker-btn:after {
    opacity: 1;
}`
    },
    {
        id: 273,
        name: "Perspective Tilt",
        category: "switches",
        tags: ["switch", "tilt", "perspective", "3d"],
        html: `<label class="switch-tilt">
    <input type="checkbox">
    <div class="tilt-track">
        <div class="tilt-thumb"></div>
    </div>
</label>`,
        css: `.switch-tilt {
    position: relative;
    display: inline-block;
    width: 80px;
    height: 40px;
    perspective: 500px;
}

.switch-tilt input {
    display: none;
}

.switch-tilt .tilt-track {
    width: 100%;
    height: 100%;
    background: #ddd;
    border-radius: 20px;
    position: relative;
    cursor: pointer;
    transform-style: preserve-3d;
    transition: 0.4s;
}

.switch-tilt .tilt-thumb {
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    transition: 0.4s;
    transform: rotateY(0deg);
}

.switch-tilt input:checked + .tilt-track {
    background: #6c5ce7;
}

.switch-tilt input:checked + .tilt-track .tilt-thumb {
    transform: translateX(40px) rotateY(-20deg);
}`
    },
    {
        id: 274,
        name: "Bat Signal",
        category: "switches",
        tags: ["switch", "batman", "signal", "hero"],
        html: `<label class="switch-bat">
    <input type="checkbox">
    <div class="bat-sky">
        <div class="bat-moon"></div>
        <div class="bat-signal">🦇</div>
    </div>
</label>`,
        css: `.switch-bat {
    position: relative;
    display: inline-block;
    width: 80px;
    height: 40px;
}

.switch-bat input {
    display: none;
}

.switch-bat .bat-sky {
    width: 100%;
    height: 100%;
    background: #1a1a1a;
    border-radius: 20px;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    transition: 0.4s;
}

.switch-bat .bat-moon {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 30px;
    height: 30px;
    background: #555;
    border-radius: 50%;
    transition: 0.4s;
}

.switch-bat .bat-signal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    font-size: 20px;
    transition: 0.4s;
    color: #000;
    z-index: 2;
}

.switch-bat input:checked + .bat-sky {
    background: #000;
}

.switch-bat input:checked + .bat-sky .bat-moon {
    transform: translateX(40px);
    background: #ffeb3b;
    box-shadow: 0 0 15px #ffeb3b;
}

.switch-bat input:checked + .bat-sky .bat-signal {
    transform: translate(15px, -50%) scale(1);
}`
    },
    {
        id: 275,
        name: "Yin Yang",
        category: "switches",
        tags: ["switch", "yinyang", "balance", "zen"],
        html: `<label class="switch-yinyang">
    <input type="checkbox">
    <div class="yinyang-spin"></div>
</label>`,
        css: `.switch-yinyang {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 50px;
}

.switch-yinyang input {
    display: none;
}

.switch-yinyang .yinyang-spin {
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #000 50%, #fff 50%);
    border-radius: 50%;
    border: 2px solid #333;
    position: relative;
    cursor: pointer;
    transition: transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.switch-yinyang .yinyang-spin:before,
.switch-yinyang .yinyang-spin:after {
    content: "";
    position: absolute;
    top: 50%;
    width: 50%;
    height: 50%;
    border-radius: 50%;
    transform: translateY(-50%);
}

.switch-yinyang .yinyang-spin:before {
    left: 0;
    background: #fff;
    border: 6px solid #000;
    box-sizing: border-box;
}

.switch-yinyang .yinyang-spin:after {
    right: 0;
    background: #000;
    border: 6px solid #fff;
    box-sizing: border-box;
}

.switch-yinyang input:checked + .yinyang-spin {
    transform: rotate(180deg);
}`
    },
    {
        id: 276,
        name: "Day/Night Landscape",
        category: "switches",
        tags: ["switch", "landscape", "daynight", "scenic"],
        html: `<label class="switch-landscape">
    <input type="checkbox">
    <div class="scene">
        <div class="sun-moon"></div>
        <div class="mountains"></div>
    </div>
</label>`,
        css: `.switch-landscape {
    position: relative;
    display: inline-block;
    width: 90px;
    height: 40px;
}

.switch-landscape input {
    display: none;
}

.switch-landscape .scene {
    width: 100%;
    height: 100%;
    background: #87CEEB;
    border-radius: 20px;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    transition: 0.5s;
}

.switch-landscape .sun-moon {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 30px;
    height: 30px;
    background: #FFD700;
    border-radius: 50%;
    transition: 0.5s;
    z-index: 2;
}

.switch-landscape .mountains {
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 20px;
    background: #4CAF50;
    clip-path: polygon(0% 100%, 20% 40%, 40% 100%, 60% 50%, 80% 100%, 100% 60%, 100% 100%);
    transition: 0.5s;
}

.switch-landscape input:checked + .scene {
    background: #2c3e50;
}

.switch-landscape input:checked + .scene .sun-moon {
    transform: translateX(50px);
    background: #f1c40f;
    box-shadow: inset -5px -2px 0 #f39c12;
}

.switch-landscape input:checked + .scene .mountains {
    background: #27ae60;
    bottom: -15px;
}`
    },
    {
        id: 277,
        name: "Square Check",
        category: "switches",
        tags: ["switch", "square", "checkbox", "modern"],
        html: `<label class="switch-square">
    <input type="checkbox">
    <div class="square-box">
        <i class="fas fa-check"></i>
    </div>
</label>`,
        css: `.switch-square {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 40px;
}

.switch-square input {
    display: none;
}

.switch-square .square-box {
    width: 100%;
    height: 100%;
    background: #ddd;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.3s;
    color: transparent;
    font-size: 20px;
}

.switch-square input:checked + .square-box {
    background: #6366f1;
    color: white;
    transform: rotate(90deg);
    border-radius: 12px;
}`
    },
    {
        id: 278,
        name: "Rolling Ball",
        category: "switches",
        tags: ["switch", "ball", "roll", "physics"],
        html: `<label class="switch-roll">
    <input type="checkbox">
    <div class="roll-track">
        <div class="ball"></div>
    </div>
</label>`,
        css: `.switch-roll {
    position: relative;
    display: inline-block;
    width: 80px;
    height: 30px;
}

.switch-roll input {
    display: none;
}

.switch-roll .roll-track {
    width: 100%;
    height: 100%;
    border-bottom: 2px solid #333;
    position: relative;
    cursor: pointer;
}

.switch-roll .ball {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 26px;
    height: 26px;
    background: #e74c3c;
    border-radius: 50%;
    transition: 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.switch-roll input:checked + .roll-track .ball {
    left: calc(100% - 26px);
    background: #2ecc71;
    transform: rotate(360deg);
}`
    }
];
