// Reveal animations on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Interactive blobs that follow (subtle)
document.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  
  const blob1 = document.getElementById('blob1');
  const blob2 = document.getElementById('blob2');
  
  blob1.style.transform = `translate(${x * 50}px, ${y * 50}px)`;
  blob2.style.transform = `translate(${-(x * 50)}px, ${-(y * 50)}px)`;
});

// Smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

console.log("Vanderlei's Portfolio Loaded 🚀");
