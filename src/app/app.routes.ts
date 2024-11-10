import { Routes } from '@angular/router';

// loadComponent es una propiedad que nos ofrece angular para hacer el lazy loading de los componentes, se le debe pasar un callback que importe el componente dinamicamente

export const routes: Routes = [

    {
        path: 'dashboard', // Ruta de la URI a la que se accede para que se active este
        loadComponent: () => import('./dashboard/dashboard.component'),
        children: [ // Rutas hijas que usaran 'dashboard' como padre
            {
                path: 'change-detection',
                title: 'Change Detection',
                loadComponent: () => import('./dashboard/pages/change-detection/change-detection.component')
            },
            {
                path: 'control-flow',
                title: 'Control Flow',
                loadComponent: () => import('./dashboard/pages/control-flow/control-flow.component')
            },
            {
                path: 'defer-options',
                title: 'Defer Options',
                loadComponent: () => import('./dashboard/pages/defer-options/defer-options.component')
            },
            {
                path: 'defer-views',
                title: 'Defer Views',
                loadComponent: () => import('./dashboard/pages/defer-views/defer-views.component')
            },
            {
                path: 'user/:id',
                title: 'User',
                loadComponent: () => import('./dashboard/pages/user/user.component')
            },
            {
                path: 'users',
                title: 'Users',
                loadComponent: () => import('./dashboard/pages/users/users.component')
            },       
            {
                path: 'view-transition',
                title: 'View Transition',
                loadComponent: () => import('./dashboard/pages/view-transition/view-transition.component')
            },
            {
                path: '',
                redirectTo: 'control-flow',
                pathMatch: 'full'
            }
        ]
    },
    { // Se define la ruta raiz a la cual si se accede se redirecciona a 'dashboard' automaticamente
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }

];
