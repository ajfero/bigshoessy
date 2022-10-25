import { Component } from '@angular/core';
//Service
import { ProductsService } from '../../services/products.service';
import { StoreService } from 'src/app/shared/services/store.service';
//Models
import { Product } from '../../models/card.model';
//Component
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  //Default of total.
  total = 0;
  //Array products.
  myShoppingCart: Product[] = [];
  //Array products
  products: Product[] = [];

  //Injected service
  constructor(
    //Store service
    private storeService: StoreService,
    //API service - async method. -> ngOnInit declared.
    private productsService: ProductsService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();

  }

  //Async Methods
  ngOnInit(): void {
    this.productsService.getAllProducts()
      .subscribe(data => {
        this.products = data;
      });
  }

  //Adding product at Cart.
  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

}
