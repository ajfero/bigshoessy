import { Component, OnInit } from '@angular/core';
//Service
import { CartService } from '../../services/cart/cart.service';
//Components
import { SigninPost } from '../../models/login.model';
import { Product } from 'src/app/modules/views/models/card.model';
import { TokenService } from '../../services/token/token.service';
import jwt_decode from 'jwt-decode';
import { AuthService } from '../../services/auth/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})

export class NavbarComponent implements OnInit {
  myShoppingCart: Product[] = [];

  token: any;

  pathCart = {
    label: '',
    url: 'cart',
  }
  pathProfile = {
    label: 'Profile',
    url: 'profile',
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

  ];

  modal = [
    {
      label: 'modal',
      url: '/src/app/modules/auth/components/login/login.component.html',
    }
  ];

  constructor(
    private cartService: CartService, private tokenService: TokenService, private authService: AuthService) {

  }
  ngOnInit(): void {
    this.myShoppingCart = this.cartService.getShoppingCart();
    this.token = this.tokenService.getToken();

    if (this.token) {
      this.token = jwt_decode(this.token)
    } else {
      console.log('Disculpa flaco no se entiende nada')
    }
  }
}
