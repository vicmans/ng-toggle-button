
# AngularToggleButton

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.2.

## Instalation

```
npm i ng-toggle-button
```

or

```
yarn add ng-toggle-button
```

## Usage

Import the module

```typescript
import { NgToggleModule } from 'ng-toggle-button';
@NgModule({
  ...
  imports: [
    ...,
    NgToggleModule
  ],
})
```

Use

```html
<ng-toggle
  [value]="true"
  [color]="{
    unchecked: '#939da2',
    checked: '#f62d51'
  }"
></ng-toggle>
```

### Properties

| Name | Type | Default | Description |
|-------------|--------------------|-------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| value | `boolean` | `false` | Initial state of the toggle button |
| speed | `number` | `300` | Transition time for the animation |
| disabled | `boolean` | `false` | Button does not react on mouse events |
| color | `string` | `#0099CC` | If `String` - color of the button when checked <br>If `Object` - colors for the button when checked/unchecked or disabled<br>Example: `{checked: '#00FF00', unchecked: '#FF0000', disabled: '#CCCCCC'}` |
| labels | `boolean  Object` | `false` | If `boolean` - shows/hides default labels <br>If `Object` - sets custom labels for both states. <br>Example: `{checked: 'Foo', unchecked: 'Bar'}` |
| switchColor | `string  Object` | `#fff` | If `string` - color or background property of the switch when checked <br>If `Object` - colors or background property for the switch when checked/uncheked <br>Example: `{checked: '#25EF02', unchecked: 'silver'}` |
| width | `number` | `50` | Width of the button |
| height | `number` | `22` | Height of the button |
| margin | `number` | `3` | Space between the switch and background border |
| name | `string` | `undefined` | Name to attach to the generated input field |
| fontSize | `number` | `10` | Font size in pixels |
| fontCize | `string  Object` | `10` | If `string` - color when checked <br>If `Object` - colors for labels when checked/uncheked <br>Example: `{checked: '#25EF02', unchecked: '#35DB15'}` |

### Outputs events

| Name   | Payload | Description |
| ---    | ------  | -------     |
| change | value   | Triggered when state of the component changes. <br>Contains: <br>`value` - state of the button |

## Development server

Clone this repo and download the dependencies.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.
