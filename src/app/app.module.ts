import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { ComponentsComponent } from './shared/components/components.component';
import { HomeComponent } from './shared/components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { OperatorMenuComponent } from './shared/components/operator-menu/operator-menu.component';

import { KeyboardComponent } from './shared/components/keyboard/keyboard.component';
import { CardPaymentComponent } from './shared/components/card-payment/card-payment.component';
import { SaleAndCashComponent } from './shared/components/sale-and-cash/sale-and-cash.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ComponentsComponent,
    HomeComponent,
    OperatorMenuComponent,
    KeyboardComponent,
    CardPaymentComponent,
    SaleAndCashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
