// Product catalog
const PRODUCTS = [
  { id:1, name:"OG Kush", category:"flower", price:10000, thc:"26% THC · 1g", description:"Premium OG Kush ganja flower for sale in Kampala, Uganda, with an earthy flavor and calming body effect.", img:"../images/Image relink/og kush.jpg", badge:"New", featured:true },
  { id:2, name:"Wedding Cake", category:"flower", price:10000, thc:"28% THC · 1g", description:"Shop online for Wedding Cake cannabis flower in Uganda with a sweet, creamy taste and relaxing full-body effect.", img:"../images/Image relink/wedding cake.jpg", featured:true },
  { id:3, name:"Mimosa Haze", category:"flower", price:10000, thc:"23% THC · 1g", description:"Buy Mimosa Haze sativa cannabis flower in Kampala for a bright citrus flavor and uplifting high.", img:"../images/Image relink/mimosa haze.jpg", badge:"Sativa" },
  { id:4, name:"Strawberry Gorilla Reserve", category:"flower", price:10000, thc:"24% THC · 1g", description:"Premium Strawberry Gorilla Reserve flower in Uganda with sweet berry flavor, smooth finish, and mellow effect.", img:"../images/Image relink/strawberry gorilla reserve.jpg" },
  { id:5, name:"White Widow Classic", category:"flower", price:10000, thc:"22% THC · 1g", description:"Order White Widow Classic marijuana flower for a balanced high and crisp, woody cannabis flavor.", img:"../images/Image relink/white widow classic.jpg", badge:"Classic" },
  { id:6, name:"Cali Kush Deluxe", category:"flower", price:30000, thc:"25% THC · 1g", description:"Buy premium Cali Kush Deluxe flower for rich flavor, strong body relaxation, and fast delivery online.", img:"../images/cali kush deluxe.jpeg" },
  { id:7, name:"Sour Diesel Elite", category:"flower", price:16000, thc:"24% THC · 1g", description:"Buy Sour Diesel Elite cannabis flower in Kampala with diesel notes, citrus flavor, and an energizing effect.", img:"../images/Image relink/sour diesel elite.jpg", badge:"Popular" },
  { id:8, name:"Rainbow Melon Reserve", category:"flower", price:17500, thc:"26% THC · 1g", description:"Order Rainbow Melon Reserve weed flower in Uganda for juicy tropical flavor and a clean, happy high.", img:"../images/Image relink/rainbow melon reserve.jpg" },
  { id:9, name:"House Indica Pre-Roll Pack", category:"prerolls", price:100000, thc:"15 joints · 1g each", description:"Buy a premium indica pre-roll pack in Kampala with 15 smooth joints for reliable relaxation.", img:"../images/house Indica pre roll pack.jpeg", featured:true },
  { id:10, name:"Infused Diamond Rolls", category:"prerolls", price:35000, thc:"5 rolls · infused", description:"Order infused diamond rolls in Uganda for a strong, longer-lasting pre-roll experience.", img:"../images/infused diamond rolls.jpeg", badge:"Strong" },
  { id:11, name:"Daytime Sativa Singles", category:"prerolls", price:10000, thc:"1 single · uplifting", description:"Shop online for a daytime sativa pre-roll in Kampala with a light, energizing effect.", img:"../images/daytime sativa singles.jpeg" },
  { id:12, name:"Dark Chocolate Squares", category:"edibles", price:30000, thc:"10mg · 10 pieces", description:"Buy premium dark chocolate squares in Uganda with a smooth taste, balanced effect, and easy online ordering.", img:"../images/Dark Chocolate Squares.jpeg", featured:true },
  { id:13, name:"Signature Weed Cookie", category:"edibles", price:20000, thc:"3 cookies · soft baked", description:"Order Signature Weed Cookie in Kampala, a soft-baked weed cookie with classic flavor and a smooth cannabis effect.", img:"../images/Image relink/Weed cookies.jpg", badge:"Budget" },
  { id:14, name:"Signature Weed Gummies", category:"edibles", price:25000, thc:"5 gummies · fruity", description:"Shop online for Signature Weed Gummies in Uganda with fruity flavor, easy dosing, and a convenient cannabis experience.", img:"../images/Image relink/weed gummies.jpg" },
  { id:15, name:"Rolling Papers", category:"accessories", price:10000, thc:"Classic size · 50 sheets", description:"Buy premium rolling papers in Kampala for clean, smooth rolls and easy marijuana rolling at home.", img:"../images/Image relink/Rolling paper.jpg" },
  { id:16, name:"Grinder", category:"accessories", price:70000, thc:"Metal · durable", description:"Order a durable metal grinder in Uganda for fast, even cannabis preparation and simple weed rolling.", img:"../images/Image relink/grinder.jpg" },
  { id:17, name:"Refillable Lighter", category:"accessories", price:5000, thc:"Reliable · refillable", description:"Shop online for a refillable lighter in Kampala that is reliable, easy to use, and perfect for daily cannabis sessions.", img:"../images/Image relink/Lighter.jpg" },
  { id:18, name:"Manual Rolling Machine", category:"accessories", price:80000, thc:"Manual · efficient", description:"Buy a manual rolling machine in Uganda for quick, consistent cannabis rolls and fast delivery.", img:"../images/Image relink/rolling machine.jpg" },
  { id:19, name:"Plastic Bong", category:"accessories", price:80000, thc:"Durable · portable", description:"Order a portable plastic bong in Kampala for easy handling and convenient cannabis smoking.", img:"../images/Image relink/Plastic bong.jpg" },
  { id:20, name:"Glass Bong", category:"accessories", price:200000, thc:"Premium glass · handcrafted", description:"Shop online for a handcrafted glass bong in Uganda with a smooth finish and premium cannabis smoking experience.", img:"../images/Image relink/glass bong.jpg" },
];

const CATEGORIES = [
  { id:"all", label:"All Products" },
  { id:"flower", label:"Flower" },
  { id:"prerolls", label:"Pre-Rolls" },
  { id:"edibles", label:"Edibles" },
  { id:"accessories", label:"Accessories" },
];

function productCard(p){
  const whatsappUrl = `https://wa.me/27750286368?text=I%20would%20like%20to%20order%20${encodeURIComponent(p.name)}%20-%20UGX%20${p.price.toLocaleString()}`;
  return `<article class="product" data-id="${p.id}">
    <div class="product__media">
      ${p.badge ? `<span class="product__badge">${p.badge}</span>` : ""}
      ${p.comingSoon ? `<span class="product__badge product__badge--soon">Coming Soon</span>` : ""}
      <img src="${p.img}" alt="${p.name}" loading="lazy" />
    </div>
    <span class="product__cat">${p.category}</span>
    <h3 class="product__name">${p.name}</h3>
    ${p.description ? `<p class="product__description">${p.description}</p>` : ""}
    <div class="product__meta">
      <span class="product__price">${p.price > 0 ? `UGX ${p.price.toLocaleString()}` : 'Coming Soon'}</span>
      <span class="product__thc">${p.thc}</span>
    </div>
    <div class="product__actions">
      ${p.price > 0 ? `<button class="btn btn--small btn--primary" onclick="addToCart(${p.id}, '${p.name}', ${p.price})">Add to Cart</button>` : `<button class="btn btn--small btn--primary" disabled>Coming Soon</button>`}
      <a href="${whatsappUrl}" target="_blank" class="btn btn--small btn--secondary">Order on WhatsApp</a>
    </div>
  </article>`;
}
