import { IProduct } from './product.interface.ts';

export interface ICart {
  products: IProduct[],
  total: number
}