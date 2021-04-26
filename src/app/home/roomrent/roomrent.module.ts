import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomrentRoutingModule } from './roomrent-routing.module';
import { RentComponent } from './rent/rent.component';
import { RentlistComponent } from './rentlist/rentlist.component';


@NgModule({
  declarations: [
    RentComponent,
    RentlistComponent
  ],
  imports: [
    CommonModule,
    RoomrentRoutingModule
  ],
  exports: [
    // RentComponent,
    // RentlistComponent
    // RoomrentRoutingModule
  ]
})
export class RoomrentModule { }
