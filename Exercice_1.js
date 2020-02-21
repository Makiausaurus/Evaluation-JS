var PU;
var QTECOM;
var PAP;
var PORT;
var REM;
var TOT;

function calculPrix() {

    PU = parseInt(prompt("Entrez le prix du produit commandé :"));
    TOT = PU;
    console.log(TOT)
    QTECOM = parseInt(prompt("Entrez la quantité voulue :"));
    TOT *= QTECOM;
    console.log(TOT)

    if (TOT >= 100 && TOT <= 200) { // si total entre 100 et 199 -> 5%
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

}

calculPrix();