import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOrder } from 'src/app/shared/models/order';
import { BreadcrumbService } from 'xng-breadcrumb';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-order-detailed',
  templateUrl: './order-detailed.component.html',
  styleUrls: ['./order-detailed.component.scss']
})
export class OrderDetailedComponent implements OnInit {
  order: IOrder;
  constructor(private orderService: OrdersService, private activateRoute: ActivatedRoute, private bcService: BreadcrumbService) { 
    this.bcService.set('@orderDetailed', '');
  }

  ngOnInit(): void {
    this.loadOrder();
  }

  loadOrder() {
    this.orderService
      .getOrder(+this.activateRoute.snapshot.paramMap.get('id'))
      .subscribe(
        (order) => {
          this.order = order;
          this.bcService.set('@orderDetailed', `Order # ${order.id.toString()} - ${order.status}`);
        },
        (error) => {
          console.log(error);
        }
      );
  }

}
