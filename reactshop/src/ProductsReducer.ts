import { Reducer } from 'redux';

import { IProductsState, ProductActionTypes, ProductsActions } from './ProductTypes';

const initialProductState: IProductsState = {
  currentProduct: null,
  products: [],
  isLoading: false,
};

export const productsReducer: Reducer<IProductsState, ProductsActions> = (
  state = initialProductState,
  action: ProductsActions,
) => {
  switch (action.type) {
    case ProductActionTypes.GETSINGLE: {
      return {
        ...state,
        isLoading: false,
        currentProduct: action.product,
      }
    }
    case ProductActionTypes.GETALL: {
      return {
        ...state,
        isLoading: false,
        products: action.products,
      }
    }
    case ProductActionTypes.LOADING: {
      return {
        ...state,
        isLoading: true,
      }
    }
    default: {
      return state;
    }
  }
};