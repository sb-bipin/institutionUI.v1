import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Program } from '../models/program.model';

@Injectable({
    providedIn: 'root'
})
export class ProgramService {
    private programs: Program[] = [
        {
            id: '1',
            name: 'Bachelor of Business Administration',
            code: 'BBA',
            description: 'Comprehensive business education program',
            duration: '4 Years',
            icon: 'business'
        },
        {
            id: '2',
            name: 'Bachelor of Hotel Management',
            code: 'BHM',
            description: 'Professional hospitality management program',
            duration: '4 Years',
            icon: 'hotel'
        },
        {
            id: '3',
            name: 'BBA (Finance)',
            code: 'BBA-F',
            description: 'Specialized finance and accounting program',
            duration: '4 Years',
            icon: 'finance'
        }
    ];

    getPrograms(): Observable<Program[]> {
        return of(this.programs);
    }

    getProgramById(id: string): Observable<Program | undefined> {
        return of(this.programs.find(p => p.id === id));
    }
}