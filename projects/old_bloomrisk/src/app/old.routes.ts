import { Routes } from '@angular/router';

import { OldComponent } from './old.component';

export const routes: Routes = [
  {
    path: '',
    component: OldComponent,
    pathMatch: 'full',
  },
];
