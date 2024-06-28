import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { NewComponent } from 'projects/new_bloomrisk/src/app/new.component';
// import { OldComponent } from 'projects/old_bloomisk/src/app/old.component';
export const routes: Routes = [
  {
    path: 'old_bloomrisk',
    loadComponent: () =>
      import('old_bloomrisk/Component').then((c) => c.OldComponent),
    pathMatch: 'full',
  },
  {
    path: 'new_bloomrisk',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        exposedModule: './Component',
      }).then((m) => m.NewComponent),
    pathMatch: 'full',
  },
];
