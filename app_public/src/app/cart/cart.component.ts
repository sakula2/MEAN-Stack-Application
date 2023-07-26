import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../menu';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Orderdetails } from '../orderdetails';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  formView!: string;
  message!:string;
  total!: string;
  items!: Product[];
  orderId!: string;
  userName!: string;
  userAddress!: string;
  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
    this.items = [...this.cartService.getItems().values()];
    this.message='';
    this.orderId = '';
    this.userName = '';
    this.userAddress = '';
    this.total = this.calculateTotal(this.items);
    this.formView = "ADD_ORDER_VIEW";
  }

  calculateTotal(products: Product[]) {
    let total = 0.0;
    for (var i = 0, size = products.length; i < size; i++) {
      total += parseFloat(products[i].price);
    }
    return total.toString();
  }

  submitOrder(products: Product[]) {
    let userName: string = (<HTMLInputElement>document.getElementById("name")).value;
    let useraAddress: string = (<HTMLInputElement>document.getElementById("address")).value;
    let orderDetails: Orderdetails = { userName: userName, userAddress: useraAddress, products: products }
    this.cartService.addorderdetails(orderDetails).then((response: any) => {
      this.orderId = response.orderId;
      this.formView = "ORDER_CONFIRMATION_VIEW";
    }).catch(error => {
      this.orderId = "";
    });
  }

  cancelOrder(orderId: string) {
    this.cartService.deleteOrder(orderId).then((response: any) => {
      const navigationDetails: string = '/cart';
      this.reset(navigationDetails);
      this.message="order with Id: "+orderId+" deleted successfully";
    }).catch(error => {
      this.message="delete failed";
      this.orderId = "";
    });
  }


  getOrder(orderId: string) {
    this.cartService.getorderById(orderId).then((response: any) => {
      this.userName = response.order.userName;
      this.userAddress = response.order.userAddress;
      this.formView = "UPDATE_ORDER_VIEW";
    }).catch(error => {
      this.orderId = "";
    });
  }

  updateOrder(orderId: string) {
    let userName: string = (<HTMLInputElement>document.getElementById("name")).value;
    let userAddress: string = (<HTMLInputElement>document.getElementById("address")).value;
    this.cartService.updateorderdetails(orderId, { userName, userAddress }).then((response: any) => {
      const navigationDetails: string = '/cart';
      this.reset(navigationDetails);
      this.message="order with Id: "+orderId+" updated successfully";
    }).catch(error => {
      this.message="update failed";
      this.orderId = "";
    });
  }

  reset(navigationDetails?: string) {
    this.orderId = '';
    this.message='';
    this.userName = '';
    this.userAddress = '';
    this.items.length = 0;
    this.total = "";
    this.cartService.clearItems();
    this.formView = "ADD_ORDER_VIEW";
    if (!navigationDetails) {
      this.router.navigate(["/menu"]);
    } else {
      this.router.navigate([navigationDetails]);
    }

  }

}
