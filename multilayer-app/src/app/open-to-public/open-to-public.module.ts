import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpenToPublicRoutingModule } from './open-to-public-routing.module';
import { PublicHomeComponent } from './public-home/public-home.component';
import { PublicDashboardComponent } from './public-dashboard/public-dashboard.component';


@NgModule({
  declarations: [PublicHomeComponent, PublicDashboardComponent],
  imports: [
    CommonModule,
    OpenToPublicRoutingModule
  ]
})
export class OpenToPublicModule { }
