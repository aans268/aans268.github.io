// Fonction pour masquer toutes les sections sauf celle spécifiée
function toggleSection(sectionId) {
    var sections = document.querySelectorAll('main section');
    sections.forEach(function(section) {
        if (section.id === sectionId) {
            if (section.style.display === "none") {
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }
        } else {
            section.style.display = "none";
        }
    });
}

// Fonction pour afficher la section de présentation
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
