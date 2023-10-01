import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'products', component:ProductsComponent},
  {path:'cart', component:CartComponent},
  {path:'invoices', component:InvoicesComponent},
  {path:'invoices/:id',component:DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
