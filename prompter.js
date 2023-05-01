// Récupérer la zone de texte et le bouton de copie
var inputBox = document.getElementById("input-box");
var inputDev = document.getElementById("input-dev");
var copyButton = document.getElementById("copy-button");
var selectBox = document.getElementById("select-box");
var modifiedText = "";
var defaultOption = "Programmation"


function applyModification(selectedValue) {
    if (selectedValue === "Programmation") {
        modifiedText = "Tu es un programmateur agérie. Tu fais un code précis, optimisé et commenté. Tu es spécialisé en ";
    } else if (selectedValue === "option2") {
        modifiedText = "Texte modifié pour l'option 2";
    } else if (selectedValue === "option3") {
        modifiedText = "Texte modifié pour l'option 3";
    }
}

applyModification(defaultOption); 


// Ajouter un gestionnaire d'événements pour le clic sur le bouton de copie
copyButton.addEventListener("click", function() {
    var selectedValue = selectBox.value;
    applyModification(selectedValue);
    var inputText = inputBox.value;
    var inputText2 = inputDev.value;
    navigator.clipboard.writeText(modifiedText+inputText2+inputText);
    console.log("Copier")
});