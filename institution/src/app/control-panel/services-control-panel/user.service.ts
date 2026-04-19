import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
    ServiceResponse,
    IApplicationUser,
    RegisterRequest,
    UpdateUserRequest,
    ResetPasswordRequest,
    ForgotPasswordRequest
} from '../models-control-panel/api.model';
import { User, UserStatus } from '../models-control-panel/user.model';
import { environment } from '../../../environments/environments';

@Injectable({ providedIn: 'root' })
export class UserService {

    private readonly API = `${environment.apiBaseUrl}/Auth`;

    private readonly http = inject(HttpClient);

    mapApiUser(u: IApplicationUser, status: UserStatus = 'active'): User {
        return {
            id: u.id,
            name: `${u.firstName} ${u.lastName}`.trim(),
            firstName: u.firstName,
            lastName: u.lastName,
            username: u.userName,
            email: u.email,
            status
        };
    }

    getAllUsers(): Observable<User[]> {
        return this.http
            .get<ServiceResponse<IApplicationUser[]>>(`${this.API}/all-users`)
            .pipe(map(res => res.data.map(u => this.mapApiUser(u))));
    }

    registerUser(payload: RegisterRequest): Observable<ServiceResponse<string>> {
        return this.http.post<ServiceResponse<string>>(`${this.API}/register`, payload);
    }

    updateUser(payload: UpdateUserRequest): Observable<ServiceResponse<IApplicationUser>> {
        return this.http.put<ServiceResponse<IApplicationUser>>(`${this.API}/update-user`, payload);
    }

    resetPassword(payload: ResetPasswordRequest): Observable<ServiceResponse<string>> {
        return this.http.post<ServiceResponse<string>>(`${this.API}/reset-password`, payload);
    }

    forgotPassword(payload: ForgotPasswordRequest): Observable<ServiceResponse<string>> {
        return this.http.post<ServiceResponse<string>>(`${this.API}/forgot-password`, payload);
    }
}