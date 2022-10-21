import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './shared/views/not-found/not-found.component';

const routes: Routes = [

  //Acá linkeamos nuestra ruta de views.
  {
    path: '',
    loadChildren: () => import('./modules/views/views.module').then(m => m.ViewsModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./shared/modules/navegationComponents/navegationcomponents.module').then(m => m.NavegationComponentsModule)
  },

  // auth-routing Login -> Test
  // {
  //   path: 'login',
  //   loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  // },

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
