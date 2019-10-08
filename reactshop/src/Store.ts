import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk';

import { IProductsState } from './ProductTypes';
import { productsReducer } from './ProductsReducer';
import { basketReducer } from './BasketReducer';
import { IBasketState } from './BasketTypes';

export interface IApplicationState {
  basket: IBasketState,
  products: IProductsState;
}

const rootReducer = combineReducers<IApplicationState>({
  basket: basketReducer,
  products: productsReducer,
});

export default function configureStore(): Store<IApplicationState> {
  return createStore(
    rootReducer,
    undefined,
    applyMiddleware(thunk),
  );
}