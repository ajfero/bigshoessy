// Angular tools
import { Component, Input, Output, EventEmitter } from '@angular/core';
// Service
import { StoreService } from 'src/app/shared/services/store.service';
// Interface CARD
import { Product } from '../../models/card.model';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  showProductDetail = false;

  imgParent = '';


  @Input('myProduct') product: Product = {
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
  @Output() addedProduct = new EventEmitter<Product>();
  @Output() showProduct = new EventEmitter<string>();
  //Aca declaramos el evento que creamos en el hijo, para darle la indicación de escucha.
  onLoaded(img: string): void {
    console.log('log padre', img);
  }
  //Events
  onAddToCart(): void {
    this.addedProduct.emit(this.product);
    window.alert('Your product has been added to the cart!');
    console.log(this.product);
  }

  onShowDetail() {
    this.showProduct.emit(this.product.id)
  }
}