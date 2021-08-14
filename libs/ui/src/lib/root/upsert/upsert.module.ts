import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { CamelCasePipe, ExtPipesModule } from '@extendz/pipe';
import { ExtBasicFormModule } from '../../json-form/basic-form/basic-form.module';
import { BasicComponent } from './basic/basic.component';
import { ExtPropertiesModule } from './properties/properties.module';
import { UpsertComponent } from './upsert.component';

@NgModule({
  declarations: [UpsertComponent, BasicComponent],
  providers: [CamelCasePipe],
  exports: [UpsertComponent],
  imports: [
    CommonModule,
    ExtBasicFormModule,
    ExtPipesModule,
    ExtPropertiesModule,
    MatStepperModule,
    FlexLayoutModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
})
export class UpsertModule {}
