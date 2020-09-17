import { Action } from '@ngrx/store';

export enum ProductActionEnum {
  AddSuccess = '[PRODUCT] Adding Successfully',
  AddFailed = '[PRODUCT] Adding Failed'
}

export class AddSuccess implements Action {
  public readonly type = ProductActionEnum.AddSuccess;
  constructor(public payload: string){}
}

export class AddFailed implements Action {
  public readonly type = ProductActionEnum.AddFailed;
  constructor(public payload: string){}
}

export type ProductActions = AddSuccess | AddFailed;