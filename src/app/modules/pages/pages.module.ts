import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ContactComponent } from './views/contact/contact.component';
import { HomeComponent } from './views/home/home.component';
import { ProductsComponent } from './views/products/products.component';
import { BannerOneComponent } from './components/banner-one/banner-one.component';
import { BannerTwoComponent } from './components/banner-two/banner-two.component';
import { BannerThreeComponent } from './components/banner-three/banner-three.component';
import { CarrouselSponsorsComponent } from './components/carrousel-sponsors/carrousel-sponsors.component';
import { CarrouselProductsComponent } from './components/carrousel-products/carrousel-products.component';
import { SidebarProductsComponent } from './components/sidebar-products/sidebar-products.component';
import { CardsProductsComponent } from './components/cards-products/cards-products.component';
import { FormContactComponent } from './components/form-contact/form-contact.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { OfersComponent } from './views/ofers/ofers.component';


@NgModule({
  declarations: [ContactComponent, HomeComponent, ProductsComponent, BannerOneComponent, BannerTwoComponent, BannerThreeComponent, CarrouselSponsorsComponent, CarrouselProductsComponent, SidebarProductsComponent, CardsProductsComponent, FormContactComponent, AboutUsComponent, OfersComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
