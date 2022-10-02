import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from './shared/modules/components/components.module';

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
    path: 'home',
    loadChildren: () => import('./modules/pages/pages.module').then((m) => m.PagesModule),
  },
  {
    // Wildcard siempre que no machee, altuqui roque con este path
    path: '**',
    component: NotfoundComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
