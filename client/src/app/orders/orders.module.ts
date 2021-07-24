import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailedComponent } from './order-detailed/order-detailed.component';
import { OrdersComponent } from './orders.component';
import { RouterModule } from '@angular/router';
import { OrdersRoutingModule } from './orders-routing.module';



@NgModule({
  declarations: [
    OrderDetailedComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
