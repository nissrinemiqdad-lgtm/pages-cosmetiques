//  const utilisée :
const NomProduit = document.querySelector("#nom-produit")
const PrixProduit = document.querySelector("#prix-produit")
const formulaire = document.querySelector("#form-produit");
const description = document.getElementById("description");
const imageProduit = document.getElementById("image-produit");


//  Regex utilisée :
const regexNom = /^[A-Z][^0-9=/+*#@&$]*$/;
const regexPrix = /^(?!0+(\.0{1,2})?$)\d+(\.\d{1,2})?$/;
const regexDescription = /^.{10,300}$/;


formulaire.addEventListener("submit", function (event) {
    event.preventDefault();

    const errorNom = document.getElementById("erreur-nom");
    const errorPrix = document.getElementById("erreur-prix");
    const errorImage = document.getElementById("erreur-image");
    const erreur_description = document.getElementById("erreur-description");
    const valeurNom = NomProduit.value;
    const valeurPrix = PrixProduit.value;

    // Validation du nom :

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

    // Validation du prix :

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

    // validation d'inscription : 

    if (!regexDescription.test(description.value)) {
        Swal.fire({
            icon: "error",
            title: "Description invalide",
            text: "La description doit contenir entre 10 et 300 caractères."
        });
        erreur_description.textContent = "description invalid"
        erreur_description.style.color = "red"
        description.style.border = "2px solid red"
    }
    else {
        erreur_description.textContent = ""
        description.style.border = "2px solid green"

    }

    // validation image : 
    if (!imageProduit.value.trim()) {
        Swal.fire({
            icon: "error",
            title: "Image obligatoire",
            text: "Veuillez saisir le lien de l'image."
        });
        errorImage.textContent = "image obligatoire"
        imageProduit.style.border="2px solid red"
    }
    else{
        errorImage.textContent = ""
        imageProduit.style.border = "2px solid green"
    }

    // Validation générale du formulaire :

    if (formulaire.checkValidity()) {
        console.log("Formulaire valide");
    } else {
        console.log("Formulaire invalide");
    }
});