import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { AddOrderComponent } from './add-order/add-order.component';
import { ShowOrdersComponent } from './show-orders/show-orders.component';
import { OrderComponent } from './order.component';


@NgModule({
  declarations: [AddOrderComponent, ShowOrdersComponent, OrderComponent],
  imports: [
    CommonModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
