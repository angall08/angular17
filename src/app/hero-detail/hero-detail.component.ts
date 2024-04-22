import { Component, Input } from '@angular/core';

import { Hero } from '../hero';
import { SharedModule } from '../shared/shared.module';
@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss',
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
}
