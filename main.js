// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('nav');
menuBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Lightbox
function openLightbox(img) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightboxImg.src = img.src;
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.style.display = 'none';
}
