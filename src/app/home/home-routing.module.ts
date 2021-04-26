import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RentComponent } from './rent/rent.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent, children: [
      { path: 'rent', component: RentComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
