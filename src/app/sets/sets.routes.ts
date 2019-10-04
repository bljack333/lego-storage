import { SetsComponent } from './sets.component';
import { SetsResolver } from './sets-resolver';
import { SetFormComponent } from './set-form.component';
import { SetListComponent } from './set-list.component';

export const setRoutes = [
    { path: '', component: SetsComponent, resolve: {sets: SetsResolver}},
    { path: 'on-display/add', component: SetListComponent },
    { path: 'boxed/add', component: SetListComponent },
    { path: 'parted-out/add', component: SetListComponent },
    { path: 'unclassified/add', component: SetListComponent },
    { path: 'set-form/:id', component: SetFormComponent}
];
