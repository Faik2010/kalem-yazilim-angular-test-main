import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { productModel } from './models/productModel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { InvoicesComponent } from './invoices/invoices.component';
import { WjGridFilterModule } from '@grapecity/wijmo.angular2.grid.filter';
import { DetailsComponent } from './details/details.component';
//filter özelliği dahil edilmiyor


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductsComponent,
    CartComponent,
    NavbarComponent,
    InvoicesComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    WjGridModule,
    
    
  ],
  providers: [
    productModel,
    {provide: 'apiUrl', useValue:'http://localhost:9000/api/'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
