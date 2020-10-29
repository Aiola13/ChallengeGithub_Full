var poeme = document.getElementById('poeme').textContent;
var compteur = document.getElementById('compteur');
compteur.innerHTML = poeme.length;
var legumes = ["carotte", "patate", "choux", "poivron", "lentilles", "salades", "courgette", "epinards", "aubergine", "betteraves", "haricots" ];
console.log(legumes[0])
console.log(legumes[10])
if(compteur.innerHTML > 3000) {
    console.log ("on est sup")
}
else {
    console.log("tentative")
}