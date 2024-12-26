// Smooth scroll to section
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Form submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();
  alert('Thank you for reaching out! I will get back to you soon.');
})