import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar.component';
import { JsonModule } from '../base/json/json.module';
import { ReactiveFormsModule } from '@angular/forms';

const declarations = [SearchBarComponent];

@NgModule({
  declarations,
  exports: declarations,
  imports: [CommonModule, JsonModule, ReactiveFormsModule],
})
export class SearchBarModule {}
