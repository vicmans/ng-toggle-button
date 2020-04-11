import { Component, OnInit, Input, forwardRef, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const DEFAULT_COLOR_CHECKED = '#0099CC'
const DEFAULT_COLOR_UNCHECKED = '#e0e0e0'
const DEFAULT_LABEL_CHECKED = ''
const DEFAULT_LABEL_UNCHECKED = ''
const DEFAULT_SWITCH_COLOR = '#fff'
const DISABLED_COLOR = '#dbdbdb'
const DISABLED_BUTTON_COLOR = 'silver'

@Component({
  selector: 'ng-toggle',
  templateUrl: './ng-toggle.component.html',
  styleUrls: ['./ng-toggle.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgToggleComponent),
      multi: true
    }
  ]
})
export class NgToggleComponent implements OnInit, ControlValueAccessor {

  @Input() value: boolean = true
  @Input() name: string = ''
  @Input() disabled: boolean = false

  @Input() height: number = 25
  @Input() width: number = 45
  @Input() margin: number = 2
  @Input() fontSize: number
  @Input() speed: number = 300
  @Input() color: string | toggleConfig
  @Input() switchColor: string | toggleConfig
  @Input() labels: boolean | toggleConfig = true
  @Input() checkedLabel: string = ''
  @Input() uncheckedLabel: string = ''
  @Input() fontColor: string | toggleConfig
   
  cssColors: boolean = false
  
  @Output() change = new EventEmitter()
  toggled: boolean

  constructor() { }

  ngOnInit() {
    this.toggled = this.value
  }

  onChange = (_:any) => { }
  onTouch = () => { }

  onInput(value: boolean) {
    this.value = value;
    this.onTouch();
    this.onChange(this.value);
  }

  writeValue(value: any): void {
    if (value) {
      this.value = value || false;
    } else {
      this.value = false;
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  get coreStyle () {
    return {
      width: px(this.width),
      height: px(this.height),
      transition: `all ${this.speed}ms`,
      backgroundColor: this.cssColors
        ? null
        : (this.disabled ? this.colorDisabled : this.colorCurrent),
      borderRadius: px(Math.round(this.height / 2))
    }
  }
  get buttonRadius () {
    return this.height - this.margin * 2;
  }
  get distance () {
    return px(this.width - this.height + this.margin)
  }
  get buttonStyle () {
    const transition = `all ${this.speed}ms`
    const margin = px(this.margin)
    const transform = this.toggled
      ? translate(this.distance, margin)
      : translate(margin, margin)
    let background = this.switchColor
      ? this.switchColorCurrent
      : null
    background = this.disabled ? DISABLED_BUTTON_COLOR : background
    return {
      width: px(this.buttonRadius),
      height: px(this.buttonRadius),
      transition,
      transform,
      background,
    }
  }
  get labelStyle () {
    return {
      lineHeight: px(this.height),
      fontSize: this.fontSize ? px(this.fontSize) : null,
      color: this.fontColor ? this.fontColorCurrent : null
    }
  }

  get colorChecked () {
    let { color } = this
    if (!isObject(color)) {
      return color || DEFAULT_COLOR_CHECKED
    }
    return get(color, 'checked', DEFAULT_COLOR_CHECKED)
  }
  get colorUnchecked () {
    return get(this.color, 'unchecked', DEFAULT_COLOR_UNCHECKED)
  }
  get colorDisabled () {
    return get(this.color, 'disabled', DISABLED_COLOR)
  }
  get colorCurrent () {
    return this.toggled
      ? this.colorChecked
      : this.colorUnchecked
  }
  get labelChecked () {
    return get(this.labels, 'checked', DEFAULT_LABEL_CHECKED)
  }
  get labelUnchecked () {
    return get(this.labels, 'unchecked', DEFAULT_LABEL_UNCHECKED)
  }
  get switchColorChecked () {
    return get(this.switchColor, 'checked', DEFAULT_SWITCH_COLOR)
  }
  get switchColorUnchecked () {
    return get(this.switchColor, 'unchecked', DEFAULT_SWITCH_COLOR)
  }
  get switchColorCurrent () {
    if (!isObject(this.switchColor)) {
      return this.switchColor || DEFAULT_SWITCH_COLOR
    }
    return this.toggled
      ? this.switchColorChecked
      : this.switchColorUnchecked
  }

  get fontColorChecked () {
    return get(this.fontColor, 'checked', DEFAULT_SWITCH_COLOR)
  }
  get fontColorUnchecked () {
    return get(this.fontColor, 'unchecked', DEFAULT_SWITCH_COLOR)
  }
  get fontColorCurrent () {
    if (!isObject(this.fontColor)) {
      return this.fontColor || DEFAULT_SWITCH_COLOR
    }
    return this.toggled
      ? this.fontColorChecked
      : this.fontColorUnchecked
  }

  toggle(event) {
    const toggled = !this.toggled;
    this.toggled = toggled;

    this.value = toggled;
    this.onTouch();
    this.onChange(toggled);
    this.change.emit(toggled)
  }
}

export const isObject = (value) => {
  return typeof value === 'object'
}

export const has = (object, key) => {
  return isObject(object) && object.hasOwnProperty(key)
}

export const get = (object, key, defaultValue) => {
  return has(object, key) ? object[key] : defaultValue
}

export const px = value => {
  return `${value}px`
}

export const translate = (x, y) => {
  return `translate(${x}, ${y})`
}

export type toggleConfig = {
  checked: string,
  unchecked: string
}