import { ActionCreator, AnyAction, Dispatch} from 'redux';
import { ThunkAction } from 'redux-thunk';

import {
  getProducts as getProductsFromApi,
  getProduct as getProductFromApi,
} from './ProductsData';
import {
  IProductsGetSingleAction,
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

export const getProduct: ActionCreator<ThunkAction<Promise<AnyAction>, IProductsState, null, IProductsGetSingleAction>> = (id: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(loading());

    const product = await getProductFromApi(id);

    return dispatch({
      product,
      type: ProductActionTypes.GETSINGLE,
    })
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