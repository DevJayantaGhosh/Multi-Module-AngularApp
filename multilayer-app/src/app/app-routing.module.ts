import { ADMIN_MODULE_ROUTES } from './module-routes/admin-module-routes';
import { OPENTOPUBLIC__MODULE_ROUTES } from './module-routes/public-module-route';

import { AdminLayoutComponent } from './Layouts-section/admin-layout/admin-layout.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicLayoutComponent } from './Layouts-section/public-layout/public-layout.component';

const routes: Routes = [
 {path:'',component:PublicLayoutComponent, children:OPENTOPUBLIC__MODULE_ROUTES},
 { path: 'admin', component: AdminLayoutComponent, children: ADMIN_MODULE_ROUTES }
  
  
  /* { path: 'admin', component: AdminLayoutComponent L,  C children: ADMIN_MODULE_ROUTES } {
        path: 'admin',
        loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule)
    }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
