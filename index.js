function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en'
    }, 'google_translate_element');
}

function changeLanguage(lang) {
    var googleTranslateScript = document.querySelector('.skiptranslate');
    if (googleTranslateScript) {
        googleTranslateScript.parentNode.removeChild(googleTranslateScript);
    }
    var selectElement = document.querySelector('#google_translate_element select');
    selectElement.value = lang;
    selectElement.dispatchEvent(new Event('change'));
}

// Add animation class to KRUSHI title
document.addEventListener('DOMContentLoaded', function() {
    const mainTitle = document.getElementById('main1');
    if (mainTitle) {
        mainTitle.classList.add('animate__animated', 'animate__bounce');
    }

    // Add fade-in animation to cards
    const cards = document.querySelectorAll('.charts-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animation = `fadeInUp 0.5s ease ${index * 0.1}s forwards`;
    });
});

// Handle smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});