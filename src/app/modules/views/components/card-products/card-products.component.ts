//Default
import { Component, OnInit, Output } from '@angular/core';
//Interface
import { Product } from '../../models/card.model';

//Service
import { ProductsService } from '../../services/products.service';
import { CartService } from 'src/app/shared/services/cart/cart.service';

//Injectores
@Component({
  selector: 'app-card-products',
  templateUrl: './card-products.component.html',
  styleUrls: ['./card-products.component.scss']
})
export class CardProductsComponent implements OnInit {

  // Var with cart items.
  myShoppingCart = this.cartService.getShoppingCart();
  // Filter of searching
  filterPost = '';
  // Default of total.
  total = 0;
  // Array products
  products: Product[] = [];
  // Id Product
  showProductDetail = false;
  // Detail in sidebar
  productChosen: Product = {
    id: '',
    brand: '',
    colorway: '',
    gender: '',
    media: {
      imageUrl: '',
      smallImageUrl: '',
      thumblrUrl: ''
    },
    retailPrice: 0,
    styleId: '',
    title: '',
    year: 0,
  };
  statusDetail: 'loading' | 'sucess' | 'error' | 'init' = 'init';

  // Las cosas asincronas, son peticiones a otro servidor. 
  // Y el mejor momento para manejar cosas asincronas, es NgOnInit.
  //Injected service
  constructor(
    //Store service
    private cartService: CartService,
    //API service - async method. -> ngOnInit declared.
    private productsService: ProductsService,
  ) {
    this.myShoppingCart = this.cartService.getShoppingCart();
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
    this.cartService.addProduct(product);
    this.total = this.cartService.getTotal();
  }
  //Event sidebar.
  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }
  //Show id product
  onShowDetail(id: string) {
    this.statusDetail = 'loading';
    this.productsService.detailProduct(id)
      .subscribe(data => {
        //Show toggle
        this.toggleProductDetail();
        //Product Date
        this.productChosen = data[0];
        console.log(data);
        this.statusDetail = 'sucess';
      }, response => {
        console.log(response.error.message);
        this.statusDetail = 'error';
      })
  }
  //Loaded render.
  onLoaded(img: string): void {
    console.log(img);
  }
}