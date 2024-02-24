// Fonction pour masquer toutes les sections sauf celle spécifiée
function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    var sections = document.querySelectorAll('main section');

    sections.forEach(function(sec) {
        if (sec.id === sectionId) {
            sec.style.display = "block";
        } else {
            sec.style.display = "none";
        }
    });
}



// Fonction pour afficher la section de présentation et masquer les autres
function showPresentation() {
    var sections = document.querySelectorAll('main section');
    sections.forEach(function(section) {
        if (section.id === 'presentation') {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    });
}

// Afficher la page de présentation par défaut lors du chargement du site
//showPresentation();
