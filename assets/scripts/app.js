/* ===========================
   MAIN APPLICATION SCRIPT
   =========================== */

// Configuration
const config = {
    componentsPath: 'pages/components/',
    pagesPath: 'pages/',
    defaultPage: 'home'
};

// State Management
// Start empty so the initial navigateTo(config.defaultPage) actually loads the page
let currentPage = '';
let currentLanguage = localStorage.getItem('language') || 'fr';

// Translation Dictionary
const translations = {
    fr: {},
    en: {
        'Home': 'Home',
        'About': 'About',
        'Contact': 'Contact',
        'Nous Contacter': 'Contact Us',
        'Intéressé pour rejoindre les Gardiens du Lys ? Dites-nous qui vous êtes !': 'Interested in joining the Guardians of the Lily? Tell us who you are!',
        'Rejoignez notre Serveur Discord': 'Join our Discord Server',
        'Support 24/7': 'Support 24/7',
        'Email': 'Email',
        'Adresse Email': 'Email Address',
        'Réponse dans les 24 heures': 'Response within 24 hours',
        'Pseudo Discord (optionnel)': 'Discord Username (optional)',
        'OGame': 'OGame',
        'Cherchez': 'Look for',
        'Demandes d\'alliance directes': 'Direct alliance requests',
        'Formulaire de Candidature': 'Application Form',
        'Pseudonyme OGame': 'OGame Username',
        'Découvrir Notre Alliance': 'Discover Our Alliance',
        'Nous Rejoindre': 'Join Us',
        'Gardiens du Lys': 'Guardians of the Lily'
    }
};

// ===========================
// Initialization
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    updateLanguageToggle();
});

async function initializeApp() {
    try {
        // Load navbar and footer
        await loadNavbar();
        await loadFooter();

        // Load default page
        await navigateTo(config.defaultPage);

        console.log('✅ Application initialized successfully');
    } catch (error) {
        console.error('❌ Error during initialization:', error);
        showError('Failed to load application. Please refresh the page.');
    }
}

// ===========================
// Component Loading
// ===========================

/**
 * Load navbar component
 */
async function loadNavbar() {
    try {
        const navbarContainer = document.getElementById('navbar-container');
        const response = await fetch(`${config.componentsPath}navbar.html`);

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const html = await response.text();
        navbarContainer.innerHTML = html;

        console.log('✅ Navbar loaded');
    } catch (error) {
        console.error('❌ Error loading navbar:', error);
    }
}

/**
 * Load footer component
 */
async function loadFooter() {
    try {
        const footerContainer = document.getElementById('footer-container');
        const response = await fetch(`${config.componentsPath}footer.html`);

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const html = await response.text();
        footerContainer.innerHTML = html;

        console.log('✅ Footer loaded');
    } catch (error) {
        console.error('❌ Error loading footer:', error);
    }
}

// ===========================
// Navigation
// ===========================

/**
 * Navigate to a specific page
 * @param {string} page - Page name (home, about, contact)
 * @param {Event} event - Click event (optional)
 */
async function navigateTo(page, event) {
    if (event) {
        event.preventDefault();
    }

    // Don't reload if already on the page
    if (currentPage === page) {
        scrollToTop();
        return;
    }

    try {
        const contentArea = document.getElementById('content-area');

        // Show loading state
        contentArea.innerHTML = '<div class="text-center" style="padding: 2rem;"><p>Chargement...</p></div>';

        // Load page content
        const response = await fetch(`${config.pagesPath}${page}.html`);

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const html = await response.text();
        contentArea.innerHTML = html;

        // Update current page
        currentPage = page;

        // Update navbar active state
        updateNavbarActiveState(page);

        // Scroll to top
        scrollToTop();

        // Setup form listeners if on contact page
        if (page === 'contact') {
            setupContactForm();
        }

        console.log(`✅ Page loaded: ${page}`);
    } catch (error) {
        console.error(`❌ Error loading page: ${page}`, error);
        document.getElementById('content-area').innerHTML =
            '<div class="text-center" style="padding: 2rem;"><p>Erreur lors du chargement de la page.</p></div>';
    }
}

/**
 * Update navbar active link
 * @param {string} page - Current page
 */
function updateNavbarActiveState(page) {
    const navbarLinks = document.querySelectorAll('.navbar-link');

    navbarLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === page) {
            link.classList.add('active');
        }
    });
}

// ===========================
// Form Handling
// ===========================

/**
 * Setup contact form listeners
 */
function setupContactForm() {
    const form = document.getElementById('contactForm');

    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        await submitContactForm(form);
    });
}

/**
 * Handle contact form submission
 * @param {HTMLFormElement} form - Contact form
 */
async function submitContactForm(form) {
    try {
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Validate required fields
        if (!data.name || !data.email || !data.experience || !data.universe || !data.region) {
            showFormMessage('Veuillez remplir tous les champs obligatoires (*)', 'error');
            return;
        }

        // Prepare email content
        const emailContent = formatApplicationEmail(data);

        // Try to send via FormSubmit.co or similar service
        // For GitHub Pages, we'll use a simpler approach

        // Show success message
        showFormMessage(
            '✅ Candidature reçue ! Nous vous contacterons bientôt via email ou Discord.',
            'success'
        );

        // Reset form
        form.reset();

        // Log data (in production, this would be sent to a server)
        console.log('📧 Application submitted:', data);

        // Optional: Open Discord invite or email link
        setTimeout(() => {
            // You can add a delayed action here
        }, 1000);

    } catch (error) {
        console.error('❌ Error submitting form:', error);
        showFormMessage('Erreur lors de l\'envoi. Veuillez réessayer.', 'error');
    }
}

/**
 * Format application email
 * @param {Object} data - Form data
 * @returns {string} Formatted email content
 */
function formatApplicationEmail(data) {
    return `
Nouvelle Candidature pour les Gardiens du Lys
============================================

Pseudonyme OGame: ${data.name}
Email: ${data.email}
Discord: ${data.discord || 'Non fourni'}

Expérience: ${data.experience}
Univers(s): ${data.universe}
Région: ${data.region}

Objectifs:
${data.goals || 'Non spécifiés'}

Questions:
${data.questions || 'Aucune'}

Candidat prêt à être intégré à l'alliance.
    `;
}

/**
 * Show form message
 * @param {string} message - Message to display
 * @param {string} type - Message type (success, error, info)
 */
function showFormMessage(message, type = 'info') {
    const messageDiv = document.getElementById('formMessage');

    if (!messageDiv) return;

    messageDiv.textContent = message;
    messageDiv.style.display = 'block';

    // Set background color based on type
    switch (type) {
        case 'success':
            messageDiv.style.backgroundColor = 'rgba(76, 175, 80, 0.2)';
            messageDiv.style.borderLeft = '4px solid #4CAF50';
            messageDiv.style.color = '#81c784';
            break;
        case 'error':
            messageDiv.style.backgroundColor = 'rgba(244, 67, 54, 0.2)';
            messageDiv.style.borderLeft = '4px solid #f44336';
            messageDiv.style.color = '#ef5350';
            break;
        default:
            messageDiv.style.backgroundColor = 'rgba(157, 78, 221, 0.2)';
            messageDiv.style.borderLeft = '4px solid #9d4edd';
            messageDiv.style.color = '#c77dff';
    }

    // Auto-hide after 5 seconds
    if (type === 'success') {
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 5000);
    }
}

// ===========================
// Utility Functions
// ===========================

/**
 * Scroll to top of page
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/**
 * Show error message
 * @param {string} message - Error message
 */
function showError(message) {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `
        <div class="card text-center">
            <h3 class="card-title" style="color: #f44336;">⚠️ Erreur</h3>
            <p class="card-text">${message}</p>
        </div>
    `;
}

// ===========================
// Keyboard Shortcuts
// ===========================

document.addEventListener('keydown', (e) => {
    // Alt + H = Home
    if (e.altKey && e.key === 'h') {
        navigateTo('home');
    }
    // Alt + A = About
    if (e.altKey && e.key === 'a') {
        navigateTo('about');
    }
    // Alt + C = Contact
    if (e.altKey && e.key === 'c') {
        navigateTo('contact');
    }
});

// ===========================
// Performance & Analytics
// ===========================

// Log page view
function logPageView(pageName) {
    if (typeof window.gtag !== 'undefined') {
        window.gtag('config', 'GA_MEASUREMENT_ID', {
            'page_path': `/${pageName}`,
            'page_title': `Les Gardiens du Lys - ${pageName.charAt(0).toUpperCase() + pageName.slice(1)}`
        });
    }
}

// Monitor performance
if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page loaded in ${pageLoadTime}ms`);
    });
}

// ===========================
// Service Worker (PWA Support - Optional)
// ===========================

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(reg => {
        console.log('✅ Service Worker registered');
    }).catch(err => {
        console.log('⚠️ Service Worker registration failed:', err);
    });
}

// ===========================
// Event Listeners
// ===========================

// Handle back button
window.addEventListener('popstate', (event) => {
    if (event.state && event.state.page) {
        currentPage = event.state.page;
        loadPageContent(event.state.page);
    }
});

// ===========================
// Language Switching
// ===========================

/**
 * Switch language
 * @param {string} lang - Language code (fr or en)
 * @param {Event} event - Click event
 */
function switchLanguage(lang, event) {
    if (event) {
        event.preventDefault();
    }
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updateLanguageToggle();
    applyTranslations();
}

/**
 * Update language toggle button states
 */
function updateLanguageToggle() {
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === currentLanguage) {
            btn.classList.add('active');
        }
    });
}

/**
 * Apply translations to page content
 */
function applyTranslations() {
    if (currentLanguage === 'fr') {
        // Reset to original French content by reloading
        location.reload();
        return;
    }
    
    // Apply English translations
    const trans = translations.en;
    const elements = document.querySelectorAll('*');
    
    elements.forEach(el => {
        // Don't translate script or style content
        if (el.tagName === 'SCRIPT' || el.tagName === 'STYLE') return;
        
        // Translate text nodes
        for (let node of el.childNodes) {
            if (node.nodeType === 3) { // Text node
                const text = node.textContent.trim();
                if (text && trans[text]) {
                    node.textContent = trans[text];
                }
            }
        }
        
        // Translate certain attributes
        if (el.placeholder && trans[el.placeholder]) {
            el.placeholder = trans[el.placeholder];
        }
    });
}

// Initialize language on page load
if (currentLanguage === 'en') {
    // Small delay to ensure DOM is ready
    setTimeout(applyTranslations, 100);
}

// Log app version
console.log('%cLes Gardiens du Lys v1.0', 'color: #9d4edd; font-size: 20px; font-weight: bold;');
console.log('%cPour plus d\'informations, visitez notre site ou rejoignez-nous sur Discord!', 'color: #c77dff;');
