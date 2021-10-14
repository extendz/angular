import { SelectionModel } from '@angular/cdk/collections';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormArray,
  FormControl,
  FormGroup,
  NgControl,
} from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import {
  Action,
  createFormControl,
  createFormGroup,
  DataTableFieldMetadata,
  DataTableFormMetadata,
  ExtFormControl,
  ExtFormGroup,
  FieldAction,
  FieldMetadata,
  InternalAction,
} from '@extendz/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ext-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class ExtDataTableComponent
  implements OnInit, OnDestroy, ControlValueAccessor, OnChanges
{
  @ViewChild(MatTable, { static: true }) table!: MatTable<any>;
  @Output() action = new EventEmitter<FieldAction>();
  @Input() event?: FieldAction;

  rows = new FormArray([]);

  /***
   * Selection model
   */
  selection: SelectionModel<any> = new SelectionModel<any>(false, []);

  showSearch = false;

  /***
   * Pagination data
   */
  page!: PageEvent;

  data: any[] = [];

  showToolbar? = true;
  showPaginator = true;
  actions?: Action[];

  fieldMetadata: FieldMetadata[] = [];
  displayedColumns: string[] = [];
  formMetadata!: DataTableFormMetadata;
  dataSource: any[] = [];

  formGroup!: ExtFormGroup;

  metadata!: DataTableFieldMetadata;

  private onTouched!: () => void;
  private onChange!: (record: any) => any;

  private subscription?: Subscription;

  constructor(public ngControl: NgControl) {
    ngControl.valueAccessor = this;
  }

  ngOnChanges(changes: SimpleChanges): void {
    const event = changes['event'];
    if (event && event.currentValue) {
      // console.log('table', event);
    }
  }

  ngOnInit(): void {
    const formControl = this.ngControl.control as ExtFormControl;
    this.metadata = formControl.metadata as DataTableFieldMetadata;

    this.formGroup = new FormGroup({ data: this.rows });

    this.showToolbar = this.metadata?.showToolbar as boolean;
    this.showPaginator = this.metadata?.showPaginator as boolean;

    this.formMetadata = this.metadata.formMetadata;

    this.fieldMetadata = this.formMetadata.fieldMetadata;
    this.actions = this.formMetadata.actions;

    // Overwrite data table configurations
    const dtc = this.formMetadata?.dataTableConfiguration;
    if (dtc != undefined) {
      // projection
      const name = dtc.projection;
      const projection = this.formMetadata.projections?.find(
        (projection) => projection.name == name
      );
      if (projection) this.fieldMetadata = projection.fieldMetadata;

      // actions
      this.actions = dtc.actions;
    }
    const clone: any = [];
    this.fieldMetadata
      .filter((fm) => fm.type == undefined)
      .forEach((fm) => {
        const x = this.formMetadata.fieldMetadata.find((f) => fm.id == f.id);
        clone.push(x);
      });
    // console.log();

    this.fieldMetadata = clone;
    this.displayedColumns = this.fieldMetadata.map((f) => f.id);

    // Table config
    if (this.formMetadata.dataTableConfiguration?.selectable)
      this.displayedColumns.unshift('select');
    if (this.formMetadata.dataTableConfiguration?.editable)
      this.displayedColumns.push('edit');
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  onAction(action: Action, index?: number) {
    switch (action.id) {
      case '__search__':
        this.showSearch = !this.showSearch;
        break;
      case '__add__':
        {
          this.addRow();
          this.table.renderRows();
        }
        break;
      case '__delete__':
        if (index != undefined) this.removeAt(index);
        break;
      case '__save__':
        {
          const payload = this.rows.controls
            .filter((c) => c.dirty)
            .map((groups) => {
              const group = groups as ExtFormGroup;
              const ctrl = Object.values(group.controls) as ExtFormControl[];
              const touched = ctrl.map((c) => c.dirty);
              return groups.value;
            });
          if (payload.length > 0)
            this.action.emit({
              type: 'save',
              payload,
              reference: this.formMetadata.id,
            });
        }

        break;
    }
  }

  /*** User select an existing entity to edit */
  editRow(payload: unknown) {
    this.action.emit({ type: 'edit', payload });
  }

  removeAt(index: number) {
    this.rows.removeAt(index);
    this.dataSource.splice(index, 1);
    this.table.renderRows();
  }

  addRow(record?: Record<string, unknown>) {
    const row = createFormGroup(this.formMetadata);

    this.fieldMetadata.forEach((fieldMetada) => {
      fieldMetada.floatLabel = 'never';
      const ctrl = createFormControl(fieldMetada, record);
      // const ctrl = new FormControl();
      row.addControl(fieldMetada.id, ctrl);
    });

    // add readonly
    const readOnlyFields = this.formMetadata.readOnlyFields;
    if (readOnlyFields != undefined)
      readOnlyFields.forEach((name) => {
        const value = record?.[name] || undefined;
        const controller = new FormControl(value);
        row.addControl(name, controller);
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

  writeValue(data: any[]): void {
    if (data) {
      data.forEach((d) => this.addRow(d));
      this.addRow();
      this.table.renderRows();
      this.selection = new SelectionModel<any>(true, []);
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /***
   *
   */
  selectionChange() {
    // this.selected = this.selection.selected;
    // this.selectedChange.emit(this.selected);
  }

  /***
   *
   */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.page.length;
    return numSelected === numRows;
  }

  /***
   *  Selects all rows if they are not all selected; otherwise clear selection.
   */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.data.forEach((row) => this.selection.select(row));
  } // masterToggle()
}
