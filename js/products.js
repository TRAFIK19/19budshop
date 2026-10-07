// Product catalog
const PRODUCTS = [
  { id:1, name:"OG Kush", category:"flower", price:10000, thc:"26% THC · 1g", description:"Buy premium OG Kush cannabis flower with a classic earthy taste and a calming body effect.", img:"../images/Image relink/og kush.jpg", badge:"New", featured:true },
  { id:2, name:"Wedding Cake", category:"flower", price:10000, thc:"28% THC · 1g", description:"Buy Wedding Cake cannabis flower for a sweet, creamy taste and a relaxing full-body experience.", img:"../images/Image relink/wedding cake.jpg", featured:true },
  { id:3, name:"Mimosa Haze", category:"flower", price:10000, thc:"23% THC · 1g", description:"Buy Mimosa Haze flower for a bright citrus taste and an uplifting, energetic high.", img:"../images/Image relink/mimosa haze.jpg", badge:"Sativa" },
  { id:4, name:"Strawberry Gorilla Reserve", category:"flower", price:10000, thc:"24% THC · 1g", description:"Buy Strawberry Gorilla Reserve flower with sweet berry flavor and a smooth, mellow finish.", img:"../images/Image relink/strawberry gorilla reserve.jpg" },
  { id:5, name:"White Widow Classic", category:"flower", price:10000, thc:"22% THC · 1g", description:"Buy White Widow Classic flower for a balanced high and a crisp, woody cannabis flavor.", img:"../images/Image relink/white widow classic.jpg", badge:"Classic" },
  { id:6, name:"Cali Kush Deluxe", category:"flower", price:30000, thc:"25% THC · 1g", description:"Buy Cali Kush Deluxe cannabis flower for rich flavor and a deep nighttime relaxation.", img:"../images/cali kush deluxe.jpeg" },
  { id:7, name:"Sour Diesel Elite", category:"flower", price:16000, thc:"24% THC · 1g", description:"Buy Sour Diesel Elite flower for a strong diesel taste, citrus notes, and an energizing lift.", img:"../images/Image relink/sour diesel elite.jpg", badge:"Popular" },
  { id:8, name:"Rainbow Melon Reserve", category:"flower", price:17500, thc:"26% THC · 1g", description:"Buy Rainbow Melon Reserve flower for juicy tropical flavor and a clean, happy cannabis effect.", img:"../images/Image relink/rainbow melon reserve.jpg" },
  { id:9, name:"House Indica Pre-Roll Pack", category:"prerolls", price:100000, thc:"15 joints · 1g each", description:"Buy a 15-joint indica pre-roll pack for a smooth, relaxing experience.", img:"../images/house Indica pre roll pack.jpeg", featured:true },
  { id:10, name:"Infused Diamond Rolls", category:"prerolls", price:35000, thc:"5 rolls · infused", description:"Buy infused diamond rolls for a stronger, longer-lasting pre-roll experience.", img:"../images/infused diamond rolls.jpeg", badge:"Strong" },
  { id:11, name:"Daytime Sativa Singles", category:"prerolls", price:10000, thc:"1 single · uplifting", description:"Buy a daytime sativa pre-roll for a light, energizing cannabis experience.", img:"../images/daytime sativa singles.jpeg" },
  { id:12, name:"Dark Chocolate Squares", category:"edibles", price:30000, thc:"10mg · 10 pieces", description:"Buy dark chocolate squares with a smooth taste and a balanced, long-lasting effect.", img:"../images/Dark Chocolate Squares.jpeg", featured:true },
  { id:13, name:"Signature Weed Cookie", category:"edibles", price:20000, thc:"3 cookies · soft baked", description:"Buy a soft-baked weed cookie for a classic cookie flavor and a smooth cannabis effect.", img:"../images/Image relink/Weed cookies.jpg", badge:"Budget" },
  { id:14, name:"Signature Weed Gummies", category:"edibles", price:25000, thc:"5 gummies · fruity", description:"Buy fruity weed gummies with easy-to-dose portions and a convenient cannabis experience.", img:"../images/Image relink/weed gummies.jpg" },
  { id:15, name:"Rolling Papers", category:"accessories", price:10000, thc:"Classic size · 50 sheets", description:"Buy premium rolling papers for clean, smooth rolls every time.", img:"../images/Image relink/Rolling paper.jpg" },
  { id:16, name:"Grinder", category:"accessories", price:70000, thc:"Metal · durable", description:"Buy a durable metal grinder for fast, even cannabis preparation.", img:"../images/Image relink/grinder.jpg" },
  { id:17, name:"Refillable Lighter", category:"accessories", price:5000, thc:"Reliable · refillable", description:"Buy a refillable lighter for reliable, everyday cannabis use.", img:"../images/Image relink/Lighter.jpg" },
  { id:18, name:"Manual Rolling Machine", category:"accessories", price:80000, thc:"Manual · efficient", description:"Buy a manual rolling machine for quick, consistent, and easy cannabis rolls.", img:"../images/Image relink/rolling machine.jpg" },
  { id:19, name:"Plastic Bong", category:"accessories", price:80000, thc:"Durable · portable", description:"Buy a portable plastic bong for easy handling and simple daily use.", img:"../images/Image relink/Plastic bong.jpg" },
  { id:20, name:"Glass Bong", category:"accessories", price:200000, thc:"Premium glass · handcrafted", description:"Buy a handcrafted glass bong for a smooth, refined cannabis experience.", img:"../images/Image relink/glass bong.jpg" },
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
