// Fonction pour afficher la section spécifiée et masquer les autres
function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    var sections = document.querySelectorAll('main section');
    sections.forEach(function(sec) {
        if (sec.id === sectionId) {
            sec.style.display = "block"; // afficher la section demandée
        } else {
            sec.style.display = "none"; // masquer les autres sections
        }
    });
}

// Fonction pour afficher la section de présentation et masquer les autres
function showPresentation() {
    toggleSection('presentation');
}

// Afficher la page de présentation par défaut lors du chargement du site
showPresentation();
