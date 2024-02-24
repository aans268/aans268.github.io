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
