import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD:Tools/bigShoesSY/src/app/app.module.ts
import { TopNavbarComponent } from './shared/top-navbar/top-navbar.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';


=======


import { ComponentsModule } from './shared/modules/components/components.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
>>>>>>> docker:src/app/app.module.ts
@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD:Tools/bigShoesSY/src/app/app.module.ts
    AppRoutingModule
=======
    AppRoutingModule,
    ComponentsModule,
    NgbModule,
>>>>>>> docker:src/app/app.module.ts
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
