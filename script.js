// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', () => {
    
    // --- GESTION DU THÈME (SOMBR/CLAIR) ---
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Vérifier si un thème est déjà sauvegardé dans le localStorage
    const currentTheme = localStorage.getItem('theme');
    
    // Si oui, l'appliquer
    if (currentTheme) {
        body.setAttribute('data-theme', currentTheme);
    }

    // Écouter le clic sur le bouton de thème
    themeBtn.addEventListener('click', () => {
        let theme = body.getAttribute('data-theme');
        
        // Basculer entre 'dark' et 'light'
        if (theme === 'dark') {
            theme = 'light';
        } else {
            theme = 'dark';
        }
        
        // Appliquer le nouveau thème
        body.setAttribute('data-theme', theme);
        // Sauvegarder la préférence
        localStorage.setItem('theme', theme);
        
        // Re-rendre les icônes Lucide après le changement
        lucide.createIcons();
    });


    // --- ANIMATION AU SCROLL (Intersection Observer) ---
    // Sélectionne tous les éléments avec la classe 'fade-in-scroll'
    const scrollElements = document.querySelectorAll('.fade-in-scroll');

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <=
            (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('scrolled');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            }
        });
    };

    // Ajouter le style CSS nécessaire pour l'animation au scroll
    const style = document.createElement('style');
    style.innerHTML = `
        .fade-in-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .fade-in-scroll.scrolled {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);

    // Écouter l'événement scroll
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
    
    // Déclencher une fois au chargement pour les éléments déjà visibles
    handleScrollAnimation();

});
