import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgToggleComponent } from './ng-toggle.component';

describe('NgToggleComponent', () => {
  let component: NgToggleComponent;
  let fixture: ComponentFixture<NgToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
