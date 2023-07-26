import { Injectable } from '@angular/core';
import { Product } from './menu';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Orderdetails } from './orderdetails';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  product!: Product;
  orderdetails!: Orderdetails;
  items: Map<string, Product> = new Map<string, Product>();

  addToCart(product: Product) {
    this.items.set(product._id, product);
  }

  getItems() {
    return this.items;
  }

  clearItems(){
    this.items.clear();
  }



  constructor(private http: HttpClient) { }
  private apiBaseUrl = 'http://localhost:3000/api';

  public addorderdetails(orderdetails: Orderdetails): Promise<any> {
    const url: string = `${this.apiBaseUrl}/orderdetails`;
    return this.http
      .post(url, orderdetails)
      .toPromise()
      .then(response => response as any)
      .catch(this.handleError);
  }


  public updateorderdetails(orderId: string, userDetails: any): Promise<any> {
    const url: string = `${this.apiBaseUrl}/orderdetails/${orderId}`;
    return this.http
      .put(url, userDetails)
      .toPromise()
      .then(response => response as any)
      .catch(this.handleError);
  }
  public getorderById(orderId: string): Promise<any> {
    const url: string = `${this.apiBaseUrl}/orderdetails/${orderId}`;
    return this.http
      .get(url)
      .toPromise()
      .then(function (response) { console.log(response); return response as any; })
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }

  public deleteOrder(orderId: string): Promise<any> {
    const url: string = `${this.apiBaseUrl}/orderdetails/${orderId}`;
    return this.http.delete(url)
      .toPromise()
      .then(response => response as any)
      .catch(this.handleError);
  }
}
