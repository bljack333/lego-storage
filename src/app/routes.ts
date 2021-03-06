import { Routes } from '@angular/router';
import { StorageModule } from './storage/storage.module';
import { PartsModule } from './parts/parts.module';
import { SetsModule } from './sets/sets.module';

export const appRoutes: Routes = [
  { path: 'storage', loadChildren: () => StorageModule },
  { path: 'parts', loadChildren: () => PartsModule },
    { path: 'sets', loadChildren: () => SetsModule },
    { path: '', redirectTo: '/storage', pathMatch: 'full'}
  ];
