// Angular tools
import { Component, Input, Output, EventEmitter } from '@angular/core';
// Interface CARD
import { Product } from '../../models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  // Var toggle bar.
  showProductDetail = false;
  // Render to image.
  imgParent = '';
  // Card model.
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
  // Comunication with of father.
  @Output() addedProduct = new EventEmitter<Product>();
  @Output() showProduct = new EventEmitter<string>();

  // In void declarated event listening at father component.
  onLoaded(img: string): void {
    console.log('log padre', img);
  }
  // Add product`s at Shopping Cart.
  onAddToCart(): void {
    this.addedProduct.emit(this.product);
    window.alert('Your product has been added to the cart!');
    console.log(this.product);
  }
  // Detail`s of products ID.
  onShowDetail() {
    this.showProduct.emit(this.product.id)
  }
}