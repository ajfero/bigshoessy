import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// views
import { HomeComponent } from './views/home/home.component';
import { ProductsComponent } from './views/products/products.component';
import { OffersComponent } from './views/offers/offers.component';
import { ContactComponent } from './views/contact/contact.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { MiProfileComponent } from './views/mi-profile/mi-profile.component';
import { WrapperComponent } from './views/wrapper/wrapper.component';

// usar el slash no deja tener control sobre la root padre.
// (Ésta ruta la hace relativa a la raiz del proyecto)
// La barra te dice : no, ignora esta estructura de rutas.
const routes: Routes = [
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
        component: AboutUsComponent,
      },
      {
        path: 'contact', // http://localhost/contact
        component: ContactComponent,
      },
      {
        path: 'profile', // http://localhost/profile
        component: MiProfileComponent,
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
