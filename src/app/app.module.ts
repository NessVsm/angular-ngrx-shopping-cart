import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StoreModule } from '@ngrx/store';
import { CartReducers } from '../store/reducers/cart.reducer';
import { CartComponent } from '../components/cart/cart.component';
import { ProductComponent } from '../components/products/product.component';
import { EffectsModule } from '@ngrx/effects';
import { CartEffects } from '../store/effects/cart.effects';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    MatSnackBarModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({cart: CartReducers}),
    EffectsModule.forRoot([CartEffects])
    ],
  declarations: [ 
    AppComponent, 
    HelloComponent,
    CartComponent,
    ProductComponent,
    FooterComponent,
    HeaderComponent],
  bootstrap:    [ AppComponent ],
  providers: [ ]
})
export class AppModule { }
