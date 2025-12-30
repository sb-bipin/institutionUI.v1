import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Event } from '../models/event.model';

@Injectable({
    providedIn: 'root'
})
export class EventService {
    private events: Event[] = [
        {
            id: '1',
            title: 'Paid Internship In France',
            description: 'International internship opportunity',
            date: new Date('2026-01-04'),
            time: '8:00 AM - 5:00 PM',
            location: 'NWA Campus'
        },
        {
            id: '2',
            title: 'Abroad Internship',
            description: 'Overseas internship programs',
            date: new Date('2025-11-18'),
            time: '8:00 AM - 5:00 PM',
            location: 'NWA Campus'
        }
    ];

    getUpcomingEvents(limit: number = 2): Observable<Event[]> {
        return of(this.events.slice(0, limit));
    }

    getEventById(id: string): Observable<Event | undefined> {
        return of(this.events.find(e => e.id === id));
    }
}