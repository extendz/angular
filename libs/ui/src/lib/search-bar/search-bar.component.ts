import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldMetadata, SearchParam } from '@extendz/core';

@Component({
  selector: 'ext-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Input() fieldMetadata!: FieldMetadata[];
  @Input() data!: SearchParam[];

  formControl!: FormControl;

  ngOnInit(): void {
    this.formControl = new FormControl();
    this.formControl.patchValue(this.data);
  }
}
