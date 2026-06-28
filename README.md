# 19budshop — Premium Cannabis Dispensary

A static, production-ready website for a premium cannabis dispensary. Built with vanilla HTML, CSS and JavaScript — no build step required.

## Structure
```
/
├── index.html           Home (hero, categories, featured, story, reviews, newsletter)
├── pages/
│   ├── shop.html        Filterable product catalog
│   ├── about.html       Brand story + values
│   └── contact.html     Visit info + contact form
├── css/styles.css       Full design system
├── js/
│   ├── products.js      Product catalog data
│   └── main.js          Age gate, filters, forms, mobile nav
├── images/              Hero + product imagery
└── netlify.toml         Netlify config
```

## Features
- Age gate (21+) with localStorage memory
- Sticky responsive nav with mobile menu
- Filterable / sortable shop page (6 categories, 18 products)
- Newsletter + contact forms with toast feedback
- Premium editorial design (Cormorant Garamond + Inter, dark + cream palette, gold accents)
- Fully responsive (mobile / tablet / desktop)

## Deploy to Netlify
1. Drag the `dispensary` folder onto https://app.netlify.com/drop, OR
2. Push to a git repo and connect on Netlify (no build command needed — publish dir is the root).
