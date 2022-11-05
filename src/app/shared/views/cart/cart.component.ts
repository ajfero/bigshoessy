import { Component, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
// Service
import { StoreService } from '../../services/store.service';

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
  myShoppingCart = this.storeService.getShoppingCart();
  total = 0;

  // Pipes
  today = new Date();
  date = new Date();

  // Lo primero que se inicia.
  constructor(
    //Store service
    private storeService: StoreService,
  ) {
    this.total = this.storeService.getTotal();
    this.myShoppingCart = this.storeService.getShoppingCart();
  }




  //Clean Cart
  clearCart() {
    // METODO LENGHT PARA VACIAR EL ARRAY.
    this.myShoppingCart.length = 0;
    this.total = this.storeService.getTotal();
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
    this.total = this.storeService.getTotal();
  }

  ngOnChanges(changes: SimpleChanges): void {

  }




}



