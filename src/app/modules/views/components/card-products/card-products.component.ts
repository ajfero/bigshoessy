import { Component, OnInit } from '@angular/core';
import { CardProductsService } from '../../services/card-products.service';

@Component({
  selector: 'app-card-products',
  templateUrl: './card-products.component.html',
  styleUrls: ['./card-products.component.scss']
})
export class CardProductsComponent implements OnInit {

  // myShoppingCart: Card[] = [];
  total = 0;
  products: Product[] = [];


  constructor(
    private CardProductsService: CardProductsService,
  ) { }

  ngOnInit(): void {
    this.CardProductsService.getAllProducts()
      //Debo correr un .subscribe para poder obtener toda la información (Function)
      .subscribe(data => {
        this.products = data;
      });

  }

}
