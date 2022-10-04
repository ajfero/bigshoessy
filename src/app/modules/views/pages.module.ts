import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './views-routing.module';
import { ComponentsComponent } from './components/components.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { BannerOneComponent } from './components/banner-one/banner-one.component';
import { BannerTwoComponent } from './components/banner-two/banner-two.component';
import { BannerThreeComponent } from './components/banner-three/banner-three.component';
import { CarrouselProductosComponent } from './components/carrousel-productos/carrousel-productos.component';
import { CarrouselSponsorsComponent } from './components/carrousel-sponsors/carrousel-sponsors.component';
import { FormContactComponent } from './components/form-contact/form-contact.component';
import { CardProductsComponent } from './components/card-products/card-products.component';
import { SidebarProductsComponent } from './components/sidebar-products/sidebar-products.component';


@NgModule({
  declarations: [
  
    ComponentsComponent,
       HomeComponent,
       ContactComponent,
       BannerOneComponent,
       BannerTwoComponent,
       BannerThreeComponent,
       CarrouselProductosComponent,
       CarrouselSponsorsComponent,
       FormContactComponent,
       CardProductsComponent,
       SidebarProductsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
