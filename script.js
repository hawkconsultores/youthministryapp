// Smooth scroll for anchor links
const anchors = document.querySelectorAll('a[href^="#"]');
anchors.forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Timeline fade-in animation on scroll
function revealTimelineItems() {
  const items = document.querySelectorAll('.timeline-item');
  const windowHeight = window.innerHeight;
  items.forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top < windowHeight - 80) {
      item.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealTimelineItems);
window.addEventListener('DOMContentLoaded', revealTimelineItems);
