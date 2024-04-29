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