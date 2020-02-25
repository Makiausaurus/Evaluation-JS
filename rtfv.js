//récupération des inputs
let validField = [];
let myForm = document.getElementById("myForm");

//RegEx
let RegExCP = /^[0-9][0-9][0-9][0-9][0-9]+$/; //n'accepte qu'une valeur à 5 chiffres
let RegExMail = /^\S+@\S+\.\S+$/; //n'autorise pas les espaces avant/après le "@" et le "."
let RegExNomPrenomVille = /^[a-zA-Záàâãéèêíïóôõöúçñ-\s]+$/; //accepte lettres, tirets, espaces

//vérification inputs
let chkInNom = document.getElementById("nom");
chkInPrenom = document.getElementById("prenom");
chkInGenre = document.getElementsByName("genre");
chkInBD = document.getElementById("birthDate");
chkInCP = document.getElementById("codePostal");
chkInVille = document.getElementById("ville");
chkInMail = document.getElementById("mail");
chkInSujet = document.getElementById("sujet");
chkInQuestion = document.getElementById("question");
chkInConsent = document.getElementById("consent");

//a l'envoi
myForm.addEventListener('submit', function(e) {
    e.preventDefault();

    //vérification genre
    let inputGenreF = document.getElementById('feminin');
    let inputGenreM = document.getElementById('masculin');
    let errorGenre = document.getElementById('errorGenre');

    if (inputGenreF.checked == false && inputGenreM.checked == false) {
        errorGenre.innerHTML = "<p>Veuillez sélectionner votre genre</p>"
        errorGenre.style.color = "red";
        delete validField[9];
        console.log(validField);
    } else {
        errorGenre.innerHTML = "";
        validField[9] = "GV";
        console.log(validField);
    }

    if (validField.includes("NFV" && "PV" && "BDV" && "CPV" && "VV" && "MV" && "SV" && "QV" && "CV" && "GV")) { // à changer en booléen
        document.getElementById("myForm").submit();
    }

});

myForm.addEventListener('reset', () => {
    validField = [];
    console.log(validField);
})

//vérification nom
chkInNom.addEventListener('change', () => {
    let inputNom = document.getElementById('nom')
    let errorNom = document.getElementById('errorNom')

    if (inputNom.value == "") {
        errorNom.innerHTML = "<p>Ce champs doit être renseigné.</p>"
        errorNom.style.color = "red";
        delete validField[0];
        console.log(validField);
    } else if (RegExNomPrenomVille.test(inputNom.value) == false) {
        errorNom.innerHTML = "<p>Ce champs doit uniquement comporter des lettres, " +
            " des tirets et des espaces.</p>"
        errorNom.style.color = "red";
        delete validField[0];
        console.log(validField);
    } else {
        errorNom.innerHTML = "";
        validField[0] = "NFV";
        console.log(validField);
    }
});

//vérification prénom
chkInPrenom.addEventListener('change', () => {
    let inputPrenom = document.getElementById('prenom')
    let errorPrenom = document.getElementById('errorPrenom')

    if (inputPrenom.value == "") {
        errorPrenom.innerHTML = "<p>Ce champs doit être renseigné.</p>"
        errorPrenom.style.color = "red";
        delete validField[1];
        console.log(validField);
    } else if (RegExNomPrenomVille.test(inputPrenom.value) == false) {
        errorPrenom.innerHTML = "<p>Ce champs doit uniquement comporter des lettres, " +
            " des tirets et des espaces.</p>"
        errorPrenom.style.color = "red";
        delete validField[1];
        console.log(validField);
    } else {
        errorPrenom.innerHTML = "";
        validField[1] = "PV";
        console.log(validField);
    }
});

//vérification date de naissance
chkInBD.addEventListener('blur', () => {
    let inputBirthDate = document.getElementById('birthDate')
    let errorBirthDate = document.getElementById('errorBirthDate')
    console.log(inputBirthDate.value);
    if (inputBirthDate.value == "") {
        errorBirthDate.innerHTML = "<p>Ce champs doit être renseigné.</p>"
        errorBirthDate.style.color = "red";
        delete validField[2];
        console.log(validField)
    } else {
        errorBirthDate.innerHTML = "";
        validField[2] = "BDV";
        console.log(validField);
    }
});

//vérification code postal
chkInCP.addEventListener('change', () => {
    let inputCodePostal = document.getElementById('codePostal')
    let errorCodePostal = document.getElementById('errorCodePostal')

    if (inputCodePostal.value == "") {
        errorCodePostal.innerHTML = "<p>Ce champs doit être renseigné.</p>"
        errorCodePostal.style.color = "red";
        delete validField[3];
        console.log(validField);
    } else if (RegExCP.test(inputCodePostal.value) == false) {
        errorCodePostal.innerHTML = "<p>Le Code Postal doit obligatoirement être " +
            "composé de 5 chiffres</p>"
        errorCodePostal.style.color = "red";
        delete validField[3];
        console.log(validField);
    } else {
        errorCodePostal.innerHTML = "";
        validField[3] = "CPV";
        console.log(validField);
    }
});

//vérification ville
chkInVille.addEventListener('change', () => {
    let inputVille = document.getElementById('ville')
    let errorVille = document.getElementById('errorVille')

    if (inputVille.value == "") {
        errorVille.innerHTML = "<p>Ce champs doit être renseigné.</p>"
        errorVille.style.color = "red";
        delete validField[4];
        console.log(validField);
    } else if (RegExNomPrenomVille.test(inputVille.value) == false) {
        errorVille.innerHTML = "<p>Ce champs doit uniquement comporter des lettres, " +
            " des tirets et des espaces.</p>"
        errorVille.style.color = "red";
        delete validField[4];
        console.log(validField);
    } else {
        errorVille.innerHTML = "";
        validField[4] = "VV";
        console.log(validField);
    }
});

//vérification mail
chkInMail.addEventListener('change', () => {
    let inputMail = document.getElementById('mail')
    let errorMail = document.getElementById('errorMail')

    if (inputMail.value == "") {
        errorMail.innerHTML = "<p>Ce champs doit être renseigné.</p>"
        errorMail.style.color = "red";
        delete validField[5];
        console.log(validField);
    } else if (RegExMail.test(inputMail.value) == false) {
        errorMail.innerHTML = "<p>L'adresse e-mail doit obligatoirement contenir" +
            " un '@' et être au format 'xxx@yy.zz'</p>"
        errorMail.style.color = "red";
        delete validField[5];
        console.log(validField);
    } else {
        errorMail.innerHTML = "";
        validField[5] = "MV";
        console.log(validField);
    }
});

//vérification sujet
chkInSujet.addEventListener('change', () => {
    let inputSujet = document.getElementById('sujet')
    let errorSujet = document.getElementById('errorSujet')
    console.log(inputSujet.value);
    if (inputSujet.value == "") {
        errorSujet.innerHTML = "<p>Veuillez sélectionner une sujet</p>"
        errorSujet.style.color = "red";
        delete validField[6];
        console.log(validField);
    } else {
        errorSujet.innerHTML = "";
        validField[6] = "SV";
        console.log(validField);
    }
});

//vérification question
chkInQuestion.addEventListener('change', () => {
    let inputQuestion = document.getElementById('question')
    let errorQuestion = document.getElementById('errorQuestion')

    if (inputQuestion.value == "") {
        errorQuestion.innerHTML = "<p>Veuillez posez votre question</p>"
        errorQuestion.style.color = "red";
        delete validField[7];
        console.log(validField);
    } else {
        errorQuestion.innerHTML = "";
        validField[7] = "QV";
        console.log(validField);
    }
});


//vérification consentement
chkInConsent.addEventListener('change', () => {
    let inputConsent = document.getElementById('consent')
    let errorConsent = document.getElementById('errorConsent')

    if (inputConsent.checked == false) {
        errorConsent.innerHTML = "<p>Veuillez acceptez les conditions</p>"
        errorConsent.style.color = "red";
        delete validField[8];
        console.log(validField);
    } else {
        errorConsent.innerHTML = "";
        validField[8] = "CV";
        console.log(validField);
    }
});