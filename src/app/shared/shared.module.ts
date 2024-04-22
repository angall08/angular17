
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
// import { NoopAnimationsModule  } from '@angular/platform-browser/animations'
import { CommonModule } from '@angular/common'
import { AppComponent } from '../app.component';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';

import { HeroesComponent } from '../heroes/heroes.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';


@NgModule({
  declarations: [],
  imports: [NgFor, NgIf,CommonModule,FormsModule, HeroesComponent,HeroDetailComponent],
  providers: [],
  exports: [NgFor, NgIf,CommonModule,FormsModule, HeroesComponent,HeroDetailComponent]
})
export class SharedModule {} 