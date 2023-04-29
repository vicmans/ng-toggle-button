import { Component, OnInit, Input, forwardRef, Output, EventEmitter, OnChanges, SimpleChanges, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgToggleConfig } from './ng-toggle.config';

const DEFAULT_COLOR_CHECKED = '#0099CC'
const DEFAULT_COLOR_UNCHECKED = '#e0e0e0'
const DEFAULT_LABEL_CHECKED = ''
const DEFAULT_LABEL_UNCHECKED = ''
const DEFAULT_SWITCH_COLOR = '#fff'
const DISABLED_COLOR = '#dbdbdb'
const DISABLED_BUTTON_COLOR = 'silver'
let nextUniqueId = 0;

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
export class NgToggleComponent implements OnInit, ControlValueAccessor, OnChanges {

  @Input() value: any = this.config.value || true
  @Input() name: string = this.config.name || ''
  @Input() disabled: boolean = this.config.disabled || false

  @Input() height: number = this.config.height || 25
  @Input() width: number = this.config.width || 45
  @Input() margin: number = this.config.margin || 2
  @Input() fontSize: number = this.config.fontSize || undefined
  @Input() speed: number = this.config.speed || 300
  @Input() color: string | toggleConfig = this.config.color
  @Input() switchColor: string | toggleConfig = this.config.switchColor
  @Input() labels: boolean | toggleConfig = this.config.labels || true
  @Input() fontColor: string | toggleConfig = this.config.fontColor || undefined
  @Input() values: valueConfig = this.config.values || {checked: true, unchecked: false}
  @Input() id: string = ''
  @Input('aria-label') ariaLabel: string | null = null;
  @Input('aria-labelledby') ariaLabelledby: string | null = null;
  @Input('aria-describedby') ariaDescribedby: string;
  cssColors: boolean = false
  
  @Output() change = new EventEmitter()
  @Output() valueChange = new EventEmitter()
  toggled: boolean
  focused: boolean;
  private _uniqueId: string;

  constructor(
    private config: NgToggleConfig,
    private _elementRef: ElementRef<HTMLElement>,
  ) {
    this._uniqueId = 'ng-toggle-'+(++nextUniqueId);
    this.id = this.id || this._uniqueId
    this.ariaLabel = this.ariaLabel || this.name || this.id
  }

  ngOnInit() {
    this.setToogle()
  }

  onChange = (_:any) => { }
  onTouch = () => { }

  onInput(value: boolean) {
    this.value = value;
    console.log(this.value, value, 'calue')
    this.onTouch();
    this.onChange(this.value);
  }

  writeValue(value: any): void {
    this.value = value;
    this.setToogle();
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

  setToogle() {
    const value = this.value
    let index = Object.values(this.values).findIndex(el => el == value)
    if(index > -1)
      this.toggled = Object.keys(this.values)[index] == 'checked' ? true : false
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      const chng = changes[propName];
      if(propName == 'value')
        this.writeValue(chng.currentValue)
    }
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
    const radius = this.height - this.margin * 2;
    return radius > 0 ? radius : 0;
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

  get label() {
    if (this.ariaLabelledby) {
      return this.ariaLabelledby;
    }
    return this.ariaLabel ? null : `${this._uniqueId}-label`;
  }

  toggle(event) {
    const toggled = !this.toggled;
    this.toggled = toggled;

    this.value = this.getValue(toggled)
    this.onTouch();
    this.onChange(this.value);
    this.valueChange.emit(this.value)
  }

  getValue(key: boolean) {
    return key === true ? this.values['checked'] : this.values['unchecked']
  }

  onFocus(event: FocusEvent) {
    if (!this.focused && event.relatedTarget) {
      this.focused = true;
    }
  }
  
  onFocusout(event: FocusEvent) {
    if (!this._elementRef.nativeElement.contains(event.relatedTarget as Element)) {
      this.focused = false;
      this.onTouch();
    }
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
  checked: string;
  unchecked: string;
  disabled?: string;
};

export type valueConfig = {
  checked: any;
  unchecked: any;
};
