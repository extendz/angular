import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  ActionFieldMetadata,
  Assert,
  EmbeddedObjectFieldMetadata,
  EmbeddedObjectListFieldMetadata,
  EnumFieldMetadata,
  ExpandableFieldMetadata,
  FieldMetadata,
  FormMetadata,
  SvgIconFieldMetadata,
} from '@extendz/core';

@Component({
  selector: 'ext-config-data-table',
  templateUrl: './config-data-table.component.html',
  styleUrls: ['./config-data-table.component.css'],
})
export class ConfigDataTableComponent implements OnInit {
  formMetadata: FormMetadata;
  form!: FormGroup;

  constructor() {
    const projection: FieldMetadata = {
      id: 'projection',
      label: 'Projection',
      type: 'string',
      autocomplete: 'off',
      width: { lg: '100' },
    };

    const type: EnumFieldMetadata = {
      id: 'type',
      label: 'Type',
      type: 'enum',
      autocomplete: 'off',
      default: 'custom',
      // mutation: {
      //   assert: Assert.EQUAL,
      //   to: 'custom',
      //   on: {
      //     id: 'id',
      //     label: 'Hide',
      //     type: 'action',
      //     action: {
      //       id: '__hide__',
      //       type: 'internal',
      //     },
      //   },
      // },
      enums: [
        { label: 'Custom', value: 'custom' },
        { label: 'Internal', value: 'internal' },
      ],
    };
    const id: FieldMetadata = {
      id: 'id',
      label: 'Id',
      type: 'string',
      autocomplete: 'off',
    };

    const internalActions: EnumFieldMetadata = {
      id: 'internalActions',
      label: 'Internal Actions',
      type: 'enum',
      enums: [
        { label: 'None', value: null },
        {
          label: 'Add',
          value: '__add__',
        },
        {
          label: 'Delete',
          value: '__delete__',
        },
      ],
    };

    const icon: SvgIconFieldMetadata = {
      id: 'icon',
      label: 'Icon',
      type: 'icon',
    };

    const label: FieldMetadata = {
      id: 'lable',
      label: 'Lable',
      type: 'string',
      autocomplete: 'off',
    };

    const remove: ActionFieldMetadata = {
      id: 'remove',
      label: 'Remove',
      type: 'action',
      // icon: 'close',
      action: { id: '__remove__', type: 'internal' },
      width: { lg: '48px' },
    };

    const idShowCondition: FieldMetadata = {
      id: 'propertyName',
      type: 'string',
      label: 'Property Name',
      width: { lg: '20' },
    };

    const showCondition_value: FieldMetadata = {
      id: 'value',
      type: 'string',
      label: 'Value',
      autocomplete: 'off',
      width: { lg: '20' },
    };

    const showCondition_assert: EnumFieldMetadata = {
      id: 'assert',
      type: 'enum',
      label: 'Assert',
      enums: [
        {
          label: 'Equal',
          value: 'EQUAL',
        },
      ],
      width: { lg: '20' },
    };

    const conditionType: EnumFieldMetadata = {
      id: 'conditionType',
      type: 'enum',
      label: 'Type',
      enums: [
        {
          label: 'Selection',
          value: '__selection__',
        },
        {
          label: 'Property',
          value: '__property__',
        },
      ],
      width: { lg: '20' },
    };

    const showConditions: EmbeddedObjectListFieldMetadata = {
      id: 'showConditions',
      label: 'Show conditions',
      type: 'embedded-object-list',
      formMetadata: {
        id: 'showCondition',
        fieldMetadata: [
          conditionType,
          idShowCondition,
          showCondition_assert,
          showCondition_value,
        ],
      },
    };

    const showCondition: EmbeddedObjectFieldMetadata = {
      id: 'show',
      label: 'Show Condition',
      type: 'embedded-object',
      formMetadata: {
        id: 'showCondition',
        mutations: [
          {
            on: { id: 'conditionType' },
            assert: Assert.EQUAL,
            value: '__selection__',
            actions: [
              {
                id: '__clear__',
                type: 'internal',
                on: { id: 'propertyName' },
              },
              {
                id: '__hide__',
                type: 'internal',
                on: { id: 'propertyName' },
              },
            ],
          },
          {
            on: { id: 'conditionType' },
            assert: Assert.EQUAL,
            value: '__property__',
            actions: [
              {
                id: '__show__',
                type: 'internal',
                on: { id: 'propertyName' },
              },
            ],
          },
        ],
        fieldMetadata: [
          conditionType,
          idShowCondition,
          showCondition_assert,
          showCondition_value,
        ],
      },
      // hint: 'Click on the icon to see logic',
    };

    const actions: EmbeddedObjectListFieldMetadata = {
      id: 'actions',
      label: 'Actions',
      type: 'embedded-object-list',
      width: { lg: '100' },
      formMetadata: {
        id: 'actions',
        mutations: [
          {
            on: {
              id: 'type',
            },
            value: 'internal',
            assert: Assert.EQUAL,
            actions: [
              {
                id: '__clear__',
                type: 'internal',
                on: {
                  id: 'id',
                },
              },
              {
                id: '__disable__',
                type: 'internal',
                on: {
                  id: 'id',
                },
              },
              {
                id: '__enable__',
                type: 'internal',
                on: {
                  id: 'internalActions',
                },
              },
            ],
          },
          {
            on: {
              id: 'type',
            },
            value: 'custom',
            assert: Assert.EQUAL,
            actions: [
              {
                id: '__clear__',
                type: 'internal',
                on: {
                  id: 'internalActions',
                },
              },
              {
                id: '__disable__',
                type: 'internal',
                on: {
                  id: 'internalActions',
                },
              },
              {
                id: '__enable__',
                type: 'internal',
                on: {
                  id: 'id',
                },
              },
            ],
          },
        ],
        actions: [
          { id: '__add__', icon: 'add', type: 'internal' },
          { id: '__delete__', icon: 'delete', type: 'internal' },
        ],
        showPagination: false,
        fieldMetadata: [
          type,
          id,
          internalActions,
          icon,
          label,
          showConditions,
          remove,
        ],
      },
    };

    const toolbarSection: ExpandableFieldMetadata = {
      id: 'toolbar',
      label: 'Toolbar',
      type: 'expandable',
      width: { lg: '100' },
      fields: [
        // {
        //   id: 'enabled',
        //   label: 'Enabled',
        //   type: 'checkbox',
        // },
        actions,
      ],
    };

    const paginationSection: ExpandableFieldMetadata = {
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
      id: '',
      fieldMetadata: [projection, toolbarSection, paginationSection],
    };
  }

  ngOnInit(): void {
    console.log();
  }
}
