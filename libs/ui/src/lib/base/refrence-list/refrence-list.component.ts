import {
  AfterContentInit,
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {
  ExtFormControl,
  ExtFormGroup,
  FieldAction,
  ReferenceListActionModel,
  ReferenceListFieldMetadata,
} from '@extendz/core';
import { ReferenceListUpsertComponent } from './reference-list-upsert/reference-list-upsert.component';

@Component({
  selector: 'ext-refrence-list',
  templateUrl: './refrence-list.component.html',
  styleUrls: ['./refrence-list.component.css'],
})
export class RefrenceListComponent implements OnChanges, AfterContentInit {
  @Output() action = new EventEmitter<FieldAction>();
  @Input() event?: FieldAction;

  private id?: string;
  ref?: MatDialogRef<ReferenceListUpsertComponent>;

  fieldMetaData?: ReferenceListFieldMetadata;

  private onTouched!: (touch: boolean) => boolean;
  private onChange!: (record: Record<string, string>) => string;

  data?: Record<string, unknown>[];
  /*** TODO: Make this dynamic via config */
  dispayField = 'name';

  constructor(public ngControl: NgControl, private matDialog: MatDialog) {
    ngControl.valueAccessor = this;
  }

  writeValue(data: Record<string, unknown>[]): void {
    this.data = data;
    console.log(this.data, this.fieldMetaData);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const event = changes['event'];
    if (event && event.currentValue) {
      // check for event match for given id
      if (this.event?.id == this.id) {
        switch (this.event?.type) {
          case 'requestMetadata':
            {
              const data = this.event.payload as ReferenceListActionModel;
              if (this.fieldMetaData?.projection)
                data.projection = this.fieldMetaData.projection;
              this.ref = this.matDialog.open(ReferenceListUpsertComponent, {
                width: '60%',
                height: 'auto',
                data,
              });
              this.ref.componentInstance.page$.subscribe((page) => {
                this.action.emit({
                  type: 'requestData',
                  id: this.id,
                  payload: page,
                });
              });
            }
            break;
          case 'requestData': {
            if (this.ref) {
              this.ref.componentInstance.dataSource = this.event
                .payload as unknown[];
            }
          }
        } // switch
      } // if
    }
  }

  ngAfterContentInit(): void {
    const ctrl = this.ngControl.control as ExtFormControl;
    this.id = ctrl.id;
    this.fieldMetaData = (this.ngControl.control as ExtFormControl)
      .metadata as ReferenceListFieldMetadata;

    if (this.fieldMetaData.displayField != undefined)
      this.dispayField = this.fieldMetaData.displayField;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {}

  onSearch() {
    if (this.fieldMetaData != undefined) {
      if (this.ngControl.control?.parent != undefined) {
        const extFormGroup = this.ngControl.control.parent as ExtFormGroup;
        const payload: ReferenceListActionModel = {
          metadata: this.fieldMetaData,
          extFormGroup,
        };
        this.action.emit({
          type: 'requestMetadata',
          id: this.id,
          payload,
        });
      }
    }
  } // onSearch()
}
