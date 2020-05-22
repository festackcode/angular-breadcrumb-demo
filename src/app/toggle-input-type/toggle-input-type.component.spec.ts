import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleInputTypeComponent } from './toggle-input-type.component';

describe('ToggleInputTypeComponent', () => {
  let component: ToggleInputTypeComponent;
  let fixture: ComponentFixture<ToggleInputTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleInputTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleInputTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
