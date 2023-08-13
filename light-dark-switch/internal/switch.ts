import { LitElement, PropertyValueMap, TemplateResult, html } from "lit"
import { property } from "lit/decorators.js"

class Switch extends LitElement {

    /**
     * 内部维护的定时器
     */
    private watchHtmlIntervalTimer: number;

    override connectedCallback() {
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
    override disconnectedCallback(): void {
        super.disconnectedCallback()
        clearInterval(this.watchHtmlIntervalTimer)
    }

    /**
     * lit组件更新完毕后根据selected的值来设置document.documentElement的类名
     */
   protected override updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
        this.toggleDarkClass()
        this.syncPropertiesToSlot()
    }

    private syncPropertiesToSlot() {
        const slot = this.shadowRoot.querySelector('slot').assignedElements({flatten: true})[0] as HTMLElement & {selected: boolean, disabled: boolean}
        slot.disabled = this.disabled
        slot.selected = this.selected
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
     * 切换selected的值
     */
    public toggle(): void {
        this.selected = !this.selected
    }
    public select(): void {
        this.selected = true
    }
    public unSelect(): void {
        this.selected = false
    }
    public enableSync(): void {
        if(this.sync) {
            return 
        }
        this.sync = true
        this.watchHtmlIntervalTimer = setInterval(() => this.syncDakrClassToLocalProperty(), 500)
    }
    public disableSync(): void {
        if(!this.sync) {
            return
        }
        this.sync = false
        clearInterval(this.watchHtmlIntervalTimer)
    }
    public isSelected(): boolean {
        return this.selected
    }
    public isDisabled(): boolean {
        return this.disabled
    }
    public isSync(): boolean {
        return this.sync
    }


    /**
     * 如果启用了sync，selected仅决定组件首次渲染后的选择状态
     * @see 可选项
     */
    @property({ type: Boolean, attribute: 'selected' }) selected: boolean = false

    /**
     * 设置组件的禁用状态
     * @see 可选项
     */
    @property({ type: Boolean, attribute: 'disabled' }) disabled: boolean = false

    /**
     * 使用sync属性以启用同步，这将启用含有副作用的功能。
     * @see 副作用
     * @see 同步模式下，html标签的dark类名的移除或添加动作会引起selected属性值的更新
     */
    @property({ type: Boolean, attribute: 'enable-sync' }) sync: boolean = false

    protected override render(): TemplateResult<1> {
        return html`
            <slot
                @click="${() => this.selected = !this.selected}"
            >
            </slot>
        `
    }
}


export { Switch }
