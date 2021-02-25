const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?")
for(let booksAttribut in books) {
  if (books[booksAttribut].rented <= 0) {
    console.log("Réponse : non");
  } else {
    console.log("Réponse : oui");
  }
}
console.log("Quel est livre le plus emprunté ?");
let maxRented = books.reduce((k, v) => k.rented > v.rented ? k : v);
console.log("->",maxRented.title);

console.log("Quel est le livre le moins emprunté ?");
let minRented = books.reduce((k, v) => k.rented < v.rented ? k : v);
console.log("->",minRented.title);
console.log("Trouve le livre avec l'ID: 873495");
let searchID = 873495
console.log("->",books.find(x => x.id === searchID).title);

console.log("Supprime le livre avec l'ID: 133712");
let toDeleteID = 133712
let idToDelete = books.find(x => x.id === toDeleteID)
books.splice(idToDelete, 1);
console.log(books)

console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).");
alphabetic = books.sort(function(a,b){
  return a.title.localeCompare(b.title);
})
for(let alphabeticAttribut in alphabetic) {
  console.log(" -",alphabetic[alphabeticAttribut].title);
}