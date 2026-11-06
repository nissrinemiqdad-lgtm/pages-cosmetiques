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
const finis = document.querySelectorAll('input[name="fini"]');
const listTeint = document.querySelector("#liste-teintes");
const ajoutTeint = document.querySelector("#ajouter-teinte");
const typesPeau = document.querySelectorAll('input[name="type-peau"]');
const erreurPeau = document.querySelector("#erreur-peau");
const resumeProduit = document.querySelector("#resume-produit");


//  Regex utilisée :
const regexNom = /^[A-Z][^0-9=/+*#@&$]*$/;
const regexPrix = /^(?!0+(\.0{1,2})?$)\d+(\.\d{1,2})?$/;
const regexDescription = /^.{10,700}$/;

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
    if (!regexDescription.test(description.value.trim())) {
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

// validation etapes 1 :
function validationEtape1() {
    return (
        validationNom() &
        validationPrix() &
        validationDescription() &
        validationImage() &
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

// validation promotion (function) :
function validationPromotion() {

    if (!promo.checked) {
        return true;
    }

    let valeurReduction = reduction.value;
    let valeurDateFin = dateFin.value;
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

// fini :
function validationFini() {
    let finiValide = false;

    finis.forEach(function (fini) {
        if (fini.checked) {
            finiValide = true;
        }
    });

    return finiValide;
}

// validation teinte :
function validationTeintes() {
    const nomsTeintes = document.querySelectorAll('[name="nom-teinte"]');
    let teintesValides = true;
    nomsTeintes.forEach(function (teinte) {
        const erreur = teinte.parentElement.querySelector(".erreur-teinte");

        if (teinte.value.trim() === "") {
            teintesValides = false;
            erreur.textContent = "Veuillez saisir le nom de la teinte";
            teinte.style.border = "2px solid red";
        } else {
            erreur.textContent = "";
            teinte.style.border = "2px solid green";
        }
    });
    return teintesValides;
}

// ajoute d'une teinte :
ajoutTeint.addEventListener("click", function () {

    listTeint.insertAdjacentHTML("beforeend", `
        <div class="teinte-item d-flex gap-2 mb-3">

            <input type="color" class="form-control form-control-color"
                name="couleur" value="">

            <div class="flex-grow-1">
                <input type="text" class="form-control"
                    name="nom-teinte" placeholder="Nom de la teinte">

                <small class="erreur-teinte text-danger d-block"></small>
            </div>

            <button type="button" class="btn btn-outline-danger supprimer-teinte">
                Supprimer
            </button>

        </div>
    `);

});

// button suprimer (teinte) :
listTeint.addEventListener("click", function (event) {

    if (event.target.classList.contains("supprimer-teinte")) {
        event.target.closest(".teinte-item").remove();
    }
});

//checked pour peau :
function validationTypesPeau() {
    let peauValide = false;

    typesPeau.forEach(function (peau) {
        if (peau.checked) {
            peauValide = true;
        }
    });

    if (!peauValide) {
        erreurPeau.textContent = "Veuillez sélectionner au moins un type de peau.";
    } else {
        erreurPeau.textContent = "";
    }

    return peauValide;
}

// validation étapes 2 :
function validationEtape2() {
    return (
        validationFini() &
        validationTeintes() &
        validationTypesPeau()
    )
}

// Resumé partie : 
function afficherResume() {
    resumeProduit.innerHTML = `
        <h3>Informations générales</h3>
        <p><strong>Nom :</strong> ${NomProduit.value}</p>
        <p><strong>Prix :</strong> ${PrixProduit.value} DH</p>
        <p><strong>Description :</strong> ${description.value}</p>
    `;
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
    if (validationEtape2()) {

        afficherResume();

        etape2.classList.add("d-none");
        etape3.classList.remove("d-none");

        steps[2].classList.add("active");
        progress2.style.width = "100%";

    } else {
        Swal.fire({
            icon: "error",
            title: "Options incomplètes",
            text: "Veuillez vérifier les options du produit avant de continuer."
        });
    }
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

