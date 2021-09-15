import { Component, Input } from '@angular/core';
import { ExtFormControl } from '@extendz/core';

@Component({
  selector: 'ext-base',
  template: 'extendz',
})
export class BaseInputComponent {
  @Input() control!: ExtFormControl;
}
