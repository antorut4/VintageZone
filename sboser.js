const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware per gestire i dati del form
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Servire il file HTML
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Gestire la richiesta POST
app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Dati ricevuti dal form:', { name, email, message });

    // Invia una risposta al client
    res.send(`<h1>Grazie, ${name}!</h1><p>Abbiamo ricevuto il tuo messaggio.</p>`);
});

// Avvia il server
app.listen(PORT, () => {
    console.log(`Server in ascolto su http://localhost:${PORT}`);
});