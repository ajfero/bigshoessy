import { Component, OnInit } from '@angular/core';
//Service
import { StoreService } from '../../services/store.service';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
//Components
import { Product } from 'src/app/modules/views/models/card.model';
//Models
import { SigninPost } from 'src/app/modules/auth/model/login.model';


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

  token = '';


  constructor(
    private storeService: StoreService,
    private authService: AuthService
  ) {

  }

  // dataUser with loginForm data.
  dataLogin(loggerValue: any) {

    const logger: SigninPost = {
      email: loggerValue.email,
      password: loggerValue.password
    }
    this.authService.login(loggerValue.email, loggerValue.password)
      .subscribe({
        next: (res) => {
          this.token = res.token;
        },
        error: () => { }
      });
  }
  Profile() {
    this.authService.getProfile(this.token)
      .subscribe(profile => {
        console.log(profile);
      })
  }
  ngOnInit(): void {
    this.myShoppingCart = this.storeService.getShoppingCart();


  }
}
