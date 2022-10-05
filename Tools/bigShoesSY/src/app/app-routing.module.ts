import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
<<<<<<< HEAD:Tools/bigShoesSY/src/app/app-routing.module.ts
    path: '',
    loadChildren: () =>
      import('./app.module').then((m) => m.AppModule),
  }
=======
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'contact',
    loadChildren: () => import('./views/contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: 'products',
    loadChildren: () => import('./views/products/products.module').then((m) => m.ProductsModule),
  },

>>>>>>> docker:src/app/modules/pages/pages-routing.module.ts
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
