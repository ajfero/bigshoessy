import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  menuOptions = [
    {
      label: 'Home',
      url: 'home',
    },

    {
      label: 'Products',
      url: 'products',
    },
    {
      label: 'About us',
      url: 'about-us',
    },
    {
      label: 'Contact',
      url: 'contact',
    },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
