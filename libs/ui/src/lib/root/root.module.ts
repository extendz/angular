import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ExtRootConfig, EXT_ROOT_CONFIG } from '@extendz/core';
import { ExtDirectiveModule } from '@extendz/directive';
import { ExtPipesModule } from '@extendz/pipe';
import { ExtBasicFormModule } from '../json-form/basic-form/basic-form.module';
import { RootComponent } from './root.component';
import { ExtPropertiesModule } from './upsert/properties/properties.module';
import { UpsertModule } from './upsert/upsert.module';
import { MatMenuModule } from '@angular/material/menu';
import { FieldsModule } from './fields/fields.module';
import { ConfigDataTableModule } from './config-data-table/config-data-table.module';

const declarations = [RootComponent];

@NgModule({
  declarations,
  exports: declarations,
  imports: [
    CommonModule,
    ConfigDataTableModule,
    ExtBasicFormModule,
    ExtDirectiveModule,
    ExtPipesModule,
    ExtPropertiesModule,
    FieldsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatToolbarModule,
    UpsertModule,
  ],
})
export class ExtRootModule {
  static forFeature(config: ExtRootConfig): ModuleWithProviders<ExtRootModule> {
    return {
      ngModule: ExtRootModule,
      providers: [{ provide: EXT_ROOT_CONFIG, useValue: config }],
    };
  }
}
