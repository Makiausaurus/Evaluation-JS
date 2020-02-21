var i;
var resultat;

function TableDeMultiplication() {
    var x = parseInt(prompt("Entrez un nombre pour connaître sa table de multiplication :"));
    for (i = 1; i <= 10; i++) {
        resultat = x * i;
        alert(x + "*" + i + " = " + resultat);
    }
}

TableDeMultiplication();