import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigDataTableComponent } from './config-data-table.component';

describe('ConfigDataTableComponent', () => {
  let component: ConfigDataTableComponent;
  let fixture: ComponentFixture<ConfigDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigDataTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
