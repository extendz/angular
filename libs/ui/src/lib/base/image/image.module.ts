import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ImageCropperDialogModule } from './image-cropper-dialog/image-cropper-dialog.module';

const declarations = [ImageComponent];

@NgModule({
  declarations,
  exports: declarations,
  imports: [
    CommonModule,
    ImageCropperDialogModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
  ],
})
export class ExtImageModule {}
