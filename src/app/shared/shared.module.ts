import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
@NgModule({
  declarations: [],
  imports: [NgFor, NgIf, CommonModule, FormsModule],
  providers: [],
  exports: [NgFor, NgIf, CommonModule, FormsModule],
})
export class SharedModule {}
