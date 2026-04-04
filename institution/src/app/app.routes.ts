import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { featuresRoutes } from './features/features.routes';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./features/features.component').then(m => m.FeaturesComponent),
        children: featuresRoutes
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

export const AppRoutingModule = RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
});