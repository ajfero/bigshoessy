//Default
import { Component, OnInit } from '@angular/core';

//Interface
import { Product } from '../../models/card.model';

//Service
import { StoreService } from 'src/app/shared/services/store.service';
import { ProductsService } from '../../services/products.service';

//Injectores
@Component({
  selector: 'app-card-products',
  templateUrl: './card-products.component.html',
  styleUrls: ['./card-products.component.scss']
})
export class CardProductsComponent implements OnInit {

  //Array Cart products.
  myShoppingCart: Product[] = [];
  //Default of total.
  total = 0;
  //Array products
  products: Product[] = [];
  //Id Product
  showProductDetail = false;

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
    this.productsService.getAllProducts()
      .subscribe(data => {
        this.products = data;
      });
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


  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;

  }
  onShowDetail(id: string) {
    this.productsService.getProduct(id)
      .subscribe(data => {
        console.log('product', data);
      })
  }


}