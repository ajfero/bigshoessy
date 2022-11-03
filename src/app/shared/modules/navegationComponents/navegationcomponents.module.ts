import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
// views
import { NotFoundComponent } from '../../views/not-found/not-found.component';
import { CartComponent } from '../../views/cart/cart.component';

// Components
import { TopNavbarComponent } from 'src/app/shared/components/top-navbar/top-navbar.component';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { ModalLoginComponent } from 'src/app/shared/components/modal-login/modal-login.component';
import { ModalRegisterComponent } from '../../components/modal-register/modal-register.component';
import { ModalRecoverComponent } from '../../components/modal-recover/modal-recover.component';
import { RenderComponent } from '../../components/render/render.component';
import { SearchComponent } from '../../components/search/search.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

// loader
import { SpinnerComponent } from '../../components/spinner/spinner.component';

// Import for Https Services
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptor } from '../../interceptor/spinner.interceptor';
// PIPES
import { TimeAgoPipe } from '../../pipes/timeAgo.pipe';

// Components and moduls.
const pipes = [TimeAgoPipe]
const components = [CartComponent, SidebarComponent, SearchComponent, RenderComponent, SpinnerComponent, FooterComponent, NavbarComponent, TopNavbarComponent, ModalLoginComponent, ModalRegisterComponent, ModalRecoverComponent];
const views = [NotFoundComponent];
const moduls = [FormsModule, CommonModule, RouterModule, HttpClientModule]

@NgModule({
  declarations: [...views, components, pipes],
  exports: [...views, components, pipes],
  imports: [...moduls],
  //Declaramos provide, para llamar al interceptor.
  //Primero decimos que és, despues llamamos a la clase del interceptor y luego al multi.
  //Multi nos dice que podemos usar multiples interceptors.
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true }
  ]
})


export class NavegationComponentsModule { }
