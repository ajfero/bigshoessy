import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

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
