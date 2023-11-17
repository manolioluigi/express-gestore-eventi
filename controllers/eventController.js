const Event = require('../models/event');

function index(req, res) {
    const { title, description, date, maxSeats } = req.query;
    const events = Event.getAll();

    const filteredEvents = events.filter(event =>
        (!title || event.title.toLowerCase().includes(title.toLowerCase())) &&
        (!description || event.description.toLowerCase().includes(description.toLowerCase())) &&
        (!date || event.date.includes(date)) &&
        (!maxSeats || event.maxSeats.toString().includes(maxSeats))
    );

    res.json(filteredEvents);
}

function store(req, res) {
    const { title, description, date, maxSeats } = req.body;
    const newEvent = new Event(null, title, description, date, maxSeats);
    const savedEvent = Event.save(newEvent);
    res.json(savedEvent);
}

function update(req, res) {
    const eventId = req.params.event;
    const { title, description, date, maxSeats } = req.body;

    const existingEvent = Event.getById(eventId);
    if (!existingEvent) {
        return res.status(404).json({ error: 'Evento non trovato' });
    }

    const updatedEvent = new Event(
        eventId,
        title || existingEvent.title,
        description || existingEvent.description,
        date || existingEvent.date,
        maxSeats || existingEvent.maxSeats
    );

    const savedEvent = Event.save(updatedEvent);
    res.json(savedEvent);
}

module.exports = {
    index,
    store,
    update,
};