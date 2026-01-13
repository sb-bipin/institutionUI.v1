import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventSchedule } from '../../core/models/event.model';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  events: EventSchedule[] = [];
  filteredEvents: EventSchedule[] = [];
  upcomingEvents: EventSchedule[] = [];
  pastEvents: EventSchedule[] = [];

  selectedView: 'upcoming' | 'past' | 'all' = 'all';

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.events = this.getAllEvents();
    this.categorizeEvents();
    this.applyFilters();
  }

  categorizeEvents(): void {
    const now = new Date();

    this.upcomingEvents = this.events
      .filter(e => new Date(e.date) >= now)
      .sort((a, b) => +new Date(a.date) - +new Date(b.date));

    this.pastEvents = this.events
      .filter(e => new Date(e.date) < now)
      .sort((a, b) => +new Date(b.date) - +new Date(a.date));
  }

  applyFilters(): void {
    switch (this.selectedView) {
      case 'upcoming':
        this.filteredEvents = this.upcomingEvents;
        break;

      case 'past':
        this.filteredEvents = this.pastEvents;
        break;

      case 'all':
        this.filteredEvents = this.events;
        break;
    }
  }

  changeView(view: 'upcoming' | 'past' | 'all'): void {
    this.selectedView = view;
    this.applyFilters();
  }

  getDaysUntil(date: Date): number {
    const now = new Date();
    const eventDate = new Date(date);
    return Math.ceil((eventDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  }

  isEventSoon(date: Date): boolean {
    const days = this.getDaysUntil(date);
    return days >= 0 && days <= 7;
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  formatMonthDay(date: Date): { month: string; day: string } {
    const d = new Date(date);
    return {
      month: d.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
      day: d.getDate().toString()
    };
  }

  getAllEvents(): EventSchedule[] {
    return [
      {
        id: 1,
        title: 'Annual Tech Summit 2026',
        description: 'Join us for the biggest technology conference of the year.',
        date: new Date('2026-02-15'),
        time: '9:00 AM - 5:00 PM',
        location: 'Main Auditorium',
        imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
        organizer: 'Tech Department'
      },
      {
        id: 2,
        title: 'AI & Machine Learning Workshop',
        description: 'Hands-on workshop on AI and ML.',
        date: new Date('2026-01-20'),
        time: '2:00 PM - 6:00 PM',
        location: 'Computer Lab 301',
        imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
        organizer: 'Dr. Sarah Johnson'
      },
      {
        id: 8,
        title: 'Annual Sports Day',
        description: 'A day of athletic competitions.',
        date: new Date('2025-12-15'),
        time: '8:00 AM - 6:00 PM',
        location: 'Athletic Stadium',
        imageUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800',
        organizer: 'Sports Department'
      },
      {
        id: 4,
        title: 'Annual Sports Day',
        description: 'A day of athletic competitions.',
        date: new Date('2025-12-15'),
        time: '8:00 AM - 6:00 PM',
        location: 'Athletic Stadium',
        imageUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800',
        organizer: 'Sports Department'
      },
      {
        id: 3,
        title: 'Annual Sports Day',
        description: 'A day of athletic competitions.',
        date: new Date('2025-12-15'),
        time: '8:00 AM - 6:00 PM',
        location: 'Athletic Stadium',
        imageUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800',
        organizer: 'Sports Department'
      },
      {
        id: 5,
        title: 'Annual Sports Day',
        description: 'A day of athletic competitions.',
        date: new Date('2025-12-15'),
        time: '8:00 AM - 6:00 PM',
        location: 'Athletic Stadium',
        imageUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800',
        organizer: 'Sports Department'
      }
    ];
  }
}
