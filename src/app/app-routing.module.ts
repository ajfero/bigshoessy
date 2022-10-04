import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    component: NotfoundComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
