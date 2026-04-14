import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GalleryItem } from '../models-control-panel/gallery-item.model';
import { environment } from '../../../environments/environments';

interface ServiceResponse<T> {
    data: T;
    success: boolean;
    message: string;
    errors: string[];
    statusCode: number;
    timestamp: string;
    exceptionDetails?: string;
}

@Injectable({ providedIn: 'root' })
export class GalleryService {

    private readonly API = `${environment.apiBaseUrl}`;

    private apiUrl = `${this.API}/ImageGallery`;

    constructor(private http: HttpClient) { }

    getAll(): Observable<GalleryItem[]> {
        return this.http.get<ServiceResponse<GalleryItem[]>>(this.apiUrl).pipe(
            map(response => response.data)
        );
    }

    create(formData: FormData): Observable<GalleryItem> {
        return this.http.post<ServiceResponse<GalleryItem>>(this.apiUrl, formData).pipe(
            map(response => response.data)
        );
    }

    delete(id: string): Observable<void> {
        return this.http.delete<ServiceResponse<null>>(`${this.apiUrl}/${id}`).pipe(
            map(() => void 0)
        );
    }
}