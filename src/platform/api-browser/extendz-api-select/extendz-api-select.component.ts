import {
  Component,
  OnInit,
  Input,
  forwardRef,
  OnDestroy,
  Output,
  EventEmitter
} from '@angular/core';
import { MatDialog } from '@angular/material';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { mergeMap } from 'rxjs/operators/mergeMap';
import { map } from 'rxjs/operators/map';
import { take } from 'rxjs/operators/take';

import {
  ObjectWithLinks,
  HateosPagedResponse,
  Property,
  ModelMeta,
  RelationTypes
} from '../../common';

import { ApiTableService } from '../api-table/api-table.service';
import { DialogData } from './dialog/models/dialogData';
import { ApiItemAddDialogComponent } from './dialog/api-item-add-dialog.component';

@Component({
  selector: 'ext-api-select',
  templateUrl: './extendz-api-select.component.html',
  styleUrls: ['./extendz-api-select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => ExtendzApiSelectComponent)
    }
  ]
})
export class ExtendzApiSelectComponent implements OnInit, OnDestroy, ControlValueAccessor {
  /**
   * Selected Property
   */
  @Input() property: Property;
  /**
   * Main editing item
   */
  @Input() item: ObjectWithLinks;
  @Output() itemChange: EventEmitter<ObjectWithLinks> = new EventEmitter<ObjectWithLinks>();
  /**
   * Meta data for selected property
   */
  public modelMeta: ModelMeta;
  /**
   * All subscriptions
   */
  all$: Subscription;
  /**
   * Dissabled state
   */
  disabled: boolean = true;
  /**
   * Selected item
   */
  items: Object[];
  /**
   * When selected with the dialog box the first element response it taken to consideration.
   */
  response: ObjectWithLinks[] = null;
  /**
   * Display value for the current value.
   * Seperation is needed since the acctual selected value is an URL and the display values is a human readble text.
   */
  displayValue: string = '';
  /**
   * Empty array to contain the quick add items
   */
  qItems: number[] = [1];
  /**
   * Quick add shows or not
   */
  public quickAdd: boolean = false;
  /**
   * On Change the selected form value
   */
  onChange: any = () => {};
  /**
   *On Touch the api selector
   */
  onTouched: any = () => {};

  constructor(public dialog: MatDialog, private apiTableService: ApiTableService) {}

  ngOnInit() {
    this.all$ = this.apiTableService.getModel(this.property.reference).subscribe(
      (meta: ModelMeta) => {
        this.modelMeta = meta;
        this.disabled = false;
      },
      error => {
        //console.log(error.status);
      }
    );
  } // ngOnInit()

  ngOnDestroy(): void {
    if (this.all$) this.all$.unsubscribe();
  } // ngOnDestroy()

  /**
   * Show a selection dialog.
   *
   * @param property Selected Property
   */
  openDialog(property: Property): void {
    let data: DialogData = {
      property,
      response: []
    };
    if (this.response) {
      data.response = [...data.response, ...this.response];
    }
    let dialogRef = this.dialog.open(ApiItemAddDialogComponent, {
      minWidth: '100vw',
      data
    });
    dialogRef.afterClosed().subscribe((result: string[]) => {
      /**
       * Selected items will be send as an array. Even with for single selection.
       */
      if (this.property.relationShipType === RelationTypes.MULTIPLE) {
        this.handleDialogMultipleSection(result);
      } else {
        this.getResponse(result[0]);
      }
    });
  } // openDialog()

  private handleDialogMultipleSection(results: string[]) {
    if (!results) return;
    // Get a display value
    let res: Subscription = this.apiTableService
      .getItem(results[0])
      .pipe(take(1))
      .subscribe((response: ObjectWithLinks) => {
        this.response = [response];
        this.value = results;
        if (this.modelMeta.title) {
          let str: any = response[this.modelMeta.title];
          this.displayValue = str;
          if (results.length > 1) {
            this.setMultipleDisplay(results.length);
          }
        }
        res.unsubscribe();
      });
  } // handleDialogMultipleSection()

  private getItem(url: any) {
    return this.apiTableService.getItem(url).pipe(take(1));
  }

  /**
   * On quick save event is fired
   * @param item
   */
  onSave(item: ObjectWithLinks) {
    if (this.property.relationShipType === RelationTypes.MULTIPLE) {
      this.handleMultipleResponse([item]);
    } else {
      this.handleSingleResponse(item);
    }
  } // onSave()

  private getResponse(url: any) {
    let res: Subscription = this.apiTableService
      .getItem(url)
      .pipe(take(1))
      .subscribe(
        (response: any) => {
          let tableResponse: HateosPagedResponse = response;
          // One to Many relationship
          if (tableResponse._embedded) {
            let key = Object.keys(tableResponse._embedded)[0];
            this.handleMultipleResponse(tableResponse._embedded[key]);
          } else {
            let singleResponse: ObjectWithLinks = response;
            this.handleSingleResponse(singleResponse);
          }
        },
        error => {
          this.response = undefined;
          this.value = null;
        }
      );
  } // getResponse()

  private handleMultipleResponse(data: ObjectWithLinks[]) {
    if (this.response) this.response = [...this.response, ...data];
    else this.response = [...data];
    // Map the self link
    this.value = this.response.map(d => d._links.self.href);
    if (this.response.length !== 0) {
      let firstItem = this.response[0];
      if (this.modelMeta.title) {
        let str: any = firstItem[this.modelMeta.title];
        this.displayValue = str;
        if (this.response.length) {
          this.setMultipleDisplay(this.response.length);
        }
      }
    }
  } // handleMultipleResponse()

  private setMultipleDisplay(more: number) {
    if (more >= 2) this.displayValue = this.displayValue + ' and ' + (more - 1) + ' more.';
  }

  private handleSingleResponse(response: ObjectWithLinks) {
    this.response = [response];
    this.value = response._links.self.href;
    let item: any = response;
    //this.response = response;
    if (this.modelMeta.title) {
      this.displayValue = item[this.modelMeta.title];
    } else {
      this.displayValue = response._links.self.href;
    }
  } // handleSingleResponse()

  get value() {
    return this.items;
  }

  set value(val: Object) {
    // If the value changed then get the reponse.Otherwise there will be a loop
    if (this.response === null) this.getResponse(val);
    this.onChange(val);
    this.onTouched();
  }

  registerOnChange(fn: Function) {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function) {
    this.onTouched = fn;
  }

  writeValue(value: Object): void {
    if (value) {
      this.value = value;
    }
  } // writeValue()

  setDisabledState?(isDisabled: boolean): void {}
}
