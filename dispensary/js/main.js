// Age gate
(function(){
  const gate = document.getElementById("age-gate");
  if(!gate) return;
  if(localStorage.getItem("19budshop_age_ok") === "1"){ gate.classList.add("hidden"); return; }
  document.getElementById("age-yes").addEventListener("click", ()=>{
    localStorage.setItem("19budshop_age_ok","1");
    gate.classList.add("hidden");
  });
  document.getElementById("age-no").addEventListener("click", ()=>{
    window.location.href = "https://www.google.com";
  });
})();

// Cart management
function addToCart(id, name, price){
  let cart = JSON.parse(localStorage.getItem("19budshop_cart") || "[]");
  cart.push({id, name, price, timestamp: Date.now()});
  localStorage.setItem("19budshop_cart", JSON.stringify(cart));
  showToast("Added to cart · " + name);
  renderCart();
}

function getCart(){
  return JSON.parse(localStorage.getItem("19budshop_cart") || "[]");
}

function renderCart(){
  const cartEl = document.getElementById("cart-items");
  const countEl = document.getElementById("cart-count");
  const totalEl = document.getElementById("cart-total");
  const checkoutBtn = document.getElementById("checkout-btn");
  const cart = getCart();
  if(!cartEl) return;

  if(cart.length === 0){
    cartEl.innerHTML = '<li class="cart__empty">Your cart is empty.</li>';
    if(countEl) countEl.textContent = "0";
    if(totalEl) totalEl.textContent = "UGX 0";
    if(checkoutBtn) checkoutBtn.disabled = true;
    return;
  }

  const total = cart.reduce((sum, item)=>sum + item.price, 0);
  cartEl.innerHTML = cart.map(item=>`<li class="cart__item"><span>${item.name}</span><strong>UGX ${item.price.toLocaleString()}</strong></li>`).join("");
  if(countEl) countEl.textContent = cart.length;
  if(totalEl) totalEl.textContent = `UGX ${total.toLocaleString()}`;
  if(checkoutBtn) checkoutBtn.disabled = false;
}

function checkoutCart(){
  const cart = getCart();
  if(cart.length === 0) return;

  const lines = cart.map(item=>`${item.name} — UGX ${item.price.toLocaleString()}`).join("\n");
  const total = cart.reduce((sum, item)=>sum + item.price, 0);
  const whatsappUrl = `https://wa.me/27750286368?text=${whatsappMessage}`;
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

  const emailBody = encodeURIComponent(`Order Request\n\nCustomer: Website order\nItems:\n${lines}\n\nTotal: UGX ${total.toLocaleString()}\n\nMessage: YOUR ORDER is onway`);
  const whatsappMessage = encodeURIComponent(`Hello 19budshop, I would like to place an order.\n\n${lines}\n\nTotal: UGX ${total.toLocaleString()}\n\nYOUR ORDER is onway`);
  window.location.href = `mailto:mubajje1000mubajje1000@gmail.com?subject=New%20Order%20from%2019budshop&body=${emailBody}`;
  localStorage.removeItem("19budshop_cart");
  renderCart();
  showToast("YOUR ORDER is onway");
}

// Mobile nav
const navToggle = document.getElementById("nav-toggle");
const nav = document.getElementById("nav");
if(navToggle && nav){
  navToggle.addEventListener("click", ()=> nav.classList.toggle("open"));
}

// Featured products
const featured = document.getElementById("featured-grid");
if(featured && typeof PRODUCTS !== "undefined"){
  featured.innerHTML = PRODUCTS.filter(p=>p.featured).slice(0,4).map(productCard).join("");
}

// Shop page
const shopGrid = document.getElementById("shop-grid");
const filterContainer = document.getElementById("filters");
const sortSelect = document.getElementById("sort");
const countEl = document.getElementById("result-count");

if(shopGrid && typeof PRODUCTS !== "undefined"){
  let activeCat = (location.hash || "#all").replace("#","");
  if(!CATEGORIES.find(c=>c.id===activeCat)) activeCat = "all";
  let activeSort = "featured";

  filterContainer.innerHTML = CATEGORIES.map(c=>
    `<button class="filter-btn${c.id===activeCat?" active":""}" data-cat="${c.id}">${c.label}</button>`
  ).join("");

  function render(){
    let list = activeCat==="all" ? [...PRODUCTS] : PRODUCTS.filter(p=>p.category===activeCat);
    if(activeSort==="price-low") list.sort((a,b)=>a.price-b.price);
    else if(activeSort==="price-high") list.sort((a,b)=>b.price-a.price);
    else if(activeSort==="name") list.sort((a,b)=>a.name.localeCompare(b.name));
    else list.sort((a,b)=>(b.featured?1:0)-(a.featured?1:0));
    shopGrid.innerHTML = list.map(productCard).join("");
    if(countEl) countEl.textContent = `${list.length} product${list.length!==1?"s":""}`;
  }

  filterContainer.addEventListener("click", e=>{
    const btn = e.target.closest(".filter-btn");
    if(!btn) return;
    activeCat = btn.dataset.cat;
    filterContainer.querySelectorAll(".filter-btn").forEach(b=>b.classList.toggle("active", b===btn));
    history.replaceState(null,"","#"+activeCat);
    render();
  });
  if(sortSelect){
    sortSelect.addEventListener("change", e=>{ activeSort = e.target.value; render(); });
  }
  render();
}

// Cart UI
const checkoutBtn = document.getElementById("checkout-btn");
if(checkoutBtn){ checkoutBtn.addEventListener("click", checkoutCart); }
renderCart();

// Newsletter & contact forms
function bindForm(id, message){
  const f = document.getElementById(id);
  if(!f) return;
  f.addEventListener("submit", e=>{
    e.preventDefault();
    f.reset();
    showToast(message);
  });
}
bindForm("newsletter-form","Thanks! Check your inbox.");
bindForm("contact-form","Message sent. We'll be in touch.");

// Toast
function showToast(msg){
  let t = document.querySelector(".toast");
  if(!t){ t = document.createElement("div"); t.className = "toast"; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(t._timer);
  t._timer = setTimeout(()=>t.classList.remove("show"), 2400);
}

// Year
const y = document.getElementById("year");
if(y) y.textContent = new Date().getFullYear();
