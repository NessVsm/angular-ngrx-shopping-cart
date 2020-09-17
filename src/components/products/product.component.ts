import { Component, OnInit } from '@angular/core';
import { ProductsJson } from '../../api/market';
import { Store } from '@ngrx/store';
import { AddProduct, RemoveProduct } from '../../store/actions/cart.actions'; 
import { IProduct } from '../../store/models/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.scss']
})

export class ProductComponent implements OnInit {
   public productsList = ProductsJson;
   public cart: any;

   ngOnInit() {
      this.store.select('cart').subscribe((state => this.cart = state))
   }

  constructor(private store: Store<any>){}
  
  public checkButton(item: IProduct, type: string){

    if( this.cart ) {
        const alreadyAdded = !! (this.cart.products.filter(product => product.id === item.id).length > 0);
      if (type === 'add') {
         return alreadyAdded;
      }
      else {
        return !alreadyAdded;
      }
    }
  }
  public addToCart(product) {
    this.store.dispatch(new AddProduct(product));
  }

  public removeFromCart(product) {
    this.store.dispatch(new RemoveProduct(product));
  }
}