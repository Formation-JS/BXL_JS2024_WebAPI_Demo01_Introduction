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

## Fonctionalité disponibles

### Obtenir la liste des fleurs
```
Route : */api/fleur*
Methode : GET
Reponse  
 - Code: 200 / Data: Tableau
```

### Obtenir les informations pour une fleur (via son id)
```
Route : */api/fleur/{id}*  
Methode : GET
Reponse  
 - Code: 200 / Data: Objet
 - Code: 404
```
```
Route : */api/fleur/{id}*  
Methode : HEAD
Reponse  
 - Code: 204
 - Code: 404
```

### Ajouter une nouvelle fleur
```
Route : */api/fleur*  
Methode : POST
```

### Modifier une fleur
```
Route : */api/fleur/{id}*  
Methode : PUT
```
### Supprimer une fleur
```
Route : */api/fleur/{id}*  
Methode : DELETE
```