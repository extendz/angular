import { AfterContentInit, Component } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import {
  ExtFormControl,
  FileImageCroppedEvent,
  Image,
  ImageFieldMetada,
} from '@extendz/core';
import { Subscription, take } from 'rxjs';
import { ImageCropperDialogComponent } from './image-cropper-dialog/image-cropper-dialog.component';

@Component({
  selector: 'ext-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageComponent implements AfterContentInit, ControlValueAccessor {
  private onTouched!: (touch: boolean) => boolean;
  private onChange!: (record: File[] | File) => string;

  data?: Image | Image[];
  multiple = false;
  src?: string | SafeUrl;

  fieldMetadata?: ImageFieldMetada;
  control!: FormControl;
  subscription!: Subscription;
  public displayImages: SafeUrl[] = [];

  constructor(
    public ngControl: NgControl,
    private sanitizer: DomSanitizer,
    private dialog: MatDialog
  ) {
    ngControl.valueAccessor = this;
  }

  ngAfterContentInit(): void {
    this.fieldMetadata = (this.ngControl.control as ExtFormControl)
      .metadata as ImageFieldMetada;
    if (this.fieldMetadata.type !== 'image') {
      this.multiple = true;
    }
  }

  public handleFile(event: Event) {
    if (this.fieldMetadata != undefined) {
      if (this.fieldMetadata.imageMetadata != undefined) {
        this.fieldMetadata.event = event;
        const dialogRef = this.getDialog(this.fieldMetadata);
        dialogRef
          .afterClosed()
          .pipe(take(1))
          .subscribe((e: FileImageCroppedEvent[]) => {
            e.forEach((v) => this.handleFileRead(v.file));
            const files = e.map((f) => f.file);
            this.handleUpdate(files);
          });
      } else {
        const files: File[] = [];
        const target = event.target as HTMLInputElement;
        if (target.files) {
          for (let index = 0; index < target.files.length; index++) {
            const file = target.files[index];
            this.handleFileRead(file);
            files.push(file);
          }
        }
        this.handleUpdate(files);
      }
    }
  }

  writeValue(data: Image | Image[]): void {
    this.data = data;
    if (Array.isArray(data)) {
      this.src = this.sanitizer.bypassSecurityTrustStyle(
        `url(${data[0].thumb})`
      );
    } else if (data != undefined && data.thumb)
      this.src = this.sanitizer.bypassSecurityTrustStyle(`url(${data.thumb})`);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {}

  private handleUpdate(files: File[]) {
    if (this.multiple) this.onChange(files);
    else this.onChange(files[0]);
  }

  private getDialog(data: ImageFieldMetada) {
    return this.dialog.open(ImageCropperDialogComponent, {
      disableClose: false,
      panelClass: 'image-cropper-dialog',
      data,
    });
  }

  /** Show preview of the file uploaded */
  private handleFileRead(file: File) {
    const reader = new FileReader();
    reader.onload = (event: ProgressEvent) => {
      const path = <string>reader.result;
      const image = this.sanitizer.bypassSecurityTrustStyle(`url(${path})`);
      if (!this.multiple) this.displayImages = [];
      // this.displayImages.unshift(image);
      this.src = image;
    };
    reader.readAsDataURL(file);
  }
}
