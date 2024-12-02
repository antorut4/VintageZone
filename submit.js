const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware per gestire i dati del form
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

// Endpoint per gestire il file HTML
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Endpoint per ricevere i dati del form
app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Dati ricevuti:', { name, email, message });

    // Risposta al client
    res.send(`Grazie ${name}, il tuo messaggio è stato ricevuto!`);
});

// Avvio del server
app.listen(PORT, () => {
    console.log(`Server in ascolto su http://localhost:${PORT}`);
});