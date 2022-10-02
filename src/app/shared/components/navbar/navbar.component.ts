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
