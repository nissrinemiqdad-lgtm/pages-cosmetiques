//  const utilisée :
const NomProduit = document.querySelector("#nom-produit")
const PrixProduit = document.querySelector("#prix-produit")
const formulaire = document.querySelector("#form-produit");
const description = document.getElementById("description");
const imageProduit = document.getElementById("image-produit");
const etape1 = document.querySelector("#etape-1");
const etape2 = document.querySelector("#etape-2");
const etape3 = document.querySelector("#etape-3");
const boutonSuivant = document.querySelector("#class-suivant-1");
const boutonSuivant2 = document.querySelector("#class-suivant-2");
const boutonPrecedent2 = document.querySelector("#precedent-2");
const boutonPrecedent3 = document.querySelector("#precedent-3");
const progress1 = document.querySelector("#progress-1");
const progress2 = document.querySelector("#progress-2");
const cercle2 = document.querySelector("#circle-2");
const cercle3 = document.querySelector("#circle-3");
const steps = document.querySelectorAll(".step");
const promo = document.querySelector("#promotion");
const reduction = document.querySelector("#reduction");
const dateFin = document.querySelector("#date-fin");
const informationsPromotion = document.querySelector("#informations-promotion");
const errorReduction = document.querySelector("#erreur-reduction");
const errorDate = document.querySelector("#erreur-date");

//  Regex utilisée :
const regexNom = /^[A-Z][^0-9=/+*#@&$]*$/;
const regexPrix = /^(?!0+(\.0{1,2})?$)\d+(\.\d{1,2})?$/;
const regexDescription = /^.{10,300}$/;

// const des erreur :
const errorNom = document.getElementById("erreur-nom");
const errorPrix = document.getElementById("erreur-prix");
const errorImage = document.getElementById("erreur-image");
const erreur_description = document.getElementById("erreur-description");
// const valeurNom = NomProduit.value;
// const valeurPrix = PrixProduit.value;

// validation Nom (function) :
function validationNom() {
    if (!regexNom.test(NomProduit.value)) {
        errorNom.textContent = "Le nom est invalid";
        errorNom.style.color = "red";
        NomProduit.style.border = "2px solid red"
        return false;
    }
    else {
        errorNom.textContent = "";
        NomProduit.style.border = "2px solid green"
        return true;
    }

}

// validation prix (fucntion) :
function validationPrix() {
    if (!regexPrix.test(PrixProduit.value)) {
        errorPrix.textContent = "le prix est invalid"
        errorPrix.style.color = "red"
        PrixProduit.style.border = "2px solid red"
        return false;
    } else {
        errorPrix.textContent = ""
        PrixProduit.style.border = "2px solid green"
        return true;
    }
}

// validation description (function):
function validationDescription() {
    if (!regexDescription.test(description.value)) {
        erreur_description.textContent = "description invalid"
        erreur_description.style.color = "red"
        description.style.border = "2px solid red"
        return false;
    }
    else {
        erreur_description.textContent = ""
        description.style.border = "2px solid green"
        return true

    }
}

// validation image (function) :
function validationImage() {
    if (!imageProduit.value.trim()) {
        errorImage.textContent = "image obligatoire"
        imageProduit.style.border = "2px solid red"
        return false;
    }
    else {
        errorImage.textContent = ""
        imageProduit.style.border = "2px solid green"
        return true;
    }
}

// validation formulaire (function) : 
function validationFormulaire() {
    if (formulaire.checkValidity()) {
        return true;
    } else {
        return false;
    }
}

// validation etapes 1 :
function validationEtape1() {
    return (
        validationNom() &
        validationPrix() &
        validationDescription() &
        validationImage()&
        validationPromotion()
    );
}
// promotion :
promo.addEventListener("change", function () {

    if (promo.checked) {
        informationsPromotion.classList.remove("d-none");
    } else {
        informationsPromotion.classList.add("d-none");
    }

});
function validationPromotion() {

    let valeurReduction = null;
    let valeurDateFin = null;

    if (!promo.checked) {
        return true;
    }

    valeurReduction = reduction.value;
    valeurDateFin = dateFin.value;
    if (valeurReduction === "" || valeurReduction < 1 || valeurReduction > 100) {
        errorReduction.textContent = "La réduction doit être entre 1 et 100 %";
        errorReduction.style.color = "red";
        reduction.style.border = "2px solid red";
        return false;
    } else {
        errorReduction.textContent = "";
        reduction.style.border = "2px solid green";
    }
    const aujourdHui = new Date();
    const dateChoisie = new Date(valeurDateFin);

    aujourdHui.setHours(0, 0, 0, 0);

    if (valeurDateFin === "" || dateChoisie < aujourdHui) {
        errorDate.textContent = "Veuillez choisir une date valide";
        errorDate.style.color = "red";
        dateFin.style.border = "2px solid red";
        return false;
    } else {
        errorDate.textContent = "";
        dateFin.style.border = "2px solid green";
    }
    return true;

}



// button etapes  :
boutonSuivant.addEventListener("click", function () {

    if (validationEtape1()) {

        etape1.classList.add("d-none");
        etape2.classList.remove("d-none");

        steps[1].classList.add("active");
        progress1.style.width = "100%";

    } else {
        Swal.fire({
            icon: "error",
            title: "Formulaire invalide",
            text: "Veuillez corriger les erreurs avant de continuer."
        });
    }

});
boutonSuivant2.addEventListener("click", function () {
    etape2.classList.add("d-none");
    etape3.classList.remove("d-none");

    steps[2].classList.add("active");
    progress2.style.width = "100%";
});
boutonPrecedent2.addEventListener("click", function () {
    etape2.classList.add("d-none");
    etape1.classList.remove("d-none");
    steps[1].classList.remove("active");
    progress1.style.width = "0%";
});
boutonPrecedent3.addEventListener("click", function () {
    etape3.classList.add("d-none");
    etape2.classList.remove("d-none")

    steps[2].classList.remove("active");
    progress2.style.width = "0%";
})


formulaire.addEventListener("submit", function (event) {
    event.preventDefault();
    // Validation du nom :
    validationNom()
    // Validation du prix :
    validationPrix()
    // validation description : 
    validationDescription()
    // validation image : 
    validationImage()
    // Validation générale du formulaire :
    validationFormulaire()
});
