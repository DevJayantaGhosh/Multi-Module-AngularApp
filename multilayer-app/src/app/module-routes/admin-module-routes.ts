import { Routes } from '@angular/router';

export const ADMIN_MODULE_ROUTES: Routes = [
    {
        path: 'admin',
        loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule)
    }
    // {
    // path: 'HR',
    // loadChildren: () => import('../HR/HR.module').then(m => m.HR)
    // }
]