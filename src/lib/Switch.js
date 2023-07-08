var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";
import '@material/web/switch/switch';
class Switch extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * 如果启用了sync，selected仅决定组件首次渲染后的选择状态
         * @see 可选项
         */
        this.selected = false;
        /**
         * 设置组件的禁用状态
         * @see 可选项
         */
        this.disabled = false;
        /**
         * 使用sync属性以启用同步，这将启用含有副作用的功能。
         * @see 副作用
         * @see 同步模式下，html标签的dark类名的移除或添加动作会引起selected属性值的更新
         */
        this.sync = false;
    }
    connectedCallback() {
        super.connectedCallback();
        /**
         * selected默认值为false，当html标签存在dark类名时selected设为true
         */
        if (this.hasDarkClass()) {
            this.selected = true;
        }
        /**
         * sync默认值为false，意味着默认情况下不执行如下代码块
         * sync属性为true时，将不断检测html标签的类名并将标签的状态同步到组件上
         */
        if (this.sync) {
            this.watchHtmlIntervalTimer = setInterval(() => this.syncDakrClassToLocalProperty(), 500);
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        clearInterval(this.watchHtmlIntervalTimer);
    }
    /**
     * lit组件更新完毕后根据selected的值来设置document.documentElement的类名
    */
    updated(_changedProperties) {
        this.toggleDarkClass();
    }
    /**
     * html标签的类名是否包含dark
     */
    hasDarkClass() {
        return document.documentElement.classList.contains('dark');
    }
    /**
     * 如果html标签包含dark类名，将selected属性值设为true
     * @see 副作用
     */
    syncDakrClassToLocalProperty() {
        this.selected = this.hasDarkClass();
    }
    /**
     * 根据selected的值来添加或移除html标签的类名dark
     */
    toggleDarkClass() {
        if (this.selected) {
            this.activationDarkClass();
        }
        else {
            this.removeDarkClass();
        }
    }
    /**
     * 从html标签上移除dark类名
     */
    removeDarkClass() {
        document.documentElement.classList.remove('dark');
    }
    /**
     * 从html标签上添加dark类名
     */
    activationDarkClass() {
        document.documentElement.classList.add('dark');
    }
    /**
     * 反相selected
     */
    toggle() {
        this.selected = !this.selected;
        this.toggleDarkClass();
    }
    render() {
        return html `
            <md-switch
                @click="${() => this.selected = !this.selected}"
                ?selected="${this.selected}"
                ?disabled="${this.disabled}"
            ></md-switch>
        `;
    }
}
__decorate([
    property({ type: Boolean })
], Switch.prototype, "selected", void 0);
__decorate([
    property({ type: Boolean })
], Switch.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean })
], Switch.prototype, "sync", void 0);
export { Switch };
