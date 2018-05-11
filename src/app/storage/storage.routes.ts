import { AreaListComponent } from "./area-list.component";
import { ContainerComponent } from "./container.component";
import { AreaFormComponent } from "./area-form.component";

export const storageRoutes = [
    { path: 'areas', component: AreaListComponent},
    { path: 'areas/create', component: AreaFormComponent},
    { path: 'container/:id', component: ContainerComponent}
]