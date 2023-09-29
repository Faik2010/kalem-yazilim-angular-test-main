import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { productModel } from '../models/productModel';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  items = [];
  data:any

  constructor(
    private productService:ProductsService,
    private productModel:productModel,
    private cartService:CartService,
  ) { }

  ngOnInit(): void {
    this.getProducts()
  }
  getProducts(){
    this.productService.getProducts().subscribe((res)=>{
      this.data=res.payload
     
    })
  }
  addToCart(item:any){
    this.cartService.addToCart(item);
    this.items = [...this.cartService.getItems()];
   
  }

}
