import { LitElement, PropertyValueMap, TemplateResult } from "lit";
import '@material/web/switch/switch';
declare class Switch extends LitElement {
    /**
     * 内部维护的定时器
     */
    private watchHtmlIntervalTimer;
    connectedCallback(): void;
    disconnectedCallback(): void;
    /**
     * lit组件更新完毕后根据selected的值来设置document.documentElement的类名
    */
    protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    /**
     * html标签的类名是否包含dark
     */
    private hasDarkClass;
    /**
     * 如果html标签包含dark类名，将selected属性值设为true
     * @see 副作用
     */
    private syncDakrClassToLocalProperty;
    /**
     * 根据selected的值来添加或移除html标签的类名dark
     */
    protected toggleDarkClass(): void;
    /**
     * 从html标签上移除dark类名
     */
    private removeDarkClass;
    /**
     * 从html标签上添加dark类名
     */
    private activationDarkClass;
    /**
     * 反相selected
     */
    toggle(): void;
    /**
     * 如果启用了sync，selected仅决定组件首次渲染后的选择状态
     * @see 可选项
     */
    selected: boolean;
    /**
     * 设置组件的禁用状态
     * @see 可选项
     */
    disabled: boolean;
    /**
     * 使用sync属性以启用同步，这将启用含有副作用的功能。
     * @see 副作用
     * @see 同步模式下，html标签的dark类名的移除或添加动作会引起selected属性值的更新
     */
    sync: boolean;
    protected render(): TemplateResult<1>;
}
export { Switch };
