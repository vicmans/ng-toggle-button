import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgToggleComponent } from './ng-toggle.component';
import { NgToggleConfig } from './ng-toggle.config';

@NgModule({
  imports: [NgToggleComponent],
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
