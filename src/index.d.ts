import { Switch } from './lib/Switch';
declare global {
    interface HTMLElementTagNameMap {
        'light-dark-switch': LightDarkSwitch;
    }
}
export declare class LightDarkSwitch extends Switch {
}
