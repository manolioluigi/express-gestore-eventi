function errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({ error: '500 Errore interno del server' });
}

module.exports = errorHandler;