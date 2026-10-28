
// 1. Le tableau global (Catalogue complet incluant les accessoires)
const makeupProducts = [
  { id: "m1", name: "Fond de Teint Mat", category: "Visage", shade: "Beige Clair", price: 25.00, image: "foundation1.jpg" },
  { id: "m2", name: "Rouge à Lèvres Velours", category: "Lèvres", shade: "Rouge Intense", price: 18.50, image: "lipstick-red.jpg" },
  { id: "m3", name: "Rouge à Lèvres Velours", category: "Lèvres", shade: "Nude Rosé", price: 18.50, image: "lipstick-nude.jpg" },
  { id: "m4", name: "Mascara Volume", category: "Yeux", shade: "Noir", price: 15.00, image: "mascara.jpg" },
  { id: "m5", name: "Palette Fards à Paupières", category: "Yeux", shade: "Automne", price: 35.00, image: "palette.jpg" },
  { id: "m6", name: "Blush Poudre", category: "Visage", shade: "Pêche", price: 20.00, image: "blush.jpg" },
  { id: "m7", name: "Set de 5 Pinceaux Pro", category: "Accessoire", shade: "N/A", price: 28.00, image: "brushes.jpg" },
  { id: "m8", name: "Éponge Beauty Blender", category: "Accessoire", shade: "Rose", price: 8.50, image: "blender.jpg" },
  { id: "m9", name: "Trousse de Voyage", category: "Accessoire", shade: "Noir", price: 16.00, image: "bag.jpg" },
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

function creation (tag , ClassName , Text ){
    const element =document.createElement(tag)
    if(ClassName){
        element.className = ClassName
    }
    if(Text !== undefined && Text !== null){
        element.textContent = Text
    }
    return element ;
}

function creation_card(objet){
    const cart = creation('article' , 'produit') ;
    const image = creation('img' , 'image_produit');
    image.src ='images/' + objet.image  ;
    image.alt = objet.name;
    
    const division = creation('div' , 'info_produit');
    const h3 = creation('h3' , 'titre' , objet.name);
    const p = creation('p' , 'paragraphe' , objet.shade);
    const prix = creation('p' , 'prix-total' , objet.price.toFixed(2) + " DH");
    const divisionn = creation('div' , 'quantite');
    const button = creation('button' , 'diminue_quantite' , '-');
    button.type = "button" ;
    const span_ = creation('span' , 'span___' , objet.quantity);
    const buttonn = creation('button' , 'augmente_quantite' , "+");
    button.type = "button" ;
    division.appendChild(h3);
    division.appendChild(p);
    division.appendChild(prix);
    divisionn.appendChild(button);
    divisionn.appendChild(span_);
    divisionn.appendChild(buttonn);
    cart.appendChild(image);
    cart.appendChild(division);
    cart.appendChild(divisionn);
    return cart ;

}

function affichage(){
    list.innerHTML="";
    for(let objet in makeupCart){
        const objet_cart = makeupCart[objet] ;
        const objetCart = creation_card(objet_cart);

        list.appendChild(objetCart);
    }
}
affichage()