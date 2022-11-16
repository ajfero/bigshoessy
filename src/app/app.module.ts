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
import { NavegationComponentsModule } from './shared/modules';
// Interceptors
import { TokenInterceptor } from './shared/interceptor/token/token.interceptor';

// Const
const modules = [FormsModule, HttpClientModule, NgbModule, BrowserModule, AppRoutingModule, NavegationComponentsModule];
const components = [AppComponent];

@NgModule({

  declarations: [...components],
  imports: [...modules],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }