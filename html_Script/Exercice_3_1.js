// //1ère méthode avec constantes
function moyMinMax1() {
    let total = 0;
    let compteur = 0;
    let moyenne;
    let entier;
    let valMax = Number.MIN_SAFE_INTEGER;
    let valMin = Number.MAX_SAFE_INTEGER;
    entier = parseInt(prompt("Saisir un nombre entier (0 pour arrêter la saisie)"));
    valMin = entier

    while (entier != 0) {
        total += entier;
        compteur++;
        entier = parseInt(prompt("Saisir un nombre entier (0 pour arrêter la saisie)"));
        if (entier > valMax) {
            valMax = entier;
            console.log(valMax);
        } else if (entier < valMin && entier != 0) {
            valMin = entier;
            console.log(valMin);
        }
    } // fin while

    // sortie de boucle puis calcul
    moyenne = total / (compteur);
    console.log(total, (compteur));
    alert("Moyenne : " + total + "/" + (compteur) + " =~ " + moyenne.toFixed(2) +
        "\nLa valeur minimale entrée était : " + valMin + " et la valeur maximale" +
        " était : " + valMax);
    console.log(valMin);
    console.log(valMax);
}

moyMinMax1();