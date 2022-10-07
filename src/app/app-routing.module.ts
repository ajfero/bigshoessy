import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './shared/views/not-found/not-found.component';

const routes: Routes = [

  {
    path: 'views',
    loadChildren: () => import('./modules/views/views.module').then(m => m.ViewsModule)
  },

  // Wildcard siempre que no machee, altuqui roque con este path
  {
    path: '**',
    component: NotFoundComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
