const PRODUCTS = [
  {name:"Love Hearts Candle",price:299,old_price:249,image:"love-hearts-candle-p01-1.jpg",size:""},
  {name:"Sculpted Elegance Pillar Candle",price:299,old_price:249,image:"sculpted-elegance-pillar-candle-p01-2.jpg",size:""},
  {name:"Tulip Royale Candle",price:349,old_price:299,image:"tulip-royale-candle-p02-1.jpg",size:""},
  {name:"Tulip Royale Candle",price:349,old_price:299,image:"tulip-royale-candle-p02-2.jpg",size:""},
  {name:"Heritage Carved Pillar Candle",price:349,old_price:299,image:"heritage-carved-pillar-candle-p03-1.jpg",size:""},
  {name:"Floral Egg Candle",price:199,old_price:149,image:"floral-egg-candle-p03-2.jpg",size:""},
  {name:"Floral Egg Candle",price:199,old_price:149,image:"floral-egg-candle-p04-1.jpg",size:""},
  {name:"Floral Fusion Cube Candle",price:349,old_price:299,image:"floral-fusion-cube-candle-p04-2.jpg",size:""},
  {name:"2.5 Inch",price:129,old_price:79,image:"2-5-inch-p05-1.jpg",size:""},
  {name:"2.5 Inch",price:199,old_price:149,image:"2-5-inch-p05-2.jpg",size:""},
  {name:"2.5 Inch",price:199,old_price:149,image:"2-5-inch-p06-1.jpg",size:""},
  {name:"2.5 Inch",price:199,old_price:149,image:"2-5-inch-p06-2.jpg",size:""},
  {name:"Twisted Elegance Taper Candles",price:199,old_price:149,image:"twisted-elegance-taper-candles-p07-1.jpg",size:""},
  {name:"Forever Tulips Candle",price:249,old_price:199,image:"forever-tulips-candle-p07-2.jpg",size:""},
  {name:"Royal Peony Candle",price:249,old_price:199,image:"royal-peony-candle-p08-1.jpg",size:""},
  {name:"Lotus Aura Candle",price:249,old_price:199,image:"lotus-aura-candle-p08-2.jpg",size:""},
  {name:"Lotus Aura Candle",price:269,old_price:219,image:"lotus-aura-candle-p09-1.jpg",size:""},
  {name:"Sweet candle 6 set",price:199,old_price:149,image:"sweet-candle-6-set-p09-2.jpg",size:""},
  {name:"Handmade Wax Sachets",price:249,old_price:199,image:"handmade-wax-sachets-p10-1.jpg",size:""},
  {name:"Daisy flower candle",price:199,old_price:149,image:"daisy-flower-candle-p10-2.jpg",size:""},
  {name:"2.5 Inch",price:249,old_price:199,image:"2-5-inch-p11-1.jpg",size:""},
  {name:"2.5 Inch",price:199,old_price:149,image:"2-5-inch-p11-2.jpg",size:""},
  {name:"4.5 Inch",price:599,old_price:599,image:"4-5-inch-p12-1.jpg",size:""},
  {name:"Botanical Harmony Candle",price:699,old_price:699,image:"botanical-harmony-candle-p12-2.jpg",size:""},
  {name:"Spiced Serenity Candle",price:699,old_price:699,image:"spiced-serenity-candle-p13-1.jpg",size:""},
  {name:"Chai Biscuit Candle",price:169,old_price:119,image:"chai-biscuit-candle-p13-2.jpg",size:""},
  {name:"Crystal Ember Bowl",price:349,old_price:299,image:"crystal-ember-bowl-p14-1.jpg",size:""},
  {name:"Crystal Luxe Candle",price:449,old_price:399,image:"crystal-luxe-candle-p14-2.jpg",size:""},
  {name:"Enchanted Bloom jar candle",price:599,old_price:599,image:"enchanted-bloom-jar-candle-p15-1.jpg",size:""},
  {name:"Eternal Love Heart Candle",price:349,old_price:299,image:"eternal-love-heart-candle-p15-2.jpg",size:""},
  {name:"Gilded Sparkle Candle",price:599,old_price:599,image:"gilded-sparkle-candle-p16-1.jpg",size:""},
  {name:"Golden Leaf Radiance",price:449,old_price:399,image:"golden-leaf-radiance-p16-2.jpg",size:""},
  {name:"Golden Lotus Glow",price:499,old_price:499,image:"golden-lotus-glow-p17-1.jpg",size:""},
  {name:"Halo Glow Tealight Candle",price:170,old_price:120,image:"halo-glow-tealight-candle-p17-2.jpg",size:""},
  {name:"Honey Drip Candle",price:299,old_price:249,image:"honey-drip-candle-p18-1.jpg",size:""},
  {name:"Layered crystal gel candles",price:449,old_price:399,image:"layered-crystal-gel-candles-p18-2.jpg",size:""},
  {name:"Floral Elegance Jar Candle",price:499,old_price:499,image:"floral-elegance-jar-candle-p19-1.jpg",size:""},
  {name:"Midnight Bloom Candle",price:499,old_price:499,image:"midnight-bloom-candle-p19-2.jpg",size:""},
  {name:"Noir Royale Candle",price:249,old_price:199,image:"noir-royale-candle-p20-1.jpg",size:""},
  {name:"Ocean Pearl Candle",price:499,old_price:499,image:"ocean-pearl-candle-p20-2.jpg",size:""},
  {name:"Pearl Shell Candle",price:399,old_price:349,image:"pearl-shell-candle-p21-1.jpg",size:""},
  {name:"Rose Bloom Candle",price:349,old_price:299,image:"rose-bloom-candle-p21-2.jpg",size:""},
  {name:"Royal Aura Jar Candle",price:449,old_price:399,image:"royal-aura-jar-candle-p22-1.jpg",size:""},
  {name:"Mandala Bloom Candle",price:299,old_price:249,image:"mandala-bloom-candle-p22-2.jpg",size:""},
  {name:"Sankh candle",price:599,old_price:599,image:"sankh-candle-p23-1.jpg",size:""},
  {name:"Teddy Love Candle",price:299,old_price:249,image:"teddy-love-candle-p23-2.jpg",size:""},
  {name:"Trinity Glow Candle Stand",price:249,old_price:199,image:"trinity-glow-candle-stand-p24-1.jpg",size:""},
  {name:"Sea boat candle",price:699,old_price:699,image:"sea-boat-candle-p24-2.jpg",size:""},
  {name:"Pearl Shell mini Candle",price:199,old_price:149,image:"pearl-shell-mini-candle-p25-1.jpg",size:""}
];

const WHATSAPP_NUMBER = "918527270809";
const DELIVERY_FEE = 100;

let cart = [];
let activeFilter = "all";

const grid = document.getElementById("product-grid");
const money = n => "₹" + Number(n).toLocaleString("en-IN");

function renderProducts() {
  const q = document.getElementById("search").value.trim().toLowerCase();

  const filtered = PRODUCTS.filter(p => {
    const matchesText = p.name.toLowerCase().includes(q);
    const matchesFilter =
      activeFilter === "all" ||
      (activeFilter === "candle"
        ? /candle|tealight|taper/i.test(p.name)
        : /gift|sachet|set/i.test(p.name));

    return matchesText && matchesFilter;
  });

  grid.innerHTML = filtered.map(p => `
    <article class="product-card">
      <img src="${p.image}" alt="${p.name}" loading="lazy"
        onerror="this.onerror=null;this.src='https://placehold.co/600x600/f8f2e9/33251e?text=Opela+Product'">
      <div class="product-info">
        <h3>${p.name}</h3>
        <div class="price">
          ${money(p.price)} <small class="per-piece">Per Piece</small>
        </div>
        <div class="product-actions">
          <button class="add-button" data-add="${p.image}">Add to Cart +</button>
          <button class="order-button" data-order="${p.image}">Order Now</button>
        </div>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll("[data-add]").forEach((btn, index) => {
    btn.addEventListener("click", () => addToCart(filtered[index]));
  });

  grid.querySelectorAll("[data-order]").forEach((btn, index) => {
    btn.addEventListener("click", () => {
      addToCart(filtered[index]);
      document.getElementById("cart").scrollIntoView({ behavior: "smooth" });
    });
  });
}

function addToCart(product) {
  cart.push(product);
  renderCart();
}

function renderCart() {
  document.getElementById("cart-count").textContent = cart.length;

  const holder = document.getElementById("cart-items");

  if (!cart.length) {
    holder.innerHTML = '<p class="empty-cart">Your cart is empty. Add a candle you love.</p>';
  } else {
    holder.innerHTML = cart.map((p, i) => `
      <div class="cart-line">
        <span>${p.name}</span>
        <span>
          ${money(p.price)}
          <button type="button" data-remove="${i}" aria-label="Remove ${p.name}">Remove</button>
        </span>
      </div>
    `).join("");
  }

  holder.querySelectorAll("[data-remove]").forEach(b => {
    b.addEventListener("click", () => {
      cart.splice(Number(b.dataset.remove), 1);
      renderCart();
    });
  });

  const subtotal = cart.reduce((sum, p) => sum + p.price, 0);
  const deliveryFee = cart.length > 0 ? DELIVERY_FEE : 0;

  document.getElementById("cart-total").textContent =
    money(subtotal + deliveryFee);
}

document.querySelectorAll(".filter").forEach(b => {
  b.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(x => x.classList.remove("active"));
    b.classList.add("active");
    activeFilter = b.dataset.filter;
    renderProducts();
  });
});

document.getElementById("search").addEventListener("input", renderProducts);

document.getElementById("order-form").addEventListener("submit", e => {
  e.preventDefault();

  if (!cart.length) {
    alert("Please add at least one product to your cart.");
    return;
  }

  const name = document.getElementById("customer-name").value.trim();
  const phone = document.getElementById("customer-phone").value.trim();
  const address = document.getElementById("customer-address").value.trim();

  const lines = cart.map(p => `• ${p.name} — ${money(p.price)} per piece`).join("\n");
  const subtotal = cart.reduce((sum, p) => sum + p.price, 0);
  const deliveryFee = DELIVERY_FEE;
  const total = subtotal + deliveryFee;

  const message =
    `Hello Opela, I would like to place an order.\n\n` +
    `${lines}\n\n` +
    `Subtotal: ${money(subtotal)}\n` +
    `Delivery Fee: ${money(deliveryFee)}\n` +
    `Total Amount: ${money(total)}\n\n` +
    `Payment Method: Cash on Delivery\n\n` +
    `Name: ${name}\n` +
    `Phone: ${phone}\n` +
    `Address: ${address}\n\n` +
    `Please confirm availability and delivery.`;

  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
    "_blank",
    "noopener"
  );
});

document.getElementById("year").textContent = new Date().getFullYear();

renderProducts();
renderCart();
