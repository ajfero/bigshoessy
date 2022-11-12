// Angular tools
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Views
import { NotFoundComponent } from './shared/views/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/views/views.module').then(m => m.ViewsModule)
  },
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
