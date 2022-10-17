import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Bootstrap NgBModule. Bootstrap 5 CSS with APIs designed for the Angular ecosystem. 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


// Extension de seccionamiento
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { NavegationComponentsModule } from './shared/modules';


const modules = [NgbModule, BrowserModule, AppRoutingModule, AngularFullpageModule, NavegationComponentsModule];
const components = [AppComponent];

@NgModule({

  declarations: [...components],
  imports: [...modules],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
