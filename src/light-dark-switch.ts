import { customElement, property } from 'lit/decorators.js'
import './lib/Switch'
import { LitElement, TemplateResult, html } from 'lit'

declare global {
  interface HTMLElementTagNameMap {
    'light-dark-switch': LightDarkSwitch
  }
}

@customElement('light-dark-switch')
export class LightDarkSwitch extends LitElement {

  @property({ type: Boolean }) md: boolean = false
  @property({ type: Boolean }) selected: boolean = false;
  @property({ type: Boolean }) disabled: boolean = false;
  @property({ type: Boolean }) sync: boolean = false;

  protected override render(): TemplateResult<1> {
    if(this.md) {
      return html`
        <light-dark-switch-md ?selected="${this.selected}" ?disabled="${this.disabled}" ?sync="${this.sync}"></light-dark-switch-md>
      `
    }
    return html`
        <light-dark-switch-standard ?selected="${this.selected}" ?disabled="${this.disabled}" ?sync="${this.sync}"></light-dark-switch-standard>
    
    `
  }
}
