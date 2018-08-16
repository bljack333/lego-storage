import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '../../../node_modules/@angular/router';
import { setRoutes } from './sets.routes';
import { SetsComponent } from './sets.component';
import { OnDisplayComponent } from '../on-display/on-display.component';
import { BoxedComponent } from '../boxed/boxed.component';
import { PartedOutComponent } from '../parted-out/parted-out.component';
import { SetCardComponent } from './set-card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(setRoutes),
  ],
  declarations: [SetsComponent, OnDisplayComponent, BoxedComponent, PartedOutComponent, SetCardComponent]
})
export class SetsModule { }
