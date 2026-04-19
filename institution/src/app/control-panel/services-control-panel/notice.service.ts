import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CreateNoticeDto, Notice, UpdateNoticeDto } from '../models-control-panel/notice.model';
import { ServiceResponse } from '../models-control-panel/api.model';
import { environment } from '../../../environments/environments';

@Injectable({
    providedIn: 'root'
})
export class NoticeService {
    private http = inject(HttpClient);

    private readonly API = `${environment.apiBaseUrl}`;
    private apiUrl = `${this.API}/Notices`;

    getAllNotices(): Observable<Notice[]> {
        return this.http.get<ServiceResponse<Notice[]>>(this.apiUrl).pipe(
            map(response => response.data),
            catchError(this.handleError)
        );
    }

    getNoticeById(id: string): Observable<Notice> {
        return this.http.get<ServiceResponse<Notice>>(`${this.apiUrl}/${id}`).pipe(
            map(response => response.data),
            catchError(this.handleError)
        );
    }

    createNotice(noticeData: CreateNoticeDto): Observable<Notice> {
        const formData = this.toFormData(noticeData);
        return this.http.post<ServiceResponse<Notice>>(this.apiUrl, formData).pipe(
            map(response => response.data),
            catchError(this.handleError)
        );
    }

    updateNotice(id: string, noticeData: UpdateNoticeDto): Observable<Notice> {
        const formData = this.toFormData(noticeData);
        return this.http.put<ServiceResponse<Notice>>(`${this.apiUrl}/${id}`, formData).pipe(
            map(response => response.data),
            catchError(this.handleError)
        );
    }

    deleteNotice(id: string): Observable<void> {
        return this.http.delete<ServiceResponse<null>>(`${this.apiUrl}/${id}`).pipe(
            map(() => undefined),
            catchError(this.handleError)
        );
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
                } else if (typeof value === 'boolean') {
                    formData.append(key, String(value));
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