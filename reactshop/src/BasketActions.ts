import { BasketActionTypes, IBasketAddAction} from './BasketTypes';
import { IProduct } from './ProductsData';
import { ActionCreator } from 'redux';

export const addToBasket: ActionCreator<IBasketAddAction> = (product: IProduct): IBasketAddAction=> {
  return {
    type: BasketActionTypes.ADD,
    product
  }
};