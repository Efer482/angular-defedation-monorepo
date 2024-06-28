import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'old-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './old.component.html',
  styleUrl: './old.component.scss',
})
export class OldComponent {
  title = 'old_bloomrisk';
}
