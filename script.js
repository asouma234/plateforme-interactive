
document.getElementById("windows").onclick = function () {
    showPopup("Unité Windows", [
        "Découverte de Windows",
        "Bureautique de base",
        "Gestion de fichiers"
    ]);
};
document.getElementById("cloud").onclick = function () {
    showPopup("Unité Cloud", [
        "Qu'est-ce que le Cloud ?",
        "Stockage en ligne",
        "Sécurité des données"
    ]);
};
document.getElementById("ia").onclick = function () {
    showPopup("Unité IA", [
        "Introduction à l'IA",
        "Exemples simples d’IA",
        "L’IA au quotidien"
    ]);
};

const clickSound = new Audio('click.mp3');
const closeSound = new Audio('close.mp3');

function showPopup(title, items) {
    clickSound.play();
    const content = document.getElementById("popup-content");
    content.innerHTML = "<h2>" + title + "</h2><ul>" + items.map(item => "<li>" + item + "</li>").join("") + "</ul>";
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    closeSound.play();
    document.getElementById("popup").style.display = "none";
}
