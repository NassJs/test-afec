# Projet API

## Technologies

- **Serveur** : Node.js avec Express.js
- **Base de données** : MongoDB / Mongoose
- **Tests** : Jest

## Prérequis

Avant de lancer le projet, voici quelques étapes à suivre.

### 1. Installer les dépendances

Dans le terminal, à la racine du projet, exécutez la commande suivante pour récupérer toutes les dépendances nécessaires :

```bash
npm install
```

2. Variables d'environnement
Créez un fichier .env à la racine du projet et ajoutez les variables d'environnement suivantes :

MONGO_ROOT_USER=<votre_utilisateur_mongo>
MONGO_ROOT_PASSWORD=<votre_mot_de_passe_mongo>
MONGO_INITDB_DATABASE=<nom_de_votre_base_de_données>
PORT=<port_du_serveur>
MONGO_URI=<uri_de_connexion_mongodb>

3. Lancer le projet
Utiliser Docker
Ouvrez un terminal et positionnez-vous dans le répertoire /test-afec. Ensuite, exécutez la commande suivante pour démarrer l'API ainsi que la base de données MongoDB :

```bash
docker-compose up --build
```

4. Tester l'API
Une fois les conteneurs lancés, vous pouvez utiliser Postman ou tout autre outil similaire pour tester l'API. Assurez-vous que l'API est bien en cours d'exécution sur le port spécifié dans votre fichier .env.

 
