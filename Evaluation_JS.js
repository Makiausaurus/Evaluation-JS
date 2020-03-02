let ex1 = document.getElementById('ex1');
let ex2 = document.getElementById('ex2');
let ex3_1 = document.getElementById('ex3_1');
let ex3_2 = document.getElementById('ex3_2')
let ex4 = document.getElementById('ex4');
let ex5 = document.getElementById('ex5');
let ex6 = document.getElementById('ex6');

ex1.addEventListener('click', function calculPrix() {

    let PU;
    let QTECOM;
    let PAP;
    let PORT;
    let REM;
    let TOT;

    PU = parseInt(prompt("Entrez le prix du produit commandé :"));
    TOT = PU;
    console.log(TOT)
    QTECOM = parseInt(prompt("Entrez la quantité voulue :"));
    TOT *= QTECOM;
    console.log(TOT)

    if (TOT >= 100 && TOT < 200) { // si total entre 100 et 199 -> 5%
        REM = 5 / 100;
        console.log(REM);
    } else if (TOT > 200) { //sinon si 200 ou plus -> 10%
        REM = 10 / 100
        console.log(REM);
    } else { //sinon vide
        REM = "";
    }

    TOT = TOT - (TOT * REM);
    console.log(TOT);
    if (TOT > 500) { //détermination des frais de port en fonction du total
        PORT = 0; // Si > 500€, pas de frais de port
        console.log(PORT)
    } else {
        PORT = (TOT * (2 / 100)); // Sinon frais de port de 2%, mais si <6€, alors port = 6
        console.log(PORT)
        if (PORT < 6) {
            PORT = 6;
            console.log(PORT)
        }
    }

    PAP = TOT
    PAP += PORT;

    if (REM == 0.05) { //passage de la remise pour des valeurs propres à l'affichage
        REM = 5;
    } else if (REM == 0.10) {
        REM = 10;
    } else {
        REM = 0;
    }

    alert("Le total, hors remise et frais de port est de : " + TOT + "€." +
        "\nVous bénéficiez d'une remise de " + REM + "% et vos frais de ports" +
        " s'élèvent à " + PORT + "€." +
        "\nLe total, frais de port et remise calculés est de : " + PAP + "€.");

})

ex2.addEventListener('click', function calculSomEntInf() {
    let i = 0;
    let som = 0;
    let n = parseInt(prompt("Entrez un nombre pour connaître la somme de ses entiers inférieurs."));
    for (i = 1; i < n; i++) {
        som += i;
        console.log(som);
    }
    console.log(som)
    alert("La somme des entiers inférieur à " + n + " est : " + som + ".");
})

ex3_1.addEventListener('click', function moyMinMax1() {
    let total = 0;
    let compteur = 0;
    let moyenne;
    let entier;
    let valMax = Number.MIN_SAFE_INTEGER;
    let valMin = Number.MAX_SAFE_INTEGER;

    do {
        entier = parseInt(prompt("Saisir un nombre entier (0 pour arrêter la saisie)"));
        valMin = entier
        total += entier;
        compteur++;
        if (entier > valMax) {
            valMax = entier;
            console.log(valMax);
        } else if (entier < valMin && entier != 0) {
            valMin = entier;
            console.log(valMin);
        }
    } while (entier != 0)

    // sortie de boucle puis calcul
    moyenne = total / compteur;
    console.log(total, compteur);
    alert("Moyenne : " + total + "/" + compteur + " =~ " + moyenne.toFixed(2) +
        "\nLa valeur minimale entrée était : " + valMin + " et la valeur maximale" +
        " était : " + valMax);
    console.log(valMin);
    console.log(valMax);
})

ex3_2.addEventListener('click', function moyMinMax2() {

    function bubbleSort(tabNoTri) {
        var j;
        for (i = 0; i < tabNoTri.length; i++) {
            for (j = 0; j < tabNoTri.length - i - 1; j++) {
                if (tabNoTri[j] > tabNoTri[j + 1]) {
                    let temp = tabNoTri[j];
                    tabNoTri[j] = tabNoTri[j + 1];
                    tabNoTri[j + 1] = temp;
                }
            }
        }
        // for (i = 0; i < tabNoTri.length; i++) {
        //     for (j = 0; j < tabNoTri.length; j++) {
        //         if (tabNoTri[i] > tabNoTri[j]) {
        //             let temp = tabNoTri[j];
        //             tabNoTri[j] = tabNoTri[i];
        //             tabNoTri[i] = temp;
        //         }
        //     }
        // }
        console.log("Trié : " + tabNoTri)
    }

    let tabVal = [];
    let i = 0;
    let tot = 0;

    do {
        tabVal[i] = parseInt(prompt("Entrez une valeur (0 pour arrêter la saisie) :"));
        tot += tabVal[i];
        i++;
        console.log(i);
        console.log(tabVal);
    }
    while (tabVal[i - 1] != 0)
    tabVal.pop();
    console.log(tabVal);

    bubbleSort(tabVal);

    console.log(tabVal[tabVal.length - 1]);
    alert("La moyenne de " + tot + "/" + tabVal.length + " est de : " + (tot / tabVal.length).toFixed(2) +
        "\nLa valeur minimale rentrée était : " + tabVal[0] +
        "\nLa valeur maximale rentrée était : " + tabVal[tabVal.length - 1]);
    /* dans le cas ou les valeurs sont 1(0), 2(1), 3(2), 4(3) et 5(4), tabVal.length renvoie 5, mais l'index pour récupérer 5 est 4, donc -1 */
})

ex4.addEventListener('click', function repartAge() {
    let inputAge = 0;
    let jeune = [];
    let moyen = [];
    let vieux = [];

    while (inputAge < 100) {
        inputAge = parseInt(prompt("Entrez des âges un par un. La saisie s'arrête à la saisie d'un centenaire."))
        if (inputAge < 20) {
            jeune.push(inputAge);
            console.log(jeune);
            console.log(jeune.length);
        } else if (inputAge >= 20 && inputAge <= 40) {
            moyen.push(inputAge);
            console.log(moyen);
            console.log(moyen.length);
        } else if (inputAge >= 41) {
            vieux.push(inputAge);
            console.log(vieux);
            console.log(vieux.length);
        }
    }

    console.log(jeune);
    console.log(jeune.length);
    console.log(moyen);
    console.log(moyen.length);
    console.log(vieux);
    console.log(vieux.length);

    alert("Votre famille est composée de " + jeune.length + " jeunes, de " + moyen.length +
        " moyens, et de " + vieux.length + " vieux.");
})

ex5.addEventListener('click', function TableDeMultiplication() {
    let i;
    let resultat;
    let x = parseInt(prompt("Entrez un nombre pour connaître sa table de multiplication :"));
    let table = document.getElementById("table");
    let resultatAff = document.getElementById("resultatAff");

    resultatAff.innerHTML = " ";
    for (i = 1; i <= 10; i++) {
        resultat = x * i;


        table.innerHTML = "La table de multiplication de " + x + " est :"
        if (i == 10) {
            resultatAff.innerHTML += x + " x " + i + " = " + resultat;
        } else {
            resultatAff.innerHTML += x + " x " + i + " = " + resultat + " <br> ";
        }
    }
})

ex6.addEventListener('click', function tableauVerif() {
    let tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
    let input;
    input = prompt("Saisissez un prénom listé ci-dessous :" + "\n" + tab);

    if (tab.includes(input)) {
        tab.splice(tab.indexOf(input), 1);
        tab[tab.length] = "";
        console.log(tab);
    } else {
        alert("Veuillez saisir un prénom en respectant la casse");
        tableauVerif();
    }
})