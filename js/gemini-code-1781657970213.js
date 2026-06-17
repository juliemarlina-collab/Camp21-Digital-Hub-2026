document.addEventListener("DOMContentLoaded", () => {
  // Number Counter Animation for Dashboard Stats
  const statNumbers = document.querySelectorAll('.stat-number');

  statNumbers.forEach(stat => {
    const target = +stat.getAttribute('data-target');
    const duration = 1500; // 1.5 seconds
    const increment = target / (duration / 16); // 60fps

    let current = 0;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        stat.innerText = Math.ceil(current);
        requestAnimationFrame(updateCounter);
      } else {
        stat.innerText = target;
      }
    };

    // Slight delay to allow CSS transitions to settle before counting
    setTimeout(updateCounter, 300);
  });
});