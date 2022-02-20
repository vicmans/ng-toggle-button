import { toggleConfig, valueConfig } from "./ng-toggle.component";

export class NgToggleConfig {
  value?: any;
  name?: string;
  disabled?: boolean;
  height?: number;
  width?: number;
  margin?: number;
  fontSize?: number;
  speed?: number;
  color?: string | toggleConfig;
  switchColor?: string | toggleConfig;
  labels?: boolean | toggleConfig;
  values?: valueConfig;
  fontColor?: string | toggleConfig;
}
