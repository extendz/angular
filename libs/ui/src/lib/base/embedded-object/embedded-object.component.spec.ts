import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbeddedObjectComponent } from './embedded-object.component';

describe('EmbeddedObjectComponent', () => {
  let component: EmbeddedObjectComponent;
  let fixture: ComponentFixture<EmbeddedObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmbeddedObjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbeddedObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
