// Mobile Menu Toggle
const bar1 = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar1) {
    bar1.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

// Close menu when clicking on nav links
const navLinks = document.querySelectorAll('#navbar li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// Sticky Header on Scroll
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#bcc0d1';
        header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.backgroundColor = '#bcc0d1';
        header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.06)';
    }
});

// Product Hover Effects
const products = document.querySelectorAll('.pro');
products.forEach(product => {
    product.addEventListener('mouseenter', () => {
        product.style.transform = 'translateY(-5px)';
    });
    product.addEventListener('mouseleave', () => {
        product.style.transform = 'translateY(0)';
    });
});

// Responsive Image Handling
function handleImageResize() {
    const screenWidth = window.innerWidth;
    const heroSection = document.getElementById('hero');
    
    if (screenWidth < 600) {
        heroSection.style.backgroundPosition = 'top 30% right 30%';
    } else {
        heroSection.style.backgroundPosition = 'top 25% right 0';
    }
}

window.addEventListener('resize', handleImageResize);
window.addEventListener('load', handleImageResize);