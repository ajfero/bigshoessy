import { Component } from '@angular/core';
//Service
import { ProductsService } from '../../services/products.service';
import { CartService } from 'src/app/shared/services/cart/cart.service';
//Models
import { Product } from '../../models/card.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  //Id Product
  showProductDetail = false;
  //Default of total.
  total = 0;
  //Array products.
  myShoppingCart: Product[] = [];
  //Array products
  products: Product[] = [];
  //One Product
  randomProducts: Product[] = [];

  //Injected service
  constructor(
    //Store service
    private cartService: CartService,
    //API service - async method. -> ngOnInit declared.
    private productsService: ProductsService
  ) {
    this.myShoppingCart = this.cartService.getShoppingCart();

  }

  //Async Methods
  ngOnInit(): void {
    this.productsService.getAllProducts()
      .subscribe((productsIncoming: Product[]) => {

        this.products = productsIncoming;

        const index0: number = this.random(0, this.products.length - 1)
        const index1: number = this.random(0, this.products.length - 1)
        this.randomProducts.push(this.products[index0], this.products[index1]);

        // console.log(this.randomProducts);

      });
  }

  random(min: number, max: number): number {
    return Math.floor((Math.random() * (max - min + 1)) + min);
  }

  // function getObjectRandom() {
  //   const objectLength = products;
  //   return Math.floor(Math.random() * objectLength.Length) + 1;
  // }

  //Adding product at Cart.
  onAddToShoppingCart(product: Product) {
    this.cartService.addProduct(product);
    this.total = this.cartService.getTotal();
  }


  //Event sidebar.
  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }

  // //Show id product
  // onShowDetail(id: string) {
  //   this.productsService.detailProduct(id)
  //     .subscribe(data => {
  //       //Show toggle
  //       this.toggleProductDetail();
  //       //Product Date
  //       this.productChosen = data[0];
  //       console.log(data);
  //     });
  // }
}
