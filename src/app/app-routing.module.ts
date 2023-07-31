import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { OperatorMenuComponent } from './shared/components/operator-menu/operator-menu.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,children:[
      {
        path:'header',component: HeaderComponent},
      {
        path: 'footer',
        component: FooterComponent},
        {
          path: 'operator-menu',
          component: OperatorMenuComponent}
        
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
