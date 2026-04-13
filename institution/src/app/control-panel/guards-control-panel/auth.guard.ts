import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services-control-panel/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
    const auth = inject(AuthService);
    const router = inject(Router);

    if (!auth.isLoggedIn()) {
        router.navigate(['/login'], {
            queryParams: { returnUrl: state.url }
        });
        return false;
    }

    if (auth.istokenExpired()) {
        auth.logout();
        return false;
    }

    return true;
};