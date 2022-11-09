import { Component, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
// Service
import { CartService } from '../../services/cart/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnChanges {


  // Vars of Reactive Forms
  nameField = new FormControl('');
  emailField = new FormControl('');
  locationField = new FormControl('');
  adressField = new FormControl('');


  // Vars of Store Services
  myShoppingCart = this.cartService.getShoppingCart();
  total = 0;

  // Pipes
  today = new Date();
  date = new Date();

  // Lo primero que se inicia.
  constructor(
    //Store service
    private cartService: CartService,
  ) {
    this.total = this.cartService.getTotal();
    this.myShoppingCart = this.cartService.getShoppingCart();
  }




  //Clean Cart
  clearCart() {
    // METODO LENGHT PARA VACIAR EL ARRAY.
    this.myShoppingCart.length = 0;
    this.total = this.cartService.getTotal();
    // METODO FOR PARA VACIAR EL ARRAY.
    //   for(var i = myShoppingCart.length - 1; i >= 0; i--) {
    //   if (myShoppingCart[i]) {
    //     myShoppingCart.splice(i, 1);
    //   }
    // }
  }
  //Clear One Product
  clearOneProduct() {
    this.myShoppingCart.shift()
    this.total = this.cartService.getTotal();
  }

  ngOnChanges(changes: SimpleChanges): void {

  }




}



