import { Routes } from "@angular/router";
import { authGuard } from "./guards-control-panel/auth.guard";

export const controlPanelRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },

    {
        path: 'login',
        loadComponent: () =>
            import('./auth-control-panel/login/login.component')
                .then(m => m.LoginComponent)
    },
    {
        path: 'dashboard',
        loadComponent: () =>
            import('./dashboard-shell/dashboard-shell.component')
                .then(m => m.DashboardShellComponent),
        canActivate: [authGuard],
        children: [
            { path: '', redirectTo: 'overview', pathMatch: 'full' },
            {
                path: 'overview',
                loadComponent: () =>
                    import('./dashboard-shell/overview/overview.component')
                        .then(m => m.OverviewComponent)
            },
            {
                path: 'users',
                loadComponent: () =>
                    import('./auth-control-panel/user-list/user-list.component')
                        .then(m => m.UserListComponent)
            },
            {
                path: 'gallery',
                loadComponent: () =>
                    import('./pages-control-panel/gallery/gallery.component')
                        .then(m => m.GalleryComponent)
            },
            {
                path: 'event',
                loadComponent: () =>
                    import('./pages-control-panel/event/events.component')
                        .then(m => m.EventsComponent)
            },
        ]
    }

];