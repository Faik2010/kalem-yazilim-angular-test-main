import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  items=[]
  constructor(
    private cartService:CartService,
    private router:Router
  ) { }
  // quantity=0
  ngOnInit(): void {
    // this.getQuantity()
  }
  
  // getQuantity(){
  //   this.items = [...this.cartService.getItems()];
  //   this.quantity=this.items.length
  // }
  goToCart(){
    this.router.navigate(['/cart'])
  }
  goToInvoices(){
    this.router.navigate(['/invoices'])
  }

}
