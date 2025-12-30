import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { features } from 'process';

export const features_Routes: Routes = [

    {
        path: 'home',
        loadComponent: () =>
            import('./dashboard/dashboard-home.component')
                .then(m => m.DashboardHomeComponent)
    },
    {
        path: 'about',
        loadComponent: () =>
            import('./about/about.component')
                .then(m => m.AboutComponent)
    },

    {
        path: 'programs',
        loadComponent: () =>
            import('./programs/programs.component')
                .then(m => m.ProgramsComponent)
    },

    {
        path: 'admission',
        loadComponent: () =>
            import('./admission/admission.component')
                .then(m => m.AdmissionComponent)
    },

    {
        path: 'news',
        loadComponent: () =>
            import('./news/news.component')
                .then(m => m.NewsComponent)
    },

    {
        path: 'events',
        loadComponent: () =>
            import('./events/events.component')
                .then(m => m.EventsComponent)
    },

    {
        path: 'contact',
        loadComponent: () =>
            import('./contact/contact.component')
                .then(m => m.ContactComponent)
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' }, //default route
    { path: '**', redirectTo: '/home', pathMatch: 'full' },  //if path dont match any route, redirect to home

];
