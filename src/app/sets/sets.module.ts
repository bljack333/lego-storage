import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { setRoutes } from './sets.routes';
import { SetsComponent } from './sets.component';
import { OnDisplayComponent } from '../on-display/on-display.component';
import { BoxedComponent } from '../boxed/boxed.component';
import { PartedOutComponent } from '../parted-out/parted-out.component';
import { SetCardComponent } from './set-card.component';
import { SetsService } from './sets.service';
import { SharedModule } from '../shared/shared.module';
import { SetsResolver } from './sets-resolver';
import { SetFormComponent } from './set-form.component';
import { SetListComponent } from './set-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(setRoutes),
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    SetsComponent,
    OnDisplayComponent,
    BoxedComponent,
    PartedOutComponent,
    SetCardComponent,
    SetFormComponent,
    SetListComponent],
  providers: [
    SetsService,
    SetsResolver
  ]
})
export class SetsModule { }
