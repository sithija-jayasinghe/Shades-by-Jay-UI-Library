/* ============================================
   Card Components
   ============================================ */

const cardComponents = [
    {
        id: 176,
        name: "Glassmorphism Profile",
        category: "cards",
        tags: ["glassmorphism", "profile", "social"],
        html: `<div class="card-glass-profile">
    <div class="glass-content">
        <div class="avatar">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Avatar">
        </div>
        <h3>Alex Morgan</h3>
        <p>UX Designer</p>
        <div class="stats">
            <div>
                <h4>245</h4>
                <span>Posts</span>
            </div>
            <div>
                <h4>12k</h4>
                <span>Followers</span>
            </div>
            <div>
                <h4>180</h4>
                <span>Following</span>
            </div>
        </div>
        <div class="actions">
            <button>Follow</button>
            <button class="secondary">Message</button>
        </div>
    </div>
</div>`,
        css: `.card-glass-profile {
    position: relative;
    width: 300px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(45deg, #fc00ff, #00dbde);
    border-radius: 20px;
    overflow: hidden;
}

.card-glass-profile::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #fc00ff, #00dbde);
    filter: blur(20px);
    opacity: 0.5;
}

.glass-content {
    position: relative;
    width: 260px;
    height: 360px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}

.glass-content .avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 3px solid rgba(255, 255, 255, 0.5);
    overflow: hidden;
    margin-bottom: 15px;
}

.glass-content .avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.glass-content h3 {
    color: white;
    margin: 0;
    font-size: 1.5rem;
}

.glass-content p {
    color: rgba(255, 255, 255, 0.8);
    margin: 5px 0 20px;
    font-size: 0.9rem;
}

.glass-content .stats {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 25px;
}

.glass-content .stats div {
    text-align: center;
}

.glass-content .stats h4 {
    color: white;
    margin: 0;
    font-size: 1.1rem;
}

.glass-content .stats span {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.8rem;
}

.glass-content .actions {
    display: flex;
    gap: 10px;
    width: 100%;
}

.glass-content button {
    flex: 1;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: white;
    color: #333;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.2s;
}

.glass-content button.secondary {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.4);
}

.glass-content button:hover {
    transform: translateY(-2px);
}`
    },
    {
        id: 177,
        name: "NFT Holographic Card",
        category: "cards",
        tags: ["nft", "holographic", "3d", "crypto"],
        html: `<div class="card-nft">
    <div class="nft-image">
        <img src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=500&auto=format&fit=crop&q=60" alt="NFT">
    </div>
    <div class="nft-info">
        <h3>Cosmic Cube #402</h3>
        <div class="nft-price">
            <span>Current Bid</span>
            <span class="eth">2.45 ETH</span>
        </div>
        <div class="nft-footer">
            <div class="creator">
                <div class="creator-img"></div>
                <span>@digital_art</span>
            </div>
            <button>Place Bid</button>
        </div>
    </div>
</div>`,
        css: `.card-nft {
    width: 280px;
    background: #1a1a2e;
    border-radius: 15px;
    padding: 15px;
    color: white;
    position: relative;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0,0,0,0.3);
    transition: transform 0.3s ease;
    border: 1px solid rgba(255,255,255,0.1);
}

.card-nft:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.4), 0 0 15px rgba(0, 255, 255, 0.3);
}

.card-nft::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
        45deg,
        transparent,
        rgba(255, 255, 255, 0.1),
        transparent
    );
    transform: rotate(45deg);
    animation: hologram 3s infinite linear;
    pointer-events: none;
}

@keyframes hologram {
    0% { transform: rotate(45deg) translateY(-100%); }
    100% { transform: rotate(45deg) translateY(100%); }
}

.nft-image {
    width: 100%;
    height: 200px;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 15px;
    position: relative;
}

.nft-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.card-nft:hover .nft-image img {
    transform: scale(1.1);
}

.nft-info h3 {
    margin: 0 0 15px;
    font-size: 1.2rem;
}

.nft-price {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    font-size: 0.9rem;
    color: #a0a0b0;
}

.nft-price .eth {
    color: #00ffaa;
    font-weight: bold;
}

.nft-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 15px;
    border-top: 1px solid rgba(255,255,255,0.1);
}

.creator {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.8rem;
    color: #a0a0b0;
}

.creator-img {
    width: 24px;
    height: 24px;
    background: #444;
    border-radius: 50%;
}

.nft-footer button {
    background: linear-gradient(90deg, #00dbde, #fc00ff);
    border: none;
    padding: 8px 16px;
    border-radius: 20px;
    color: white;
    font-size: 0.8rem;
    font-weight: bold;
    cursor: pointer;
    transition: opacity 0.2s;
}

.nft-footer button:hover {
    opacity: 0.9;
}`
    },
    {
        id: 178,
        name: "Realistic Credit Card",
        category: "cards",
        tags: ["credit-card", "realistic", "finance", "glassmorphism"],
        html: `<div class="card-credit">
    <div class="card-face">
        <div class="card-top">
            <div class="chip">
                <div class="chip-line"></div>
                <div class="chip-line"></div>
                <div class="chip-line"></div>
                <div class="chip-line"></div>
            </div>
            <div class="visa">VISA</div>
        </div>
        <div class="card-number">
            4522 8910 3456 7890
        </div>
        <div class="card-bottom">
            <div class="card-holder">
                <span>Card Holder</span>
                <div>JOHN DOE</div>
            </div>
            <div class="card-expires">
                <span>Expires</span>
                <div>12/25</div>
            </div>
        </div>
    </div>
</div>`,
        css: `.card-credit {
    width: 320px;
    height: 200px;
    perspective: 1000px;
}

.card-face {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #1a1a1a, #333);
    border-radius: 15px;
    padding: 25px;
    color: white;
    position: relative;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.card-face::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 60%);
    pointer-events: none;
}

.card-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.chip {
    width: 45px;
    height: 35px;
    background: linear-gradient(135deg, #d4af37, #f9d976);
    border-radius: 6px;
    position: relative;
    overflow: hidden;
}

.chip-line {
    position: absolute;
    background: rgba(0,0,0,0.2);
}

.chip-line:nth-child(1) { width: 100%; height: 1px; top: 33%; }
.chip-line:nth-child(2) { width: 100%; height: 1px; top: 66%; }
.chip-line:nth-child(3) { width: 1px; height: 100%; left: 33%; }
.chip-line:nth-child(4) { width: 1px; height: 100%; left: 66%; }

.visa {
    font-style: italic;
    font-weight: 900;
    font-size: 24px;
    color: white;
}

.card-number {
    font-family: 'Courier New', monospace;
    font-size: 22px;
    letter-spacing: 2px;
    text-shadow: 0 2px 2px rgba(0,0,0,0.5);
}

.card-bottom {
    display: flex;
    justify-content: space-between;
}

.card-holder span, .card-expires span {
    font-size: 8px;
    text-transform: uppercase;
    color: #aaa;
    display: block;
    margin-bottom: 4px;
}

.card-holder div, .card-expires div {
    font-family: 'Courier New', monospace;
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
}`
    },
    {
        id: 179,
        name: "Music Player Card",
        category: "cards",
        tags: ["music", "player", "media", "gradient"],
        html: `<div class="card-music">
    <div class="album-art">
        <div class="vinyl"></div>
        <div class="center-hole"></div>
    </div>
    <div class="song-info">
        <h3>Midnight City</h3>
        <p>M83</p>
    </div>
    <div class="progress-container">
        <div class="time">1:45</div>
        <div class="progress-bar">
            <div class="progress-fill"></div>
        </div>
        <div class="time">4:03</div>
    </div>
    <div class="controls">
        <button class="btn-control"><i class="fas fa-backward"></i></button>
        <button class="btn-play"><i class="fas fa-play"></i></button>
        <button class="btn-control"><i class="fas fa-forward"></i></button>
    </div>
</div>`,
        css: `.card-music {
    width: 280px;
    background: #fff;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.album-art {
    width: 150px;
    height: 150px;
    background: linear-gradient(45deg, #ff6b6b, #feca57);
    border-radius: 50%;
    margin-bottom: 20px;
    position: relative;
    box-shadow: 0 10px 20px rgba(255, 107, 107, 0.4);
    animation: spin 10s linear infinite;
}

.vinyl {
    position: absolute;
    inset: 10px;
    border-radius: 50%;
    border: 2px solid rgba(255,255,255,0.2);
}

.center-hole {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 30px;
    height: 30px;
    background: #fff;
    border-radius: 50%;
    transform: translate(-50%, -50%);
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

.song-info h3 {
    margin: 0;
    color: #333;
    font-size: 1.2rem;
}

.song-info p {
    margin: 5px 0 20px;
    color: #888;
    font-size: 0.9rem;
}

.progress-container {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
    font-size: 0.8rem;
    color: #888;
}

.progress-bar {
    flex: 1;
    height: 4px;
    background: #eee;
    border-radius: 2px;
    overflow: hidden;
}

.progress-fill {
    width: 45%;
    height: 100%;
    background: #ff6b6b;
    border-radius: 2px;
}

.controls {
    display: flex;
    align-items: center;
    gap: 20px;
}

.btn-control {
    background: none;
    border: none;
    color: #888;
    font-size: 1.2rem;
    cursor: pointer;
    transition: color 0.2s;
}

.btn-control:hover {
    color: #333;
}

.btn-play {
    width: 50px;
    height: 50px;
    background: #ff6b6b;
    border: none;
    border-radius: 50%;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    box-shadow: 0 5px 15px rgba(255, 107, 107, 0.4);
    transition: transform 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
}

.btn-play:hover {
    transform: scale(1.1);
}`
    },
    {
        id: 180,
        name: "Weather Widget Card",
        category: "cards",
        tags: ["weather", "widget", "gradient", "minimal"],
        html: `<div class="card-weather">
    <div class="weather-header">
        <span>San Francisco</span>
        <i class="fas fa-map-marker-alt"></i>
    </div>
    <div class="weather-main">
        <i class="fas fa-cloud-sun"></i>
        <div class="temp">72°</div>
        <div class="desc">Partly Cloudy</div>
    </div>
    <div class="weather-details">
        <div class="detail">
            <span>Humidity</span>
            <strong>45%</strong>
        </div>
        <div class="detail">
            <span>Wind</span>
            <strong>12 mph</strong>
        </div>
        <div class="detail">
            <span>UV</span>
            <strong>4</strong>
        </div>
    </div>
</div>`,
        css: `.card-weather {
    width: 260px;
    background: linear-gradient(180deg, #4facfe 0%, #00f2fe 100%);
    border-radius: 20px;
    padding: 25px;
    color: white;
    box-shadow: 0 10px 25px rgba(79, 172, 254, 0.4);
}

.weather-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    font-weight: 500;
}

.weather-main {
    text-align: center;
    margin-bottom: 30px;
}

.weather-main i {
    font-size: 4rem;
    margin-bottom: 10px;
    text-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.weather-main .temp {
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1;
}

.weather-main .desc {
    font-size: 1rem;
    opacity: 0.9;
    margin-top: 5px;
}

.weather-details {
    display: flex;
    justify-content: space-between;
    background: rgba(255,255,255,0.2);
    border-radius: 15px;
    padding: 15px;
    backdrop-filter: blur(5px);
}

.detail {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.8rem;
}

.detail span {
    opacity: 0.8;
    margin-bottom: 4px;
}`
    },
    {
        id: 181,
        name: "E-commerce Product",
        category: "cards",
        tags: ["ecommerce", "product", "shopping", "minimal"],
        html: `<div class="card-product">
    <div class="product-img">
        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60" alt="Shoe">
        <span class="badge">New</span>
        <button class="wishlist"><i class="far fa-heart"></i></button>
    </div>
    <div class="product-details">
        <h3>Nike Air Max</h3>
        <p class="category">Men's Running Shoe</p>
        <div class="price-row">
            <span class="price">$129.00</span>
            <button class="add-cart">
                <i class="fas fa-shopping-cart"></i> Add
            </button>
        </div>
    </div>
</div>`,
        css: `.card-product {
    width: 280px;
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-product:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
}

.product-img {
    position: relative;
    height: 200px;
    background: #f5f5f5;
}

.product-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    mix-blend-mode: multiply;
}

.badge {
    position: absolute;
    top: 15px;
    left: 15px;
    background: #333;
    color: white;
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 0.7rem;
    font-weight: bold;
    text-transform: uppercase;
}

.wishlist {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: white;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    transition: transform 0.2s;
}

.wishlist:hover {
    transform: scale(1.1);
    color: #ff6b6b;
}

.product-details {
    padding: 20px;
}

.product-details h3 {
    margin: 0;
    font-size: 1.1rem;
    color: #333;
}

.product-details .category {
    margin: 5px 0 15px;
    font-size: 0.85rem;
    color: #888;
}

.price-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.price {
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
}

.add-cart {
    background: #333;
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: background 0.2s;
}

.add-cart:hover {
    background: #000;
}`
    },
    {
        id: 182,
        name: "Recipe Card",
        category: "cards",
        tags: ["recipe", "food", "image", "overlay"],
        html: `<div class="card-recipe">
    <div class="recipe-img">
        <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60" alt="Pizza">
        <div class="overlay">
            <button>View Recipe</button>
        </div>
    </div>
    <div class="recipe-content">
        <div class="meta">
            <span><i class="far fa-clock"></i> 30 min</span>
            <span><i class="fas fa-fire"></i> 450 kcal</span>
        </div>
        <h3>Italian Pizza</h3>
        <div class="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
            <span>(4.5)</span>
        </div>
    </div>
</div>`,
        css: `.card-recipe {
    width: 280px;
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0,0,0,0.08);
}

.recipe-img {
    position: relative;
    height: 180px;
    overflow: hidden;
}

.recipe-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.recipe-img .overlay {
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.card-recipe:hover .recipe-img img {
    transform: scale(1.1);
}

.card-recipe:hover .overlay {
    opacity: 1;
}

.overlay button {
    background: white;
    color: #333;
    border: none;
    padding: 10px 20px;
    border-radius: 25px;
    font-weight: 600;
    cursor: pointer;
    transform: translateY(20px);
    transition: transform 0.3s ease;
}

.card-recipe:hover .overlay button {
    transform: translateY(0);
}

.recipe-content {
    padding: 20px;
}

.meta {
    display: flex;
    gap: 15px;
    font-size: 0.8rem;
    color: #888;
    margin-bottom: 10px;
}

.meta i {
    color: #ff6b6b;
    margin-right: 4px;
}

.recipe-content h3 {
    margin: 0 0 10px;
    color: #333;
    font-size: 1.2rem;
}

.rating {
    color: #ffc107;
    font-size: 0.9rem;
}

.rating span {
    color: #888;
    margin-left: 5px;
    font-size: 0.8rem;
}`
    },
    {
        id: 183,
        name: "Social Post Card",
        category: "cards",
        tags: ["social", "post", "feed", "minimal"],
        html: `<div class="card-social">
    <div class="post-header">
        <div class="user-info">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" alt="User">
            <div>
                <h4>Sarah Jenkins</h4>
                <span>2 hours ago</span>
            </div>
        </div>
        <button class="more-btn"><i class="fas fa-ellipsis-h"></i></button>
    </div>
    <div class="post-content">
        <p>Just finished working on this amazing project! 🚀 The UI turned out exactly how I imagined it. #design #uiux</p>
    </div>
    <div class="post-image">
        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60" alt="Workspace">
    </div>
    <div class="post-actions">
        <button class="action-btn active"><i class="fas fa-heart"></i> 245</button>
        <button class="action-btn"><i class="far fa-comment"></i> 12</button>
        <button class="action-btn"><i class="far fa-share-square"></i> Share</button>
    </div>
</div>`,
        css: `.card-social {
    width: 320px;
    background: white;
    border-radius: 12px;
    border: 1px solid #eee;
    overflow: hidden;
}

.post-header {
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.user-info {
    display: flex;
    align-items: center;
    gap: 10px;
}

.user-info img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.user-info h4 {
    margin: 0;
    font-size: 0.95rem;
    color: #333;
}

.user-info span {
    font-size: 0.75rem;
    color: #888;
}

.more-btn {
    background: none;
    border: none;
    color: #888;
    cursor: pointer;
    padding: 5px;
}

.post-content {
    padding: 0 15px 15px;
}

.post-content p {
    margin: 0;
    font-size: 0.95rem;
    color: #444;
    line-height: 1.5;
}

.post-image {
    width: 100%;
    height: 200px;
}

.post-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.post-actions {
    padding: 10px 15px;
    display: flex;
    gap: 20px;
    border-top: 1px solid #eee;
}

.action-btn {
    background: none;
    border: none;
    color: #666;
    font-size: 0.9rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px;
    transition: color 0.2s;
}

.action-btn:hover {
    color: #333;
}

.action-btn.active {
    color: #e91e63;
}`
    },
    {
        id: 184,
        name: "Pricing Plan Card",
        category: "cards",
        tags: ["pricing", "plan", "subscription", "business"],
        html: `<div class="card-pricing">
    <div class="plan-header">
        <h3>Pro Plan</h3>
        <div class="price">
            <span class="currency">$</span>
            <span class="amount">29</span>
            <span class="period">/mo</span>
        </div>
    </div>
    <ul class="features">
        <li><i class="fas fa-check"></i> Unlimited Projects</li>
        <li><i class="fas fa-check"></i> 50GB Storage</li>
        <li><i class="fas fa-check"></i> Priority Support</li>
        <li><i class="fas fa-check"></i> Custom Domain</li>
        <li class="disabled"><i class="fas fa-times"></i> White Labeling</li>
    </ul>
    <button class="cta-btn">Choose Plan</button>
</div>`,
        css: `.card-pricing {
    width: 280px;
    background: white;
    border-radius: 20px;
    padding: 30px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    border: 1px solid #eee;
    transition: transform 0.3s ease;
}

.card-pricing:hover {
    transform: translateY(-10px);
    border-color: #6c5ce7;
}

.plan-header h3 {
    margin: 0 0 15px;
    color: #888;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.price {
    display: flex;
    justify-content: center;
    align-items: baseline;
    margin-bottom: 30px;
    color: #333;
}

.currency {
    font-size: 1.5rem;
    font-weight: 600;
    margin-right: 2px;
}

.amount {
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1;
}

.period {
    color: #888;
    margin-left: 5px;
}

.features {
    list-style: none;
    padding: 0;
    margin: 0 0 30px;
    text-align: left;
}

.features li {
    margin-bottom: 12px;
    color: #555;
    font-size: 0.95rem;
    display: flex;
    align-items: center;
    gap: 10px;
}

.features li i {
    color: #6c5ce7;
    font-size: 0.8rem;
}

.features li.disabled {
    color: #ccc;
}

.features li.disabled i {
    color: #ccc;
}

.cta-btn {
    width: 100%;
    padding: 12px;
    background: #6c5ce7;
    color: white;
    border: none;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
}

.cta-btn:hover {
    background: #5b4bc4;
}`
    },
    {
        id: 185,
        name: "Task Kanban Card",
        category: "cards",
        tags: ["task", "kanban", "productivity", "minimal"],
        html: `<div class="card-task">
    <div class="task-tags">
        <span class="tag-design">Design</span>
        <span class="tag-high">High</span>
    </div>
    <h3>Redesign Homepage</h3>
    <p>Update the hero section with new illustrations and copy.</p>
    <div class="task-footer">
        <div class="assignees">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=1" alt="User">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=2" alt="User">
        </div>
        <div class="task-meta">
            <span><i class="far fa-comment"></i> 3</span>
            <span><i class="fas fa-paperclip"></i> 2</span>
        </div>
    </div>
</div>`,
        css: `.card-task {
    width: 260px;
    background: white;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    border: 1px solid #f0f0f0;
    cursor: grab;
}

.card-task:hover {
    box-shadow: 0 5px 15px rgba(0,0,0,0.08);
}

.task-tags {
    display: flex;
    gap: 8px;
    margin-bottom: 12px;
}

.task-tags span {
    font-size: 0.7rem;
    padding: 3px 8px;
    border-radius: 4px;
    font-weight: 600;
}

.tag-design {
    background: #e3f2fd;
    color: #1976d2;
}

.tag-high {
    background: #ffebee;
    color: #c62828;
}

.card-task h3 {
    margin: 0 0 8px;
    font-size: 1rem;
    color: #333;
}

.card-task p {
    margin: 0 0 15px;
    font-size: 0.85rem;
    color: #666;
    line-height: 1.4;
}

.task-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.assignees {
    display: flex;
}

.assignees img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 2px solid white;
    margin-right: -8px;
}

.task-meta {
    display: flex;
    gap: 10px;
    font-size: 0.8rem;
    color: #aaa;
}

.task-meta span {
    display: flex;
    align-items: center;
    gap: 4px;
}`
    },
    {
        id: 186,
        name: "Neumorphic Card",
        category: "cards",
        tags: ["neumorphism", "soft-ui", "minimal", "modern"],
        html: `<div class="card-neumorphic">
    <div class="neu-icon">
        <i class="fas fa-fingerprint"></i>
    </div>
    <h3>Security</h3>
    <p>Advanced biometric protection for your digital assets.</p>
    <button class="neu-btn">Enable</button>
</div>`,
        css: `.card-neumorphic {
    width: 260px;
    padding: 30px;
    border-radius: 30px;
    background: #e0e5ec;
    box-shadow: 9px 9px 16px rgb(163,177,198,0.6), 
                -9px -9px 16px rgba(255,255,255, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #4d4d4d;
}

.neu-icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #e0e5ec;
    box-shadow: 5px 5px 10px rgb(163,177,198,0.6), 
                -5px -5px 10px rgba(255,255,255, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: #6c5ce7;
    margin-bottom: 20px;
}

.card-neumorphic h3 {
    margin: 0 0 10px;
    font-size: 1.2rem;
}

.card-neumorphic p {
    margin: 0 0 25px;
    font-size: 0.9rem;
    opacity: 0.7;
    line-height: 1.5;
}

.neu-btn {
    padding: 12px 30px;
    border-radius: 50px;
    border: none;
    background: #e0e5ec;
    color: #6c5ce7;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 5px 5px 10px rgb(163,177,198,0.6), 
                -5px -5px 10px rgba(255,255,255, 0.5);
    transition: all 0.2s ease;
}

.neu-btn:active {
    box-shadow: inset 5px 5px 10px rgb(163,177,198,0.6), 
                inset -5px -5px 10px rgba(255,255,255, 0.5);
    transform: translateY(2px);
}`
    },
    {
        id: 187,
        name: "Gaming Profile Card",
        category: "cards",
        tags: ["gaming", "profile", "dark", "neon"],
        html: `<div class="card-gaming">
    <div class="rank-badge">DIAMOND II</div>
    <div class="gamer-avatar">
        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Gamer" alt="Avatar">
        <div class="status-dot"></div>
    </div>
    <h3>CyberNinja</h3>
    <div class="gamer-stats">
        <div class="stat-box">
            <span class="label">K/D</span>
            <span class="value">2.45</span>
        </div>
        <div class="stat-box">
            <span class="label">Win Rate</span>
            <span class="value">68%</span>
        </div>
        <div class="stat-box">
            <span class="label">Matches</span>
            <span class="value">1.2k</span>
        </div>
    </div>
    <button class="invite-btn">INVITE TO PARTY</button>
</div>`,
        css: `.card-gaming {
    width: 280px;
    background: #111;
    border: 1px solid #333;
    border-radius: 15px;
    padding: 25px;
    text-align: center;
    color: white;
    position: relative;
    box-shadow: 0 0 20px rgba(0,0,0,0.5);
}

.card-gaming::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #ff0055, #00ffff);
}

.rank-badge {
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 0.7rem;
    font-weight: bold;
    color: #00ffff;
    border: 1px solid #00ffff;
    padding: 2px 6px;
    border-radius: 4px;
    text-shadow: 0 0 5px #00ffff;
}

.gamer-avatar {
    width: 80px;
    height: 80px;
    margin: 10px auto 15px;
    position: relative;
}

.gamer-avatar img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px solid #333;
}

.status-dot {
    width: 12px;
    height: 12px;
    background: #00ff00;
    border-radius: 50%;
    position: absolute;
    bottom: 5px;
    right: 5px;
    border: 2px solid #111;
    box-shadow: 0 0 5px #00ff00;
}

.card-gaming h3 {
    margin: 0 0 20px;
    font-family: 'Courier New', monospace;
    letter-spacing: 1px;
}

.gamer-stats {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    background: #1a1a1a;
    padding: 10px;
    border-radius: 8px;
}

.stat-box {
    display: flex;
    flex-direction: column;
}

.stat-box .label {
    font-size: 0.7rem;
    color: #666;
    margin-bottom: 4px;
}

.stat-box .value {
    font-size: 0.9rem;
    font-weight: bold;
    color: #ddd;
}

.invite-btn {
    width: 100%;
    padding: 12px;
    background: transparent;
    border: 1px solid #ff0055;
    color: #ff0055;
    font-weight: bold;
    font-size: 0.8rem;
    cursor: pointer;
    transition: all 0.2s;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.invite-btn:hover {
    background: #ff0055;
    color: white;
    box-shadow: 0 0 15px rgba(255, 0, 85, 0.4);
}`
    },
    {
        id: 188,
        name: "Article Preview Card",
        category: "cards",
        tags: ["article", "blog", "news", "content"],
        html: `<div class="card-article">
    <div class="article-img"></div>
    <div class="article-body">
        <span class="tag">Technology</span>
        <h2>The Future of AI in Design</h2>
        <p>How artificial intelligence is reshaping the way we create digital experiences and what it means for designers.</p>
        <div class="article-footer">
            <div class="author">
                <div class="avatar-small"></div>
                <span>By John Doe</span>
            </div>
            <span class="read-time">5 min read</span>
        </div>
    </div>
</div>`,
        css: `.card-article {
    width: 300px;
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    transition: transform 0.3s ease;
}

.card-article:hover {
    transform: translateY(-5px);
}

.article-img {
    height: 160px;
    background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
}

.article-body {
    padding: 20px;
}

.article-body .tag {
    display: inline-block;
    padding: 4px 10px;
    background: #e3f2fd;
    color: #1565c0;
    font-size: 0.75rem;
    font-weight: 600;
    border-radius: 4px;
    margin-bottom: 12px;
}

.article-body h2 {
    margin: 0 0 10px;
    font-size: 1.2rem;
    color: #333;
    line-height: 1.3;
}

.article-body p {
    margin: 0 0 20px;
    font-size: 0.9rem;
    color: #666;
    line-height: 1.5;
}

.article-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 15px;
    border-top: 1px solid #eee;
    font-size: 0.8rem;
    color: #888;
}

.author {
    display: flex;
    align-items: center;
    gap: 8px;
}

.avatar-small {
    width: 24px;
    height: 24px;
    background: #ddd;
    border-radius: 50%;
}`
    },
    {
        id: 189,
        name: "File Upload Card",
        category: "cards",
        tags: ["upload", "file", "utility", "dashed"],
        html: `<div class="card-upload">
    <div class="upload-area">
        <i class="fas fa-cloud-upload-alt"></i>
        <h3>Drag & Drop files here</h3>
        <p>or click to browse</p>
    </div>
    <div class="file-list">
        <div class="file-item">
            <i class="far fa-file-image"></i>
            <div class="file-info">
                <span class="name">design-mockup.png</span>
                <span class="size">2.4 MB</span>
            </div>
            <button class="remove"><i class="fas fa-times"></i></button>
        </div>
        <div class="file-item loading">
            <i class="far fa-file-pdf"></i>
            <div class="file-info">
                <span class="name">project-brief.pdf</span>
                <div class="progress-bar-small">
                    <div class="fill" style="width: 60%"></div>
                </div>
            </div>
            <span class="percent">60%</span>
        </div>
    </div>
</div>`,
        css: `.card-upload {
    width: 300px;
    background: white;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.05);
}

.upload-area {
    border: 2px dashed #e0e0e0;
    border-radius: 8px;
    padding: 30px 20px;
    text-align: center;
    margin-bottom: 20px;
    cursor: pointer;
    transition: border-color 0.2s;
}

.upload-area:hover {
    border-color: #2196f3;
    background: #f5f9ff;
}

.upload-area i {
    font-size: 2rem;
    color: #2196f3;
    margin-bottom: 10px;
}

.upload-area h3 {
    margin: 0 0 5px;
    font-size: 1rem;
    color: #333;
}

.upload-area p {
    margin: 0;
    font-size: 0.85rem;
    color: #888;
}

.file-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.file-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    background: #f8f9fa;
    border-radius: 6px;
}

.file-item i {
    font-size: 1.2rem;
    color: #666;
}

.file-info {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.file-info .name {
    font-size: 0.85rem;
    color: #333;
    font-weight: 500;
}

.file-info .size {
    font-size: 0.75rem;
    color: #888;
}

.remove {
    background: none;
    border: none;
    color: #999;
    cursor: pointer;
}

.remove:hover {
    color: #f44336;
}

.progress-bar-small {
    height: 4px;
    background: #e0e0e0;
    border-radius: 2px;
    margin-top: 5px;
    overflow: hidden;
}

.progress-bar-small .fill {
    height: 100%;
    background: #2196f3;
}

.percent {
    font-size: 0.75rem;
    color: #2196f3;
    font-weight: 600;
}`
    },
    {
        id: 190,
        name: "Notification Card",
        category: "cards",
        tags: ["notification", "alert", "toast", "popup"],
        html: `<div class="card-notification">
    <div class="icon-box">
        <i class="fas fa-check"></i>
    </div>
    <div class="content">
        <h4>Success!</h4>
        <p>Your changes have been saved successfully.</p>
    </div>
    <button class="close-btn"><i class="fas fa-times"></i></button>
</div>`,
        css: `.card-notification {
    width: 320px;
    background: white;
    border-radius: 12px;
    padding: 15px;
    display: flex;
    align-items: flex-start;
    gap: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    border-left: 4px solid #4caf50;
    position: relative;
}

.icon-box {
    width: 32px;
    height: 32px;
    background: #e8f5e9;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #4caf50;
    flex-shrink: 0;
}

.content {
    flex: 1;
}

.content h4 {
    margin: 0 0 5px;
    font-size: 1rem;
    color: #333;
}

.content p {
    margin: 0;
    font-size: 0.85rem;
    color: #666;
    line-height: 1.4;
}

.close-btn {
    background: none;
    border: none;
    color: #aaa;
    cursor: pointer;
    padding: 0;
    font-size: 0.9rem;
}

.close-btn:hover {
    color: #333;
}`
    },
    {
        id: 191,
        name: "Achievement Unlock",
        category: "cards",
        tags: ["achievement", "gaming", "reward", "badge"],
        html: `<div class="card-achievement">
    <div class="trophy-icon">
        <i class="fas fa-trophy"></i>
    </div>
    <div class="achieve-content">
        <span class="label">ACHIEVEMENT UNLOCKED</span>
        <h3>Master Collector</h3>
        <p>Collected all 100 hidden items</p>
    </div>
    <div class="points">+50 XP</div>
</div>`,
        css: `.card-achievement {
    width: 300px;
    background: #2d3436;
    border-radius: 50px;
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 15px;
    color: white;
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    border: 2px solid #fdcb6e;
}

.trophy-icon {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #fdcb6e, #e17055);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    color: white;
    box-shadow: 0 0 15px rgba(253, 203, 110, 0.5);
}

.achieve-content {
    flex: 1;
}

.achieve-content .label {
    font-size: 0.6rem;
    color: #fdcb6e;
    font-weight: bold;
    letter-spacing: 1px;
    display: block;
    margin-bottom: 2px;
}

.achieve-content h3 {
    margin: 0;
    font-size: 0.95rem;
}

.achieve-content p {
    margin: 2px 0 0;
    font-size: 0.75rem;
    color: #b2bec3;
}

.points {
    background: rgba(255,255,255,0.1);
    padding: 5px 10px;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: bold;
    color: #fdcb6e;
    margin-right: 10px;
}`
    },
    {
        id: 192,
        name: "Mini Login Card",
        category: "cards",
        tags: ["login", "form", "input", "minimal"],
        html: `<div class="card-login">
    <h3>Welcome Back</h3>
    <div class="input-group">
        <i class="far fa-envelope"></i>
        <input type="email" placeholder="Email Address">
    </div>
    <div class="input-group">
        <i class="fas fa-lock"></i>
        <input type="password" placeholder="Password">
    </div>
    <button class="login-btn">Sign In</button>
    <a href="#" class="forgot">Forgot Password?</a>
</div>`,
        css: `.card-login {
    width: 260px;
    background: white;
    border-radius: 15px;
    padding: 25px;
    text-align: center;
    box-shadow: 0 10px 25px rgba(0,0,0,0.05);
}

.card-login h3 {
    margin: 0 0 20px;
    color: #333;
}

.input-group {
    position: relative;
    margin-bottom: 15px;
}

.input-group i {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #aaa;
    font-size: 0.9rem;
}

.input-group input {
    width: 100%;
    padding: 10px 10px 10px 35px;
    border: 1px solid #eee;
    border-radius: 8px;
    outline: none;
    transition: border-color 0.2s;
}

.input-group input:focus {
    border-color: #6c5ce7;
}

.login-btn {
    width: 100%;
    padding: 10px;
    background: #6c5ce7;
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    margin-bottom: 15px;
    transition: background 0.2s;
}

.login-btn:hover {
    background: #5b4bc4;
}

.forgot {
    font-size: 0.8rem;
    color: #888;
    text-decoration: none;
}

.forgot:hover {
    color: #6c5ce7;
}`
    },
    {
        id: 193,
        name: "Testimonial Card",
        category: "cards",
        tags: ["testimonial", "quote", "review", "social"],
        html: `<div class="card-testimonial">
    <div class="quote-icon"><i class="fas fa-quote-left"></i></div>
    <p class="quote-text">"This library has completely transformed our development workflow. The components are beautiful and easy to use."</p>
    <div class="user-profile">
        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica" alt="User">
        <div class="info">
            <h4>Jessica Parker</h4>
            <span>Frontend Developer</span>
        </div>
    </div>
</div>`,
        css: `.card-testimonial {
    width: 280px;
    background: white;
    border-radius: 15px;
    padding: 30px;
    position: relative;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

.quote-icon {
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 2rem;
    color: #f0f0f0;
    z-index: 0;
}

.quote-text {
    position: relative;
    z-index: 1;
    font-style: italic;
    color: #555;
    line-height: 1.6;
    margin: 10px 0 25px;
}

.user-profile {
    display: flex;
    align-items: center;
    gap: 12px;
}

.user-profile img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
}

.user-profile .info h4 {
    margin: 0 0 2px;
    font-size: 0.95rem;
    color: #333;
}

.user-profile .info span {
    font-size: 0.8rem;
    color: #888;
}`
    },
    {
        id: 194,
        name: "Skill Stats Card",
        category: "cards",
        tags: ["stats", "skills", "progress", "dashboard"],
        html: `<div class="card-skills">
    <h3>My Skills</h3>
    <div class="skill-item">
        <div class="skill-header">
            <span>HTML/CSS</span>
            <span>95%</span>
        </div>
        <div class="bar-bg">
            <div class="bar-fill" style="width: 95%; background: #e44d26;"></div>
        </div>
    </div>
    <div class="skill-item">
        <div class="skill-header">
            <span>JavaScript</span>
            <span>85%</span>
        </div>
        <div class="bar-bg">
            <div class="bar-fill" style="width: 85%; background: #f7df1e;"></div>
        </div>
    </div>
    <div class="skill-item">
        <div class="skill-header">
            <span>React</span>
            <span>70%</span>
        </div>
        <div class="bar-bg">
            <div class="bar-fill" style="width: 70%; background: #61dafb;"></div>
        </div>
    </div>
</div>`,
        css: `.card-skills {
    width: 280px;
    background: #2c3e50;
    border-radius: 15px;
    padding: 25px;
    color: white;
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

.card-skills h3 {
    margin: 0 0 20px;
    font-size: 1.2rem;
}

.skill-item {
    margin-bottom: 15px;
}

.skill-item:last-child {
    margin-bottom: 0;
}

.skill-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    font-size: 0.9rem;
}

.bar-bg {
    width: 100%;
    height: 8px;
    background: rgba(255,255,255,0.1);
    border-radius: 4px;
    overflow: hidden;
}

.bar-fill {
    height: 100%;
    border-radius: 4px;
    transition: width 1s ease;
}`
    },
    {
        id: 195,
        name: "Event Ticket Card",
        category: "cards",
        tags: ["event", "ticket", "date", "minimal"],
        html: `<div class="card-ticket">
    <div class="ticket-left">
        <div class="date">
            <span class="day">24</span>
            <span class="month">OCT</span>
        </div>
    </div>
    <div class="ticket-right">
        <span class="event-type">CONCERT</span>
        <h3>Neon Lights Tour</h3>
        <div class="event-info">
            <span><i class="fas fa-map-marker-alt"></i> Madison Square Garden</span>
            <span><i class="far fa-clock"></i> 8:00 PM</span>
        </div>
        <button class="ticket-btn">Get Tickets</button>
    </div>
</div>`,
        css: `.card-ticket {
    width: 320px;
    background: white;
    border-radius: 12px;
    display: flex;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.ticket-left {
    width: 80px;
    background: #6c5ce7;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    position: relative;
    border-right: 2px dashed rgba(255,255,255,0.3);
}

.ticket-left::before, .ticket-left::after {
    content: '';
    position: absolute;
    right: -10px;
    width: 20px;
    height: 20px;
    background: #f5f5f5; /* Match page bg */
    border-radius: 50%;
}

.ticket-left::before { top: -10px; }
.ticket-left::after { bottom: -10px; }

.date {
    text-align: center;
}

.date .day {
    display: block;
    font-size: 1.8rem;
    font-weight: bold;
    line-height: 1;
}

.date .month {
    display: block;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.ticket-right {
    flex: 1;
    padding: 20px;
}

.event-type {
    font-size: 0.7rem;
    color: #6c5ce7;
    font-weight: bold;
    letter-spacing: 1px;
}

.ticket-right h3 {
    margin: 5px 0 10px;
    font-size: 1.1rem;
    color: #333;
}

.event-info {
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 0.8rem;
    color: #666;
    margin-bottom: 15px;
}

.ticket-btn {
    padding: 8px 15px;
    background: #333;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 0.8rem;
    cursor: pointer;
    transition: background 0.2s;
}

.ticket-btn:hover {
    background: #000;
}`
    },
    {
        id: 196,
        name: "Video Preview Card",
        category: "cards",
        tags: ["video", "media", "preview", "play"],
        html: `<div class="card-video">
    <div class="thumbnail">
        <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=500&auto=format&fit=crop&q=60" alt="Thumbnail">
        <div class="play-overlay">
            <i class="fas fa-play"></i>
        </div>
        <span class="duration">12:45</span>
    </div>
    <div class="video-info">
        <div class="avatar-tiny"></div>
        <div class="text">
            <h4>Mountain Hiking Adventure</h4>
            <p>Travel Vlog • 24k views • 2 days ago</p>
        </div>
    </div>
</div>`,
        css: `.card-video {
    width: 280px;
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    cursor: pointer;
}

.thumbnail {
    position: relative;
    height: 160px;
}

.thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.play-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.2s;
}

.play-overlay i {
    font-size: 2rem;
    color: white;
    filter: drop-shadow(0 2px 5px rgba(0,0,0,0.5));
}

.card-video:hover .play-overlay {
    opacity: 1;
}

.duration {
    position: absolute;
    bottom: 8px;
    right: 8px;
    background: rgba(0,0,0,0.8);
    color: white;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.75rem;
}

.video-info {
    padding: 12px;
    display: flex;
    gap: 10px;
}

.avatar-tiny {
    width: 36px;
    height: 36px;
    background: #ddd;
    border-radius: 50%;
    flex-shrink: 0;
}

.video-info .text h4 {
    margin: 0 0 4px;
    font-size: 0.95rem;
    color: #333;
    line-height: 1.3;
}

.video-info .text p {
    margin: 0;
    font-size: 0.75rem;
    color: #888;
}`
    },
    {
        id: 197,
        name: "Gradient Border Card",
        category: "cards",
        tags: ["gradient", "border", "dark", "glow"],
        html: `<div class="card-gradient-border">
    <div class="content">
        <h2>Glowing Border</h2>
        <p>A beautiful gradient border effect created with CSS pseudo-elements.</p>
        <a href="#">Learn More →</a>
    </div>
</div>`,
        css: `.card-gradient-border {
    position: relative;
    width: 280px;
    background: #111;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px; /* Border width */
    overflow: hidden;
}

.card-gradient-border::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
    animation: rotate 3s linear infinite;
}

.card-gradient-border .content {
    position: relative;
    background: #111;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    padding: 25px;
    color: white;
    z-index: 1;
}

@keyframes rotate {
    100% { transform: rotate(360deg); }
}

.content h2 {
    margin: 0 0 10px;
    background: linear-gradient(60deg, #f79533, #ef4e7b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.content p {
    color: #aaa;
    line-height: 1.5;
    margin-bottom: 20px;
}

.content a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-size: 0.9rem;
}

.content a:hover {
    text-decoration: underline;
}`
    },
    {
        id: 198,
        name: "3D Flip Card",
        category: "cards",
        tags: ["3d", "flip", "hover", "interactive"],
        html: `<div class="card-flip">
    <div class="card-inner">
        <div class="card-front">
            <h3>Hover Me</h3>
            <p>To see the back</p>
        </div>
        <div class="card-back">
            <h3>Back Side</h3>
            <p>Here is some hidden content revealed on hover.</p>
            <button>Action</button>
        </div>
    </div>
</div>`,
        css: `.card-flip {
    background-color: transparent;
    width: 260px;
    height: 300px;
    perspective: 1000px;
}

.card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
}

.card-flip:hover .card-inner {
    transform: rotateY(180deg);
}

.card-front, .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.card-front {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
}

.card-back {
    background: white;
    color: #333;
    transform: rotateY(180deg);
}

.card-front h3 { font-size: 1.5rem; margin-bottom: 10px; }
.card-back h3 { color: #764ba2; margin-bottom: 15px; }

.card-back button {
    margin-top: 20px;
    padding: 10px 25px;
    background: #764ba2;
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
}`
    },
    {
        id: 199,
        name: "Wallet Balance Card",
        category: "cards",
        tags: ["wallet", "finance", "balance", "dark"],
        html: `<div class="card-wallet">
    <div class="balance-header">
        <span>Total Balance</span>
        <button><i class="fas fa-ellipsis-v"></i></button>
    </div>
    <div class="balance-amount">$12,450.00</div>
    <div class="trend positive">
        <i class="fas fa-arrow-up"></i> +2.5% today
    </div>
    <div class="wallet-actions">
        <div class="action-item">
            <div class="icon-circle"><i class="fas fa-arrow-up"></i></div>
            <span>Send</span>
        </div>
        <div class="action-item">
            <div class="icon-circle"><i class="fas fa-arrow-down"></i></div>
            <span>Receive</span>
        </div>
        <div class="action-item">
            <div class="icon-circle"><i class="fas fa-plus"></i></div>
            <span>Top up</span>
        </div>
        <div class="action-item">
            <div class="icon-circle"><i class="fas fa-exchange-alt"></i></div>
            <span>Swap</span>
        </div>
    </div>
</div>`,
        css: `.card-wallet {
    width: 300px;
    background: #1e1e2e;
    border-radius: 20px;
    padding: 25px;
    color: white;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.balance-header {
    display: flex;
    justify-content: space-between;
    color: #a0a0b0;
    font-size: 0.9rem;
    margin-bottom: 10px;
}

.balance-header button {
    background: none;
    border: none;
    color: #a0a0b0;
    cursor: pointer;
}

.balance-amount {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 5px;
}

.trend {
    font-size: 0.85rem;
    margin-bottom: 25px;
    display: flex;
    align-items: center;
    gap: 5px;
}

.trend.positive { color: #00ffaa; }
.trend.negative { color: #ff4757; }

.wallet-actions {
    display: flex;
    justify-content: space-between;
}

.action-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    cursor: pointer;
}

.icon-circle {
    width: 45px;
    height: 45px;
    background: #2d2d44;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #7f7fd5;
    transition: background 0.2s;
}

.action-item:hover .icon-circle {
    background: #7f7fd5;
    color: white;
}

.action-item span {
    font-size: 0.8rem;
    color: #a0a0b0;
}`
    },
    {
        id: 200,
        name: "Code Snippet Card",
        category: "cards",
        tags: ["code", "snippet", "developer", "dark"],
        html: `<div class="card-code">
    <div class="code-header">
        <div class="dots">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
        </div>
        <span class="filename">script.js</span>
    </div>
    <div class="code-content">
        <pre><code><span class="keyword">function</span> <span class="function">helloWorld</span>() {
  <span class="keyword">const</span> msg = <span class="string">"Hello!"</span>;
  console.<span class="method">log</span>(msg);
}</code></pre>
    </div>
</div>`,
        css: `.card-code {
    width: 300px;
    background: #282a36;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    font-family: 'Consolas', monospace;
}

.code-header {
    background: #21222c;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.dots {
    display: flex;
    gap: 6px;
}

.dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
}

.dot.red { background: #ff5555; }
.dot.yellow { background: #f1fa8c; }
.dot.green { background: #50fa7b; }

.filename {
    color: #6272a4;
    font-size: 0.8rem;
}

.code-content {
    padding: 20px;
    color: #f8f8f2;
}

.code-content pre {
    margin: 0;
}

.keyword { color: #ff79c6; }
.function { color: #50fa7b; }
.string { color: #f1fa8c; }
.method { color: #8be9fd; }`
    }
];
