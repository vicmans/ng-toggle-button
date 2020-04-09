import { NgModule } from '@angular/core';
import { NgToggleComponent } from './ng-toggle.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NgToggleComponent],
  imports: [
    CommonModule
  ],
  exports: [NgToggleComponent]
})
export class NgToggleModule { }
