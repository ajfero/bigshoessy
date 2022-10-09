import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

//Components
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


//Views
import { SingInComponent } from './views/sing-in/sing-in.component';
import { ViewDashboardComponent } from './views/view-dashboard/view-dashboard.component';

const components = [LoginComponent, RegisterComponent,]

const views = [SingInComponent, ViewDashboardComponent]

@NgModule({
  declarations: [...components, ...views],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule {
}
