import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { News } from '../models/news.model';

@Injectable({
    providedIn: 'root'
})
export class NewsService {
    private news: News[] = [
        {
            id: '1',
            title: 'एनडब्लुए कलेजको अन्तर्राष्ट्रिय छलाङ',
            excerpt: 'जापानका पाँचतारे होटलमा विद्यार्थी पठाउदै',
            content: 'Full content here...',
            date: new Date('2025-12-21'),
            image: 'assets/images/news1.jpg'
        },
        {
            id: '2',
            title: 'Admission Open for 2025 Intake',
            excerpt: 'Admissions now open for BBA, BHM, and BBA (Finance) programs',
            content: 'Full content here...',
            date: new Date('2025-07-25'),
            image: 'assets/images/news2.jpg'
        }
    ];

    getLatestNews(limit: number = 4): Observable<News[]> {
        return of(this.news.slice(0, limit));
    }

    getNewsById(id: string): Observable<News | undefined> {
        return of(this.news.find(n => n.id === id));
    }
}