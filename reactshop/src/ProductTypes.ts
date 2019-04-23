import { IProduct } from "./ProductsData";

export enum ProductActionTypes {
  GETALL = "PRODUCT/GETALL",
  GETSINGLE = "PRODUCT/GETSINGLE",
  LOADING = "PRODUCT/LOADING",
}

export interface IProductsGetAllAction {
  type: ProductActionTypes.GETALL;
  products: IProduct[];
}

export interface IProductsLoadingAction {
  type: ProductActionTypes.LOADING;
}

export interface IProductsGetSingleAction {
  type: ProductActionTypes.GETSINGLE;
  product: IProduct;
}

export type ProductsActions =
  | IProductsGetAllAction
  | IProductsGetSingleAction
  | IProductsLoadingAction

export interface IProductsState {
  readonly products: IProduct[];
  readonly currentProduct: IProduct | null;
  readonly isLoading: boolean;
}

