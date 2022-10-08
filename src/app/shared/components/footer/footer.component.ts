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
      label: 'Contact',
      url: 'contact',
    },
    {
      label: 'Products',
      url: 'products',
    },
    {
      label: 'About us',
      url: 'about-us',
    },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
