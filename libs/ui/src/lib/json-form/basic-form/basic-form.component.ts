import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { createFormControl, FormMetadata } from '@extendz/core';

@Component({
  selector: 'ext-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss'],
})
export class BasicFormComponent implements OnInit, AfterViewInit {
  @Input() formMetadata!: FormMetadata;
  @Output() form = new EventEmitter<FormGroup>();

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({});
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.form.emit(this.formGroup), 100);
  }

  ngOnInit(): void {
    this.formMetadata?.fieldMetadata?.forEach((fm) => {
      this.formGroup.addControl(fm.id, createFormControl(fm));
    });
  }
}
