import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartedOutComponent } from './parted-out.component';

describe('PartedOutComponent', () => {
  let component: PartedOutComponent;
  let fixture: ComponentFixture<PartedOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartedOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartedOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
