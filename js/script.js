var poeme = document.getElementById('poeme').textContent;
var compteur = document.getElementById('compteur');
compteur.innerHTML = poeme.length;
<<<<<<< HEAD
var legumes = ["carotte", "patate", "choux", "poivron", "lentilles", "salades", "courgette", "epinards", "aubergine", "betteraves", "haricots" ];
console.log(legumes[0])
console.log(legumes[10])
if(compteur.innerHTML > 3000) {
    console.log ("on est sup")
}
else {
    console.log("tentative")
}
=======

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
>>>>>>> 5e84df7ec6817c3a0d34e7c3929da5c7df8ad239
