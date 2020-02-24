// 2ème méthode avec tableau et tri
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
    console.log("Trié : " + tabNoTri)
}

function moyMinMax2() {
    let tabVal = [];
    let i = 0;
    let tot = 0;

    tabVal[i] = parseInt(prompt("Entrez une valeur (0 pour arrêter la saisie) :"));
    tot += tabVal[i];
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

    bubbleSort(tabVal);

    console.log(tabVal[tabVal.length - 1]);
    alert("La moyenne de " + tot + "/" + tabVal.length + " est de : " + (tot / tabVal.length).toFixed(2) +
        "\nLa valeur minimale rentrée était : " + tabVal[0] +
        "\nLa valeur maximale rentrée était : " + tabVal[tabVal.length - 1]);
    /* dans le cas ou les valeurs sont 1(0), 2(1), 3(2), 4(3) et 5(4), tabVal.length renvoie 5, mais l'index pour récupérer 5 est 4, donc -1 */
}

moyMinMax2();