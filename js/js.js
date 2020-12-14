
let couleur= {
    white: "blanc",
    red: "rouge",
    blue: "bleu",
    black: "noir",
    yellow: "jaune",
    "#FF00FF": "magenta",
    "#D2B48C": "ocre",
};
function initiationCouleur(){
    let text="";
    for(let couleurUtilisateur in couleur){
        text+= '<option style="background-color":'+couleurUtilisateur+'"value="'+couleurUtilisateur+'">'+couleur[couleurUtilisateur]+'</option>';
    }
    document.getElementById("colorBackground").innerHTML=text;
}


function changerBackground(select){
    document.getElementsByTagName("fieldset")[0].style.background=select.value;
}