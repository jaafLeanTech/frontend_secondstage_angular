import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../shared';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardCardsComponent } from './dashboard-cards/dashboard-cards.component';
import { DashboardTwoComponent } from './dashboard-two/dashboard-two.component';
import { DashboardThreeComponent } from './dashboard-three/dashboard-three.component';


@NgModule({
  declarations: [
    DashboardCardsComponent,
    DashboardTwoComponent,
    DashboardThreeComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AngularMaterialModule
  ],
  exports: [
    DashboardCardsComponent
  ]
})
export class DashboardModule { }
