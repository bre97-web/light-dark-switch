import { LitElement, PropertyValueMap, TemplateResult, css, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import '@material/web/focus/focus-ring'
import '@material/web/switch/switch'
import '@material/web/ripple/ripple'

class Switch extends LitElement {

    /**
     * 内部维护的定时器
     */
    private watchHtmlIntervalTimer: number;

    connectedCallback() {
        super.connectedCallback()

        /**
         * selected默认值为false，当html标签存在dark类名时selected设为true
         */
        if (this.hasDarkClass()) {
            this.selected = true
        }

        /**
         * sync默认值为false，意味着默认情况下不执行如下代码块
         * sync属性为true时，将不断检测html标签的类名并将标签的状态同步到组件上
         */
        if (this.sync) {
            this.watchHtmlIntervalTimer = setInterval(() => this.syncDakrClassToLocalProperty(), 500)
        }
    }
    disconnectedCallback(): void {
        super.disconnectedCallback()
        clearInterval(this.watchHtmlIntervalTimer)
    }
    /**
     * lit组件更新完毕后根据selected的值来设置document.documentElement的类名
    */
   protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
        this.toggleDarkClass()
    }

    /**
     * html标签的类名是否包含dark
     */
    private hasDarkClass(): boolean {
        return document.documentElement.classList.contains('dark')
    }

    /**
     * 如果html标签包含dark类名，将selected属性值设为true
     * @see 副作用
     */
    private syncDakrClassToLocalProperty() {
        this.selected = this.hasDarkClass()
    }

    /**
     * 根据selected的值来添加或移除html标签的类名dark
     */
    protected toggleDarkClass() {
        if (this.selected) {
            this.activationDarkClass()
        } else {
            this.removeDarkClass()
        }
    }

    /**
     * 从html标签上移除dark类名
     */
    private removeDarkClass() {
        document.documentElement.classList.remove('dark')
    }

    /**
     * 从html标签上添加dark类名
     */
    private activationDarkClass() {
        document.documentElement.classList.add('dark')
    }

    /**
     * 如果启用了sync，selected仅决定组件首次渲染后的选择状态
     * @see 可选项
     */
    @property({ type: Boolean }) selected: boolean = false

    /**
     * 设置组件的禁用状态
     * @see 可选项
     */
    @property({ type: Boolean }) disabled: boolean = false

    /**
     * 使用sync属性以启用同步，这将启用含有副作用的功能。
     * @see 副作用
     * @see 同步模式下，html标签的dark类名的移除或添加动作会引起selected属性值的更新
     */
    @property({ type: Boolean }) sync: boolean = false

    protected override render(): TemplateResult<1> {
        return html`
            <div>
                <md-switch
                    @click="${() => this.selected = !this.selected}"
                    ?selected="${this.selected}"
                    ?disabled="${this.disabled}"
                ></md-switch>
            </div>
        `
    }
}


export { Switch }
