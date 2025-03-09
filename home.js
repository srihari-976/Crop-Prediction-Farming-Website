document.addEventListener('DOMContentLoaded', () => {
    // Add animation to feature cards on scroll
    const featureCards = document.querySelectorAll('.feature-card');
    const steps = document.querySelectorAll('.step');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    // Initialize feature cards with opacity 0
    featureCards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease-out';
        observer.observe(card);
    });

    // Initialize steps with opacity 0
    steps.forEach(step => {
        step.style.opacity = 0;
        step.style.transform = 'translateY(20px)';
        step.style.transition = 'all 0.5s ease-out';
        observer.observe(step);
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add animation to logo
    const logo = document.querySelector('#main1');
    logo.style.animation = 'bounce 1s ease';
});

// Add bounce animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-20px);
        }
        60% {
            transform: translateY(-10px);
        }
    }
`;
document.head.appendChild(style); 