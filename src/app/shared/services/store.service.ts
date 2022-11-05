import { HttpClient } from '@angular/common/http';
import { Call } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, bindCallback } from 'rxjs';
import { ProductsCarouselComponent } from 'src/app/modules/views/components/products-carousel/products-carousel.component';

//Interface
import { Product } from '../../modules/views/models/card.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {


  constructor(
    private http: HttpClient
  ) {

  }

  //Agrego private para que sea solo uso del servicio y que pueda ser usado en otros lugares mediante un metodo establecido.
  private myShoppingCart: Product[] = [];

  private myCart = new BehaviorSubject<Product[]>([]);

  myCart$ = this.myCart.asObservable();

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




