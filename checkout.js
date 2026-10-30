
// 1. Le tableau global (Catalogue complet incluant les accessoires)
const makeupProducts = [
    { id: "m1", name: "Fond de Teint Mat", category: "Visage", shade: "Beige Clair", price: 25.00, image: "fondation fit me.jpg" },
    { id: "m2", name: "Rouge à Lèvres Velours", category: "Lèvres", shade: "Rouge Intense", price: 18.50, image: "lipstick 1.jpg" },
    { id: "m3", name: "Rouge à Lèvres Velours", category: "Lèvres", shade: "Nude Rosé", price: 18.50, image: "lipstick2.jpg" },
    { id: "m4", name: "Mascara Volume", category: "Yeux", shade: "Noir", price: 15.00, image: "mascara.jpg" },
    { id: "m5", name: "Palette Fards à Paupières", category: "Yeux", shade: "Automne", price: 35.00, image: "palette.jpg" },
    { id: "m6", name: "Blush Poudre", category: "Visage", shade: "Pêche", price: 20.00, image: "blush.jpg" },
    { id: "m7", name: "Set de 5 Pinceaux Pro", category: "Accessoire", shade: "N/A", price: 28.00, image: "pinceaux5.jpg" },
    { id: "m8", name: "Éponge Beauty Blender", category: "Accessoire", shade: "Rose", price: 8.50, image: "blender.jpg" },
    { id: "m9", name: "Trousse de Voyage", category: "Accessoire", shade: "Noir", price: 16.00, image: "trousse.jpg" },
    { id: "m10", name: "Recourbe-cils Précision", category: "Accessoire", shade: "Métal", price: 12.00, image: "curler.jpg" }
];

// 2. Le tableau des produits dans le panier par défaut (avec des accessoires)
let makeupCart = [
    { id: "m1", name: "Fond de Teint Mat", shade: "Beige Clair", price: 25.00, quantity: 1, image: "fondation.jpg" },
    { id: "m2", name: "Rouge à Lèvres Velours", shade: "Rouge Intense", price: 18.50, quantity: 2, image: "rouge.jpg" },
    { id: "m7", name: "Set de 5 Pinceaux Pro", shade: "N/A", price: 28.00, quantity: 1, image: "blend.jpg" },
    { id: "m8", name: "Éponge Beauty Blender", shade: "Rose", price: 8.50, quantity: 2, image: "pinceaux.jpg" }
];

const list = document.getElementById('liste-produits')

// function de creation :

function creation(tag, ClassName, Text) {
    const element = document.createElement(tag)
    if (ClassName) {
        element.className = ClassName
    }
    if (Text !== undefined && Text !== null) {
        element.textContent = Text
    }
    return element;
}
// function pour crée la card :

function creation_card(objet) {
    const cart = creation('article', 'produit');
    const image = creation('img', 'image_produit');
    image.src = 'images/' + objet.image;
    image.alt = objet.name;

    const division = creation('div', 'info_produit');
    const h3 = creation('h3', 'titre', objet.name);
    const p = creation('p', 'paragraphe', objet.shade);
    const prix = creation('p', 'prix-total', (objet.price * objet.quantity).toFixed(2) + " DH");
    const divisionn = creation('div', 'quantite');
    const button = creation('button', 'diminue_quantite', '-');
    button.type = "button";
    const span_ = creation('span', 'span___', objet.quantity);
    const buttonn = creation('button', 'augmente_quantite', "+");
    buttonn.type = "button";
    // button + et - :

    buttonn.addEventListener('click', function () {
        objet.quantity++;
        affichage();
    });

    button.addEventListener('click', function () {
        if (objet.quantity > 1) {
            objet.quantity--;
            affichage();
        }
    });

    division.appendChild(h3);
    division.appendChild(p);
    division.appendChild(prix);
    divisionn.appendChild(button);
    divisionn.appendChild(span_);
    divisionn.appendChild(buttonn);
    cart.appendChild(image);
    cart.appendChild(division);
    cart.appendChild(divisionn);
    return cart;

}
// function affichage dans le panier

function affichage() {
    list.innerHTML = "";
    for (let objet in makeupCart) {
        const objet_cart = makeupCart[objet];
        const objetCart = creation_card(objet_cart);

        list.appendChild(objetCart);
    }
    calculTotal()
}


const rechercher = document.getElementById("recherche-produit")
const resultat = document.getElementById("resultats-recherche")

// recherche :

function rechercheProduit() {
    const texte = rechercher.value.toLowerCase().trim();

    if (texte === "") {
        afficherResultats(makeupProducts);
        return;
    }

    const produitsTrouves = makeupProducts.filter(function (produit) {
        return produit.name.toLowerCase().includes(texte);
    });
    afficherResultats(produitsTrouves);
}

// affichage des resultat :

function afficherResultats(produits) {

    resultat.innerHTML = "";

    if (produits.length === 0) {
        resultat.textContent = "Aucun produit trouvé.";
        return;
    }

    produits.forEach(function (produit) {

        const carte = document.createElement("article");
        carte.className = "resultat-produit";

        const image = document.createElement("img");
        image.src = "images/" + produit.image;
        image.alt = produit.name;

        const informations = document.createElement("div");
        informations.className = "info-resultat";

        const nom = document.createElement("h3");
        nom.textContent = produit.name;

        const teinte = document.createElement("p");
        teinte.textContent = produit.shade;

        const prix = document.createElement("p");
        prix.textContent = produit.price.toFixed(2) + " DH";

        const bouton = document.createElement("button");
        bouton.textContent = "Ajouter";
        bouton.type = "button";
        bouton.addEventListener("click", function () {
            ajouterAuPanier(produit);
            rechercheProduit();
        });

        informations.appendChild(nom);
        informations.appendChild(teinte);
        informations.appendChild(prix);

        carte.appendChild(image);
        carte.appendChild(informations);
        carte.appendChild(bouton);

        resultat.appendChild(carte);
    });
}
// initialisation :
rechercher.addEventListener("input", rechercheProduit);
afficherResultats(makeupProducts);

function ajouterAuPanier(produit) {

    const produitExistant = makeupCart.find(function (item) {
        return item.id === produit.id;
    });

    if (produitExistant) {
        produitExistant.quantity++;
    } else {
        makeupCart.push({
            id: produit.id,
            name: produit.name,
            category: produit.category,
            shade: produit.shade,
            price: produit.price,
            image: produit.image,
            quantity: 1
        });
    };
    affichage();
}



const total = document.getElementById("sous-total")
function calculTotal() {
    let somme = 0
    for (let produit of makeupCart) {
        somme += produit.price * produit.quantity;
    }
    total.textContent = somme.toFixed(2) + " DH";
}

const total_ = document.getElementById("sous-total");
const PrixTotal = document.getElementById("prix-total");
const fraisLivraison = 25;

function calculTotal() {
    let somme = 0;

    for (let produit of makeupCart) {
        somme += produit.price * produit.quantity;
    }

    total_.textContent = somme.toFixed(2) + " DH";

    const prixFinal = somme + fraisLivraison;
    PrixTotal.textContent = prixFinal.toFixed(2) + " DH";
}

affichage();