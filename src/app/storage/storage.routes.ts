import { AreaListComponent } from './area/area-list.component';
import { ContainerComponent } from './container/container.component';
import { AreaFormComponent } from './area/area-form.component';
import { AreaResolverService } from './area/area-resolver.service';
import { ContainerListComponent } from './container/container-list.component';
import { ContainerFormComponent } from './container/container-form.component';
import { ContainerResolverService } from './container/container-resolver.service';

export const storageRoutes = [
    { path: 'areas', children: [
        { path: '', component: AreaListComponent},
        { path: 'create', component: AreaFormComponent},
        { path: ':id/containers', children: [
            { path: '', component: ContainerListComponent},
            { path: 'add', component: ContainerFormComponent},
            { path: ':containerId/edit', component: ContainerFormComponent, resolve: {container: ContainerResolverService}},
            { path: ':containerId', component: ContainerComponent, resolve: {container: ContainerResolverService}},
        ]},
        { path: ':id', component: AreaFormComponent, resolve: {storageArea: AreaResolverService}}
    ]},
];
