import { bootstrapApplication } from '@angular/platform-browser';
import { oldConfig } from './app/old.config';
import { OldComponent } from './app/old.component';

bootstrapApplication(OldComponent, oldConfig).catch((err) =>
  console.error(err),
);
