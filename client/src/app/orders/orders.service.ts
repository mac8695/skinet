import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IOrder } from '../shared/models/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getOrders() {
    return this.http.get<IOrder[]>(this.baseUrl + 'orders').pipe(
      map((orders: IOrder[]) => {
        return orders.sort((a,b) => a.id - b.id);
      })
    );
  }

  getOrder(id: number) {
    return this.http.get<IOrder>(this.baseUrl + 'orders/' + id);
  }

}
