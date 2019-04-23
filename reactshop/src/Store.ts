import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk';

import { IProductsState } from './ProductTypes';
import { productsReducer } from './ProductsReducer';
import { IBasketState } from './BasketTypes';
import { basketReducer } from './BasketReducer';

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