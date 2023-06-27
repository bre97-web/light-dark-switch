import { LitElement, PropertyValueMap, TemplateResult } from "lit";
import '@material/web/focus/focus-ring';
import '@material/web/switch/switch';
import '@material/web/ripple/ripple';
declare class MDSwitch extends LitElement {
    _timer: number;
    connectedCallback(): void;
    disconnectedCallback(): void;
    /**
     * lit组件更新完毕后根据selected的值来设置document.documentElement的类名
     */
    protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    /**
     * 判断html标签的类名是否包含dark类
     */
    private _ayncToLocal;
    /**
     * 根据selected的值设置html标签的类名
     */
    protected _toggle(): void;
    private _removeDarkClass;
    private _activationDarkClass;
    /**
     * 由外部传递的switch开关状态
     */
    protected selected: boolean;
    disabled: boolean;
    sync: boolean;
    protected render(): TemplateResult<1>;
}
declare class Switch extends MDSwitch {
    static styles: import("lit").CSSResult;
    button: HTMLElement;
    protected _activation(): void;
    protected _remove(): void;
    protected _toggle(): void;
    protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    protected render(): TemplateResult<1>;
}
export { MDSwitch, Switch };
