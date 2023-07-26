import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MenuService } from '../menu.service';
import { Product } from '../menu';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  constructor(private route: ActivatedRoute,
    private router: Router,
    private menuService: MenuService,
    private cartService: CartService
  ) { }
  products!: Product[];
  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          let id = params.get('menuId');
          return this.menuService.getmenuById(id!);
        })
      )
      .subscribe((product: Product[]) => {
        this.products = product;
      });
  }
  addToCart(product:Product) {
    this.cartService.addToCart(product);
    window.alert('Your item has been added to the cart!');

  }
}