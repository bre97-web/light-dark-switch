import { customElement } from 'lit/decorators.js'
import { Switch } from './lib/Switch'

declare global {
  interface HTMLElementTagNameMap {
    'light-dark-switch': LightDarkSwitch
  }
}

@customElement('light-dark-switch')
export class LightDarkSwitch extends Switch {
}
