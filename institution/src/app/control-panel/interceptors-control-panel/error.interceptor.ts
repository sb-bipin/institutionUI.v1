import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
    const router = inject(Router);

    return next(req).pipe(
        catchError((error: HttpErrorResponse) => {
            switch (error.status) {
                case 401:
                    router.navigate(['/control-panel/login']);
                    break;
                case 403:
                    router.navigate(['/control-panel/forbidden']);
                    break;
                case 500:
                    console.error('Server error:', error.message);
                    break;
            }
            return throwError(() => error);
        })
    );
};