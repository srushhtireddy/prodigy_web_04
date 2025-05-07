
// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });
  
  document.querySelectorAll('.fade-in').forEach(section => {
    observer.observe(section);
  });
  
  // Simple form handler
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Thank you for contacting me!");
  });
