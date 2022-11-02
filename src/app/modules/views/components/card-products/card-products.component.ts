//Default
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  //Detail in sidebar
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


  //Injected service
  constructor(
    //Route
    private route: ActivatedRoute,
    //Store service
    private storeService: StoreService,
    //API service - async method. -> ngOnInit declared.
    private productsService: ProductsService,

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


  //Event sidebar.
  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }

  //Show id product
  onShowDetail(id: string) {
    this.productsService.detailProduct(id)
      .subscribe(data => {
        //Show toggle
        this.toggleProductDetail();
        //Product Date
        this.productChosen = data[0];
        console.log(data);
      });
  }

  //Loaded render.
  onLoaded(img: string): void {
    console.log(img);
  }
}
//Data extra.
  //Comentamos este metodo porque no va a ser utilizado, solo es una prueba del metodo Create.
  // createNewProduct() {
  //   const product: createProductDTO = {
  //     //Add data.
  //     brand: 'Nike',
  //     gender: 'Women',
  //     media: {
  //       imageUrl: "https://stockx.imgix.net/Nike-Air-Max-Verona-Black-Cosmic-Fuchsia-W.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591160659",
  //       smallImageUrl: "https://stockx.imgix.net/Nike-Air-Max-Verona-Black-Cosmic-Fuchsia-W.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591160659",
  //       thumblrUrl: "https://stockx.imgix.net/Nike-Air-Max-Verona-Black-Cosmic-Fuchsia-W.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591160659",
  //     },
  //     retailPrice: 999,
  //     styleId: '"CI9842-002"',
  //     title: ' Nike Air Max Verona Black Cosmic Fuchsia (W)',
  //     year: 2022,
  //   };
  //   this.productsService.create(product)
  //     .subscribe(data => {
  //       this.products.unshift(data);
  //       console.log(data);
  //     });
  // }
  //Comentamos este metodo porque no va a ser utilizado, solo es una prueba del metodo Update.
  // updateProduct() {
  //   const changes: UpdateProductDTO = {
  //     brand: 'Roberto carlos papa',
  //   }
  //   const id = this.productChosen.id;
  //   this.productsService.update(id, changes)
  //     .subscribe(data => {
  //       console.log(data);
  //     })
  // }

  //Insertamos nuestra data en el array de products