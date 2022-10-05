import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input('information') data!: string
  @Input() card!: Card

  constructor() { }

  ngOnInit(): void {
  }

}

interface Card {
  name: string
  id: number
}