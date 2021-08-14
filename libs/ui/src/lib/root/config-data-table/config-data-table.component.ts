import { Component, OnInit } from '@angular/core';
import {
  ExpandableFieldMetadata,
  FieldMetadata,
  FormMetadata,
} from '@extendz/core';

@Component({
  selector: 'ext-config-data-table',
  templateUrl: './config-data-table.component.html',
  styleUrls: ['./config-data-table.component.css'],
})
export class ConfigDataTableComponent implements OnInit {
  formMetadata: FormMetadata;

  constructor() {
    const projection: FieldMetadata = {
      id: 'projection',
      label: 'Projection',
      type: 'string',
      autocomplete: 'off',
      width: { lg: '100' },
    };
    const section: ExpandableFieldMetadata = {
      id: 'toolbar',
      label: 'Toolbar',
      type: 'expandable',
      width: { lg: '100' },
      fields: [
        {
          id: 'enabled',
          label: 'Enabled',
          type: 'checkbox',
        },
      ],
    };

    const pagination: ExpandableFieldMetadata = {
      id: 'pagination',
      label: 'Pagination',
      type: 'expandable',
      width: { lg: '100' },
      fields: [
        {
          id: 'enabled',
          label: 'Enabled',
          type: 'checkbox',
        },
      ],
    };

    this.formMetadata = {
      fields: [projection, section, pagination],
    };
  }

  ngOnInit(): void {}
}
