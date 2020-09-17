import { initialCartState } from "../state/cart.state";
import { CartActions } from '../actions/cart.actions';
import { ICart } from '../models/cart.interface';
import { CartActionsEnum } from "../actions/cart.actions";


export const CartReducers = (
  state = initialCartState,
  action: CartActions
): ICart => {
  switch(action.type) {
    case CartActionsEnum.AddProduct:
    return {
      ...state,
      products: [...state.products,action.payload],
      total: state.total + action.payload.price
    }
    case CartActionsEnum.RemoveProduct:
     return { 
       products: [...state.products.filter((item) => item.id != action.payload.id)],
       total: state.total - action.payload.price
     }
    default:
      return state;
  }
}