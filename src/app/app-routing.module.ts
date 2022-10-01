import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/pages/views/home/home.component';

import { NotfoundComponent } from './shared/views/notfound/notfound.component';

const routes: Routes = [
  {
    path: '', // -> localhost:4200
    // component: HomeComponent
    //Este comando es lazy loading.
    loadChildren: () =>
      import('./shared/modules/components/components.module').then((m) => m.ComponentsModule),
  },
  {
    // Wildcard
    path: '**',
    component: HomeComponent,
  },

  {
    path: 'home',
    loadChildren: () => import('./modules/pages/pages.module').then((m) => m.PagesModule),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
