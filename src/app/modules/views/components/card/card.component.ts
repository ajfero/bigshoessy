import { Component, Input, Output, EventEmitter } from '@angular/core';

//Interface CARD
import { Product } from '../../models/card.model';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  imgParent = '';

  @Input('myProduct') product: Product = {
    id: '',
    title: '',
    model: '',
    price: 0,
  };
  @Output() addedProduct = new EventEmitter<Product>();
  //Aca declaramos el evento que creamos en el hijo, para darle la indicación de escucha.
  onLoaded(img: string): void {
    console.log('log padre', img);
  }
  //Events
  onAddToCart(): void {
    this.addedProduct.emit(this.product);
    console.log('Click me');
  }
}


  // @Input() product: Product = {
  //   id: '',
  //   title: '',
  //   price: 0,
  //   images: [],
  //   description: '',
  //   category: '',
  // };

  // @Output() addedProduct = new EvetEmitter<Product>();
