import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './old.routes';

export const oldConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
