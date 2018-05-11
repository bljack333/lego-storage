import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StorageComponent } from './storage.component';
import { AreaListComponent } from './area-list.component';
import { AreaCardComponent } from './area-card.component';
import { storageRoutes } from './storage.routes';
import { StorageService } from './storage.service';
import { ContainerListComponent } from './container-list.component';
import { ContainerComponent } from './container.component';
import { AreaFormComponent } from './area-form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(storageRoutes),
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    StorageComponent,
    AreaCardComponent,
    AreaListComponent,
    ContainerListComponent,
    ContainerComponent,
    AreaFormComponent
    ],
  providers: [
    StorageService
  ]
})
export class StorageModule { }
