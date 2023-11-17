const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const server = express();

const eventsRouter = require('./routes/eventsRouter');

const PORT = process.env.PORT || 3300;

server.use(express.json());

//rotte
server.get('/', (req, res) => {
    res.send('Ciao');
});
server.use('/events', eventsRouter);

//avvio
server.listen(PORT, () => {
    console.log(`Server in ascolto all'indirizzo: http://localhost:${PORT}`);
});