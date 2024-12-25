# Utiliser l'image Node officielle
FROM node:16

# Créer un répertoire pour l'application
WORKDIR /usr/src/app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Exposer le port 5001 (ajusté à votre projet)
EXPOSE 5001

# Démarrer l'application
CMD ["npm", "start"]
