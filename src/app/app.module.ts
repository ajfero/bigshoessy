// Angular tools
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
// Components
import { AppComponent } from './app.component';
// Moduls
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { SwiperModule } from 'swiper/angular';
import { NavegationComponentsModule } from './shared/modules';
// Interceptors
import { SpinnerInterceptor } from './shared/interceptor/spinner.interceptor';
import { TimeInterceptor } from './shared/interceptor/timeRes/time.interceptor';
import { TokenInterceptor } from './shared/interceptor/token/token.interceptor';
// Const
const modules = [SwiperModule, FormsModule, HttpClientModule, NgbModule, BrowserModule, AppRoutingModule, AngularFullpageModule, NavegationComponentsModule];
const components = [AppComponent];

@NgModule({

  declarations: [...components],
  imports: [...modules],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TimeInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }