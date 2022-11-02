import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
// Service
import { StoreService } from '../../services/store.service';
import { ProductsService } from 'src/app/modules/views/services/products.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  myShoppingCart = this.storeService.getShoppingCart();

  total = 0;

  constructor(
    //Store service
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.getTotal()
  }


  getTotal() {
    this.myShoppingCart.push()
    this.total = this.myShoppingCart.reduce((sum, item) => sum + item.retailPrice, 0);
    console.log('Esto capaz anda', this.total);
  }
}