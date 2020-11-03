var poeme = document.getElementById('poeme').textContent;
var compteur = document.getElementById('compteur');
compteur.innerHTML = poeme.length;

var legumes = [
    "carottes",
    "haricots",
    "aubergines",
    "courgettes",
    "potirons",
    "tomates",
    "patates",
    "panais",
    "betteraves",
    "laitues",
    "navets"
];
console.log(legumes[0]);
console.log(legumes[10]);
console.log(document.querySelector("#compteur")>3000);
