import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';

// shared
import { ComponentsModule } from '../../shared/modules/components/components.module'

// components
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { BannerOneComponent } from './components/banner-one/banner-one.component';
import { BannerTwoComponent } from './components/banner-two/banner-two.component';
import { BannerThreeComponent } from './components/banner-three/banner-three.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ProductsSidebarComponent } from './components/products-sidebar/products-sidebar.component';
import { ProductsCarouselComponent } from './components/products-carousel/products-carousel.component';
import { SponsorsCarouselComponent } from './components/sponsors-carousel/sponsors-carousel.component';

//  views
import { HomeComponent } from './views/home/home.component';
import { ProductsComponent } from './views/products/products.component';
import { ContactComponent } from './views/contact/contact.component';
import { OffersComponent } from './views/offers/offers.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { TemplateComponent } from './components/template/template.component'

const modules = [CommonModule, ViewsRoutingModule, ComponentsModule,]
const components = [FooterComponent, NavbarComponent, TopNavbarComponent, BannerOneComponent, BannerTwoComponent, BannerThreeComponent, ContactFormComponent, ProductsSidebarComponent, ProductsCarouselComponent, SponsorsCarouselComponent,];
const views = [HomeComponent, ProductsComponent, ContactComponent, OffersComponent, AboutUsComponent];

@NgModule({

  declarations: [...components, ...views,],
  imports: [...modules],
  exports: [...components]

})
export class ViewsModule { }
