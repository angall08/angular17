import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ComponentModule } from './shared/component.module';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponentModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Tour of Heroes';
}
