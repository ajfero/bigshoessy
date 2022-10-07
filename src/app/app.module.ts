import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


const modules = [BrowserModule, AppRoutingModule];
const components = [AppComponent];

@NgModule({

  declarations: [...components],
  imports: [...modules],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
