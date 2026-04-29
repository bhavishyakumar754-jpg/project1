  // ─── DATA ───────────────────────────────────────────────────────────
  const PRODUCTS = [
    { id:1,  name:"Cobalt Heritage Dupatta Set",   cat:"dupatta",     price:6200,  old:null,  badge:"new",  colors:["#123d80","#4da7a0","#8b6b48"], img:"../assets/look-cobalt-dupatta-coord-set.png" },
    { id:2,  name:"Maroon Motif Kurta Set",        cat:"sets",        price:4800,  old:null,  badge:null,   colors:["#7d1624","#211b20","#b38c70"], img:"../assets/look-maroon-motif-kurta-set.png" },
    { id:3,  name:"Mustard Floral Dupatta Set",    cat:"festive",     price:7500,  old:9200,  badge:"sale", colors:["#b08c18","#9eb191","#d98e43"], img:"../assets/look-mustard-floral-dupatta-set.png" },
    { id:4,  name:"Cocoa Salwar Set",              cat:"sets",        price:5400,  old:null,  badge:"new",  colors:["#6a4427","#311f18","#b08b62"], img:"../assets/look-cocoa-kurta-salwar-set.png" },
    { id:5,  name:"Rust Ikat Coord Set",           cat:"coords",      price:5800,  old:null,  badge:null,   colors:["#8b533e","#6e8e73","#d9704a"], img:"../assets/look-rust-ikat-coord-set.png" },
    { id:6,  name:"Kiwad Accessories Edit",        cat:"accessories", price:3200,  old:null,  badge:"new",  colors:["#cf9e15","#69b54a","#d1508b"], img:"../assets/campaign-accessories-display.png" },
    { id:7,  name:"Crimson Flared Coord Set",      cat:"festive",     price:6900,  old:null,  badge:"new",  colors:["#a51626","#6b1220","#d2a368"], img:"../assets/look-crimson-flared-coord-set.png" },
    { id:8,  name:"Teal Jhumka Edit",              cat:"accessories", price:2600,  old:null,  badge:null,   colors:["#0f7b78","#d4a548","#d9c6a7"], img:"../assets/portrait-teal-gold-jhumka.png" },
    { id:9,  name:"Sky Blue Mirror Dupatta Set",   cat:"dupatta",     price:6400,  old:null,  badge:"new",  colors:["#8fcbe5","#c33867","#c7a057"], img:"../assets/look-sky-blue-pink-dupatta-set.png" },
    { id:10, name:"Navy Printed Tunic Set",        cat:"coords",      price:5200,  old:null,  badge:null,   colors:["#15325d","#cf6c4d","#8f96a6"], img:"../assets/look-navy-printed-tunic-set.png" },
    { id:11, name:"Ivory Embroidered Anarkali",    cat:"festive",     price:8900,  old:10500, badge:"sale", colors:["#e7d3bb","#9d8463","#b3a18d"], img:"../assets/look-ivory-embroidered-anarkali.png" },
    { id:12, name:"Fuchsia Drape Coord Set",       cat:"coords",      price:7100,  old:8200,  badge:"sale", colors:["#aa2550","#2d3c7e","#d78a2d"], img:"../assets/look-fuchsia-printed-drape-set.png" },
    { id:13, name:"Olive Leaf Dupatta Set",        cat:"dupatta",     price:6800,  old:null,  badge:null,   colors:["#7d8f33","#c6b0d9","#d2ad61"], img:"../assets/look-olive-lilac-leaf-dupatta-set.png" },
    { id:14, name:"Lime Brocade Straight Set",     cat:"sets",        price:5600,  old:null,  badge:"new",  colors:["#a4c331","#1161a6","#d1a95a"], img:"../assets/look-lime-blue-brocade-set.png" },
    { id:15, name:"Teal Sharara Set",              cat:"festive",     price:8400,  old:9800,  badge:"sale", colors:["#0f7b78","#cfb566","#9e553d"], img:"../assets/look-teal-sharara-dupatta-set.png" },
    { id:16, name:"Crimson Skirt & Jacket Set",    cat:"festive",     price:9300,  old:null,  badge:"new",  colors:["#a91f32","#e6c05a","#7a3845"], img:"../assets/look-crimson-brocade-skirt-set.png" },
    { id:17, name:"Navy Asymmetric Kurta Set",     cat:"sets",        price:5900,  old:null,  badge:null,   colors:["#0f2957","#ae3540","#d6b27b"], img:"../assets/look-navy-asymmetric-kurta-set.png" },
    { id:18, name:"Cobalt Dupatta Portrait",       cat:"dupatta",     price:4100,  old:null,  badge:null,   colors:["#1a3872","#4da8a3","#a87a42"], img:"../assets/portrait-cobalt-multicolor-dupatta.png" },
    { id:19, name:"Mustard Floral Portrait",       cat:"festive",     price:4500,  old:null,  badge:"new",  colors:["#b28b1f","#9cae8a","#df9942"], img:"../assets/portrait-mustard-floral-dupatta.png" },
    { id:20, name:"Mirror Border Dupatta Detail",  cat:"accessories", price:2200,  old:null,  badge:null,   colors:["#86c9e4","#c23669","#d4ab56"], img:"../assets/detail-sky-blue-pink-dupatta.png" },
    { id:21, name:"Brocade Neckline Detail",       cat:"accessories", price:1800,  old:null,  badge:null,   colors:["#11254d","#aa3240","#d6b068"], img:"../assets/detail-navy-red-brocade-neckline.png" },
    { id:22, name:"Lime Fringe Dupatta Portrait",  cat:"dupatta",     price:3900,  old:null,  badge:null,   colors:["#a6c735","#1870b0","#d1aa58"], img:"../assets/portrait-lime-brocade-set.png" },
    { id:23, name:"Olive Leaf Portrait Set",       cat:"dupatta",     price:4300,  old:null,  badge:null,   colors:["#768a2b","#c6acd8","#d7b066"], img:"../assets/portrait-olive-lilac-leaf-dupatta.png" },
    { id:24, name:"Navy Heritage Portrait",        cat:"festive",     price:4700,  old:null,  badge:null,   colors:["#132d5a","#ae873f","#5f392c"], img:"../assets/portrait-navy-brocade-dupatta-profile.png" },
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
  const navToggle = document.querySelector('.nav-toggle');
  const navMobilePanel = document.getElementById('nav-mobile-panel');

  function closeMobileNav() {
    if (!navToggle || !navMobilePanel) return;
    nav.classList.remove('is-menu-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navMobilePanel.hidden = true;
    document.body.classList.remove('nav-open');
  }

  if (navToggle && navMobilePanel) {
    navToggle.addEventListener('click', () => {
      const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      nav.classList.toggle('is-menu-open', !isOpen);
      navToggle.setAttribute('aria-expanded', String(!isOpen));
      navMobilePanel.hidden = isOpen;
      document.body.classList.toggle('nav-open', !isOpen);
    });

    navMobilePanel.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMobileNav);
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        closeMobileNav();
      }
    });

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        closeMobileNav();
      }
    });
  }

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
      document.querySelectorAll('[data-bag-count]').forEach(button => {
        button.textContent = `Bag (${cart})`;
      });
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
