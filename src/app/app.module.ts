import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ComponentsModule } from './shared/modules/components/components.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductsModule } from './modules/pages/views/products/products.module';
import { CardComponent } from './modules/newModule/components/card/card.component';
import { CardsComponent } from './modules/newModule/components/cards/cards.component';
import { IndexComponent } from './modules/newModule/views/index/index.component';

@NgModule({

  declarations: [
    AppComponent,
    CardComponent,
    CardsComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    NgbModule,
    ProductsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
