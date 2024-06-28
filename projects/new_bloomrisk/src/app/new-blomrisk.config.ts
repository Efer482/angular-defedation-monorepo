import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './new.routes';

export const newConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
