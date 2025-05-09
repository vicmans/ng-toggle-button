import { SimpleChange } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgToggleComponent } from './ng-toggle.component';
import { NgToggleConfig } from './ng-toggle.config';
import { NgToggleModule } from './ng-toggle.module';

describe('NgToggleComponent', () => {
  let component: NgToggleComponent;
  let fixture: ComponentFixture<NgToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgToggleComponent],
      providers: [NgToggleConfig]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default values', () => {
    expect(component.value).toBeTruthy();
    expect(component.width).toBe(45);
    expect(component.height).toBe(25);
    expect(component.margin).toBe(2);
    expect(component.speed).toBe(300);
  });

  it('should change the value when click', () => {
    let label = fixture.debugElement.nativeElement.querySelector('label');
    label.click();
    fixture.detectChanges();
    expect(component.value).toBeFalsy();
  })

  it('should change the value programmatically via value input', () => {
    component.value = false;
    component.ngOnChanges({
      value: new SimpleChange(true, false, true)
    });
    fixture.detectChanges();
    let label = fixture.nativeElement.querySelector('.ng-toggle-switch-label');
    expect(component.value).toBe(false);
    expect(component.toggled).toBeFalsy();
    expect(label.getAttribute('class')).toContain('ng-toggle-right');
  })
});

describe('NgToggleComponent with values forRoot module imports', () => {
  let component: NgToggleComponent;
  let fixture: ComponentFixture<NgToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgToggleModule.forRoot({
        values: {
          checked: 'yes',
          unchecked: 'no'
        },
        color: {
          checked: 'green',
          unchecked: '#fbfafc'
        },
        labels: {
          checked: 'si',
          unchecked: 'no'
        }
      })]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should have config values', () => {
    expect(component.values.checked).toEqual('yes');
    expect(component.values.unchecked).toEqual('no');

    expect(component.labels).toEqual({
      checked: 'si',
      unchecked: 'no'
    });

    expect(component.color).toEqual({
      checked: 'green',
      unchecked: '#fbfafc'
    });
  });

  it('should have checked when clicked', () => {
    let label = fixture.debugElement.nativeElement.querySelector('label');
    label.click();
    fixture.detectChanges();

    expect(component.value).toBe('yes');
  });
});