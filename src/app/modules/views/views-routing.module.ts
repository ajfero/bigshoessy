import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// views
import { HomeComponent } from './views/home/home.component';
import { ProductsComponent } from './views/products/products.component';
import { ContactComponent } from './views/contact/contact.component';

// usar el slash no te deja tener control sobre la root padre.
// (Ésta ruta la hace relativa a la raiz del proyecto)
// La barra te dice : no, ignora esta estructura de rutas.
const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  // {
  //   path: 'offers',
  //   component: offersComponent,
  // },
  {
    path: 'contact',
    component: ContactComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
