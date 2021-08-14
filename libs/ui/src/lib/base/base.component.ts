import { Component, Input } from '@angular/core';
import { ExtFormControl, FieldMetadata } from '@extendz/core';

@Component({
  selector: 'ext-base',
  template: 'extendz',
})
export class BaseInputComponent {
  @Input() control!: ExtFormControl;
}
