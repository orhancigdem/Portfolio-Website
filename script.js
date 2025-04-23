// Mobile Navigation Toggle
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('open');
        
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

// Project Filtering
const projectFilter = () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Active button toggle
            filterBtns.forEach(btn => btn.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter projects
            const filterValue = btn.getAttribute('data-filter');
            
            projectItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 100);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Smooth Scrolling
const smoothScroll = () => {
    const navLinks = document.querySelectorAll('.nav-links a, .hero-btns a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default behavior
            e.preventDefault();
            
            // Close mobile menu if open
            const nav = document.querySelector('.nav-links');
            const burger = document.querySelector('.burger');
            if (nav.classList.contains('open')) {
                nav.classList.remove('open');
                burger.classList.remove('toggle');
            }
            
            // Get the target section
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetSection = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Active Navigation Links on Scroll
const activeNavOnScroll = () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Form Submission
const contactForm = () => {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the data to a server
            // For this example, we'll just log it to console
            console.log({
                name,
                email,
                subject,
                message
            });
            
            // Reset form
            form.reset();
            
            // Show success message (you can replace this with a better UI feedback)
            alert('Message sent successfully!');
        });
    }
}

// Run all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    navSlide();
    projectFilter();
    smoothScroll();
    activeNavOnScroll();
    contactForm();
}); 