import { Component, Inject, Input, OnInit } from '@angular/core';
import {
  AbstractIconDataService,
  EXT_ICON_DATA_SERVICE,
  Icon,
  SvgIconFieldMetadata,
} from '@extendz/core';
import { debounceTime, mergeMap, Observable, startWith } from 'rxjs';
import { BaseInputComponent } from '../base.component';

@Component({
  selector: 'ext-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss'],
})
export class SvgIconComponent extends BaseInputComponent implements OnInit {
  @Input() fieldMetaData?: SvgIconFieldMetadata;

  icons$?: Observable<Icon[]>;
  constructor(
    @Inject(EXT_ICON_DATA_SERVICE)
    private iconDataService: AbstractIconDataService
  ) {
    super();
  }

  ngOnInit(): void {
    this.icons$ = this.control.valueChanges.pipe(
      startWith(''),
      debounceTime((this.fieldMetaData?.searchDebunce as number) || 500),
      mergeMap((d) => this.iconDataService.getAll(d))
    );
  }

  get getDisplayValue() {
    return (icon: any) => {
      return icon?.name;
    };
  }
}
