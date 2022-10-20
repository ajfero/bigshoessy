import { Component } from '@angular/core';
import { Product } from '../../models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() product: Product = {
    id: '',
    title: '',
    price: 0,
    images: [],
    description: '',
    category: '',
  };

  @Output() addedProduct = new EvetEmitter<Product>();


}
