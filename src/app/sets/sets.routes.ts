import { SetsComponent } from "./sets.component";
import { SetsResolver } from "./sets-resolver";

export const setRoutes = [
    { path: '', component: SetsComponent, resolve: {sets: SetsResolver}},

];