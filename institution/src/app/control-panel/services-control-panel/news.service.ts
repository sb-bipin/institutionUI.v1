// src/app/core/services/news.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CreateNewsDto, NewsItem, UpdateNewsDto } from '../models-control-panel/news.model';
import { ServiceResponse } from '../models-control-panel/api.model';
import { environment } from '../../../environments/environments';

@Injectable({
    providedIn: 'root'
})
export class NewsService {
    private readonly http = inject(HttpClient);

    private readonly API = `${environment.apiBaseUrl}`;
    private apiUrl = `${this.API}/News`;

    getAllNews(): Observable<NewsItem[]> {
        return this.http.get<ServiceResponse<NewsItem[]>>(this.apiUrl)
            .pipe(
                map(response => response.data),
                catchError(this.handleError));
    }

    getNewsById(id: string): Observable<NewsItem> {
        return this.http.get<ServiceResponse<NewsItem>>(`${this.apiUrl}/${id}`)
            .pipe(
                map(response => response.data),
                catchError(this.handleError));
    }

    createNews(newsData: CreateNewsDto): Observable<NewsItem> {
        const formData = this.toFormData(newsData);
        return this.http.post<ServiceResponse<NewsItem>>(this.apiUrl, formData)
            .pipe(
                map(response => response.data),
                catchError(this.handleError));
    }

    updateNews(id: string, newsData: UpdateNewsDto): Observable<NewsItem> {
        const formData = this.toFormData(newsData);
        return this.http.put<ServiceResponse<NewsItem>>(`${this.apiUrl}/${id}`, formData)
            .pipe(
                map(response => response.data),
                catchError(this.handleError));
    }

    deleteNews(id: string): Observable<void> {
        return this.http.delete<ServiceResponse<void>>(`${this.apiUrl}/${id}`)
            .pipe(
                map(response => response.data),
                catchError(this.handleError));
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

    public getCorrectImageUrl(wrongUrl: string): string {
        const filename = wrongUrl.split('/').pop();
        if (!filename) return wrongUrl;
        return `${this.API}/ImageGallery/image/${filename}`;
    }

}