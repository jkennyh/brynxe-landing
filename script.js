const translations = {
    it: {
        badge: "In arrivo",
        title: "Bring your Expertise",
        description: "L'evoluzione dello scambio competenze peer-to-peer. Trasforma la tua expertise in valore reale.",
        cta: "Unisciti alla waitlist",
        rights: "Tutti i diritti riservati."
    },
    en: {
        badge: "Coming Soon",
        title: "Bring your Expertise",
        description: "The evolution of peer-to-peer skill exchange. Turn your expertise into real value.",
        cta: "Join the waitlist",
        rights: "All rights reserved."
    }
};

function setLanguage(lang) {
    document.getElementById('badge-text').innerText = translations[lang].badge;
    document.getElementById('main-title').innerText = translations[lang].title;
    document.getElementById('main-description').innerText = translations[lang].description;
    document.getElementById('cta-btn').innerText = translations[lang].cta;
    document.getElementById('footer-rights').innerText = translations[lang].rights;
    localStorage.setItem('preferredLang', lang);
}

// Gestione Tema Bootstrap 5.3
const updateTheme = () => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-bs-theme', isDark ? 'dark' : 'light');
};

// Avvio
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateTheme);
updateTheme();

const savedLang = localStorage.getItem('preferredLang') || (navigator.language.startsWith('it') ? 'it' : 'en');
setLanguage(savedLang);
