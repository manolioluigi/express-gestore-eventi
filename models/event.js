class Event {
    constructor(id, title, description, date, maxSeats) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.maxSeats = maxSeats;
    }

    // TODO: Implementa i metodi statici per leggere e salvare dati su file JSON
    static getAll() {
        // Recupera tutti gli eventi
    }

    static getById(id) {
        // Recupera un evento per ID
    }

    static save(event) {
        // Salva un nuovo evento
    }
}

module.exports = Event;