//Default
import { Component } from '@angular/core';

//Interface
import { Product } from '../../models/card.model';

//Service
import { StoreService } from 'src/app/shared/services/store.service';

//Injectores
@Component({
  selector: 'app-card-products',
  templateUrl: './card-products.component.html',
  styleUrls: ['./card-products.component.scss']
})
export class CardProductsComponent {

  //Array products.
  myShoppingCart: Product[] = [];
  //Default of total.
  total = 0;
  //Array products
  products: Product[] = [
    {
      id: '1',
      title: 'Nike',
      model: 'Air Force',
      price: 9995,
    },
    {
      id: '2',
      title: 'Nike',
      model: 'Air Force',
      price: 9996,
    },
    {
      id: '3',
      title: 'Nike',
      model: 'Air Force',
      price: 9997,
    },
  ];

  //Injected service
  constructor(
    private storeService: StoreService) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  //Loaded render.
  onLoaded(img: string): void {
    console.log(img);
  }
  //Adding product at Cart.
  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }
}