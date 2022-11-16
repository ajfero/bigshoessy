import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
// loader
import { TimeInterceptor } from '../../interceptor/timeRes/time.interceptor';
import { TokenInterceptor } from '../../interceptor/token/token.interceptor';
// PIPES
import { TimeAgoPipe } from '../../pipes/timeAgo.pipe';
import { FilterPipe } from '../../pipes/filter.pipe';

// Components and moduls.
const pipes = [FilterPipe, TimeAgoPipe]
const components = [CartComponent, SidebarComponent, RenderComponent, FooterComponent, NavbarComponent, TopNavbarComponent, ModalLoginComponent, ModalRegisterComponent, ModalRecoverComponent];
const views = [NotFoundComponent];
const moduls = [ReactiveFormsModule, CommonModule, RouterModule, HttpClientModule]

@NgModule({
  declarations: [...views, components, pipes],
  exports: [...views, components, pipes],
  imports: [...moduls],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TimeInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ]
})


export class NavegationComponentsModule { }
