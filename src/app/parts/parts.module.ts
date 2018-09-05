import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { partsRoutes } from './parts.routes';
import { PartsComponent } from './parts.component';
import { PartsService } from './parts.service';
import { PartCardComponent } from './part-card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(partsRoutes)
  ],
  declarations: [PartsComponent, PartCardComponent],
  providers: [
    PartsService
  ]
})
export class PartsModule { }
