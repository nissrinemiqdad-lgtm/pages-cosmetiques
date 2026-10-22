const config = {
  categorie: {
    fond: { name: "Fond de teint", price: 160 },
    rouge: { name: "Rouge à lèvres", price: 120 }
  },
  teinte: {
    nude: { name: "01 Nude", price: 0 },
    rosewood: { name: "02 Rosewood", price: 0 },
    cerise: { name: "03 Cerise", price: 0 }
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