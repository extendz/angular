import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceListUpsertComponent } from './reference-list-upsert.component';

describe('ReferenceListUpsertComponent', () => {
  let component: ReferenceListUpsertComponent;
  let fixture: ComponentFixture<ReferenceListUpsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferenceListUpsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceListUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
