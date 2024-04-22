import { NgModule } from '@angular/core';

import { HeroesComponent } from '../heroes/heroes.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

const components: Array<any> = [HeroesComponent, HeroDetailComponent];

@NgModule({
  declarations: [],
  imports: [...components],
  providers: [],
  exports: [...components],
})
export class ComponentModule {}
