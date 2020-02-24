function calculSomEntInf() {
    let i = 0;
    let som = 0;
    let n = parseInt(prompt("Entrez un nombre pour connaître la somme de ses entiers inférieurs."));
    for (i = 1; i < n; i++) {
        som += i;
        console.log(som);
    }
    console.log(som)
    alert("La somme des entiers inférieur à " + n + " est : " + som + ".");
}

calculSomEntInf();