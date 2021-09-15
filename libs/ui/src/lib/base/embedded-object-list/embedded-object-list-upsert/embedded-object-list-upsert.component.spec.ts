import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbeddedObjectListUpsertComponent } from './embedded-object-list-upsert.component';

describe('EmbeddedObjectListUpsertComponent', () => {
  let component: EmbeddedObjectListUpsertComponent;
  let fixture: ComponentFixture<EmbeddedObjectListUpsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmbeddedObjectListUpsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbeddedObjectListUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
