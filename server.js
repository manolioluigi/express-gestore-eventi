const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const server = express();

const eventsRouter = require('./routes/eventsRouter');

const PORT = process.env.PORT || 3300;

server.use(express.json());

//rotte
server.get('/', (req, res) => {
    res.send('Ciao, dovresti farmi una richiesta JSON');
});
server.use('/events', eventsRouter);

//errori
const notFoundHandler = require('./middlewares/notFoundHandler');
server.use(notFoundHandler);
const errorHandler = require('./middlewares/errorHandler');
server.use(errorHandler);

//avvio
server.listen(PORT, () => {
    console.log(`Server in ascolto all'indirizzo: http://localhost:${PORT}`);
});