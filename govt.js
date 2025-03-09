document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('schemeSearch');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const schemeCards = document.querySelectorAll('.scheme-card');

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        schemeCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('.scheme-description').textContent.toLowerCase();
            const details = card.querySelector('.scheme-details').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || description.includes(searchTerm) || details.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter cards
            schemeCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    // Add animation
                    card.style.animation = 'none';
                    card.offsetHeight; // Trigger reflow
                    card.style.animation = 'fadeIn 0.5s ease-out forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Initialize with fade-in animations
    schemeCards.forEach((card, index) => {
        card.style.opacity = '0';
        setTimeout(() => {
            card.style.animation = 'fadeIn 0.5s ease-out forwards';
        }, index * 100);
    });

    // Add hover effect to cards
    schemeCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = 'var(--shadow-hover)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'var(--shadow)';
        });
    });

    // Add smooth scrolling for internal links
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

    // Add loading animation to search button
    const searchButton = document.querySelector('.search-box .button');
    searchButton.addEventListener('click', () => {
        searchButton.classList.add('loading');
        setTimeout(() => {
            searchButton.classList.remove('loading');
        }, 1000);
    });

    // Add copy to clipboard functionality for scheme details
    const schemeDetails = document.querySelectorAll('.scheme-details');
    schemeDetails.forEach(details => {
        details.addEventListener('click', async (e) => {
            if (e.target.tagName === 'LI') {
                try {
                    await navigator.clipboard.writeText(e.target.textContent);
                    
                    // Show copy feedback
                    const feedback = document.createElement('span');
                    feedback.textContent = 'Copied!';
                    feedback.style.position = 'absolute';
                    feedback.style.background = 'var(--primary-color)';
                    feedback.style.color = 'white';
                    feedback.style.padding = '0.5rem';
                    feedback.style.borderRadius = '5px';
                    feedback.style.fontSize = '0.8rem';
                    
                    const rect = e.target.getBoundingClientRect();
                    feedback.style.top = `${rect.top - 30}px`;
                    feedback.style.left = `${rect.left}px`;
                    
                    document.body.appendChild(feedback);
                    
                    setTimeout(() => {
                        feedback.remove();
                    }, 2000);
                } catch (err) {
                    console.error('Failed to copy text: ', err);
                }
            }
        });
    });
}); 