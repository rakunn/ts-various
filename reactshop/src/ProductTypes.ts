import { IProduct } from "./ProductsData";

export enum ProductActionTypes {
  GETALL = "PRODUCT/GETALL",
  LOADING = "PRODUCT/LOADING",
}

export interface IProductsGetAllAction {
  type: ProductActionTypes.GETALL;
  products: IProduct[];
}

export interface IProductsLoadingAction {
  type: ProductActionTypes.LOADING;
}

export type ProductsActions =
  | IProductsGetAllAction
  | IProductsLoadingAction

export interface IProductsState {
  readonly products: IProduct[];
  readonly isLoading: boolean;
}

