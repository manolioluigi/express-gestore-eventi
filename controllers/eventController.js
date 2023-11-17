function index(req, res) {
    // TODO: Implementa la logica per recuperare tutti gli eventi
    res.json({ message: 'logica per recuperare tutti gli eventi' });
}

function store(req, res) {
    // TODO: Implementa la logica per salvare un nuovo evento
    res.json({ message: 'logica per salvare un nuovo evento' });
}

function update(req, res) {
    // TODO: Implementa la logica per aggiornare un evento
    res.json({ message: 'logica per aggiornare un evento' });
}

module.exports = {
    index,
    store,
    update,
};