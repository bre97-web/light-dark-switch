import './lib/Switch';
import { LitElement, TemplateResult } from 'lit';
declare global {
    interface HTMLElementTagNameMap {
        'light-dark-switch': LightDarkSwitch;
    }
}
export declare class LightDarkSwitch extends LitElement {
    md: boolean;
    selected: boolean;
    disabled: boolean;
    sync: boolean;
    protected render(): TemplateResult<1>;
}
