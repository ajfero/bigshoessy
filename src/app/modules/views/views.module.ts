import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//Routing
import { ViewsRoutingModule } from './views-routing.module';

// components
import { BannerOneComponent } from './components/banner-one/banner-one.component';
import { BannerTwoComponent } from './components/banner-two/banner-two.component';
import { BannerThreeComponent } from './components/banner-three/banner-three.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ProductsSidebarComponent } from './components/products-sidebar/products-sidebar.component';
import { ProductsCarouselComponent } from './components/products-carousel/products-carousel.component';
import { SponsorsCarouselComponent } from './components/sponsors-carousel/sponsors-carousel.component';
import { GoShopComponent } from './components/go-shop/go-shop.component';

//  views
import { HomeComponent } from './views/home/home.component';
import { ProductsComponent } from './views/products/products.component';
import { ContactComponent } from './views/contact/contact.component';
import { OffersComponent } from './views/offers/offers.component';
import { AboutUsComponent } from './views/about-us/about-us.component';

//Box container for components, introducing views pages.
import { WrapperComponent } from './views/wrapper/wrapper.component';

//Module navegation
import { NavegationComponentsModule } from 'src/app/shared/modules/navegationComponents/navegationcomponents.module';
import { CardProductsComponent } from './components/card-products/card-products.component';



const modules = [CommonModule, ViewsRoutingModule, NavegationComponentsModule];
const components = [GoShopComponent, CardProductsComponent, BannerOneComponent, BannerTwoComponent, BannerThreeComponent, ContactFormComponent, WrapperComponent, ProductsSidebarComponent, ProductsCarouselComponent, SponsorsCarouselComponent,];
const views = [HomeComponent, ProductsComponent, ContactComponent, OffersComponent, AboutUsComponent];

@NgModule({

  declarations: [...components, ...views],
  imports: [...modules],
  exports: [...components]

})
export class ViewsModule { }
