
// --- HERO SLIDER ---
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const slideNumEl = document.getElementById('slide-num');
let current = 0;
let autoTimer;

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
  
function goToSlide(n) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = n;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
    slideNumEl.textContent = String(current + 1).padStart(2, '0');
}

function nextSlide() {
    goToSlide((current + 1) % slides.length);
}

function startAuto() {
    autoTimer = setInterval(nextSlide, 2500);
}

// Pause on hover, resume on leave
document.querySelector('.hero').addEventListener('mouseenter', () => clearInterval(autoTimer));
document.querySelector('.hero').addEventListener('mouseleave', startAuto);

startAuto();

// --- STICKY NAV SHADOW ---
const navbar = document.getElementById('navbar');
const navToggle = document.querySelector('.nav-toggle');
const navMobilePanel = document.getElementById('nav-mobile-panel');

function closeMobileNav() {
    if (!navToggle || !navMobilePanel) return;
    navbar.classList.remove('is-menu-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navMobilePanel.hidden = true;
    document.body.classList.remove('nav-open');
}

if (navToggle && navMobilePanel) {
    navToggle.addEventListener('click', () => {
        const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
        navbar.classList.toggle('is-menu-open', !isOpen);
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
    navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// --- FILTER BAR ---
function setFilter(btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

// --- ADD TO CART ---
function addToCart(btn) {
    const badge = document.querySelector('.nav-cart-badge span');
    let count = parseInt(badge.textContent);
    count += 1;
    badge.textContent = count;
    document.querySelectorAll('[data-cart-label]').forEach(label => {
        label.textContent = `Cart (${count})`;
    });
    btn.textContent = '✓ Added';
    btn.style.background = '#2a7a4a';
    setTimeout(() => {
        btn.textContent = 'Add to Bag';
        btn.style.background = '';
    }, 1800);
}

// --- WISHLIST TOGGLE ---
document.querySelectorAll('.btn-wish').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.style.color = btn.style.color === 'rgb(196, 84, 76)' ? '' : 'rgb(196, 84, 76)';
        btn.textContent = btn.textContent === '♡' ? '♥' : '♡';
    });
});

// --- NEWSLETTER SUBMIT ---
document.querySelector('.newsletter-form button').addEventListener('click', () => {
    const input = document.querySelector('.newsletter-form input');
    if (input.value && input.value.includes('@')) {
        input.value = '';
        input.placeholder = '✓ You\'re subscribed — welcome to the circle!';
        input.style.borderColor = 'var(--gold)';
    } else {
        input.style.borderColor = '#c4544c';
        input.placeholder = 'Please enter a valid email';
    }
});

// --- SCROLL REVEAL ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.product-card, .cat-card, .testi-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
