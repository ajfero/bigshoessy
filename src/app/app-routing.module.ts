// Angular tools
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Views
import { NotFoundComponent } from './shared/views/not-found/not-found.component';

const routes: Routes = [
  //Acá linkeamos nuestra ruta de views.
  {
    path: '', // Guard - manejar token -  
    // -> user CART PROFILE rutas privatizadas como macri con las empresas argentinas
    loadChildren: () => import('./modules/views/views.module').then(m => m.ViewsModule)
  },
  {
    path: '**', // admin CART PROFILE DASHBOARD
    component: NotFoundComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
