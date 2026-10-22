const config = {
    categorie: {
        fond: { name: "Fond de teint", price: 260.00 },
        rouge: { name: "Rouge à lèvres", price: 120 }
    },
    teinte: {
        nude: { name: "Nude", price: 0 },
        rosewood: { name: "Rosewood", price: 0 },
        terracotta: { name: "Terracotta", price: 0 },
        cerise: { name: "Cerise", price: 0 },
        prune: { name: "Prune", price: 0 },
        chocolat: { name: "Chocolat", price: 0 }
    },
    fini: {
        mat: { name: "Mat", price: 0 },
        brillant: { name: "Brillant", price: 15 }
    }
};

let selectedConfig = {
    categorie: null,
    teinte: null,
    fini: null
};

const produitsHTML = document.querySelectorAll('input[name="essentiel"]');
const teintesHTML = document.querySelectorAll('input[name="teinte"]');
const finisHTML = document.querySelectorAll('input[name="fini"]');

// 1. Choisir la catégorie du produit
produitsHTML.forEach(function(produit) {
    produit.addEventListener("change", function() {
        if (produit.checked) {
            selectedConfig.categorie =
                produit.value === "fond-de-teint" ? "fond" : "rouge";

            afficherConfiguration();
        }
    });
});

// 2. Choisir la teinte
teintesHTML.forEach(function(teinte) {
    teinte.addEventListener("change", function() {
        if (teinte.checked) {
            selectedConfig.teinte = teinte.value;
            afficherConfiguration();
        }
    });
});

// 3. Choisir le fini
finisHTML.forEach(function(fini) {
    fini.addEventListener("change", function() {
        if (fini.checked) {
            selectedConfig.fini = fini.value;
            afficherConfiguration();
        }
    });
});
console.log(config.categorie.fond.price);

const cartesProduits = document.querySelectorAll(".cartes")[0];

Object.entries(config.categorie).forEach(function([cle, produit]) {
    const id = cle === "fond" ? "fond-de-teint" : "rouge-a-levres";

    const input = document.getElementById(id);
    const label = document.querySelector(`label[for="${id}"]`);

    label.textContent = produit.name;

    const prix = document.createElement("span");
    prix.textContent = produit.price.toFixed(2).replace(".", ",") + " DH";

    label.appendChild(prix);
});
