import { Routes } from '@angular/router';

export const OPENTOPUBLIC__MODULE_ROUTES: Routes = [
    {
        path: '',
        loadChildren: () => import('../open-to-public/open-to-public.module').then(m => m.OpenToPublicModule)
    }
    // {
    // path: 'info',
    // loadChildren: () => import('../info/info.module').then(m => m.INFO)
    // }
]