function TableDeMultiplication() {
    let i;
    let resultat;
    let x = parseInt(prompt("Entrez un nombre pour connaître sa table de multiplication :"));
    for (i = 1; i <= 10; i++) {
        resultat = x * i;
        let table = document.getElementById("table");
        let resultatAff = document.getElementById("resultatAff");

        table.innerHTML = ("La table de multiplication de " + x + " est :")
        resultatAff.innerHTML += (x + " x " + i + " = " + resultat + " / ");
    }
}

TableDeMultiplication();