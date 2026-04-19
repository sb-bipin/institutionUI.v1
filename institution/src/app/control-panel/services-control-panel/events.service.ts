import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Events } from '../models-control-panel/events.model';
import { environment } from '../../../environments/environments';
import { ServiceResponse } from '../models-control-panel/api.model';

@Injectable({ providedIn: 'root' })
export class EventService {
    private readonly API = `${environment.apiBaseUrl}`;
    private apiUrl = `${this.API}/Events`;

    constructor(private http: HttpClient) { }

    getEvents(): Observable<Events[]> {
        return this.http.get<ServiceResponse<Events[]>>(this.apiUrl).pipe(
            map(response => response.data)   // extract the array
        );
    }

    getEvent(id: string): Observable<Events> {
        return this.http.get<ServiceResponse<Events>>(`${this.apiUrl}/${id}`).pipe(
            map(response => response.data)
        );
    }

    createEvent(formData: FormData): Observable<Events> {
        return this.http.post<ServiceResponse<Events>>(this.apiUrl, formData).pipe(
            map(response => response.data)
        );
    }

    updateEvent(id: string, formData: FormData): Observable<Events> {
        return this.http.put<ServiceResponse<Events>>(`${this.apiUrl}/${id}`, formData).pipe(
            map(response => response.data)
        );
    }

    deleteEvent(id: string): Observable<void> {
        return this.http.delete<ServiceResponse<null>>(`${this.apiUrl}/${id}`).pipe(
            map(() => void 0)
        );
    }
}