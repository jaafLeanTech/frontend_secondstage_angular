import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardCardsComponent } from './dashboard-cards/dashboard-cards.component';
import { DashboardThreeComponent } from './dashboard-three/dashboard-three.component';
import { DashboardTwoComponent } from './dashboard-two/dashboard-two.component';


const routes: Routes = [
  {
    path: 'dashboard-cards',
    component: DashboardCardsComponent
  },
  {
    path: 'dashboard-three', component: DashboardThreeComponent
  },
  {
    path: 'dashboard-two', component: DashboardTwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
