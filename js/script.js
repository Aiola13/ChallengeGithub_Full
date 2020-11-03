var poeme = document.getElementById('poeme').textContent;
var compteur = document.getElementById('compteur');
compteur.innerHTML = poeme.length;

<<<<<<< HEAD
var legumes = ["patate", "aubergine","carotte", "haricot", "courgette", "citrouille", "lentille", "salades", "chou-fleur", "poivron","betterave"]
console.log(legumes[0])
console.log(legumes[10])
if (compteur.innerHTML > 3000) {
    console.log("hhhhiiiiii C'est supérieur")
}
else {
    console.log("dommage retente ta chances")
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
