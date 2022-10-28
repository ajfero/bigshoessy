import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
  private myCart = new BehaviorSubject<Product[]>([]);

  myCart$ = this.myCart.asObservable();

  //Add products
  addProduct(product: Product) {
    this.myShoppingCart.push(product);
    this.myCart.next(this.myShoppingCart);
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
