import { animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ng-slider',
  templateUrl: './ng-slider.component.html',
  styleUrls: ['./ng-slider.component.scss']
})
export class NgSliderComponent implements OnInit {

  products: any[] = [
    {
      name: 'Sir zapatillas',
      img: '/src/assets/img/zapatilla-3.jpg',
      desc: 'Éstas zapatillas eran de cumbio',
    },
    {
      name: 'Zapatillas segundas',
      img: '/src/assets/img/zapatilla-4.jpg',
      desc: 'Éstas las usaba la reina isabell',
    },
    {
      name: 'Altas yantas',
      img: '/src/assets/img/zapatilla-5.jpg',
      desc: 'Altas zapatillas'
    },
  ];

  constructor(privated_config: NgbCarouselConfig) { }

  ngOnInit(): void {
  }

}
