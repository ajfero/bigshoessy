import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Routing
import { ViewsRoutingModule } from './views-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
import { ContactOpcionalComponent } from './components/contact-opcional/contact-opcional.component';
import { CardComponent } from './components/card/card.component';
import { CardProductsComponent } from './components/card-products/card-products.component';
import { UploadPicComponent } from './components/upload-pic/upload-pic.component';
import { ProfileContactComponent } from './components/profile-contact/profile-contact.component';
import { ChangePasswdComponent } from './components/change-passwd/change-passwd.component';
import { ButtonsUploadDeleteComponent } from './components/buttons-upload-delete/buttons-upload-delete.component';

// Views
import { HomeComponent } from './views/home/home.component';
import { ProductsComponent } from './views/products/products.component';
import { ContactComponent } from './views/contact/contact.component';
import { OffersComponent } from './views/offers/offers.component';
import { MiProfileComponent } from './views/mi-profile/mi-profile.component';

// Box container for views, introducing views pages.
import { WrapperComponent } from './views/wrapper/wrapper.component';
import { AboutComponent } from './views/about/about.component';


const modules = [

  CommonModule,
  ViewsRoutingModule,
  NavegationComponentsModule,
  AngularFullpageModule,
  HttpClientModule,
  FormsModule,
];

const components = [

  BannerOneComponent, BannerTwoComponent, BannerThreeComponent, CardComponent,
  ProductsSidebarComponent, ProductsCarouselComponent, SponsorsCarouselComponent, CardProductsComponent,
  ContactOpcionalComponent,
  ProfileContactComponent, UploadPicComponent, ChangePasswdComponent, ButtonsUploadDeleteComponent, MiProfileComponent

];

const views = [HomeComponent, ProductsComponent, OffersComponent, ContactComponent, MiProfileComponent, WrapperComponent, AboutComponent];

@NgModule({

  declarations: [...views, ...components,],
  imports: [...modules],
  exports: []

})
export class ViewsModule { }
