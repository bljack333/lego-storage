import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnDisplayComponent } from './on-display.component';

describe('OnDisplayComponent', () => {
  let component: OnDisplayComponent;
  let fixture: ComponentFixture<OnDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
