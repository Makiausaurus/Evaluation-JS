var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
var i;
var input;


function tableauVerif() {
    input = prompt("Saisissez un prénom listé ci-dessous :" + "\n" + tab);

    if (tab.includes(input)) {
        tab.splice(tab.indexOf(input), 1);
        tab[tab.length] = "";
    } else {
        alert("Veuillez saisir un prénom en respectant la casse");
        tableau();
    }
    console.log(tab);
}

tableauVerif();