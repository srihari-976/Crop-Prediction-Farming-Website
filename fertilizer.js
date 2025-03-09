document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('fertilizerSearch');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const fertilizerCards = document.querySelectorAll('.fertilizer-card');

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        fertilizerCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const content = card.querySelector('p').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || content.includes(searchTerm)) {
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
            fertilizerCards.forEach(card => {
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
    fertilizerCards.forEach((card, index) => {
        card.style.opacity = '0';
        setTimeout(() => {
            card.style.animation = 'fadeIn 0.5s ease-out forwards';
        }, index * 100);
    });

    // Add hover effect to cards
    fertilizerCards.forEach(card => {
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
}); 