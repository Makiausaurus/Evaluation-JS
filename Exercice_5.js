var i;
var x;
var resultat;

function TableDeMultiplication(x) {
    for (i = 1; i <= 10; i++) {
        resultat = x * i;
        console.log(x + "*" + i + " = " + resultat);
    }
}

TableDeMultiplication();