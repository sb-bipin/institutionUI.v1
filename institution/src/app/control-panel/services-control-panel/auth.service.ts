import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap, catchError, throwError } from 'rxjs';
import { environment } from '../../../environments/environments';
import { LoginUser, LoginPayload, LoginResponseDto } from '../models-control-panel/auth.model';
import { ServiceResponse } from '../models-control-panel/api.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly TOKEN_KEY = 'access_token';
  private readonly API = `${environment.apiBaseUrl}/Auth`;

  private _user = signal<LoginUser | null>(this.loadUser());
  readonly user = this._user.asReadonly();
  readonly isLoggedIn = computed(() => !!this._user());
  readonly istokenExpired = computed(() => this.isTokenExpired());

  constructor(private http: HttpClient, private router: Router) { }

  login(payload: LoginPayload) {
    return this.http
      .post<ServiceResponse<LoginResponseDto>>(`${this.API}/login`, payload)
      .pipe(
        tap((res) => {
          const token = res.data.token;

          localStorage.setItem(this.TOKEN_KEY, token);

          const user = this.decodeToken(token);
          localStorage.setItem('user', JSON.stringify(user));

          this._user.set(user);
        }),
        catchError((err) => {
          return throwError(() => err);
        })
      );
  }

  logout() {
    localStorage.clear();
    this._user.set(null);
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  private decodeToken(token: string): LoginUser | null {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return {
        id: payload.sub,
        email: payload.email,
        name: payload.name,
        role: payload.role
      };
    } catch {
      return null;
    }
  }

  private loadUser(): LoginUser | null {
    try {
      const raw = localStorage.getItem('user');
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  private isTokenExpired(): boolean {
    const token = this.getToken();
    if (!token) return true;

    const payload = JSON.parse(atob(token.split('.')[1]));
    const currentTime = Math.floor(Date.now() / 1000);
    return payload.exp < currentTime;
  }

}