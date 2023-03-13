const navbarToggle = document.querySelector('.navbar-toggle');
const navbarLinks = document.querySelector('.navbar-links');

navbarToggle.addEventListener('click', function() {
  navbarToggle.classList.toggle('active');
  navbarLinks.classList.toggle('show');
});
