import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import {DashboardComponent} from './home/dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'home', loadChildren:() => import ('./home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
