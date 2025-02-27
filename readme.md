# WebAPI 01 - Introduction

## Role des Verbes
- **GET** \
Obtenir des ressources. \
_L'API' ne doit modifier des éléments lors de cette requete_.

- **POST** \
Créer une ressource. \
_L'application client doit envoyé des données_

- **PUT** \
Remplacer une ressource. \
_La mise a jours de la ressource est complete_

- **PATCH** \
Permet d'appliquer une modficiation partiel d'une ressource.

- **DELETE** \
Supprimer une ressource.

- **HEAD** \
Verifier l'existance de la ressource. \
_Même fonctionnement que le **GET** sans obtenir les données_

- **OPTIONS** \
Decrire les verbes supporté par la route