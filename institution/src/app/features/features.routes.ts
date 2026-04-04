import { Routes } from '@angular/router';

export const featuresRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    {
        path: 'home',
        loadComponent: () =>
            import('./home/home.component')
                .then(m => m.HomeComponent)
    },
    {
        path: 'about',
        loadComponent: () =>
            import('./about/about.component')
                .then(m => m.AboutSectionComponent)
    },
    {
        path: 'messages-from-leaders',
        loadComponent: () =>
            import('./director-message/director-message.component')
                .then(m => m.DirectorMessageComponent)
    },
    {
        path: 'programs',
        loadComponent: () =>
            import('./programs/programs.component')
                .then(m => m.ProgramsComponent)
    },
    {
        path: 'programs/bba',
        loadComponent: () =>
            import('./programs/bba/bba.component')
                .then(m => m.BbaComponent)
    },
    {
        path: 'programs/bhm',
        loadComponent: () =>
            import('./programs/bhm/bhm.component')
                .then(m => m.BhmComponent)
    },
    {
        path: 'programs/bba-f',
        loadComponent: () =>
            import('./programs/bba-f/bba-f.component')
                .then(m => m.BbaFComponent)
    },
    {
        path: 'notice',
        loadComponent: () =>
            import('./notice/notice.component')
                .then(m => m.NoticeComponent)
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
    {
        path: 'gallery',
        loadComponent: () =>
            import('./image-gallery/image-gallery.component')
                .then(m => m.ImageGalleryComponent)
    },
    {
        path: 'questions',
        loadComponent: () =>
            import('./question-papers/question-papers.component')
                .then(m => m.QuestionPapersComponent)
    },
];