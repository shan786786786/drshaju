// ============================
// MOBILE MENU TOGGLE
// ============================
const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('nav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// ============================
// LIGHTBOX FOR GALLERY
// ============================
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

// Optional: Close lightbox when pressing ESC
document.addEventListener('keydown', function(e) {
  if(e.key === "Escape") {
    closeLightbox();
  }
});
