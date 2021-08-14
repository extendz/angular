import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { ICONDATA_PROVIDER, METADATA_PROVIDER } from './extendz.providers';

@NgModule({
  declarations: [DemoComponent],
  imports: [CommonModule, DemoRoutingModule],
  providers: [METADATA_PROVIDER, ICONDATA_PROVIDER],
})
export class DemoModule {}
