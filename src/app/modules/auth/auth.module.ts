// Angular tools
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
// Moduls
import { AuthRoutingModule } from './auth-routing.module';
import { NavegationComponentsModule } from 'src/app/shared/modules';
// Views
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { ViewDashboardComponent } from './views/view-dashboard/view-dashboard.component';
// Service logger
////////////////////////////////
// Const
const moduls = [NavegationComponentsModule];
const components = [LoginComponent, RegisterComponent,];
const views = [ViewDashboardComponent];
const services = [];

@NgModule({
  declarations: [...components, ...views],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ...moduls
  ],
  providers: [],
})
export class AuthModule {
}
