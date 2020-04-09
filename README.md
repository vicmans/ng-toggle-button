
# AngularToogleButton

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.2.

## Usage

Import the module
```typescript
import { NgToogleModule } from  'projects/ng-toogle/src/public-api';
@NgModule({
	...
	imports: [
		...,
		NgToogleModule
	],
})
```

 ### Properties

| Name            | Type              | Default     | Description                        |
| ---             | ---               | ---         | ---                                |
| value           | `boolean`           | `false`       | Initial state of the toggle button |
| speed           | `number`            | `300`        | Transition time for the animation   |
| disabled        | `boolean`           | `false`      | Button does not react on mouse events |
| color           | `string`  | `#75C791`  | If `String` - color of the button when checked <br>If `Object` - colors for the button when checked/unchecked or disabled<br>Example: `{checked: '#00FF00', unchecked: '#FF0000', disabled: '#CCCCCC'}`  |
| labels          | `boolean, Object` | `false`      | If `Boolean` - shows/hides default labels ("on" and "off") <br>If `Object` - sets custom labels for both states. <br>Example: `{checked: 'Foo', unchecked: 'Bar'}`   |
| switch-color    | `string | Object`  | `#BFCBD9`  | If `string` - color or background property of the switch when checked <br>If `Object` - colors or background property for the switch when checked/uncheked <br>Example: `{checked: '#25EF02', unchecked: 'linear-gradient(red, yellow)'}`   |
| width           | `number`            | 50         | Width of the button |
| height          | `number`            | 22         | Height of the button |
| margin          | `number`            | 3          | Space between the switch and background border |
| name            | `string`            | undefined  | Name to attach to the generated input field |
| font-size       | `number`            | undefined  | Font size |

### Outputs events

| Name   | Payload | Description |
| ---    | ------  | -------     |
| change | value   | Triggered when state of the component changes. <br>Contains: <br>`value` - state of the object |

## Development server

Clone this repo and download the dependencies.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.