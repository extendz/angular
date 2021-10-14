export interface ImageMetadata {
  cropper: boolean;
  ratio: number;
  resizeToWidth: number;
  format: 'png' | 'jpeg' | 'bmp' | 'webp' | 'ico';
}
