const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const server = express();

const PORT = process.env.PORT || 3300;

server.use(express.json());

//rotte
server.get('/', (req, res) => {
    res.send('Ciao');
});

//avvio
server.listen(PORT, () => {
    console.log(`Server in ascolto all'indirizzo: http://localhost:${PORT}`);
});