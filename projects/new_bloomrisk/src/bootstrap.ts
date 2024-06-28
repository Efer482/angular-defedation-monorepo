import { bootstrapApplication } from '@angular/platform-browser';
import { NewComponent } from './app/new.component';
import { newConfig } from './app/new.config';

bootstrapApplication(NewComponent, newConfig).catch((err) =>
  console.error(err),
);
