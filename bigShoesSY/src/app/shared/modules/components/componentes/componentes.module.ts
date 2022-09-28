import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ProfileComponent } from 'src/app/shared/components/profile/profile.component';



@NgModule({
  declarations: [FooterComponent, NavbarComponent, ModalComponent, ProfileComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentesModule { }
