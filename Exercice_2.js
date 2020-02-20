var n = parseInt(prompt("Entrez un nombre pour connaître la somme de ses entiers inférieurs."));;
var i = 0;
var som = 0;

function calculSomEntInf(n) {
    for (i = 1; i < n; i++) {
        som += i;
        console.log(som);
    }
    console.log(som)
    alert("La somme des entiers inférieur à " + n + " est : " + som + ".");
}

calculSomEntInf();