import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// views
import { HomeComponent } from './views/home/home.component';
import { ProductsComponent } from './views/products/products.component';
import { OffersComponent } from './views/offers/offers.component';
import { ContactComponent } from './views/contact/contact.component';
import { MiProfileComponent } from './views/mi-profile/mi-profile.component';
import { WrapperComponent } from './views/wrapper/wrapper.component';
import { AboutComponent } from './views/about/about.component';
import { CardComponent } from './components/card/card.component';
import { CartComponent } from 'src/app/shared/views/cart/cart.component';
// Guards
import { AuthGuard } from 'src/app/shared/guards/auth/auth.guard';


// usar el slash no deja tener control sobre la root padre.
// (Ésta ruta la hace relativa a la raiz del proyecto)
// La barra te dice : no, ignora esta estructura de rutas.
const routes: Routes = [
  {


    path: 'card',
    component: CardComponent,
  },
  {
    path: '',
    component: WrapperComponent,
    children: [

      {
        path: 'home', // http://localhost/home
        component: HomeComponent,
      },
      {
        path: 'products', // http://localhost/products
        component: ProductsComponent,
      },
      {
        path: 'offers', // http://localhost/offers
        component: OffersComponent,
      },
      {
        path: 'about-us', // http://localhost/about-us
        component: AboutComponent,
      },
      {
        path: 'contact', // http://localhost/contact
        component: ContactComponent,
      },
      {
        path: 'profile', // http://localhost/profile
        component: MiProfileComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'cart', // http://localhost/cart
        component: CartComponent,
        canActivate: [AuthGuard]
      },
      {
        path: '**', // http://localhost/aeftwef
        redirectTo: 'home',
      },

    ],

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
