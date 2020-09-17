import { IProduct } from "../models/product.interface";
import { Action } from '@ngrx/store';

export enum CartActionsEnum {
  AddProduct = '[CART] Add Product',
  RemoveProduct = '[CART] Remove Product'
}

export class AddProduct implements Action {
  public readonly type = CartActionsEnum.AddProduct;
  constructor(public payload: IProduct){}
}

export class RemoveProduct implements Action {
  public readonly type = CartActionsEnum.RemoveProduct;
  constructor(public payload: IProduct){}
}

export type CartActions = AddProduct | RemoveProduct;