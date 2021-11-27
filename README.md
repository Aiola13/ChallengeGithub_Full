# ChallengeGithub - FAQ
![visitors](https://visitor-badge.glitch.me/badge?page_id=aiola13)
![Files](https://img.shields.io/github/directory-file-count/Aiola13/ChallengeGithub_Full?style=flat-square)
![Size](https://img.shields.io/github/repo-size/Aiola13/ChallengeGithub_Full?style=flat-square)
![lastcommit](https://img.shields.io/github/last-commit/aiola13/ChallengeGithub_Full)
![Logo Github utilisé pour la FAQ](./ressources/github.jpg)

## Welcome HOME! 👋

**Merci de lire attentivement ce qui suit.**


[ldurand.fr](https://www.ldurand.fr) My WebSite ♥.



### Rappel

Vous effectuerez ce TD sur vos machines personnelles ou sur les ordinateurs mis à votre disposition. 

Créer un répertoire de travail Github et des sous répertoires correspondants aux exercices. 
À chaque étape, il faut commiter, avec un message explicite de ce que vous avez fait.

N’oubliez pas de faire des recherches sur le Web à chaque fois que cela est nécessaire en prenant soin de vérifier que les informations trouvées soient correctes. (vous pourrez notamment utiliser le site Web https://docs.github.com/ , https://git-scm.com/book/fr/v2 ).

Les logiciels à télécharger : 
* https://git-scm.com/download/mac
* https://gitforwindows.org/
* https://desktop.github.com

Voici quelques mots de vocabulaire :
* Branch > Créer une branche
* Push > Pousser vers le répertoire distant
* Pull > Récupérer dans le répertoire local
* Commit > Indexer
* Gihtub a été créé par Linus Torvalds
* Github est un logiciel de gestion de version (Versioning)
* git est une commande CLI qui a comme argument :
   * init
   * add
   * merge
   * commit
   * push
   * pull
   * checkout
   * clone
   * ect ...


### The challenge

#### [BONUS] Répertoire profil
En premier lieu, créer le répertoire tpgit et se créer un compte Github https://github.com/.
Ensuite, sécuriser l’accès à votre compte Github via une paire de clés RSA avec cette
commande.
```
ssh-keygen -t rsa -b 4096 -C "votreemail@hebergeur.com"
```
Transférer votre clé publique dans votre compte Github.
Se créer un “répertoire profil” via un README.md via le site github.
Cloner ce répertoire sur votre machine et modifier le README.md et pusher le sur le serveur
distant.

#### First part
L'idée ici est de retracer les étapes qu'aurait effectuées Georges Brassens pour mettre en chanson le poème 'Les oiseaux de passage' de Jean Richepin.

Voici les étapes à effectuer :
* créer un nouveau dépôt Git.
* le poème de Richepin est situé dans le fichier html index.html

Appropriez vous le challenge sur vos machines.
**Créer une branche nommée _FirstPart_votreNom_.**

Modifications à valider :
1. [ ] suppression des 8 premiers paragraphes (jusque "...épiciers?")
2. [ ] suppression du §4 courant ("Elle ne sentit...")
3. [ ] suppression du §5 courant ("Aussi, comme...")
4. [ ] modifications du §5 courant (en 2 commits séparés) :
    1. [ ] N'avoir aucun... -> Ils n'ont aucun... (Le premier)
    2. [ ] Posséder pour... -> Possèdent pour… (Le deuxième)
5. [ ] suppression § 7, 8 et 9 courants (de "Les pigeons, le bec..." à "...des appas ?")
6. [ ] suppression § 10, 11, 12 et 13 courants (de "Ils sont maigres..." à "...n'abordera jamais.")
7. [ ] répétition du dernier §

**La branche _FirstPart_votreNom_ permettra la correction de ce que vous avez fait**


Usez et abusez de git status, git diff, git log et git show à chaque étape pour bien comprendre ce qu'il se passe !
Votre historique devrait ressembler à cela:
```
496067d répétition du dernier §
7458110 suppression § 10, 11, 12 et 13
0e779bd suppression § 7, 8 et 9
75ec3a0 §5: Posseder pour... -> Possèdent pour...
d0fc7a3 §5: N'avoir aucun... -> Ils n'ont aucun...
75f22cf suppression du §5 courant
3e81e34 suppression du §4 courant
4329040 Suppression des 8 premiers §
ca170fa Ajout du poème de Richepin
```
1. [ ] Effectuer un Push vers le serveur Origin.
2. [ ] Effectuons maintenant une Pull Request vers le serveur Upstream.



#### Second part

Revenez à la toute première version de commit sur votre master.
**Créer une branche nommée _SecondPart_votreNom_.**

1. [ ] Ajouter un titre H1 dans votre page html
2. [ ] Créer un CSS :
    1. [ ] Sous-titrer le h1
    2. [ ] Centrer le tout
3. [ ] Créer un tableau JS dans "script.js"
    1. [ ] Il doit contenir 11 entrées (11 légumes)
    2. [ ] Afficher dans la console la première entrée du tableau
    3. [ ] Afficher dans la console la dernière entrée du tableau
    4. [ ] Vérifier visuellement que le chiffre au dessus du poème est supérieur à 3000
4. [ ] Ajouter un tag
5. [ ] Effectuer un push vers votre serveur.
6. Que pouvez-vous dire sur ce que vous venez de faire ?

**La branche _SecondPart_votreNom_ permettra la correction de ce que vous avez fait**


<!--#### Third part

Revenez à la toute première version de commit sur votre master.
**Créer une branche nommée _ThirdPart_votreNom_.**

1. [ ] Réeffectuer la _First Part_ jusqu'à l'étape 6.
2. [ ] Réeffectuer la _Second Part_ jusqu'à l'étape 3.
3. [ ] modifications du dernier § : (6 personnes prennent la première modif, les 6 autres la deuxième)
    1. [ ] Regardez-les, vieux coq, jeune oie édifiante ! -> Regardez-les, vielle poule, jeune oie édifiante !
    2. [ ] Regardez-les, vieux coq, jeune oie édifiante ! -> Regardez-les, vieux coq, jeune cigne édifiant !
4. [ ] Effectuer un rebase vers votre branche master.
5. Que pouvez-vous dire de rebase par rapport à un merge ?
6. [ ] Effectuer un Push vers le serveur Origin.
7. [ ] Effectuons maintenant une Pull Request vers le serveur Upstream. -->

**Have fun building!** 🚀
