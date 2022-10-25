import { Injectable } from '@angular/core';

//Interface
import { Product } from '../../modules/views/models/card.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {


  constructor() {

  }

  //Agrego private para que sea solo uso del servicio y que pueda ser usado en otros lugares mediante un metodo establecido.
  private myShoppingCart: Product[] = [];

  //Add products
  addProduct(product: Product) {
    this.myShoppingCart.push(product);
  }
  //Get Cart.
  getShoppingCart() {
    return this.myShoppingCart;
  }

  //Get total products to Cart. Item + price.
  getTotal() {
    return this.myShoppingCart.reduce((sum, item) => sum + item.retailPrice, 0)
  }
}
