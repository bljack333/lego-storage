import { LocationListComponent } from './location/location-list.component';
import { ContainerComponent } from './container/container.component';
import { LocationFormComponent } from './location/location-form.component';
import { LocationResolverService } from './location/location-resolver.service';
import { ContainerListComponent } from './container/container-list.component';
import { ContainerFormComponent } from './container/container-form.component';
import { ContainerResolverService } from './container/container-resolver.service';
import { SlotFormComponent } from './container/slots/slot-form.component';

export const storageRoutes = [
    { path: 'locations', children: [
        { path: '', component: LocationListComponent},
        { path: 'create', component: LocationFormComponent},
        { path: ':id/containers', children: [
            { path: '', component: ContainerListComponent},
            { path: 'add', component: ContainerFormComponent},
            { path: ':containerId/edit', component: ContainerFormComponent, resolve: {container: ContainerResolverService}},
            { path: ':containerId', component: ContainerComponent, resolve: {container: ContainerResolverService}},
            { path: ':containerId/slots', children: [
                {path: 'add', component: SlotFormComponent},
                {path: ':slotId', component: SlotFormComponent}
            ]}
        ]},
        { path: ':id', component: LocationFormComponent, resolve: {storageLocation: LocationResolverService}}
    ]},
];
