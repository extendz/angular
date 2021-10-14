import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefrenceListComponent } from './refrence-list.component';

describe('RefrenceListComponent', () => {
  let component: RefrenceListComponent;
  let fixture: ComponentFixture<RefrenceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefrenceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefrenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
