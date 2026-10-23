const config = {
    categorie: {
        fond: { name: "Fond de teint", price: 350 },
        rouge: { name: "Rouge à lèvres", price: 120 }
    },
    teinte: {
        nude: { name: "Nude", price: 10 },
        rosewood: { name: "Rosewood", price: 10 },
        terracotta: { name: "Terracotta", price: 10 },
        cerise: { name: "Cerise", price: 10 },
        prune: { name: "Prune", price: 10 },
        chocolat: { name: "Chocolat", price: 10 }
    },
    fini: {
        mat: { name: "Mat", price: 10 },
        brillant: { name: "Brillant", price: 20 }
    }
};

let selectedConfig = {
    categorie: 0,
    teinte: 0,
    fini: 0,
};


const produitsHTML = document.querySelectorAll('input[name="essentiel"]');
const teintesHTML = document.querySelectorAll('input[name="teinte"]');
const finisHTML = document.querySelectorAll('input[name="fini"]');


for (let cle in config.categorie) {
    let produit = config.categorie[cle];
    let id;

    if (cle === "fond") {
        id = "fond-de-teint";
    } else {
        id = "rouge-a-levres";
    }

    const label = document.querySelector(`label[for="${id}"]`);

    label.textContent = produit.name;

    const prix = document.createElement("span");
    prix.textContent = produit.price.toFixed(2) + " DH";

    label.appendChild(prix);
}


for (let cle in config.fini) {
    let finition = config.fini[cle];
    let id;

    if (cle === "mat") {
        id = "fini-mat";
    } else {
        id = "fini-brillant";
    }

    const label = document.querySelector(`label[for="${id}"]`);
    console.log(label)
    label.textContent = finition.name;

    const prix = document.createElement("span");
    prix.textContent = finition.price.toFixed(2) + " DH";

    label.appendChild(prix);

}
const prixtotalHTML = document.getElementById("prix-total")

let labels = document.querySelectorAll("label")
labels[0].addEventListener("click", choix_fond)
labels[1].addEventListener("click", choix_rouge)
labels[2].addEventListener("click", choix_nude)
labels[3].addEventListener("click", choix_rosewood)
labels[4].addEventListener("click", choix_terracotta)
labels[5].addEventListener("click", choix_cerise)
labels[6].addEventListener("click", choix_prune)
labels[7].addEventListener("click", choix_chocolat)
labels[8].addEventListener("click", choix_mat)
labels[9].addEventListener("click", choix_brillant)



function choix_fond() {
    selectedConfig.categorie = config.categorie.fond.price;
    calculator();
}

function choix_rouge() {
    selectedConfig.categorie = config.categorie.rouge.price;
     calculator();
}

function choix_nude() {
    selectedConfig.teinte = config.teinte.nude.price;
     calculator();
}

function choix_rosewood() {
    selectedConfig.teinte = config.teinte.rosewood.price;
     calculator();
}
function choix_terracotta() {
    selectedConfig.teinte = config.teinte.terracotta.price;
    calculator();
}
function choix_cerise() {
    selectedConfig.teinte = config.teinte.cerise.price;
    calculator();
}
function choix_prune() {
    selectedConfig.teinte = config.teinte.prune.price;
     calculator();
}
function choix_chocolat() {
    selectedConfig.teinte = config.teinte.chocolat.price;
    calculator();
}
function choix_mat() {
    selectedConfig.fini = config.fini.mat.price;
     calculator();
}
function choix_brillant() {
    selectedConfig.fini = config.fini.brillant.price;
     calculator();
}

// function du somme :

function calculator() {
    let  somme = 0;
    for (key in selectedConfig) {
        somme += selectedConfig[key]  
    }
    prixtotalHTML.textContent = somme.toFixed(2) + " DH"
    return somme 

}
