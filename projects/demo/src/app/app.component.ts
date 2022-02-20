import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-toggle-button';
  prueba = true
  custom = 'si'

  config = {
    value: 1,
    name: '',
    disabled: false,
    height: 25,
    width: 50,
    margin: 3,
    fontSize: 10,
    speed: 300,
    color: {
      unchecked: '#BFCBD9',
      checked: '#BFCBD9',
    },
    switchColor: {checked: '#00a388', unchecked: 'red'},
    labels: {
      unchecked: 'off',
      checked: 'on',
    },
    values: {
      unchecked: 0,
      checked: 1,
    },
    fontColor: {checked: '#fafafa', unchecked: '#f45a32'}
  }
  myForm: FormGroup;
  constructor() {
    this.myForm = new FormGroup({
      'show': new FormControl(false)
    })
  }

  changeEvent() {
    console.log(this.config.value);
  }
}
