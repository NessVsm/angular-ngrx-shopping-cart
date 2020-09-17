import { Injectable} from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { map, tap, switchMap, concatMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartActionsEnum } from '../actions/cart.actions';
import { Observable } from 'rxjs';

@Injectable()
export class CartEffects {
  constructor(
    private _actions$: Actions,
    private snackBar: MatSnackBar
  ){}

@Effect({ dispatch: false })
  successAddedNotification$: Observable<any> = this._actions$.pipe(
    ofType(CartActionsEnum.AddProduct),
    map(({payload}) => {
      this.snackBar.open('SUCESSO!', 'Total de R$'+ payload.price+' adicionados',
      {
        duration: 2500
      })
    })
  )
  @Effect({ dispatch: false })
  successRemovedNotification$ = this._actions$.pipe(
    ofType(CartActionsEnum.RemoveProduct),
    map(({payload}) => {
      this.snackBar.open('Poxa... :(', payload.name + ' removido!',
      {
        duration: 2500
      })
    })
  )
}