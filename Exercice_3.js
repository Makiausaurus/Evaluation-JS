//1ère méthode avec constantes

var total = 0;
var compteur = 0;
var moyenne = null;
var entier = null;
var valMax;
var valMin;
const max = Number.MIN_SAFE_INTEGER;
const min = Number.MAX_SAFE_INTEGER;

function moyMinMax1() {

    entier = parseInt(prompt("Saisir un nombre entier (0 pour arrêter la saisie)"));

    while (entier != 0) {
        total += entier;
        compteur++;
        var entier = parseInt(prompt("Saisir un nombre entier (0 pour arrêter la saisie)"));
        if (entier > max) {
            valMax = entier;
        } else if (entier < min && entier != 0) {
            valMin = entier;
        }
    } // fin while

    // sortie de boucle puis calcul
    moyenne = total / (compteur);
    console.log(total, (compteur));
    alert("Moyenne : " + total + "/" + (compteur) + " =~ " + moyenne.toFixed(2) +
        "\nLa valeur minimale entrée était : " + valMin + " et la valeur maximale" +
        " était : " + valMax);
}

moyMinMax1();

//2ème méthode avec Math.min et tableau

function moyMinMax2() {
    let tabVal = [];
    let i = 0;
    let tot = 0;

    tabVal[i] = parseInt(prompt("Entrez une valeur (0 pour arrêter la saisie) :"));
    i++
    console.log(i);
    while (tabVal[i - 1] != 0) {
        tabVal[i] = parseInt(prompt("Entrez une valeur (0 pour arrêter la saisie) :"));
        tot += tabVal[i];
        i++;
        console.log(i);
        console.log(tabVal);
    }
    tabVal.pop();
    console.log(tabVal);
    alert("La moyenne de " + tot + "/" + tabVal.length + " est de : " + (tot / tabVal.length).toFixed(2) +
        "\nLa valeur minimale rentrée était : " + Math.min(...tabVal) +
        "\nLa valeur maximale rentrée était : " + Math.max(...tabVal))
}

moyMinMax2();