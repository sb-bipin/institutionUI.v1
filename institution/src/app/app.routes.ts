import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./features/features.component').then(m => m.FeaturesComponent),
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },

            {
                path: 'home',
                loadComponent: () =>
                    import('./features/home/home.component')
                        .then(m => m.HomeComponent)
            },
            {
                path: 'about',
                loadComponent: () =>
                    import('./features/about/about.component')
                        .then(m => m.AboutSectionComponent)
            },
            {
                path: 'messages-from-leaders',
                loadComponent: () =>
                    import('./features/director-message/director-message.component')
                        .then(m => m.DirectorMessageComponent)
            },
            {
                path: 'programs',
                loadComponent: () =>
                    import('./features/programs/programs.component')
                        .then(m => m.ProgramsComponent)
            },
            {
                path: 'programs/bba',
                loadComponent: () =>
                    import('./features/programs/bba/bba.component')
                        .then(m => m.BbaComponent)
            },
            {
                path: 'programs/bhm',
                loadComponent: () =>
                    import('./features/programs/bhm/bhm.component')
                        .then(m => m.BhmComponent)
            },
            {
                path: 'programs/bba-f',
                loadComponent: () =>
                    import('./features/programs/bba-f/bba-f.component')
                        .then(m => m.BbaFComponent)
            },
            {
                path: 'notice',
                loadComponent: () =>
                    import('./features/notice/notice.component')
                        .then(m => m.NoticeComponent)
            },
            {
                path: 'admission',
                loadComponent: () =>
                    import('./features/admission/admission.component')
                        .then(m => m.AdmissionComponent)
            },
            {
                path: 'news',
                loadComponent: () =>
                    import('./features/news/news.component')
                        .then(m => m.NewsComponent)
            },
            {
                path: 'events',
                loadComponent: () =>
                    import('./features/events/events.component')
                        .then(m => m.EventsComponent)
            },
            {
                path: 'contact',
                loadComponent: () =>
                    import('./features/contact/contact.component')
                        .then(m => m.ContactComponent)
            },
        ]
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

export const AppRoutingModule = RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
});