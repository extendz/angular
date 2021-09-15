import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  Action,
  Assert,
  createFormControl,
  FieldMetadata,
  FormMetadata,
  InternalAction,
} from '@extendz/core';

@Component({
  selector: 'ext-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css'],
})
export class SimpleFormComponent implements OnInit {
  @Input() formMetadata!: FormMetadata;

  formGroup: FormGroup;
  fields!: FieldMetadata[];

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.fields = [...this.formMetadata.fieldMetadata];

    this.fields?.forEach((fm) => {
      this.formGroup.addControl(fm.id, createFormControl(fm));
    });

    const mutations = this.formMetadata.mutations;
    if (mutations != undefined) {
      this.formGroup.valueChanges.subscribe((d) => {
        mutations.forEach((mutation) => {
          const fieldName = mutation.on.id;
          const value = d[fieldName];

          switch (mutation.assert) {
            case Assert.EQUAL:
              if (value == mutation.value)
                mutation.actions?.forEach((a) =>
                  this.executeAction(a, this.formGroup)
                );
              break;
          }
        });
      });
    }
  }
  executeAction(action: Action, row: FormGroup) {
    if (action.type == 'internal') {
      const internalAction = action as InternalAction;
      switch (action.id) {
        case '__clear__':
          {
            const fieldId = internalAction.on?.id as string;
            row.controls[fieldId].reset(undefined, { emitEvent: false });
          }
          break;
        case '__hide__':
          {
            const fieldId = internalAction.on?.id as string;
            const index = this.fields.findIndex((f) => f.id == fieldId);
            if (index > -1) this.fields.splice(index, 1);
          }
          break;
        case '__show__':
          {
            const fieldId = internalAction.on?.id as string;
            let index = this.fields.findIndex((f) => f.id == fieldId);
            if (index == -1) {
              index = this.formMetadata.fieldMetadata.findIndex(
                (f) => f.id == fieldId
              );
              this.fields.splice(
                index,
                0,
                this.formMetadata.fieldMetadata[index]
              );
            }
          }
          break;
        case '__disable__':
          {
            const fieldId = internalAction.on?.id as string;
            row.controls[fieldId].disable({ emitEvent: false });
          }
          break;
        case '__enable__':
          {
            const fieldId = internalAction.on?.id as string;
            row.controls[fieldId].enable({ emitEvent: false });
          }
          break;
      }
    } else {
      console.log();
    }
  }
}
