  // ─── DATA ───────────────────────────────────────────────────────────
  const PRODUCTS = [
    { id:1,  name:"Linen Oversized Shirt",        cat:"tops",        price:3200,  old:null,  badge:"new",  colors:["#e8ddd3","#b5c4b1","#2c2c2c"], img:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80" },
    { id:2,  name:"Wide Leg Linen Trouser",        cat:"trousers",    price:4800,  old:null,  badge:null,   colors:["#c9b99a","#2c2c2c"], img:"https://images.unsplash.com/photo-1594938298603-c8148c4b4767?w=600&q=80" },
    { id:3,  name:"Silk Midi Dress",               cat:"dresses",     price:7500,  old:9200,  badge:"sale", colors:["#e8ddd3","#8c7b6e"], img:"https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80" },
    { id:4,  name:"Cotton Longline Blazer",        cat:"outerwear",   price:9800,  old:null,  badge:"new",  colors:["#c9b99a","#2c2c2c","#e8ddd3"], img:"https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80" },
    { id:5,  name:"Fine Knit Turtleneck",          cat:"tops",        price:3800,  old:null,  badge:null,   colors:["#e8ddd3","#2c2c2c","#8c7b6e"], img:"https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80" },
    { id:6,  name:"Leather Belt",                  cat:"accessories", price:2200,  old:null,  badge:null,   colors:["#8c7b6e","#2c2c2c"], img:"https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&q=80" },
    { id:7,  name:"Pleated Linen Shorts",          cat:"trousers",    price:3100,  old:null,  badge:"new",  colors:["#c9b99a","#e8ddd3"], img:"https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80" },
    { id:8,  name:"Raw Edge Denim Jacket",         cat:"outerwear",   price:8400,  old:10500, badge:"sale", colors:["#5a7a9e","#2c2c2c"], img:"https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=600&q=80" },
    { id:9,  name:"Slip Silk Cami",                cat:"tops",        price:4200,  old:null,  badge:null,   colors:["#e8ddd3","#8c7b6e","#2c2c2c"], img:"https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&q=80" },
    { id:10, name:"Structured Tote",               cat:"accessories", price:6800,  old:null,  badge:"new",  colors:["#c9b99a","#2c2c2c"], img:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80" },
    { id:11, name:"Satin Maxi Skirt",              cat:"dresses",     price:5200,  old:null,  badge:null,   colors:["#e8ddd3","#5a7a9e"], img:"https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&q=80" },
    { id:12, name:"Boxy Wool Coat",                cat:"outerwear",   price:14500, old:null,  badge:null,   colors:["#c9b99a","#2c2c2c","#e8ddd3"], img:"https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&q=80" },
    { id:13, name:"Poplin Tied Blouse",            cat:"tops",        price:3600,  old:null,  badge:null,   colors:["#ffffff","#e8ddd3"], img:"https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80" },
    { id:14, name:"Tailored Straight Pant",        cat:"trousers",    price:5400,  old:null,  badge:"new",  colors:["#2c2c2c","#c9b99a","#8c7b6e"], img:"https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&q=80" },
    { id:15, name:"Wrap Linen Midi Dress",         cat:"dresses",     price:6200,  old:7800,  badge:"sale", colors:["#e8ddd3","#b5c4b1"], img:"https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80" },
    { id:16, name:"Leather Card Holder",           cat:"accessories", price:1800,  old:null,  badge:null,   colors:["#8c7b6e","#2c2c2c"], img:"https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&q=80" },
    { id:17, name:"Ribbed Tank Top",               cat:"tops",        price:1900,  old:null,  badge:null,   colors:["#e8ddd3","#2c2c2c","#5a7a9e"], img:"https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=600&q=80" },
    { id:18, name:"Cargo Linen Trouser",           cat:"trousers",    price:4400,  old:null,  badge:"new",  colors:["#c9b99a","#2c2c2c"], img:"https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80" },
    { id:19, name:"Oversized Trench",              cat:"outerwear",   price:12800, old:null,  badge:null,   colors:["#c9b99a","#2c2c2c"], img:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80" },
    { id:20, name:"Woven Straw Hat",               cat:"accessories", price:2600,  old:null,  badge:null,   colors:["#c9b99a","#8c7b6e"], img:"https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?w=600&q=80" },
    { id:21, name:"Chiffon Wrap Dress",            cat:"dresses",     price:5900,  old:null,  badge:"new",  colors:["#e8ddd3","#5a7a9e","#2c2c2c"], img:"https://images.unsplash.com/photo-1566206091558-7f218b696731?w=600&q=80" },
    { id:22, name:"Merino V-Neck",                 cat:"tops",        price:4100,  old:4900,  badge:"sale", colors:["#e8ddd3","#2c2c2c","#b5c4b1"], img:"https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&q=80" },
    { id:23, name:"Belted Wool Shorts",            cat:"trousers",    price:3700,  old:null,  badge:null,   colors:["#2c2c2c","#c9b99a"], img:"https://images.unsplash.com/photo-1591195853828-11db59a44f43?w=600&q=80" },
    { id:24, name:"Minimalist Leather Watch",      cat:"accessories", price:9200,  old:null,  badge:null,   colors:["#c9b99a","#2c2c2c","#8c7b6e"], img:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80" },
  ];

  const PAGE_SIZE = 8;
  let currentFilter = 'all';
  let currentSort   = 'featured';
  let visibleCount  = PAGE_SIZE;
  let cart = 0;
  let wished = new Set();

  // ─── CURSOR ─────────────────────────────────────────────────────────
  const cursor = document.getElementById('cursor');
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
  });
  document.addEventListener('mouseover', e => {
    if (e.target.closest('button, a, select, .product-card')) cursor.classList.add('hover');
    else cursor.classList.remove('hover');
  });

  // ─── NAV SCROLL ─────────────────────────────────────────────────────
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 10);
  });

  // ─── FILTER / SORT ──────────────────────────────────────────────────
  document.getElementById('filter-tags').addEventListener('click', e => {
    const btn = e.target.closest('.filter-tag');
    if (!btn) return;
    document.querySelectorAll('.filter-tag').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    visibleCount = PAGE_SIZE;
    renderGrid();
  });

  document.getElementById('sort-select').addEventListener('change', e => {
    currentSort = e.target.value;
    visibleCount = PAGE_SIZE;
    renderGrid();
  });

  document.getElementById('load-more-btn').addEventListener('click', () => {
    visibleCount += PAGE_SIZE;
    renderGrid(true);
  });

  // ─── RENDER ─────────────────────────────────────────────────────────
  function getFiltered() {
    let arr = currentFilter === 'all' ? [...PRODUCTS] : PRODUCTS.filter(p => p.cat === currentFilter);
    if (currentSort === 'price-asc')  arr.sort((a,b) => a.price - b.price);
    if (currentSort === 'price-desc') arr.sort((a,b) => b.price - a.price);
    if (currentSort === 'newest')     arr.sort((a,b) => (b.badge==='new'?1:0) - (a.badge==='new'?1:0));
    return arr;
  }

  function formatPrice(p) {
    return '₹' + p.toLocaleString('en-IN');
  }

  function renderGrid(append = false) {
    const grid = document.getElementById('grid');
    const noResults = document.getElementById('no-results');
    const loadBtn = document.getElementById('load-more-btn');
    const filtered = getFiltered();

    document.getElementById('item-count').textContent = filtered.length;

    if (!append) {
      grid.querySelectorAll('.product-card').forEach(c => c.remove());
    }

    if (filtered.length === 0) {
      noResults.classList.add('show');
      loadBtn.disabled = true;
      return;
    }
    noResults.classList.remove('show');

    const slice = filtered.slice(append ? visibleCount - PAGE_SIZE : 0, visibleCount);
    slice.forEach((p, i) => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.dataset.id = p.id;
      card.innerHTML = `
        <div class="card-image-wrap">
          <img src="${p.img}" alt="${p.name}" loading="lazy"/>
          <div class="card-badges">
            ${p.badge === 'new'  ? '<span class="badge new">New</span>' : ''}
            ${p.badge === 'sale' ? '<span class="badge sale">Sale</span>' : ''}
          </div>
          <div class="color-dots">
            ${p.colors.map(c => `<div class="color-dot" style="background:${c}" title="${c}"></div>`).join('')}
          </div>
          <div class="card-action">
            <button class="btn-cart" data-id="${p.id}">Add to Bag</button>
            <button class="btn-wish ${wished.has(p.id)?'wished':''}" data-wish="${p.id}">♡</button>
          </div>
        </div>
        <div class="card-info">
          <p class="card-category">${p.cat}</p>
          <p class="card-name">${p.name}</p>
          <div class="card-price-row">
            <span class="card-price">${formatPrice(p.price)}</span>
            ${p.old ? `<span class="card-price-old">${formatPrice(p.old)}</span>` : ''}
          </div>
        </div>`;
      grid.insertBefore(card, noResults);
      setTimeout(() => card.classList.add('visible'), append ? i * 80 : i * 60 + 100);
    });

    loadBtn.disabled = visibleCount >= filtered.length;
    if (loadBtn.disabled) loadBtn.textContent = 'All Pieces Loaded';
    else loadBtn.textContent = 'Load More';
  }

  // ─── EVENTS ─────────────────────────────────────────────────────────
  document.getElementById('grid').addEventListener('click', e => {
    const cartBtn = e.target.closest('.btn-cart');
    const wishBtn = e.target.closest('.btn-wish');

    if (cartBtn) {
      const id = parseInt(cartBtn.dataset.id);
      const prod = PRODUCTS.find(p => p.id === id);
      cart++;
      document.querySelector('.nav-actions button:last-child').textContent = `Bag (${cart})`;
      showToast(`${prod.name} added to bag`);
    }

    if (wishBtn) {
      const id = parseInt(wishBtn.dataset.wish);
      if (wished.has(id)) { wished.delete(id); wishBtn.classList.remove('wished'); wishBtn.textContent = '♡'; }
      else { wished.add(id); wishBtn.classList.add('wished'); wishBtn.textContent = '♥'; showToast('Saved to wishlist'); }
    }
  });

  // ─── TOAST ──────────────────────────────────────────────────────────
  let toastTimer;
  function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
  }

  // ─── SCROLL REVEAL ──────────────────────────────────────────────────
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });

  new MutationObserver(() => {
    document.querySelectorAll('.product-card:not(.visible)').forEach(card => observer.observe(card));
  }).observe(document.getElementById('grid'), { childList: true });

  // ─── INIT ────────────────────────────────────────────────────────────
  renderGrid();
