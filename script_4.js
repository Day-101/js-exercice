const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log("Entrepreneurs nés dans les années 70 :")
for(let entrepreneursAttribut in entrepreneurs) {
  if (entrepreneurs[entrepreneursAttribut].year >= 1970 && entrepreneurs[entrepreneursAttribut].year <= 1979) {
    console.log(" -",entrepreneurs[entrepreneursAttribut].first,entrepreneurs[entrepreneursAttribut].last.toUpperCase());
  }
}
console.log("Entrepreneurs :")
for(let entrepreneursAttribut in entrepreneurs) {
  console.log(" -",entrepreneurs[entrepreneursAttribut].first,entrepreneurs[entrepreneursAttribut].last.toUpperCase());
}

console.log("Les âges des entrepreneurs en 2021 (même les morts) :")
for(let entrepreneursAttribut in entrepreneurs) {
  age = 2021 - entrepreneurs[entrepreneursAttribut].year
  console.log(" -",entrepreneurs[entrepreneursAttribut].first,entrepreneurs[entrepreneursAttribut].last.toUpperCase(),":",age,"ans");
}
console.log("Entrepreneurs par ordre alphabétique :")
alphabetic = entrepreneurs.sort(function(a,b){
  return a.last.localeCompare(b.last);
})
for(let alphabeticAttribut in alphabetic) {
  console.log(" -",alphabetic[alphabeticAttribut].last.toUpperCase(),alphabetic[alphabeticAttribut].first);
}