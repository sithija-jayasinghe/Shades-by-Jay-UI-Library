/* ============================================
   3D & Glassmorphism Card Components
   ============================================ */

const threeDCardComponents = [
    {
        id: 279,
        name: "UIVERSE 3D Card",
        category: "cards",
        tags: ["3d", "glassmorphism", "animated", "complex", "green"],
        html: `<div class="card-3d-wrapper">
    <div class="card-3d-content">
        <div class="card-3d-logo">
            <span class="circle circle1"></span>
            <span class="circle circle2"></span>
            <span class="circle circle3"></span>
            <span class="circle circle4"></span>
            <span class="circle circle5">
                <i class="fas fa-cube"></i>
            </span>
        </div>
        <div class="card-3d-glass"></div>
        <div class="card-3d-text-content">
            <span class="card-3d-title">UIVERSE (3D UI)</span>
            <span class="card-3d-text">Create, share, and use beautiful custom elements made with CSS</span>
        </div>
        <div class="card-3d-bottom">
            <div class="card-3d-social-container">
                <button class="card-3d-social-button">
                    <i class="fab fa-twitter"></i>
                </button>
                <button class="card-3d-social-button">
                    <i class="fab fa-github"></i>
                </button>
                <button class="card-3d-social-button">
                    <i class="fab fa-discord"></i>
                </button>
            </div>
            <div class="card-3d-view-more">
                <button class="view-more-button">View more</button>
                <i class="fas fa-arrow-right"></i>
            </div>
        </div>
    </div>
</div>`,
        css: `.card-3d-wrapper {
  width: 290px;
  height: 300px;
  perspective: 1000px;
}

.card-3d-content {
  height: 100%;
  border-radius: 50px;
  background: linear-gradient(135deg, rgb(0, 255, 214) 0%, rgb(8, 226, 96) 100%);
  transition: all 0.5s ease-in-out;
  transform-style: preserve-3d;
  box-shadow: rgba(5, 71, 17, 0) 40px 50px 25px -40px, rgba(5, 71, 17, 0.2) 0px 25px 25px -5px;
  position: relative;
}

.card-3d-glass {
  transform-style: preserve-3d;
  position: absolute;
  inset: 8px;
  border-radius: 55px;
  border-top-right-radius: 100%;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.349) 0%, rgba(255, 255, 255, 0.815) 100%);
  transform: translate3d(0px, 0px, 25px);
  border-left: 1px solid white;
  border-bottom: 1px solid white;
  transition: all 0.5s ease-in-out;
}

.card-3d-text-content {
  padding: 100px 60px 0px 30px;
  transform: translate3d(0, 0, 26px);
  position: relative;
  z-index: 10;
}

.card-3d-title {
  display: block;
  color: #00894d;
  font-weight: 900;
  font-size: 20px;
}

.card-3d-text {
  display: block;
  color: rgba(0, 137, 78, 0.76);
  font-size: 15px;
  margin-top: 20px;
}

.card-3d-bottom {
  padding: 10px 12px;
  transform-style: preserve-3d;
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transform: translate3d(0, 0, 26px);
}

.card-3d-view-more {
  display: flex;
  align-items: center;
  width: 40%;
  justify-content: flex-end;
  transition: all 0.2s ease-in-out;
  gap: 5px;
}

.card-3d-view-more:hover {
  transform: translate3d(0, 0, 10px);
}

.view-more-button {
  background: none;
  border: none;
  color: #00c37b;
  font-weight: bolder;
  font-size: 12px;
  cursor: pointer;
}

.card-3d-view-more i {
  color: #00c37b;
  font-size: 12px;
}

.card-3d-social-container {
  display: flex;
  gap: 10px;
  transform-style: preserve-3d;
}

.card-3d-social-button {
  width: 30px;
  height: 30px;
  padding: 0;
  background: rgb(255, 255, 255);
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(5, 71, 17, 0.5) 0px 7px 5px -5px;
  cursor: pointer;
  color: #00894d;
  font-size: 14px;
}

.card-3d-social-button:first-child {
  transition: transform 0.2s ease-in-out 0.4s, box-shadow 0.2s ease-in-out 0.4s;
}

.card-3d-social-button:nth-child(2) {
  transition: transform 0.2s ease-in-out 0.6s, box-shadow 0.2s ease-in-out 0.6s;
}

.card-3d-social-button:nth-child(3) {
  transition: transform 0.2s ease-in-out 0.8s, box-shadow 0.2s ease-in-out 0.8s;
}

.card-3d-social-button:hover {
  background: black;
  color: white;
}

.card-3d-logo {
  position: absolute;
  right: 0;
  top: 0;
  transform-style: preserve-3d;
}

.card-3d-logo .circle {
  display: block;
  position: absolute;
  aspect-ratio: 1;
  border-radius: 50%;
  top: 0;
  right: 0;
  box-shadow: rgba(100, 100, 111, 0.2) -10px 10px 20px 0px;
  backdrop-filter: blur(5px);
  background: rgba(0, 249, 203, 0.2);
  transition: all 0.5s ease-in-out;
}

.card-3d-logo .circle1 { width: 170px; transform: translate3d(0, 0, 20px); top: 8px; right: 8px; }
.card-3d-logo .circle2 { width: 140px; transform: translate3d(0, 0, 40px); top: 10px; right: 10px; backdrop-filter: blur(1px); transition-delay: 0.4s; }
.card-3d-logo .circle3 { width: 110px; transform: translate3d(0, 0, 60px); top: 17px; right: 17px; transition-delay: 0.8s; }
.card-3d-logo .circle4 { width: 80px; transform: translate3d(0, 0, 80px); top: 23px; right: 23px; transition-delay: 1.2s; }
.card-3d-logo .circle5 { width: 50px; transform: translate3d(0, 0, 100px); top: 30px; right: 30px; display: grid; place-content: center; transition-delay: 1.6s; }
.card-3d-logo .circle5 i { color: white; font-size: 20px; }

.card-3d-wrapper:hover .card-3d-content {
  transform: rotate3d(1, 1, 0, 30deg);
  box-shadow: rgba(5, 71, 17, 0.3) 30px 50px 25px -40px, rgba(5, 71, 17, 0.1) 0px 25px 30px 0px;
}

.card-3d-wrapper:hover .card-3d-social-button {
  transform: translate3d(0, 0, 50px);
  box-shadow: rgba(5, 71, 17, 0.2) -5px 20px 10px 0px;
}

.card-3d-wrapper:hover .card-3d-logo .circle2 { transform: translate3d(0, 0, 60px); }
.card-3d-wrapper:hover .card-3d-logo .circle3 { transform: translate3d(0, 0, 80px); }
.card-3d-wrapper:hover .card-3d-logo .circle4 { transform: translate3d(0, 0, 100px); }
.card-3d-wrapper:hover .card-3d-logo .circle5 { transform: translate3d(0, 0, 120px); }`
    },
    {
        id: 280,
        name: "Cyberpunk Keycard",
        category: "cards",
        tags: ["3d", "cyberpunk", "neon", "glass"],
        html: `<div class="cyber-card-3d">
    <div class="cyber-content">
        <div class="cyber-lines"></div>
        <div class="cyber-glass"></div>
        <div class="cyber-details">
            <h2>ACCESS GRANTED</h2>
            <p>LEVEL 5 CLEARANCE</p>
            <div class="cyber-chip">
                <i class="fas fa-microchip"></i>
            </div>
        </div>
        <div class="cyber-id">ID: 894-XJ-22</div>
    </div>
</div>`,
        css: `.cyber-card-3d {
  width: 300px;
  height: 190px;
  perspective: 1000px;
}

.cyber-content {
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #1a1a1a, #2d2d2d);
  border-radius: 15px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.5s;
  border: 1px solid #333;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.1);
}

.cyber-card-3d:hover .cyber-content {
  transform: rotateX(10deg) rotateY(10deg);
  box-shadow: -5px 5px 20px rgba(0, 255, 255, 0.2);
}

.cyber-glass {
  position: absolute;
  inset: 10px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(2px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  transform: translateZ(20px);
  pointer-events: none;
}

.cyber-lines {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: repeating-linear-gradient(
    90deg,
    transparent,
    transparent 20px,
    rgba(0, 255, 255, 0.05) 20px,
    rgba(0, 255, 255, 0.05) 21px
  );
  border-radius: 15px;
}

.cyber-details {
  padding: 30px;
  transform: translateZ(40px);
  color: #0ff;
  text-shadow: 0 0 5px #0ff;
}

.cyber-details h2 {
  font-size: 18px;
  margin-bottom: 5px;
  letter-spacing: 2px;
}

.cyber-details p {
  font-size: 10px;
  color: #f0f;
  text-shadow: 0 0 5px #f0f;
}

.cyber-chip {
  margin-top: 20px;
  font-size: 30px;
  color: #ffd700;
  text-shadow: none;
}

.cyber-id {
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-family: monospace;
  color: #fff;
  font-size: 12px;
  transform: translateZ(30px);
  background: #000;
  padding: 2px 5px;
  border: 1px solid #333;
}`
    },
    {
        id: 281,
        name: "Frosted Glass Credit",
        category: "cards",
        tags: ["3d", "glass", "credit-card", "finance"],
        html: `<div class="glass-credit-wrapper">
    <div class="glass-credit-card">
        <div class="glass-credit-content">
            <div class="glass-credit-chip"></div>
            <div class="glass-credit-number">4567  8901  2345  6789</div>
            <div class="glass-credit-info">
                <div class="glass-credit-holder">
                    <span>Card Holder</span>
                    <div>JAY SMITH</div>
                </div>
                <div class="glass-credit-valid">
                    <span>Expires</span>
                    <div>12/28</div>
                </div>
            </div>
            <div class="glass-credit-logo">VISA</div>
        </div>
    </div>
</div>`,
        css: `.glass-credit-wrapper {
  width: 320px;
  height: 200px;
  perspective: 1000px;
}

.glass-credit-card {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  transform-style: preserve-3d;
  transition: transform 0.6s;
  position: relative;
  overflow: hidden;
}

.glass-credit-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 60%);
  transform: rotate(30deg);
  pointer-events: none;
}

.glass-credit-wrapper:hover .glass-credit-card {
  transform: rotateY(15deg) rotateX(10deg);
}

.glass-credit-content {
  padding: 25px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: translateZ(30px);
  color: white;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.glass-credit-chip {
  width: 40px;
  height: 30px;
  background: linear-gradient(135deg, #d4af37, #f9e395);
  border-radius: 5px;
  position: relative;
  box-shadow: inset 0 0 5px rgba(0,0,0,0.3);
}

.glass-credit-number {
  font-size: 22px;
  letter-spacing: 2px;
  font-family: monospace;
}

.glass-credit-info {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}

.glass-credit-info span {
  font-size: 9px;
  opacity: 0.8;
  text-transform: uppercase;
}

.glass-credit-logo {
  position: absolute;
  top: 25px;
  right: 25px;
  font-weight: bold;
  font-style: italic;
  font-size: 24px;
}`
    },
    {
        id: 282,
        name: "Floating Product",
        category: "cards",
        tags: ["3d", "product", "ecommerce", "hover"],
        html: `<div class="product-3d-card">
    <div class="product-3d-circle"></div>
    <div class="product-3d-img">
        <i class="fas fa-shoe-prints"></i>
    </div>
    <div class="product-3d-content">
        <h3>Nike Air Max</h3>
        <p>Super comfortable running shoes.</p>
        <a href="#">Buy Now</a>
    </div>
</div>`,
        css: `.product-3d-card {
  position: relative;
  width: 280px;
  height: 350px;
  background: #232323;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
}

.product-3d-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.5);
}

.product-3d-circle {
  position: absolute;
  top: -20%;
  width: 100%;
  height: 100%;
  background: #9bdc28;
  clip-path: circle(150px at center 0);
  transition: 0.5s;
}

.product-3d-card:hover .product-3d-circle {
  clip-path: circle(300px at center 0);
}

.product-3d-img {
  position: relative;
  z-index: 10;
  font-size: 100px;
  color: #fff;
  transform: translateY(0);
  transition: 0.5s;
  filter: drop-shadow(0 10px 15px rgba(0,0,0,0.3));
}

.product-3d-card:hover .product-3d-img {
  transform: translateY(-20px) scale(1.1) rotate(-15deg);
}

.product-3d-content {
  position: absolute;
  bottom: 20px;
  text-align: center;
  transition: 0.5s;
  z-index: 10;
  opacity: 0;
  transform: translateY(20px);
}

.product-3d-card:hover .product-3d-content {
  opacity: 1;
  transform: translateY(0);
}

.product-3d-content h3 {
  color: #fff;
  font-size: 24px;
  margin-bottom: 5px;
}

.product-3d-content p {
  color: #ccc;
  font-size: 14px;
  margin-bottom: 15px;
}

.product-3d-content a {
  display: inline-block;
  padding: 8px 20px;
  background: #fff;
  color: #232323;
  border-radius: 20px;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;
}

.product-3d-content a:hover {
  background: #232323;
  color: #fff;
}`
    },
    {
        id: 283,
        name: "Social Profile 3D",
        category: "cards",
        tags: ["3d", "profile", "social", "avatar"],
        html: `<div class="profile-3d-wrapper">
    <div class="profile-3d-card">
        <div class="profile-3d-img-box">
            <i class="fas fa-user-astronaut"></i>
        </div>
        <div class="profile-3d-content">
            <div class="profile-3d-details">
                <h2>Jay Dev<br><span>Full Stack Developer</span></h2>
                <div class="profile-3d-data">
                    <h3>342<br><span>Posts</span></h3>
                    <h3>120k<br><span>Followers</span></h3>
                    <h3>285<br><span>Following</span></h3>
                </div>
                <div class="profile-3d-action">
                    <button>Follow</button>
                    <button>Message</button>
                </div>
            </div>
        </div>
    </div>
</div>`,
        css: `.profile-3d-wrapper {
  width: 300px;
  height: 350px;
  perspective: 1000px;
}

.profile-3d-card {
  position: relative;
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 35px 80px rgba(0,0,0,0.15);
  transition: 0.5s;
  transform-style: preserve-3d;
}

.profile-3d-wrapper:hover .profile-3d-card {
  transform: rotateY(10deg);
}

.profile-3d-img-box {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%) translateZ(40px);
  width: 100px;
  height: 100px;
  background: #333;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  color: #fff;
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  transition: 0.5s;
  z-index: 10;
}

.profile-3d-wrapper:hover .profile-3d-img-box {
  transform: translateX(-50%) translateZ(60px);
}

.profile-3d-content {
  position: absolute;
  top: 130px;
  width: 100%;
  padding: 0 20px;
  text-align: center;
  transform: translateZ(20px);
}

.profile-3d-details h2 {
  font-size: 20px;
  font-weight: 700;
  color: #333;
  line-height: 1.2em;
}

.profile-3d-details h2 span {
  font-size: 14px;
  font-weight: 400;
  color: #777;
}

.profile-3d-data {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}

.profile-3d-data h3 {
  font-size: 16px;
  color: #333;
}

.profile-3d-data h3 span {
  font-size: 12px;
  font-weight: 400;
  color: #777;
}

.profile-3d-action {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.profile-3d-action button {
  padding: 10px 25px;
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
  background: #ff5f95;
  color: #fff;
  cursor: pointer;
  flex: 1;
  transition: 0.3s;
  transform: translateZ(10px);
}

.profile-3d-action button:nth-child(2) {
  background: #fff;
  color: #ff5f95;
  border: 1px solid #ff5f95;
}

.profile-3d-action button:hover {
  transform: translateZ(20px);
  box-shadow: 0 5px 10px rgba(0,0,0,0.1);
}`
    },
    {
        id: 284,
        name: "Music Player Glass",
        category: "cards",
        tags: ["3d", "music", "glass", "player"],
        html: `<div class="music-3d-card">
    <div class="music-3d-glass">
        <div class="music-3d-art">
            <i class="fas fa-music"></i>
        </div>
        <div class="music-3d-info">
            <h3>Midnight Vibes</h3>
            <p>Lo-Fi Beats</p>
        </div>
        <div class="music-3d-controls">
            <i class="fas fa-backward"></i>
            <div class="play-btn"><i class="fas fa-play"></i></div>
            <i class="fas fa-forward"></i>
        </div>
        <div class="music-3d-progress">
            <div class="bar"></div>
        </div>
    </div>
</div>`,
        css: `.music-3d-card {
  width: 280px;
  height: 380px;
  perspective: 1000px;
}

.music-3d-glass {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  transform-style: preserve-3d;
  transition: 0.5s;
}

.music-3d-card:hover .music-3d-glass {
  transform: rotateX(5deg) rotateY(5deg);
}

.music-3d-art {
  width: 150px;
  height: 150px;
  background: linear-gradient(to bottom right, #ff6b6b, #556270);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  color: white;
  box-shadow: 0 10px 20px rgba(0,0,0,0.3);
  transform: translateZ(30px);
  transition: 0.5s;
}

.music-3d-card:hover .music-3d-art {
  transform: translateZ(50px) scale(1.05);
}

.music-3d-info {
  text-align: center;
  margin-top: 20px;
  transform: translateZ(20px);
  color: white;
}

.music-3d-info h3 {
  font-size: 20px;
  margin-bottom: 5px;
}

.music-3d-info p {
  font-size: 14px;
  opacity: 0.7;
}

.music-3d-controls {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 30px;
  transform: translateZ(25px);
  color: white;
  font-size: 18px;
}

.play-btn {
  width: 50px;
  height: 50px;
  background: white;
  color: #333;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  cursor: pointer;
  transition: 0.3s;
}

.play-btn:hover {
  transform: scale(1.1);
}

.music-3d-progress {
  width: 100%;
  height: 4px;
  background: rgba(255,255,255,0.2);
  border-radius: 2px;
  margin-top: 30px;
  transform: translateZ(15px);
  overflow: hidden;
}

.music-3d-progress .bar {
  width: 40%;
  height: 100%;
  background: white;
  border-radius: 2px;
}`
    },
    {
        id: 285,
        name: "Crypto Card 3D",
        category: "cards",
        tags: ["3d", "crypto", "bitcoin", "finance"],
        html: `<div class="crypto-3d-card">
    <div class="crypto-content">
        <div class="crypto-top">
            <i class="fab fa-bitcoin"></i>
            <span>BTC</span>
        </div>
        <div class="crypto-graph">
            <svg viewBox="0 0 100 40">
                <path d="M0 30 Q 20 10 40 25 T 80 15 T 100 20" fill="none" stroke="#fff" stroke-width="2" />
            </svg>
        </div>
        <div class="crypto-value">
            <h3>$45,231.89</h3>
            <span class="up">+2.4%</span>
        </div>
    </div>
</div>`,
        css: `.crypto-3d-card {
  width: 260px;
  height: 160px;
  perspective: 1000px;
}

.crypto-content {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #f7931a, #d47800);
  border-radius: 20px;
  padding: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform-style: preserve-3d;
  transition: 0.5s;
  box-shadow: 0 10px 20px rgba(247, 147, 26, 0.3);
}

.crypto-3d-card:hover .crypto-content {
  transform: rotateY(15deg) rotateX(5deg);
}

.crypto-top {
  display: flex;
  align-items: center;
  gap: 10px;
  transform: translateZ(20px);
}

.crypto-top i {
  font-size: 30px;
}

.crypto-top span {
  font-weight: bold;
  font-size: 18px;
}

.crypto-graph {
  transform: translateZ(30px);
  filter: drop-shadow(0 5px 5px rgba(0,0,0,0.2));
}

.crypto-graph svg {
  width: 100%;
  height: 40px;
  overflow: visible;
}

.crypto-value {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  transform: translateZ(25px);
}

.crypto-value h3 {
  font-size: 22px;
}

.crypto-value .up {
  background: rgba(255,255,255,0.2);
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 12px;
}`
    },
    {
        id: 286,
        name: "Weather Glass 3D",
        category: "cards",
        tags: ["3d", "weather", "glass", "sun"],
        html: `<div class="weather-3d-card">
    <div class="weather-glass">
        <div class="weather-icon">
            <div class="sun"></div>
            <div class="cloud"></div>
        </div>
        <div class="weather-temp">24°</div>
        <div class="weather-loc">London, UK</div>
    </div>
</div>`,
        css: `.weather-3d-card {
  width: 200px;
  height: 250px;
  perspective: 1000px;
}

.weather-glass {
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #4facfe 0%, #00f2fe 100%);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  transform-style: preserve-3d;
  transition: 0.5s;
  box-shadow: 0 15px 30px rgba(0,0,0,0.2);
}

.weather-3d-card:hover .weather-glass {
  transform: translateY(-10px) rotateX(5deg);
}

.weather-icon {
  position: relative;
  width: 100px;
  height: 100px;
  transform: translateZ(40px);
}

.sun {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  background: #ffd700;
  border-radius: 50%;
  box-shadow: 0 0 20px #ffd700;
  animation: pulse 2s infinite;
}

.cloud {
  position: absolute;
  bottom: 20px;
  left: 10px;
  width: 70px;
  height: 35px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  z-index: 2;
}

.cloud::after {
  content: '';
  position: absolute;
  top: -15px;
  left: 10px;
  width: 30px;
  height: 30px;
  background: white;
  border-radius: 50%;
}

.weather-temp {
  font-size: 48px;
  font-weight: bold;
  transform: translateZ(30px);
  text-shadow: 0 5px 10px rgba(0,0,0,0.1);
}

.weather-loc {
  font-size: 14px;
  opacity: 0.9;
  transform: translateZ(20px);
  margin-top: 5px;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}`
    },
    {
        id: 287,
        name: "Achievement Badge",
        category: "cards",
        tags: ["3d", "badge", "game", "reward"],
        html: `<div class="badge-3d-wrapper">
    <div class="badge-3d">
        <div class="badge-star">
            <i class="fas fa-star"></i>
        </div>
        <div class="badge-ribbon">MASTER</div>
    </div>
</div>`,
        css: `.badge-3d-wrapper {
  width: 180px;
  height: 220px;
  perspective: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.badge-3d {
  position: relative;
  width: 120px;
  height: 140px;
  background: linear-gradient(to bottom, #f1c40f, #e67e22);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  display: flex;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;
  transition: 0.5s;
  cursor: pointer;
}

.badge-3d-wrapper:hover .badge-3d {
  transform: rotateY(180deg);
}

.badge-star {
  font-size: 50px;
  color: white;
  transform: translateZ(30px);
  filter: drop-shadow(0 5px 5px rgba(0,0,0,0.2));
}

.badge-ribbon {
  position: absolute;
  bottom: 30px;
  background: #c0392b;
  color: white;
  padding: 2px 15px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 10px;
  transform: translateZ(40px);
  box-shadow: 0 5px 10px rgba(0,0,0,0.2);
}

.badge-3d::after {
  content: 'LEVEL 99';
  position: absolute;
  transform: rotateY(180deg) translateZ(1px);
  color: white;
  font-weight: bold;
  font-size: 18px;
}`
    },
    {
        id: 288,
        name: "Holographic Card",
        category: "cards",
        tags: ["3d", "holographic", "iridescent", "future"],
        html: `<div class="holo-card">
    <div class="holo-content">
        <h3>HOLOGRAPHIC</h3>
        <p>Interactive 3D Foil Effect</p>
    </div>
</div>`,
        css: `.holo-card {
  width: 260px;
  height: 360px;
  perspective: 1000px;
}

.holo-content {
  width: 100%;
  height: 100%;
  background: #111;
  border-radius: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  transform-style: preserve-3d;
  transition: 0.1s;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.1);
}

.holo-content::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    125deg,
    transparent 0%,
    rgba(255, 0, 0, 0.2) 20%,
    rgba(255, 255, 0, 0.2) 40%,
    rgba(0, 255, 0, 0.2) 60%,
    rgba(0, 0, 255, 0.2) 80%,
    transparent 100%
  );
  opacity: 0.5;
  mix-blend-mode: color-dodge;
  pointer-events: none;
}

.holo-card:hover .holo-content {
  transform: rotateX(10deg) rotateY(-10deg);
  box-shadow: 
    -5px 5px 20px rgba(0,255,255,0.2),
    5px -5px 20px rgba(255,0,255,0.2);
}

.holo-content h3 {
  font-size: 24px;
  letter-spacing: 2px;
  transform: translateZ(30px);
  text-transform: uppercase;
  background: linear-gradient(to right, #fff, #aaa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.holo-content p {
  font-size: 12px;
  color: #888;
  transform: translateZ(20px);
  margin-top: 10px;
}`
    }
];
