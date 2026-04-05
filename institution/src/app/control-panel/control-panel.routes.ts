import { Routes } from "@angular/router";

export const controlPanelRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },

    {
        path: 'login',
        loadComponent: () =>
            import('./auth-control-panel/login/login.component')
                .then(m => m.LoginComponent)
    }
    // {
    //     path: 'home',
    //     loadComponent: () =>
    //         import('./home/home.component')
    //             .then(m => m.HomeComponent)
    // }

];