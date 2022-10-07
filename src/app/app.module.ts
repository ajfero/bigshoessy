import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const modules = [BrowserModule, AppRoutingModule, NgbModule];
const components = [AppComponent];

@NgModule({

  declarations: [...components],
  imports: [...modules],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
