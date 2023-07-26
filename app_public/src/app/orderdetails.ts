import { Product } from "./menu";

export interface Orderdetails {
  products: Product[]
  userName: string,
  userAddress: string
}

export enum FormView {
  ADD_ORDER_VIEW,
  ORDER_CONFIRMATION_VIEW,
  UPDATE_ORDER_VIEW
}