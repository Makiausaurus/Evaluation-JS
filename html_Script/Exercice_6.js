function tableauVerif() {
    let tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
    let index = 0;
    let input;
    let i;
    console.log("debut fonction ", index);
    index++;
    console.log(index);
    input = prompt("Saisissez un prénom listé ci-dessous :" + "\n" + tab);

    if (tab.includes(input)) {
        tab.splice(tab.indexOf(input), 1);
        tab[tab.length] = "";
        console.log("condition fonction ", index);
        console.log(tab);
    } else {
        alert("Veuillez saisir un prénom en respectant la casse");
        tableauVerif();
        console.log("condition fonction ", index);
    }

    console.log(index);
    console.log("fin fonction ", index);
}

tableauVerif();