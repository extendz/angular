import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import * as ace from 'ace-builds';

@Component({
  selector: 'ext-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css'],
})
export class JsonComponent implements AfterViewInit, ControlValueAccessor {
  @ViewChild('editor') private editor!: ElementRef<HTMLElement>;

  private aceEditor!: ace.Ace.Editor;
  private data!: Record<string, unknown>;
  private onChange!: (record: any) => any;

  constructor(public ngControl: NgControl, private matDialog: MatDialog) {
    ngControl.valueAccessor = this;
  }

  ngAfterViewInit(): void {
    ace.config.set('fontSize', '14px');
    this.aceEditor = ace.edit(this.editor.nativeElement);
    ace.config.set(
      'basePath',
      'https://unpkg.com/ace-builds@1.4.12/src-noconflict'
    );

    this.aceEditor.session.setMode('ace/mode/json');
    this.aceEditor.on('change', () => this.onChange(this.aceEditor.getValue()));
    setTimeout(() => {
      if (this.data != undefined)
        this.aceEditor.session.setValue(JSON.stringify(this.data, null, '\t'));
    }, 100);
  }

  writeValue(data: any): void {
    if (data != undefined) {
      this.data = data;

      //
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    // throw new Error('Method not implemented.');
  }
}
