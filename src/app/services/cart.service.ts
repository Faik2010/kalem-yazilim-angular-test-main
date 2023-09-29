import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: any=[]

  constructor() { }

  getItems() {
    return this.items;
  } 
  getItems2() {
    const items = localStorage.getItem('cartItems');
    return items ? JSON.parse(items) : [];
  }
  addToCart(addedItem) {
    this.items.push(addedItem);
    

    this.saveCart();
  }

  loadCart(): void {
    this.items = JSON.parse(localStorage.getItem("cart_items")) ?? [];
  }

  saveCart(): void {
    localStorage.setItem('cart_items', JSON.stringify(this.items)); 
  }

  removeItem(item) {
    const index = this.items.findIndex(o => o.id === item.id);

    if (index > -1) {
      this.items.splice(index, 1);
      this.saveCart();
    }
  }

  clearCart(items) {
    this.items = [];

    localStorage.removeItem("cart_items")
  }
  

}
