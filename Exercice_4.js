var inputAge = 0;
var jeune = [];
var moyen = [];
var vieux = [];

function repartAge() {

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
}

repartAge();