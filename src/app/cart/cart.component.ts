import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  items=[]
  data=[]
  itemsWithQuantity = [];
  constructor(
    private cartService:CartService
  ) { }

  ngOnInit(): void {
    this.cartService.loadCart();
    this.items = [...this.cartService.getItems()];
    for (const item of this.items) {
      const existingItem = this.itemsWithQuantity.find(i => i.title === item.title);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += item.price
      } else {
        this.itemsWithQuantity.push({ ...item, quantity: 1,totalPrice: item.price });
      }
    }
    let countries = 'US,Germany,UK,Japan,Italy,Greece'.split(',');
        let products = 'Piano,Violin,Flute,Guitar,Cello'.split(',');
        let data = [];
        for (let i = 0; i < 1000; i++) {
            this.data.push({
                id: i,
                country: countries[i % countries.length],
                product: products[i % products.length],
                sales: Math.random() * 10000,
                expenses: Math.random() * 5000
            });
        }
  }

  removeFromCart(item) {
    this.cartService.removeItem(item)
    this.items=[]
    this.itemsWithQuantity=[]
    this.ngOnInit()
    // this.items = this.cartService.getItems();
  }
}
