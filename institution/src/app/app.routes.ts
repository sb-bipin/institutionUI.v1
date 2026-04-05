import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { featuresRoutes } from './features/features.routes';
import { controlPanelRoutes } from './control-panel/control-panel.routes';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./features/features.component').then(m => m.FeaturesComponent),
        children: featuresRoutes
    },
    {
        path: 'control-panel',
        loadComponent: () => import('./control-panel/control-panel.component').then(m => m.ControlPanelComponent),
        children: controlPanelRoutes,
        canActivate: []
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

export const AppRoutingModule = RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
});