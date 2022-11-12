import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Routing
import { ViewsRoutingModule } from './views-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// Modules
import { NavegationComponentsModule } from 'src/app/shared/modules/navegationComponents/navegationcomponents.module';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
// Components
import { BannerOneComponent } from './components/banner-one/banner-one.component';
import { BannerTwoComponent } from './components/banner-two/banner-two.component';
import { BannerThreeComponent } from './components/banner-three/banner-three.component';
import { SponsorsCarouselComponent } from './components/sponsors-carousel/sponsors-carousel.component';
import { ProductsSidebarComponent } from './components/products-sidebar/products-sidebar.component';
import { ProductsCarouselComponent } from './components/products-carousel/products-carousel.component';
import { CardComponent } from './components/card/card.component';
import { CardProductsComponent } from './components/card-products/card-products.component';
import { ProfileContactComponent } from './components/profile-contact/profile-contact.component';
// Views
import { HomeComponent } from './views/home/home.component';
import { ProductsComponent } from './views/products/products.component';
import { ContactComponent } from './views/contact/contact.component';
import { OffersComponent } from './views/offers/offers.component';
import { MiProfileComponent } from './views/mi-profile/mi-profile.component';
// Box container for views, introducing views pages.
import { WrapperComponent } from './views/wrapper/wrapper.component';
import { AboutComponent } from './views/about/about.component';
<<<<<<< Updated upstream
// Interceptors
import { TimeInterceptor } from 'src/app/shared/interceptor/timeRes/time.interceptor';
import { TokenInterceptor } from 'src/app/shared/interceptor/token/token.interceptor';
=======
import { AccessComponent } from './components/access/access.component';

>>>>>>> Stashed changes

const modules = [
  CommonModule,
  ViewsRoutingModule,
  NavegationComponentsModule,
  AngularFullpageModule,
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule
];

const components = [

  BannerOneComponent, BannerTwoComponent, BannerThreeComponent, CardComponent,
  ProductsSidebarComponent, ProductsCarouselComponent, SponsorsCarouselComponent, CardProductsComponent,
  ProfileContactComponent, AccessComponent, MiProfileComponent

];

const views = [HomeComponent, ProductsComponent, OffersComponent, ContactComponent, MiProfileComponent, WrapperComponent, AboutComponent];

@NgModule({

  imports: [...modules],
  declarations: [...views, ...components],
  exports: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TimeInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ]
})
export class ViewsModule { }
