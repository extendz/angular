import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandableComponent } from './expandable.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ExtPipeModule } from '@extendz/core';
import { ExtCheckboxModule } from '../checkbox/checkbox.module';

const declarations = [ExpandableComponent];

@NgModule({
  declarations,
  exports: declarations,
  imports: [
    CommonModule,
    ExtCheckboxModule,
    ExtPipeModule,
    FlexLayoutModule,
    MatExpansionModule,
    ReactiveFormsModule,
  ],
})
export class ExtExpandableModule {}
