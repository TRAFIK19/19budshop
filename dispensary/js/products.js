// Product catalog
const PRODUCTS = [
  { id:1, name:"Sunset Sherbet", category:"flower", price:15000, thc:"24% THC · 1g", description:"A creamy, berry-forward hybrid with a smooth finish and relaxing effect.", img:"../images/sunset sherbet.jpeg", badge:"Top Shelf", featured:true },
  { id:2, name:"Blue Dream", category:"flower", price:15000, thc:"22% THC · 1g", description:"A balanced sativa-dominant strain known for bright flavor and uplifting energy.", img:"../images/blue dream.jpeg" },
  { id:3, name:"OG Kush", category:"flower", price:15000, thc:"26% THC · 1g", description:"A classic earthy strain with bold flavor and a deeply calming body effect.", img:"../images/og kus.jpeg", badge:"New" },
  { id:4, name:"Wedding Cake", category:"flower", price:15000, thc:"28% THC · 1g", description:"A rich, sweet strain with a velvety profile and comforting, full-body relaxation.", img:"../images/flower.jpg" },
  { id:5, name:"Mimosa Haze", category:"flower", price:16000, thc:"23% THC · 1g", description:"A bright citrus strain with uplifting notes and a lively, energetic feel.", img:"../images/mimosa haze.jpeg", badge:"Sativa" },
  { id:6, name:"Strawberry Gorilla Reserve", category:"flower", price:16500, thc:"24% THC · 1g", description:"A fruity, premium flower with sweet berry notes and a smooth, mellow finish.", img:"../images/strawberry gorilla reserve.jpeg" },
  { id:7, name:"White Widow Classic", category:"flower", price:15500, thc:"22% THC · 1g", description:"A timeless hybrid celebrated for its balanced high and crisp, woody flavor.", img:"../images/white widow classic.jpeg", badge:"Classic" },
  { id:8, name:"Cali Kush Deluxe", category:"flower", price:30000, thc:"25% THC · 1g", description:"A lush, full-bodied indica with rich flavor and deep nighttime relaxation.", img:"../images/cali kush deluxe.jpeg" },
  { id:9, name:"Sour Diesel Elite", category:"flower", price:16000, thc:"24% THC · 1g", description:"An iconic fuel-forward strain with sharp citrus tones and a strong, invigorating lift.", img:"../images/sour diesel elite.jpeg", badge:"Popular" },
  { id:10, name:"Rainbow Melon Reserve", category:"flower", price:17500, thc:"26% THC · 1g", description:"A sweet, juicy strain with tropical fruit notes and a clean, euphoric effect.", img:"../images/rainbow melon reserve.jpeg" },
  { id:11, name:"House Indica Pre-Roll Pack", category:"prerolls", price:100000, thc:"15 joints · 1g each", description:"A premium pack of 15 hand-rolled joints crafted for smooth, relaxing evenings.", img:"../images/house Indica pre roll pack.jpeg", featured:true },
  { id:12, name:"Infused Diamond Rolls", category:"prerolls", price:35000, thc:"5 rolls · infused", description:"A bold infused pre-roll selection designed for a richer, longer-lasting experience.", img:"../images/infused diamond rolls.jpeg", badge:"Strong" },
  { id:13, name:"Daytime Sativa Singles", category:"prerolls", price:10000, thc:"1 single · uplifting", description:"A light, energizing pre-roll option ideal for daytime use and creative focus.", img:"../images/daytime sativa singles.jpeg" },
  { id:14, name:"Dark Chocolate Squares", category:"edibles", price:30000, thc:"10mg · 10 pieces", description:"Rich dark chocolate bites with a smooth texture and balanced, long-lasting effects.", img:"../images/Dark Chocolate Squares.jpeg", featured:true },
  { id:15, name:"Citrus Gummies", category:"edibles", price:25000, thc:"5 gummies · 100mg", description:"Bright citrus gummies with a juicy flavor and a mellow, easygoing experience.", img:"../images/Citrus Gummies.jpeg" },
  { id:16, name:"Sleep Mints", category:"edibles", price:50000, thc:"CBN + soothing", description:"A calming mint blend crafted for restful evenings and a more gentle wind-down.", img:"../images/Sleep Mints.jpeg", badge:"For sleep" },
  { id:17, name:"Signature Weed Cookie", category:"edibles", price:20000, thc:"3 cookies · soft baked", description:"A soft, chewy treat with a classic cookie flavor and a smooth, balanced effect.", img:"../images/Signature Weed Cookie.jpeg", badge:"Budget" },
  { id:18, name:"Signature Weed Gummies", category:"edibles", price:25000, thc:"5 gummies · fruity", description:"A convenient gummy option with fruity flavor and an easy-to-dose experience.", img:"../images/Signature Weed Gummies.jpeg" },
  { id:19, name:"Live Resin Cartridge", category:"vapes", price:150000, thc:"1g · 82% THC", description:"A potent, terpene-rich cartridge made for bold flavor and strong effects.", img:"../images/vapes.jpg", featured:true },
  { id:20, name:"All-In-One Disposable", category:"vapes", price:150000, thc:"0.5g · premium", description:"A sleek, ready-to-use disposable with dependable potency and simple convenience.", img:"../images/vapes.jpg" },
  { id:21, name:"Strain-Specific Pod", category:"vapes", price:150000, thc:"0.5g · refined", description:"A refined pod crafted for a clean draw and authentic strain character.", img:"../images/vapes.jpg" },
  { id:22, name:"Live Rosin Badder", category:"concentrates", price:0, thc:"1g · 75% THC", description:"A solventless concentrate with rich texture and exceptional purity.", img:"../images/concentrates.jpg", badge:"Solventless", comingSoon:true },
  { id:23, name:"Diamond Sauce", category:"concentrates", price:0, thc:"1g · premium", description:"A terpene-rich extract known for its bold profile and powerful finish.", img:"../images/concentrates.jpg", comingSoon:true },
  { id:24, name:"Full-Spectrum CBD Tincture", category:"cbd", price:0, thc:"1500mg CBD", description:"A balanced tincture with broad-spectrum support for everyday wellness.", img:"../images/cbd.jpg", comingSoon:true },
  { id:25, name:"Recovery Topical Balm", category:"cbd", price:0, thc:"500mg CBD", description:"A soothing balm designed to support comfort and ease after a long day.", img:"../images/cbd.jpg", badge:"Wellness", comingSoon:true },
  { id:26, name:"CBD:THC Balance Gummies", category:"cbd", price:0, thc:"1:1 ratio", description:"A thoughtfully balanced gummy for those seeking a gentle, well-rounded experience.", img:"../images/cbd.jpg", comingSoon:true },
];

const CATEGORIES = [
  { id:"all", label:"All Products" },
  { id:"flower", label:"Flower" },
  { id:"prerolls", label:"Pre-Rolls" },
  { id:"edibles", label:"Edibles" },
  { id:"vapes", label:"Vapes" },
  { id:"concentrates", label:"Concentrates" },
  { id:"cbd", label:"CBD & Wellness" },
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
