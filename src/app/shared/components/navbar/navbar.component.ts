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

  // Model
  myShoppingCart: Product[] = [];

  // Vars
  singOut: any;
  // Token var.
  token: any;

  // Roots private`s. //
  pathCart = {
    label: '',
    url: 'cart',
  }
  pathProfile = {
    label: 'Profile',
    url: 'profile',
  }
  // Ruts global`s //
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
  // Log in and Log Out modal.
  modal = [
    {
      label: 'modal',
      url: '/src/app/modules/auth/components/login/login.component.html',
    }
  ];
  constructor(
    private cartService: CartService, private tokenService: TokenService, private authService: AuthService) { }
  // Services.
  ngOnInit(): void {
    this.myShoppingCart = this.cartService.getShoppingCart();
    this.token = this.tokenService.getToken();
    // Decode Token.
    if (this.token) {
      this.token = jwt_decode(this.token)
    } else {
    }
  }
  // Log out.
  async Singout() {
    try {
      return this.tokenService.logout()
    } catch (error) {
      console.error(error)
    }
  }
}
