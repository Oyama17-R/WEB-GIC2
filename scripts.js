let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;
}

document.querySelector('.next').addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

document.querySelector('.prev').addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

// Optional: Automatic slide transition
setInterval(() => {
    showSlide(currentSlide + 1);
}, 10000); // Change slide every 10 seconds

function toggleMenu() {
    document.querySelector('header').classList.toggle('menu-open');
}

document.addEventListener('DOMContentLoaded', function() {
    const testimonialSections = document.querySelectorAll('.testimonial-left, .testimonial-right');
    console.log(testimonialSections); // Debugging: pastikan elemen dipilih
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('Element is intersecting:', entry.target); // Debugging
          entry.target.classList.add('show');
        }
      });
    }, {
      threshold: 0.1,
    });
  
    testimonialSections.forEach(section => {
      observer.observe(section);
    });
});

  
  
  
