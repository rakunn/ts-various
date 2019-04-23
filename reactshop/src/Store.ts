import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk';

import { productsReducer } from './ProductsReducer';
import { IProductsState } from './ProductTypes';

export interface IApplicationState {
  products: IProductsState;
}

const rootReducer = combineReducers<IApplicationState>({
  products: productsReducer,
});

export default function configureStore(): Store<IApplicationState> {
  return createStore(
    rootReducer,
    undefined,
    applyMiddleware(thunk),
  );
}