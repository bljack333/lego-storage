import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { partsRoutes } from './parts.routes';
import { PartsComponent } from './parts.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(partsRoutes)
  ],
  declarations: [PartsComponent]
})
export class PartsModule { }
