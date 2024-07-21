import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgToggleConfig } from 'projects/ng-toggle/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-toggle-button';
  prueba = true
  custom = 'si'
  twoWay = 1

  config: NgToggleConfig = {
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
      disabled: '#DBDBDB',
    },
    switchColor: {
      checked: '#00a388',
      unchecked: 'red',
      disabled: '#c0c0c0'
    },
    labels: {
      unchecked: 'off',
      checked: 'on',
    },
    values: {
      unchecked: 0,
      checked: 1,
    },
    fontColor: {
      checked: '#fafafa',
      unchecked: '#f45a32',
      disabled: '#ffffff'
    },
    textAlign: {
      checked: 'left',
      unchecked: 'right',
    }
  }
  myForm: FormGroup;
  constructor() {
    this.myForm = new FormGroup({
      'show': new FormControl(false)
    })
  }

  get showControl() {
    return this.myForm.get('show');
  }

  changeEvent() {
    console.log(this.config.value);
  }
}
