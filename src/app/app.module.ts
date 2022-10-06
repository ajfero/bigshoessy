import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// shared
import { ComponentsModule } from './shared/modules/components/components.module'

// Modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const modules = [BrowserModule, AppRoutingModule, ComponentsModule, NgbModule];
const components = [AppComponent];

@NgModule({

  declarations: [...components],
  imports: [...modules],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
