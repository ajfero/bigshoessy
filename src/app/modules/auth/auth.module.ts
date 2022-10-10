import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

//Components
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

//Moduls
import { NavegationComponentsModule } from 'src/app/shared/modules';

//Views
import { ViewDashboardComponent } from './views/view-dashboard/view-dashboard.component';

const moduls = [NavegationComponentsModule];

const components = [LoginComponent, RegisterComponent,];

const views = [ViewDashboardComponent];

@NgModule({
  declarations: [...components, ...views],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ...moduls
  ]
})
export class AuthModule {
}
