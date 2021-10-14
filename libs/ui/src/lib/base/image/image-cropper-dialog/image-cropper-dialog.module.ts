import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCropperDialogComponent } from './image-cropper-dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatStepperModule } from '@angular/material/stepper';
import { ImageCropperModule } from 'ngx-image-cropper';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [ImageCropperDialogComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ImageCropperModule,
    // //
    MatButtonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatStepperModule,
    MatIconModule,
  ],
})
export class ImageCropperDialogModule {}
