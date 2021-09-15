import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbeddedObjectUpsertComponent } from './embedded-object-upsert.component';

describe('EmbeddedObjectUpsertComponent', () => {
  let component: EmbeddedObjectUpsertComponent;
  let fixture: ComponentFixture<EmbeddedObjectUpsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmbeddedObjectUpsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbeddedObjectUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
