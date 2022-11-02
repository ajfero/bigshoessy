import { Component, OnInit } from '@angular/core';
//Service
import { StoreService } from '../../services/store.service';
import { ProductsService } from 'src/app/modules/views/services/products.service';
//Components
import { Product } from 'src/app/modules/views/models/card.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})

export class NavbarComponent implements OnInit {

  myShoppingCart: Product[] = [];

  pathCart = {
    label: '',
    url: 'cart',
  }


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

  constructor(
    private storeService: StoreService
  ) { }


  ngOnInit(): void {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }
}