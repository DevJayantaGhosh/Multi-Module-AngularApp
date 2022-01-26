import { PublicDashboardComponent } from './public-dashboard/public-dashboard.component';
import { PublicHomeComponent } from './public-home/public-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: '', component: PublicHomeComponent },
  { path: 'public-dashboard', component: PublicDashboardComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpenToPublicRoutingModule { }
