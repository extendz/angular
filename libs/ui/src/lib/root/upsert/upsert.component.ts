import { Component, Inject, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import {
  AbstractEntityMetadataService,
  EXT_ENTITY_METADATA_SERVICE,
  FormMetadata,
} from '@extendz/core';

@Component({
  selector: 'ext-upsert',
  templateUrl: './upsert.component.html',
  styleUrls: ['./upsert.component.scss'],
})
export class UpsertComponent {
  basic!: FormGroup;

  @ViewChild('stepper') stepper?: MatStepper;

  constructor(
    @Inject(EXT_ENTITY_METADATA_SERVICE)
    private entityMetadataService: AbstractEntityMetadataService,
    @Inject(MAT_DIALOG_DATA) public data: FormMetadata
  ) {}

  setBasicForm(form: FormGroup) {
    this.basic = form;
    this.basic.patchValue(this.data);
  }

  onNext(): void {
    if (this.stepper?.selectedIndex == 0) {
      this.entityMetadataService.save(this.basic.value).subscribe();
    }
  }
}
