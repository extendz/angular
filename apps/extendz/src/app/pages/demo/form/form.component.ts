import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  createFormControl,
  ExtFormControl,
  FormMetadata,
  HateosResponse,
  NestedFormGroupFieldMetadata,
} from '@extendz/core';
import { EntityService } from '../services/entity-service/entity.service';

@Component({
  selector: 'extendz-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  formControl!: ExtFormControl;

  private record!: HateosResponse;

  constructor(
    private activatedRoute: ActivatedRoute,
    private entityService: EntityService,
    private router: Router
  ) {
    this.activatedRoute.data.subscribe((d) => {
      const formMetadata: FormMetadata = d.resolved.formMetadata;
      this.record = d.resolved.record;

      const nestedFormMetadata: NestedFormGroupFieldMetadata = {
        id: 'form',
        formMetadata,
      };

      this.formControl = createFormControl(nestedFormMetadata);
      this.formControl.setValue(this.record);
    });
  }

  ngOnInit(): void {}
}
