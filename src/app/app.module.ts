import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Extension de seccionamiento
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { NavegationComponentsModule } from './shared/modules';



//componentes

const modules = [BrowserModule, AppRoutingModule, AngularFullpageModule, NavegationComponentsModule];
const components = [AppComponent];

@NgModule({

  declarations: [...components],
  imports: [...modules],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
