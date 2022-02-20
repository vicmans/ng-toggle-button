import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgToggleComponent } from './ng-toggle.component';
import { CommonModule } from '@angular/common';
import { NgToggleConfig } from './ng-toggle.config';

@NgModule({
  declarations: [NgToggleComponent],
  imports: [
    CommonModule
  ],
  exports: [NgToggleComponent],
  providers: [NgToggleConfig]
})
export class NgToggleModule {
  static forRoot(config: NgToggleConfig = {}): ModuleWithProviders<NgToggleModule> {
    return {
      ngModule: NgToggleModule,
      providers: [
        {
          provide: NgToggleConfig,
          useValue: config
        }
      ]
    }
  }
}
