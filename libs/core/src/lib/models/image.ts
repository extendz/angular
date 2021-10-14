import { ImageCroppedEvent } from 'ngx-image-cropper';

export interface Image {
  thumb: string;
}

export interface FileImageCroppedEvent extends ImageCroppedEvent {
  file: File;
}
