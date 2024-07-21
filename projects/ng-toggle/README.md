
# AngularToggleButton

This is a toggle switch button component, you can see the demo [here](https://ng-toggle-button.netlify.app) and test it in [StackBlitz](https://stackblitz.com/edit/ng-toggle-button).

## Versions

| Angular  | ng-toggle-button|
| -------- |:------:| 
| >=15.0.0 | v1.5.x |
| >=14.0.0 | v1.4.x |
| >=13.0.0 | v1.3.x |
| >=12.0.0 | v1.2.x |
| >=11.0.0 | v1.1.x |
| >=10.0.0 | v1.0.x |
| >=9.0.0  | v0.2.x |
| v8.x.x   | v0.1.x |

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
    NgToggleModule.forRoot() //or NgToggleModule
  ],
})
```

Also, you can pass a global configuration for all `ng-toggle` component in your app

```typescript
import { NgToggleModule } from 'ng-toggle-button';
@NgModule({
  ...
  imports: [
    ...,
    NgToggleModule.forRoot(config)
  ],
})
```

The `config` object is described in the table bellow

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
| fontColor | `string  Object` | `undefined` | If `string` - color when checked <br>If `Object` - colors for labels when checked/uncheked <br>Example: `{checked: '#25EF02', unchecked: '#35DB15'}` by default the text color is white.|
| textAlign | `string \| toggleConfig` | `{checked: 'left', unchecked: 'right'}` | If `string`: text-align is applied both `checked` and `unchecked` labels<br>If `toggleConfig`: Text align of checked/unchecked labels<br>Example: `{checked: 'center', unchecked: 'center'}`|
| values | `{checked: any, unchecked: any}` | `{checked: true, unchecked: false}` | Values for checked and unchecked states, by default checked value is `true` and unchecked value is `false` <br>Example: `{checked: 1, unchecked: 0}`.|

`toggleConfig` type is described below:

```ts
toggleConfig = {
  checked: string;
  unchecked: string;
  disabled?: string;
};
```

### Outputs events

| Name   | Payload | Description |
| ---    | ------  | -------     |
| change | value   | Triggered when state of the component changes. <br>Contains: <br>`value` - state of the button |

### Keyboard Accessibility (WCAG)

The toggle is tabbable, and can be triggered using the spacebar - WCAG 2.4.3(A)

## Development server

Clone this repo and download the dependencies.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.
