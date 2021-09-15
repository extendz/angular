import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbeddedObjectListComponent } from './embedded-object-list.component';

describe('EmbeddedObjectListComponent', () => {
  let component: EmbeddedObjectListComponent;
  let fixture: ComponentFixture<EmbeddedObjectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmbeddedObjectListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbeddedObjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
