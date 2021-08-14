import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ExtRootModule } from '@extendz/ui';
import { ROOT_CONFIG } from '../extendz.config';
import { RootRoutingModule } from './root-routing.module';
import { RootComponent } from './root.component';

@NgModule({
  declarations: [RootComponent],
  imports: [
    CommonModule,
    ExtRootModule.forFeature(ROOT_CONFIG),
    MatIconModule,
    RootRoutingModule,
  ],
})
export class RootModule {}
