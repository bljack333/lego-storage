import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StorageComponent } from './storage.component';
import { LocationListComponent } from './location/location-list.component';
import { LocationCardComponent } from './location/location-card.component';
import { storageRoutes } from './storage.routes';
import { StorageService } from './storage.service';
import { ContainerListComponent } from './container/container-list.component';
import { ContainerComponent } from './container/container.component';
import { LocationFormComponent } from './location/location-form.component';
import { LocationResolverService } from './location/location-resolver.service';
import { ContainerFormComponent } from './container/container-form.component';
import { ContainerCardComponent } from './container/container-card.component';
import { ContainerResolverService } from './container/container-resolver.service';
import { SlotFormComponent } from './container/slots/slot-form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(storageRoutes),
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    StorageComponent,
    LocationCardComponent,
    LocationListComponent,
    ContainerListComponent,
    ContainerComponent,
    LocationFormComponent,
    ContainerFormComponent,
    ContainerCardComponent,
    SlotFormComponent,
    ],
  providers: [
    StorageService,
    LocationResolverService,
    ContainerResolverService
  ],
  exports: [RouterModule]
})
export class StorageModule { }
