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

// Pastikan DOM telah dimuat sebelum menambahkan event listener
document.addEventListener('DOMContentLoaded', function() {
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    const slidesContainer = document.querySelector('.slides');
    
    // Cek apakah elemen-elemen tersebut ada di DOM sebelum menambahkan event listener
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            showSlide(currentSlide + 1);
        });
    }

    if (prevButton) {
        prevButton.addEventListener('click', () => {
            showSlide(currentSlide - 1);
        });
    }

    // Optional: Automatic slide transition
    if (slidesContainer) {
        setInterval(() => {
            showSlide(currentSlide + 1);
        }, 10000); // Change slide every 10 seconds
    }

    // Scroll-triggered animations
    const testimonialSections = document.querySelectorAll('.testimonial-left, .testimonial-right');
    if (testimonialSections.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        }, {
            threshold: 0.1,
        });
        
        testimonialSections.forEach(section => {
            observer.observe(section);
        });
    }
});

// Toggle Menu
    function toggleMenu() {
        const header = document.querySelector('header');
        if (header) {
            header.classList.toggle('menu-open');
        }
    }
