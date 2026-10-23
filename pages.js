const config = {
    categorie: {
        fond: { name: "Fond de teint", price: 170 },
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
        mat: { name: "Mat", price: 10 },
        brillant: { name: "Brillant", price: 20 }
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
const checkbox = document.getElementById("teinte");
if (checkbox.checked) {
  console.log("La case est cochée !");
} else {
  console.log("La case n'est pas cochée.");
}
