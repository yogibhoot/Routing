import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RentComponent } from './rent/rent.component';
import { RentlistComponent } from './rentlist/rentlist.component';

const routes: Routes = [
  // {
  //   path: 'roomrent', loadChildren: () => import('../roomrent/roomrent.module').then(
  //     m => m.RoomrentModule)
  // }
      // { path:'rent', component: RentComponent },
      // { path:'rentlist', component: RentlistComponent }
  {
    path:'roomrent', children:[
      {path:'rent', component:RentComponent},
      {path:'rentlist', component:RentlistComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomrentRoutingModule { }
