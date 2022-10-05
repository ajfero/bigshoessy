import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './views/contact/contact.component';
import { HomeComponent } from './views/home/home.component';
import { ProductsComponent } from './views/products/products.component';
import { TestComponent } from './views/test/test.component';

const routes: Routes = [
  {
    path: '', //la ruta padre es VIEWS 
    component: TestComponent,
  },
  {
    path: 'contact', // usar el slash no te deja tener control sobre la root padre.
    // (Ésta ruta hazla relativa a la raiz del proyecto.)
    // La barra te dice : no, ignora esta estructura.
    component: ContactComponent, //
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }