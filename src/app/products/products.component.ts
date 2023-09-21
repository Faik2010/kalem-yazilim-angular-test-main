import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { productModel } from '../models/productModel';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  data:any

  constructor(
    private productService:ProductsService,
    private productModel:productModel,
  ) { }

  ngOnInit(): void {
    this.getProducts()
  }
  getProducts(){
    this.productService.getProducts().subscribe((res)=>{
      this.data=res.payload
      console.log(this.data)
    })
  }

}
