const burger = document.getElementById('burger');
const navMenu = document.getElementById('nav-menu');

burger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// Auto-close on link click (mobile)
document.querySelectorAll('#nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
  });
});

// Shrink header on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header-overlay');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Highlight active nav link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('#nav-menu a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 130;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});
// Плавна анімація при скролі
const animatedSections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

animatedSections.forEach(section => {
  observer.observe(section);
});

// Back to Top Button
// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Дозволити взаємодію з картою лише після кліку
const mapFrame = document.querySelector('.map iframe');
const mapContainer = document.getElementById('map-container');

mapContainer.addEventListener('click', function () {
  mapFrame.style.pointerEvents = 'auto';
});

// Повернути блокування після того, як користувач відвів мишу
mapContainer.addEventListener('mouseleave', function () {
  mapFrame.style.pointerEvents = 'none';
});
// Toggle Dark Mode
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Зчитуємо тему з localStorage
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  const isDark = body.classList.contains('dark');
  themeToggle.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
// Фільтрація каталогу
const filterButtons = document.querySelectorAll('.filter-btn');
const catalogItems = document.querySelectorAll('.catalog-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.filter-btn.active').classList.remove('active');
    button.classList.add('active');

    const category = button.getAttribute('data-category');

    catalogItems.forEach(item => {
      const itemCategory = item.getAttribute('data-category');

      if (category === 'all' || itemCategory === category) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
// --- Фільтрація ---
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.filter-btn.active').classList.remove('active');
    btn.classList.add('active');
    const category = btn.getAttribute('data-category');

    catalogItems.forEach(item => {
      const itemCat = item.getAttribute('data-category');
      if (category === 'all' || itemCat === category) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// --- Модальне вікно при кліку на товар ---
const modal = document.getElementById('product-modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalClose = document.querySelector('.modal-close');

catalogItems.forEach(item => {
  item.addEventListener('click', () => {
    modalImg.src = item.querySelector('img').src;
    modalImg.alt = item.querySelector('img').alt;
    modalTitle.textContent = item.getAttribute('data-title');
    modalDesc.textContent = item.getAttribute('data-desc');
    modal.style.display = 'flex';
  });
});

modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
// Open modal on click
document.querySelectorAll('.catalog-item').forEach(item => {
  item.addEventListener('click', function () {
    const modal = document.getElementById('product-modal');
    modal.querySelector('.modal-title').textContent = this.dataset.title;
    modal.querySelector('.modal-description').textContent = this.dataset.desc;
    modal.querySelector('.modal-img').src = this.querySelector('img').src;
    modal.classList.add('show');
  });
});

// Close modal
function closeModal() {
  document.getElementById('product-modal').classList.remove('show');
}
body.classList.toggle("dark-mode");
