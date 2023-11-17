const fs = require('fs');
const path = require('path');

class Event {
    constructor(id, title, description, date, maxSeats) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.maxSeats = maxSeats;
    }

    //recupero di tutti gli eventi
    static getAll() {
        const eventsData = this.readEventsFile();
        return eventsData || [];
    }

    //recupero evento per ID
    static getById(id) {
        const events = this.getAll();
        return events.find(event => event.id === id);
    }

    //nuovo evento
    static save(event) {
        const events = this.getAll();

        if (event.id) {
            const existingEventIndex = events.findIndex(e => e.id === event.id);
            if (existingEventIndex !== -1) {
                events[existingEventIndex] = event;
            }
        } else {
            event.id = this.generateId();
            events.push(event);
        }

        this.writeEventsFile(events);
        return event;
    }

    //generatore id 
    static generateId() {
        return Date.now().toString();
    }

    //lettura dati degli eventi nel file
    static readEventsFile() {
        const filePath = path.join(__dirname, '..', 'data', 'events.json');
        try {
            const eventsData = fs.readFileSync(filePath, 'utf-8');
            return JSON.parse(eventsData);
        } catch (error) {
            console.error('Errore nella lettura del file degli eventi:', error.message);
            return null;
        }
    }

    //scrittura dei dati degli eventi nel file
    static writeEventsFile(events) {
        const filePath = path.join(__dirname, '..', 'data', 'events.json');
        try {
            const eventsData = JSON.stringify(events, null, 2);
            fs.writeFileSync(filePath, eventsData, 'utf-8');
        } catch (error) {
            console.error('Errore nella scrittura del file degli eventi:', error.message);
        }
    }
}

module.exports = Event;