import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { SaleAndCashComponent } from './shared/components/sale-and-cash/sale-and-cash.component';
import { CardPaymentComponent } from './shared/components/card-payment/card-payment.component';
import { OperatorMenuComponent } from './shared/components/operator-menu/operator-menu.component';
import { PreAuthCompletionComponent } from './shared/components/pre-auth-completion/pre-auth-completion.component';

const routes: Routes = [
  {
    path: '', component: PreAuthCompletionComponent
  },
  {
    path: 'home', component: HomeComponent 
  },
  {
    path: 'pay', component: CardPaymentComponent
  },
  {
    path: 'cashAndSale', component: SaleAndCashComponent
  },

  {
    path: 'header', component: HeaderComponent
  },
  {
    path: 'footer', component: FooterComponent,

  },
  {
    path: 'operator', component:OperatorMenuComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
