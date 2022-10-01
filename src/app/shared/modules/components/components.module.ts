import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavbarComponent } from '../../components/top-navbar/top-navbar.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { NotfoundComponent } from '../../views/notfound/notfound.component';

const components = [TopNavbarComponent, NavbarComponent, FooterComponent];

const views = [NotfoundComponent];


@NgModule({
  declarations: [...components, ...views],
  exports: [...components, ...views,],
  imports: [CommonModule, RouterModule],

})
export class ComponentsModule { }
