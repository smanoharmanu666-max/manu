// Update footer year automatically
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});
