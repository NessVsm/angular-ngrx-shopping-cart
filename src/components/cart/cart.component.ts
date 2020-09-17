import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';


@Component({
  selector: 'app-cart',
  templateUrl: 'cart.component.html',
  styleUrls: ['cart.component.scss']
})

export class CartComponent implements OnInit {
  public cart: any[];

  constructor(private store: Store<any>) {}
   ngOnInit() {
      this.store.select('cart').subscribe((state => this.cart = state))

  }
}