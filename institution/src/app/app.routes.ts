import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { features_Routes } from './features/feature.routes';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./features/features.component').then(m => m.FeaturesComponent),
        children: features_Routes
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full' },

];

export const AppRoutingModule = RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules });