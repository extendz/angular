import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  FileImageCroppedEvent,
  ImageFieldMetada,
  ImageMetadata,
} from '@extendz/core';
import { base64ToFile, ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'ext-image-cropper-dialog',
  templateUrl: './image-cropper-dialog.component.html',
  styleUrls: ['./image-cropper-dialog.component.css'],
})
export class ImageCropperDialogComponent {
  public loading = true;
  public imageMetadata: ImageMetadata;
  public files?: FileList | null;
  public currentFile!: File;
  public currentIndex!: number;
  public map: Map<string, ImageCroppedEvent> = new Map();

  constructor(
    public dialogRef: MatDialogRef<ImageCropperDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public metadata: ImageFieldMetada
  ) {
    console.log(metadata);
    this.imageMetadata = metadata.imageMetadata;
    const target = metadata.event.target as HTMLInputElement;
    this.currentIndex = 0;
    if (target != undefined) {
      this.files = target.files;
      if (this.files) this.currentFile = this.files[this.currentIndex];
    }
  }

  public imageCropped(event: ImageCroppedEvent) {
    this.map.set(this.currentFile.name, event);
  }

  public imageLoaded() {}
  public loadImageFailed() {}

  public cropperReady() {
    this.loading = false;
  }

  public onCancel() {
    this.dialogRef.close();
  }

  onCrop() {
    const finalImageList: FileImageCroppedEvent[] = [];
    this.map.forEach((event, k) => {
      const fileEvent = event as FileImageCroppedEvent;
      if (event.base64 != undefined) {
        const blob = base64ToFile(event.base64);
        fileEvent.file = new File([blob], k, {
          type: `image/${this.imageMetadata.format}`,
        });
        finalImageList.push(fileEvent);
      }
    });
    this.dialogRef.close(finalImageList);
  }

  onNext() {
    this.loading = true;
    if (this.files != null)
      if (this.currentIndex < this.files.length)
        this.currentFile = this.files[++this.currentIndex];
  }

  onPrevious() {
    // this.loading = true;
    // if (this.currentIndex >= 0)
    //   this.currentFile = this.files[--this.currentIndex];
  }
}
