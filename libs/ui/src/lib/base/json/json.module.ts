import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { JsonComponent } from './json.component';

const declarations = [JsonComponent];

@NgModule({
  declarations,
  exports: declarations,
  imports: [CommonModule, MatButtonModule, MatTabsModule],
})
export class JsonModule {}
