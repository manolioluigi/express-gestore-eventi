function notFoundHandler(req, res, next) {
    res.status(404).json({ error: '404 Risorsa non trovata' });
}

module.exports = notFoundHandler;