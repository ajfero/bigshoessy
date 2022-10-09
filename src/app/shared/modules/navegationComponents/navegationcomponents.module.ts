import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// views
import { NotFoundComponent } from '../../views/not-found/not-found.component';

// components
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { TopNavbarComponent } from 'src/app/shared/components/top-navbar/top-navbar.component';
//Module
import { AuthModule } from 'src/app/modules/auth/auth.module';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

// declaraciones
const components = [FooterComponent, NavbarComponent, TopNavbarComponent
  , ModalComponent];
const views = [NotFoundComponent];

@NgModule({
  declarations: [...views, components],
  exports: [...views, components],
  imports: [CommonModule, RouterModule, AuthModule, AuthModule]
})
export class NavegationComponentsModule { }
