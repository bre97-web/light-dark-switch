import { customElement as c } from "../node_modules/@lit/reactive-element/decorators/custom-element.js";
import { property as o } from "../node_modules/@lit/reactive-element/decorators/property.js";
import "../node_modules/@lit/reactive-element/decorators/query-assigned-elements.js";
import "./lib/Switch.js";
import "../node_modules/@lit/reactive-element/reactive-element.js";
import { html as h } from "../node_modules/lit-html/lit-html.js";
import { LitElement as n } from "../node_modules/lit-element/lit-element.js";
var m = Object.defineProperty, y = Object.getOwnPropertyDescriptor, s = (p, r, l, i) => {
  for (var t = i > 1 ? void 0 : i ? y(r, l) : r, d = p.length - 1, a; d >= 0; d--)
    (a = p[d]) && (t = (i ? a(r, l, t) : a(t)) || t);
  return i && t && m(r, l, t), t;
};
let e = class extends n {
  constructor() {
    super(...arguments), this.md = !1, this.selected = !1, this.disabled = !1, this.sync = !1;
  }
  render() {
    return this.md ? h`
        <light-dark-switch-md ?selected="${this.selected}" ?disabled="${this.disabled}" ?sync="${this.sync}"></light-dark-switch-md>
      ` : h`
        <light-dark-switch-standard ?selected="${this.selected}" ?disabled="${this.disabled}" ?sync="${this.sync}"></light-dark-switch-standard>
    
    `;
  }
};
s([
  o({ type: Boolean })
], e.prototype, "md", 2);
s([
  o({ type: Boolean })
], e.prototype, "selected", 2);
s([
  o({ type: Boolean })
], e.prototype, "disabled", 2);
s([
  o({ type: Boolean })
], e.prototype, "sync", 2);
e = s([
  c("light-dark-switch")
], e);
export {
  e as LightDarkSwitch
};
