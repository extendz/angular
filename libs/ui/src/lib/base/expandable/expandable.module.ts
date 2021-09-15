import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { ExtPipeModule } from '@extendz/core';
import { ExtDataTableModule } from '../../data-table/data-table.module';
import { ExtCheckboxModule } from '../checkbox/checkbox.module';
import { ExpandableComponent } from './expandable.component';

const declarations = [ExpandableComponent];

@NgModule({
  declarations,
  exports: declarations,
  imports: [
    CommonModule,
    ExtCheckboxModule,
    ExtPipeModule,
    ExtDataTableModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatExpansionModule,
    ReactiveFormsModule,
  ],
})
export class ExtExpandableModule {}
