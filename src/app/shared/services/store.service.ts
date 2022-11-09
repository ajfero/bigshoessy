// Angular tools
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// Observable
import { BehaviorSubject, bindCallback } from 'rxjs';
//Interface
import { Product } from '../../modules/views/models/card.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  //Agrego private para que sea solo uso del servicio y que pueda ser usado en otros lugares mediante un metodo establecido.
  private myShoppingCart: Product[] = [];
  private myCart = new BehaviorSubject<Product[]>([]);
  myCart$ = this.myCart.asObservable();

  constructor(private http: HttpClient) { }

  itemsCount() {
    return this.myShoppingCart.length;
  }

  //Add products
  addProduct(product: Product) {
    this.myShoppingCart.push(product);
    this.myCart.next(this.myShoppingCart);
    console.log('asdassadad', this.myCart)
  }

  // Get Cart.
  getShoppingCart() {
    return this.myShoppingCart;
  }

  //Get total products to Cart. Item + price.
  getTotal() {
    return this.myShoppingCart.reduce((sum, item) => sum + item.retailPrice, 0)
  }



}




