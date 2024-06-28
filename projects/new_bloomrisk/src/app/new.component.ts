import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'new-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './new.component.html',
  styleUrl: './new.component.scss',
})
export class NewComponent {
  title = 'new_bloomrisk';
}
