import { ActionCreator, AnyAction, Dispatch} from 'redux';
import { ThunkAction } from 'redux-thunk';

import { getProducts as getProductsFromApi } from './ProductsData';
import {
  IProductsGetAllAction,
  IProductsLoadingAction,
  ProductActionTypes,
  IProductsState
} from './ProductTypes';

const loading: ActionCreator<IProductsLoadingAction> = () => {
  return {
    type: ProductActionTypes.LOADING
  }
};

export const getProducts: ActionCreator<ThunkAction<Promise<AnyAction>, IProductsState, null, IProductsGetAllAction>> = () => {
  return async (dispatch: Dispatch) => {
    dispatch(loading());

    const products = await getProductsFromApi();

    return dispatch({
      products,
      type: ProductActionTypes.GETALL,
    })
  }
};