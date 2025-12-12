// Attendre que tout le contenu de la page soit chargé
document.addEventListener("DOMContentLoaded", function() {

    // 1. Initialisation des icônes Lucide
    // Cela transforme les balises <i data-lucide="..."> en véritables icônes SVG
    lucide.createIcons();

    // 2. Gestion du Thème (Sombre / Clair)
    const themeBtn = document.getElementById('themeBtn');
    const body = document.body;

    // A. Vérifier si une préférence est déjà sauvegardée dans le navigateur
    const currentTheme = localStorage.getItem('theme');
    
    // Si l'utilisateur avait choisi 'light', on l'applique tout de suite
    if (currentTheme === 'light') {
        body.classList.add('light-mode');
    }

    // B. Action au clic sur le bouton
    themeBtn.addEventListener('click', () => {
        // Bascule la classe CSS 'light-mode'
        // Si elle est là, on l'enlève. Si elle n'est pas là, on l'ajoute.
        body.classList.toggle('light-mode');

        // C. Sauvegarder le choix pour la prochaine visite
        if (body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    });

});
