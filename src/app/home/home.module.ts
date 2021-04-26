import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoomrentModule } from './roomrent/roomrent.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RoomrentModule
  ]
})
export class HomeModule { }
