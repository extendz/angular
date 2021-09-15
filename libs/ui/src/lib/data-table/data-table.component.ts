import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormArray,
  FormBuilder,
  FormGroup,
  NgControl,
} from '@angular/forms';
import { MatTable } from '@angular/material/table';
import {
  Action,
  createFormControl,
  createFormGroup,
  DataTableFieldMetadata,
  ExtFormControl,
  ExtFormGroup,
  FieldMetadata,
  FormMetadata,
  InternalAction,
} from '@extendz/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ext-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class ExtDataTableComponent
  implements OnInit, OnDestroy, ControlValueAccessor
{
  @Input() data!: Record<string, unknown>[];

  @ViewChild(MatTable, { static: true }) table!: MatTable<any>;

  rows = new FormArray([]);

  showToolbar = true;
  showPaginator = true;
  actions?: Action[];

  fieldMetadata: FieldMetadata[] = [];
  displayedColumns: string[] = [];
  formMetadata!: FormMetadata;
  dataSource: any[] = [];

  formGroup!: ExtFormGroup;

  metadata!: DataTableFieldMetadata;

  private onTouched!: () => void;
  private onChange!: (record: any) => any;

  private subscription?: Subscription;

  constructor(public ngControl: NgControl) {
    ngControl.valueAccessor = this;
  }

  ngOnInit(): void {
    const temp = (this.ngControl.control as ExtFormControl).metadata;
    this.metadata = temp as DataTableFieldMetadata;
    this.formGroup = new FormGroup({ data: this.rows });
    this.showToolbar = this.metadata?.showToolbar as boolean;
    this.showPaginator = this.metadata?.showPaginator as boolean;
    this.actions = this.metadata?.formMetadata.actions;
    this.formMetadata = this.metadata.formMetadata;
    this.fieldMetadata = this.formMetadata.fieldMetadata;
    this.displayedColumns = this.fieldMetadata.map((f) => f.id);
    if (this.data) this.data.forEach((d) => this.addRow(d));
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  onAction(action: Action, index?: number) {
    this.onChange(['add']);
    switch (action.id) {
      case '__add__':
        this.addRow();
        break;
      case '__remove__':
        if (index != undefined) this.removeAt(index);
        break;
    }
  }

  removeAt(index: number) {
    this.rows.removeAt(index);
    this.dataSource.splice(index, 1);
    this.table.renderRows();
  }

  addRow(record?: Record<string, unknown>) {
    const row = createFormGroup(this.formMetadata);
    // const row = new FormGroup({});

    this.formMetadata.fieldMetadata.forEach((fieldMetada) => {
      fieldMetada.floatLabel = 'never';
      const ctrl = createFormControl(fieldMetada, record);
      // const ctrl = new FormControl();
      row.addControl(fieldMetada.id, ctrl);
    });

    const mutations = this.formMetadata.mutations;
    // if (mutations != undefined) {
    //   row.valueChanges.subscribe((d) => {
    //     mutations.forEach((mutation) => {
    //       const fieldName = mutation.on.id;
    //       const value = d[fieldName];
    //       switch (mutation.assert) {
    //         case Assert.EQUAL:
    //           if (value == mutation.value)
    //             mutation.actions?.forEach((a) => this.executeAction(a, row));
    //           break;
    //       }
    //     });
    //   });
    // }
    this.rows.push(row);
    this.dataSource.push(record);

    setTimeout(() => {
      this.table.renderRows();
    }, 0);
    // this.onChange(this.rows.value);
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

  writeValue(obj: any): void {
    console.log('Write some values');
    // throw new Error('Method not implemented.');
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
