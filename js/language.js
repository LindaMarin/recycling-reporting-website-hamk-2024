function setLanguage(lang) {
    localStorage.setItem('language', lang);

    // Fetch the translation JSON file dynamically
    fetch(`js/lang-${lang}.json`)
        .then(response => response.json())
        .then(data => {
            // Store the translation object globally
            translations = data;

            // Update the content immediately
            updateContent();
        });
}

function loadLanguage() {
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);
}

function updateContent() {
    document.title = translations.title;
    document.getElementById('homeLink').textContent = translations.home;
    document.getElementById('learnLink').textContent = translations.learn;
    document.getElementById('statusMapLink').textContent = translations.statusMap;
    document.getElementById('combinedReportLink').textContent = translations.combinedReport;
    document.getElementById('comingSoon').textContent = translations.comingSoon;
}

// Call loadLanguage when the page loads
window.onload = loadLanguage;
