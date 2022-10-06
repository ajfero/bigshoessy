import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// views
import { NotFoundComponent } from '../../views/not-found/not-found.component';

const views = [NotFoundComponent];

@NgModule({
  declarations: [...views],
  exports: [...views],
  imports: [CommonModule, RouterModule],
})
export class ComponentsModule { }
