import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { partsRoutes } from './parts.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(partsRoutes)
  ],
  declarations: []
})
export class PartsModule { }
