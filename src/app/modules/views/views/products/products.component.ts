import { Component, Input } from '@angular/core';
import { ProductsService } from '../../services/products.service';

//Interface
// import { Product } from '../../models/card.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {



  constructor(
    private productsService: ProductsService
  ) {

  }
}
