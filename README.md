# Show README

Cette extension Visual Studio Code affiche le contenu du README d'un package npm lorsque vous appuyez sur un raccourci clavier.

## Fonctionnalités

- Affiche le contenu du README d'un package npm dans une popup lorsque le curseur est placé sur le nom du package et que vous appuyez sur `Ctrl + Shift + Alt + Entrée`.

## Installation

1. Installez l'extension depuis le [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/vscode).
2. Ouvrez un projet contenant des fichiers JavaScript ou TypeScript.
3. Placez le curseur sur le nom d'un package dans une ligne d'importation et appuyez sur `Ctrl + Shift + Alt + Entrée` pour afficher le contenu du README.

## Utilisation

1. Ouvrez un fichier JavaScript ou TypeScript dans Visual Studio Code.
2. Placez le curseur sur le nom d'un package dans une ligne d'importation, par exemple :
```javascript
   import axios from 'axios';
   ```
   3. Appuyez sur Ctrl + Shift + Alt + Entrée.
4. Une popup apparaîtra avec le contenu du README du package.

## Configuration
Cette extension n'ajoute aucune configuration spécifique.

## Dépendances
`axios` : Utilisé pour effectuer des requêtes HTTP pour récupérer le contenu du README depuis le registre npm.
`marked` : Utilisé pour convertir le contenu Markdown du README en HTML.

## Contribuer
Les contributions sont les bienvenues ! Si vous souhaitez contribuer à cette extension, veuillez suivre ces étapes :

1. Forkez ce dépôt.
2. Créez une branche pour votre fonctionnalité (git checkout -b feature/ma-fonctionnalité).
3. Commitez vos modifications (git commit -am 'Ajout de ma fonctionnalité').
4. Poussez votre branche (git push origin feature/ma-fonctionnalité).
5. Ouvrez une Pull Request.

## Licence
Cette extension est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

Ce [README.md](http://_vscodecontentref_/1) inclut les sections suivantes :
- **Fonctionnalités** : Décrit les fonctionnalités principales de l'extension.
- **Installation** : Explique comment installer et utiliser l'extension.
- **Utilisation** : Fournit des instructions détaillées sur l'utilisation de l'extension.
- **Configuration** : Indique qu'il n'y a pas de configuration spécifique pour cette extension.
- **Dépendances** : Liste les dépendances utilisées par l'extension.
- **Contribuer** : Explique comment contribuer à l'extension.
- **Licence** : Indique la licence sous laquelle l'extension est publiée.