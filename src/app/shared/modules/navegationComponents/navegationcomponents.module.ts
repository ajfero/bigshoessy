import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// views
import { NotFoundComponent } from '../../views/not-found/not-found.component';

// components
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { TopNavbarComponent } from 'src/app/shared/components/top-navbar/top-navbar.component';

// declaraciones
const components = [FooterComponent, NavbarComponent, TopNavbarComponent];
const views = [NotFoundComponent];

@NgModule({
  declarations: [...views, components],
  exports: [...views, components],
  imports: [CommonModule, RouterModule],
})
export class NavegationComponentsModule { }
