const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    description: "Over-ear headphones with deep bass",
    price: 2499,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80"
  },
  {
    id: 2,
    name: "Smart Watch",
    category: "Electronics",
    description: "Fitness tracking with heart-rate monitor",
    price: 3299,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80"
  },
  {
    id: 3,
    name: "Men's Casual Jacket",
    category: "Fashion",
    description: "Lightweight jacket for everyday wear",
    price: 1899,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&q=80"
  },
  {
    id: 4,
    name: "Women's Summer Dress",
    category: "Fashion",
    description: "Breathable fabric, floral print",
    price: 1499,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80"
  },
  {
    id: 5,
    name: "Ceramic Dinner Set",
    category: "Home",
    description: "16-piece set for everyday dining",
    price: 2199,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1584346133934-a3afd2a08d7a?w=400&q=80"
  },
  {
    id: 6,
    name: "Table Lamp",
    category: "Home",
    description: "Warm-light lamp with wooden base",
    price: 999,
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&q=80"
  },
  {
    id: 7,
    name: "Leather Wallet",
    category: "Accessories",
    description: "Genuine leather, slim design",
    price: 799,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&q=80"
  },
  {
    id: 8,
    name: "Sunglasses",
    category: "Accessories",
    description: "UV-protected, polarized lenses",
    price: 1199,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&q=80"
  },
  {
    id: 9,
    name: "Bluetooth Speaker",
    category: "Electronics",
    description: "Portable speaker with 12-hour battery",
    price: 1799,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80"
  },
  {
    id: 10,
    name: "Backpack",
    category: "Accessories",
    description: "Water-resistant, laptop compartment",
    price: 1599,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80"
  },

  {
    id: 11,
    name: "Wireless Mouse",
    category: "Electronics",
    description: "Ergonomic mouse with silent clicks",
    price: 699,
    rating: 4.3,
    image: "https://picsum.photos/seed/wireless-mouse/400/400"
  },
  {
    id: 12,
    name: "Portable Power Bank",
    category: "Electronics",
    description: "10000mAh fast-charging power bank",
    price: 1299,
    rating: 4.4,
    image: "https://picsum.photos/seed/power-bank/400/400"
  },
  {
    id: 13,
    name: "Mechanical Keyboard",
    category: "Electronics",
    description: "RGB backlit keyboard with clicky switches",
    price: 2899,
    rating: 4.6,
    image: "https://picsum.photos/seed/mechanical-keyboard/400/400"
  },

  /* ----- Extra Fashion (to reach 6 total) ----- */
  {
    id: 14,
    name: "Denim Jeans",
    category: "Fashion",
    description: "Slim-fit stretchable denim",
    price: 1699,
    rating: 4.2,
    image: "https://picsum.photos/seed/denim-jeans/400/400"
  },
  {
    id: 15,
    name: "Cotton T-Shirt",
    category: "Fashion",
    description: "Soft, breathable everyday tee",
    price: 599,
    rating: 4.1,
    image: "https://picsum.photos/seed/cotton-tshirt/400/400"
  },
  {
    id: 16,
    name: "Formal Blazer",
    category: "Fashion",
    description: "Tailored fit for office and events",
    price: 3499,
    rating: 4.5,
    image: "https://picsum.photos/seed/formal-blazer/400/400"
  },
  {
    id: 17,
    name: "Running Shoes",
    category: "Fashion",
    description: "Lightweight shoes with cushioned sole",
    price: 2299,
    rating: 4.6,
    image: "https://picsum.photos/seed/running-shoes/400/400"
  },

  {
    id: 18,
    name: "Cotton Bedsheet Set",
    category: "Home",
    description: "King-size bedsheet with 2 pillow covers",
    price: 1399,
    rating: 4.4,
    image: "https://picsum.photos/seed/bedsheet-set/400/400"
  },
  {
    id: 19,
    name: "Non-Stick Cookware Set",
    category: "Home",
    description: "5-piece set for everyday cooking",
    price: 2599,
    rating: 4.5,
    image: "https://picsum.photos/seed/cookware-set/400/400"
  },
  {
    id: 20,
    name: "Wall Clock",
    category: "Home",
    description: "Minimalist wooden wall clock",
    price: 899,
    rating: 4.2,
    image: "https://picsum.photos/seed/wall-clock/400/400"
  },
  {
    id: 21,
    name: "Storage Organizer Boxes",
    category: "Home",
    description: "Set of 3 stackable fabric organizers",
    price: 749,
    rating: 4.0,
    image: "https://picsum.photos/seed/storage-boxes/400/400"
  },

  {
    id: 22,
    name: "Analog Wrist Watch",
    category: "Accessories",
    description: "Classic leather-strap wrist watch",
    price: 1899,
    rating: 4.5,
    image: "https://picsum.photos/seed/wrist-watch/400/400"
  },
  {
    id: 23,
    name: "Silver Bracelet",
    category: "Accessories",
    description: "Elegant chain bracelet, adjustable size",
    price: 649,
    rating: 4.3,
    image: "https://picsum.photos/seed/silver-bracelet/400/400"
  },
  {
    id: 24,
    name: "Cap & Beanie Combo",
    category: "Accessories",
    description: "2-in-1 pack for all seasons",
    price: 499,
    rating: 4.1,
    image: "https://picsum.photos/seed/cap-beanie/400/400"
  }
];

const categories = [
  { name: "Electronics", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&q=80" },
  { name: "Fashion", image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&q=80" },
  { name: "Home", image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&q=80" },
  { name: "Accessories", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80" }
];

let cart = [];
let currentCategory = "All";
let currentSearch = "";

const productGrid = document.getElementById("productGrid");
const categoryGrid = document.getElementById("categoryGrid");
const noResults = document.getElementById("noResults");
const filterBar = document.getElementById("filterBar");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

const cartBtn = document.getElementById("cartBtn");
const cartSidebar = document.getElementById("cartSidebar");
const cartOverlay = document.getElementById("cartOverlay");
const closeCart = document.getElementById("closeCart");
const cartItemsEl = document.getElementById("cartItems");
const cartEmptyEl = document.getElementById("cartEmpty");
const cartCountEl = document.getElementById("cartCount");
const cartTotalItemsEl = document.getElementById("cartTotalItems");
const cartSubtotalEl = document.getElementById("cartSubtotal");
const checkoutBtn = document.getElementById("checkoutBtn");

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");

function renderCategories() {
  categoryGrid.innerHTML = categories.map(cat => `
    <div class="category-card" data-category="${cat.name}">
      <img src="${cat.image}" alt="${cat.name}">
      <div class="cat-label">Shop <span>${cat.name}</span></div>
    </div>
  `).join("");

  document.querySelectorAll(".category-card").forEach(card => {
    card.addEventListener("click", () => {
      const category = card.dataset.category;
      setActiveFilter(category);
      document.getElementById("products").scrollIntoView({ behavior: "smooth" });
    });
  });
}

function renderProducts() {
  let filtered = products;

  if (currentCategory !== "All") {
    filtered = filtered.filter(p => p.category === currentCategory);
  }

  if (currentSearch.trim() !== "") {
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(currentSearch.toLowerCase())
    );
  }

  if (filtered.length === 0) {
    productGrid.innerHTML = "";
    noResults.style.display = "block";
    return;
  }
  noResults.style.display = "none";

  productGrid.innerHTML = filtered.map(p => `
    <div class="product-card">
      <img class="product-img" src="${p.image}" alt="${p.name}">
      <div class="product-info">
        <h3>${p.name}</h3>
        <p class="desc">${p.description}</p>
        <p class="product-rating">${"⭐".repeat(Math.round(p.rating))} (${p.rating})</p>
        <p class="product-price">₹${p.price.toLocaleString("en-IN")}</p>
        <button class="add-to-cart-btn" onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    </div>
  `).join("");
}

function setActiveFilter(category) {
  currentCategory = category;

  // Update the active button style
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.category === category);
  });

  renderProducts();
}

filterBar.addEventListener("click", (e) => {
  if (e.target.classList.contains("filter-btn")) {
    setActiveFilter(e.target.dataset.category);
  }
});

searchInput.addEventListener("input", (e) => {
  currentSearch = e.target.value;
  renderProducts();
});

searchBtn.addEventListener("click", () => {
  renderProducts();
});

function addToCart(productId) {
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }

  updateCart();
  openCart();
}

function increaseQty(productId) {
  const item = cart.find(item => item.id === productId);
  if (item) item.quantity += 1;
  updateCart();
}

function decreaseQty(productId) {
  const item = cart.find(item => item.id === productId);
  if (!item) return;

  item.quantity -= 1;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }
  updateCart();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCart();
}

function updateCart() {
  const cartDetails = cart.map(item => {
    const product = products.find(p => p.id === item.id);
    return { ...product, quantity: item.quantity };
  });

  if (cartDetails.length === 0) {
    cartItemsEl.innerHTML = "";
    cartEmptyEl.style.display = "block";
  } else {
    cartEmptyEl.style.display = "none";
    cartItemsEl.innerHTML = cartDetails.map(item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-item-details">
          <h4>${item.name}</h4>
          <p class="cart-item-price">₹${item.price.toLocaleString("en-IN")}</p>
          <div class="qty-controls">
            <button onclick="decreaseQty(${item.id})">−</button>
            <span>${item.quantity}</span>
            <button onclick="increaseQty(${item.id})">+</button>
          </div>
        </div>
        <button class="remove-item" onclick="removeFromCart(${item.id})">✕</button>
      </div>
    `).join("");
  }

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartDetails.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  cartCountEl.textContent = totalItems;
  cartTotalItemsEl.textContent = totalItems;
  cartSubtotalEl.textContent = `₹${subtotal.toLocaleString("en-IN")}`;
}

function openCart() {
  cartSidebar.classList.add("active");
  cartOverlay.classList.add("active");
}

function closeCartSidebar() {
  cartSidebar.classList.remove("active");
  cartOverlay.classList.remove("active");
}

cartBtn.addEventListener("click", openCart);
closeCart.addEventListener("click", closeCartSidebar);
cartOverlay.addEventListener("click", closeCartSidebar);

checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty. Add some products first!");
    return;
  }
  alert("Thank you for shopping with SHEETAL MART! Your order has been placed.");
  cart = [];
  updateCart();
  closeCartSidebar();
});

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});


navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

contactForm.addEventListener("submit", (e) => {
  e.preventDefault(); 

  formSuccess.style.display = "block";
  contactForm.reset();

  setTimeout(() => {
    formSuccess.style.display = "none";
  }, 4000);
});


renderCategories();
renderProducts();
updateCart();
