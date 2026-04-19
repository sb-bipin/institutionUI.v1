// src/app/core/services/news.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CreateNewsDto, NewsItem, UpdateNewsDto } from '../models-control-panel/news.model';

@Injectable({
    providedIn: 'root'
})
export class NewsService {
    private readonly http = inject(HttpClient);
    private readonly apiUrl = '/api/news'; // Adjust to your backend URL

    getAllNews(): Observable<NewsItem[]> {
        return this.http.get<NewsItem[]>(this.apiUrl)
            .pipe(catchError(this.handleError));
    }

    getNewsById(id: string): Observable<NewsItem> {
        return this.http.get<NewsItem>(`${this.apiUrl}/${id}`)
            .pipe(catchError(this.handleError));
    }

    createNews(newsData: CreateNewsDto): Observable<NewsItem> {
        const formData = this.toFormData(newsData);
        return this.http.post<NewsItem>(this.apiUrl, formData)
            .pipe(catchError(this.handleError));
    }

    updateNews(id: string, newsData: UpdateNewsDto): Observable<NewsItem> {
        const formData = this.toFormData(newsData);
        return this.http.put<NewsItem>(`${this.apiUrl}/${id}`, formData)
            .pipe(catchError(this.handleError));
    }

    deleteNews(id: string): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`)
            .pipe(catchError(this.handleError));
    }

    private toFormData(data: any): FormData {
        const formData = new FormData();
        Object.keys(data).forEach(key => {
            const value = data[key];
            if (value !== undefined && value !== null) {
                if (value instanceof Date) {
                    formData.append(key, value.toISOString());
                } else if (value instanceof File) {
                    formData.append(key, value, value.name);
                } else {
                    formData.append(key, value);
                }
            }
        });
        return formData;
    }

    private handleError(error: HttpErrorResponse): Observable<never> {
        const message = error.error?.message || 'An error occurred. Please try again.';
        return throwError(() => new Error(message));
    }
}