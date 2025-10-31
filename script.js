// ===========================
// Modern Portfolio JavaScript
// AI-Focused Interactive Features
// ===========================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Initialize all interactive features
    initParticles();
    initMobileMenu();
    initSmoothScroll();
    initFeatureCards();
    initScrollAnimations();
    initNavbarScroll();

});

// ===========================
// Particle Background
// ===========================
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#6366f1'
                },
                shape: {
                    type: 'circle'
                },
                opacity: {
                    value: 0.3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#6366f1',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 0.5
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }
}

// ===========================
// Mobile Navigation
// ===========================
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');

            // Animate hamburger icon
            const spans = hamburger.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translateY(8px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }
}

// ===========================
// Smooth Scrolling
// ===========================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Skip if it's just '#'
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();

                const offsetTop = target.offsetTop - 80; // Account for fixed navbar

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===========================
// Feature Card Expand/Collapse
// ===========================
function initFeatureCards() {
    const featureCards = document.querySelectorAll('.feature-card');

    featureCards.forEach(card => {
        // Initially collapse all cards - remove inline styles, let CSS handle it
        const content = card.querySelector('.feature-content');
        if (content) {
            // Don't set inline styles, let CSS handle initial state
            content.style.maxHeight = null;
        }
    });
}

// Global function for toggling feature cards (called from HTML onclick)
function toggleExpand(card) {
    const content = card.querySelector('.feature-content');
    const isExpanded = card.classList.contains('expanded');

    console.log('Toggling card:', card);
    console.log('Is expanded:', isExpanded);
    console.log('Current classes:', card.className);

    if (isExpanded) {
        // Collapse the card
        card.classList.remove('expanded');
        console.log('Collapsed - new classes:', card.className);
    } else {
        // Expand the card
        card.classList.add('expanded');
        console.log('Expanded - new classes:', card.className);
    }
}

// ===========================
// Scroll Animations
// ===========================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements that should animate on scroll
    const animateElements = document.querySelectorAll(`
        .about-content,
        .timeline-item,
        .project-card,
        .skill-category,
        .feature-card,
        .contact-content
    `);

    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

// ===========================
// Navbar Scroll Effect
// ===========================
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add shadow when scrolled
        if (currentScroll > 50) {
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.boxShadow = 'none';
        }

        // Hide/show navbar on scroll
        if (currentScroll > lastScroll && currentScroll > 500) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;
    });
}

// ===========================
// Active Navigation Link
// ===========================
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop &&
            window.pageYOffset < sectionTop + sectionHeight) {
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

// ===========================
// Typing Effect for Hero (Optional Enhancement)
// ===========================
function initTypingEffect() {
    const subtitleElement = document.querySelector('.hero-subtitle');
    if (!subtitleElement) return;

    const text = subtitleElement.textContent;
    subtitleElement.textContent = '';
    let charIndex = 0;

    function type() {
        if (charIndex < text.length) {
            subtitleElement.textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(type, 50);
        }
    }

    // Start typing after a short delay
    setTimeout(type, 500);
}

// ===========================
// Counter Animation for Stats
// ===========================
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200; // Animation speed

    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                const counter = entry.target;
                const target = counter.getAttribute('data-target') || counter.textContent;
                counter.classList.add('counted');

                // Just display the text as-is (since we have values like "7-10K")
                // For simple numeric counters, we'd animate here
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
}

// Initialize counter animation
initCounterAnimation();

// ===========================
// Form Handling Enhancement
// ===========================
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // The form submission is already handled by the existing Google Sheets script
        // This just adds a visual enhancement
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        // Re-enable button after response (the existing script handles this timing)
        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        }, 5000);
    });
}

// ===========================
// Lazy Loading Images
// ===========================
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

initLazyLoading();

// ===========================
// Console Message (Easter Egg)
// ===========================
console.log('%c👋 Hello, fellow developer!', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%cInterested in AI & Data Science? Let\'s connect!', 'font-size: 14px; color: #8b5cf6;');
console.log('%c🔗 LinkedIn: https://www.linkedin.com/in/rindhuja-johnson', 'font-size: 12px; color: #06b6d4;');
console.log('%c🐙 GitHub: https://github.com/Rindhujatreesa', 'font-size: 12px; color: #06b6d4;');