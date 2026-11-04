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

//  Regex utilisée :
const regexNom = /^[A-Z][^0-9=/+*#@&$]*$/;
const regexPrix = /^(?!0+(\.0{1,2})?$)\d+(\.\d{1,2})?$/;
const regexDescription = /^.{10,300}$/;

// const des erreur :
const errorNom = document.getElementById("erreur-nom");
const errorPrix = document.getElementById("erreur-prix");
const errorImage = document.getElementById("erreur-image");
const erreur_description = document.getElementById("erreur-description");
const valeurNom = NomProduit.value;
const valeurPrix = PrixProduit.value;


// validation Nom (function) :
function validationNom() {
    if (!regexNom.test(valeurNom)) {
        errorNom.textContent = "Le nom est invalid";
        errorNom.style.color = "red";
        NomProduit.style.border = "2px solid red"
        Swal.fire({
            title: 'Error!',
            text: 'entrez le Nom puis réessayer',
            icon: 'error',
            confirmButtonText: 'OK'
        })
        return;
    }
    else {
        errorNom.textContent = "";
        NomProduit.style.border = "2px solid green"
    }

}

// validation prix (fucntion) :
function validationPrix() {
    if (!regexPrix.test(valeurPrix)) {
        errorPrix.textContent = "le prix est invalid"
        errorPrix.style.color = "red"
        PrixProduit.style.border = "2px solid red"
        Swal.fire({
            title: 'Error!',
            text: 'entrez le prix puis réessayer',
            icon: 'error',
            confirmButtonText: 'OK'
        })
        return;
    } else {
        errorPrix.textContent = ""
        PrixProduit.style.border = "2px solid green"
    }
}

// validation description (function):
function validationDescription() {
    if (!regexDescription.test(description.value)) {
        Swal.fire({
            icon: "error",
            title: "Description invalide",
            text: "La description doit contenir entre 10 et 300 caractères."
        });
        erreur_description.textContent = "description invalid"
        erreur_description.style.color = "red"
        description.style.border = "2px solid red"
        return;
    }
    else {
        erreur_description.textContent = ""
        description.style.border = "2px solid green"

    }
}

// validation image (function) :
function validationImage() {
    if (!imageProduit.value.trim()) {
        Swal.fire({
            icon: "error",
            title: "Image obligatoire",
            text: "Veuillez saisir le lien de l'image."
        });
        errorImage.textContent = "image obligatoire"
        imageProduit.style.border = "2px solid red"
    }
    else {
        errorImage.textContent = ""
        imageProduit.style.border = "2px solid green"
    }
}

// validation formulaire (function) : 
function validationFormulaire (){
     if (formulaire.checkValidity()) {
        Swal.fire({
            icon: "success",
            title: "Formulaire",
            text: "Formulaire valid "
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Formulaire",
            text: "Formulaire invalid."
        });
    }
}

// button etapes  :
boutonSuivant.addEventListener("click", function () {
    etape1.classList.add("d-none");
    etape2.classList.remove("d-none");

    steps[1].classList.add("active");
    progress1.style.width = "100%";
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
