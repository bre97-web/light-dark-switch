import { customElement, property } from 'lit/decorators.js'
import './lib/Switch'
import { LitElement, TemplateResult, html } from 'lit'
import { Switch } from './lib/Switch'

declare global {
  interface HTMLElementTagNameMap {
    'light-dark-switch': LightDarkSwitch
  }
}

@customElement('light-dark-switch')
export class LightDarkSwitch extends Switch {
}
