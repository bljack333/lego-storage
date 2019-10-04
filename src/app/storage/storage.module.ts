import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StorageComponent } from './storage.component';
import { AreaListComponent } from './area/area-list.component';
import { AreaCardComponent } from './area/area-card.component';
import { storageRoutes } from './storage.routes';
import { StorageService } from './storage.service';
import { ContainerListComponent } from './container/container-list.component';
import { ContainerComponent } from './container/container.component';
import { AreaFormComponent } from './area/area-form.component';
import { AreaResolverService } from './area/area-resolver.service';
import { ContainerFormComponent } from './container/container-form.component';
import { ContainerCardComponent } from './container/container-card.component';
import { ContainerResolverService } from './container/container-resolver.service';

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
    AreaFormComponent,
    ContainerFormComponent,
    ContainerCardComponent
    ],
  providers: [
    StorageService,
    AreaResolverService,
    ContainerResolverService
  ],
  exports: [RouterModule]
})
export class StorageModule { }
