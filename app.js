/* Importer les modules nécessaires
const express = require('express');
const csv = require('csv-parser');
const fs = require('fs');

// Créer une instance de l'application Express
const app = express();

// Définir le port d'écoute du serveur
const port = 3000;

// Définir le chemin vers le fichier CSV
const csvFilePath = 'public/index.html';

// Stocker les phrases du fichier CSV
let phrases = [];

// Lire le fichier CSV et stocker les phrases
fs.createReadStream(csvFilePath)
    .pipe(csv())
    .on('data', (row) => {
        phrases.push(row.phrase);
    })
    .on('end', () => {
        console.log('Fichier CSV lu avec succès.');
    });
    
function generateRandomPhrase() {
    // Code pour faire une requête au serveur Node.js et afficher la phrase générée
    fetch('/getRandomPhrase')
        .then(response => response.json())
        .then(data => {
            document.getElementById('randomPhrase').innerText = data.phrase;
        })
        .catch(error => console.error('Erreur lors de la récupération de la phrase', error));
}
// Définir le point de terminaison pour générer une phrase aléatoire
app.get('/getRandomPhrase', (req, res) => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    const randomPhrase = phrases[randomIndex];
    res.send({ phrase: randomPhrase });
});



// Utiliser le middleware express.static pour servir les fichiers statiques
app.use(express.static('public'));

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur web écoutant sur le port ${port}`);
});*/

const express = require('express');
const cors = require('cors');

const hostname = '0.0.0.0';
const port = 3000;

const server = express();

server.use(express.urlencoded());
server.use(express.json());

server.use(cors());

const malusRoute = require('./src/api/routes/malusRoute.js');
malusRoute(server);

server.listen(port, hostname, () => {
    console.log(`Serveur qui toune sur le port ${port}`)
});