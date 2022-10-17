import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// views
import { NotFoundComponent } from '../../views/not-found/not-found.component';

// components
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { TopNavbarComponent } from 'src/app/shared/components/top-navbar/top-navbar.component';
import { ModalRegisterComponent } from '../../components/modal-register/modal-register.component';
import { ModalLoginComponent } from 'src/app/shared/components/modal-login/modal-login.component';
import { ModalRecoverComponent } from '../../components/modal-recover/modal-recover.component';

//loader
import { SpinnerComponent } from '../../components/spinner/spinner.component';

//Import for Https Services
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptor } from '../../interceptor/spinner.interceptor';

//Components and moduls.
const components = [SpinnerComponent, FooterComponent, NavbarComponent, TopNavbarComponent, ModalLoginComponent, ModalRegisterComponent, ModalRecoverComponent];
const views = [NotFoundComponent];
const moduls = [CommonModule, RouterModule, HttpClientModule]

@NgModule({
  declarations: [...views, components],
  exports: [...views, components],
  imports: [...moduls],
  //Declaramos provide, para llamar al interceptor.
  //Primero decimos que és, despues llamamos a la clase del interceptor y luego al multi.
  //Multi nos dice que podemos usar multiples interceptors.
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true }
  ]
})


export class NavegationComponentsModule { }
