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
      label: 'Team',
      url: 'about-us',
    },
    {
      label: 'Contact',
      url: 'contact',
    },
    // Muestro de ruta Profile
    {
      label: 'Profile',
      url: 'profile',
    },

  ];

  modal = [
    {
      label: 'modal',
      url: '/src/app/modules/auth/components/login/login.component.html',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
