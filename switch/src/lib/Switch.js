import "../../node_modules/@lit/reactive-element/reactive-element.js";
import { html as f } from "../../node_modules/lit-html/lit-html.js";
import { LitElement as p } from "../../node_modules/lit-element/lit-element.js";
import { customElement as h } from "../../node_modules/@lit/reactive-element/decorators/custom-element.js";
import { property as n } from "../../node_modules/@lit/reactive-element/decorators/property.js";
import { query as m } from "../../node_modules/@lit/reactive-element/decorators/query.js";
import "../../node_modules/@lit/reactive-element/decorators/query-assigned-elements.js";
import "../../node_modules/@material/web/focus/focus-ring.js";
import "../../node_modules/@material/web/switch/switch.js";
import "../../node_modules/@material/web/ripple/ripple.js";
import { css as v } from "../../node_modules/@lit/reactive-element/css-tag.js";
var g = Object.defineProperty, u = Object.getOwnPropertyDescriptor, i = (t, l, o, c) => {
  for (var e = c > 1 ? void 0 : c ? u(l, o) : l, r = t.length - 1, d; r >= 0; r--)
    (d = t[r]) && (e = (c ? d(l, o, e) : d(e)) || e);
  return c && e && g(l, o, e), e;
};
let s = class extends p {
  constructor() {
    super(...arguments), this.selected = !1, this.disabled = !1, this.sync = !1;
  }
  connectedCallback() {
    super.connectedCallback(), this._ayncToLocal() && this.selected == null && (this.selected = !0), this.sync && (this._timer = setInterval(() => {
      this._ayncToLocal() ? this.selected = !0 : this.selected = !1;
    }, 500));
  }
  disconnectedCallback() {
    super.disconnectedCallback(), clearInterval(this._timer);
  }
  /**
   * lit组件更新完毕后根据selected的值来设置document.documentElement的类名
   */
  updated(t) {
    this._toggle();
  }
  /**
   * 判断html标签的类名是否包含dark类
   */
  _ayncToLocal() {
    return document.documentElement.classList.contains("dark");
  }
  /**
   * 根据selected的值设置html标签的类名
   */
  _toggle() {
    this.selected ? this._activationDarkClass() : this._removeDarkClass();
  }
  _removeDarkClass() {
    document.documentElement.classList.remove("dark");
  }
  _activationDarkClass() {
    document.documentElement.classList.add("dark");
  }
  render() {
    return f`
            <div>
                <md-switch
                    @click="${() => this.selected = !this.selected}"
                    id="light-dark-switch-ref"
                    ?selected="${this.selected}"
                    ?disabled="${this.disabled}"
                ></md-switch>
            </div>
        `;
  }
};
i([
  n({ type: Boolean })
], s.prototype, "selected", 2);
i([
  n({ type: Boolean })
], s.prototype, "disabled", 2);
i([
  n({ type: Boolean })
], s.prototype, "sync", 2);
s = i([
  h("light-dark-switch-md")
], s);
let a = class extends s {
  _activation() {
    var t;
    (t = this.button) == null || t.classList.add("active");
  }
  _remove() {
    var t;
    (t = this.button) == null || t.classList.remove("active");
  }
  _toggle() {
    this.selected ? this._activation() : this._remove();
  }
  updated(t) {
    super._toggle(), this._toggle();
  }
  render() {
    return f`
        <div class="content">
            <div class="switch">
                <button href="" @click="${() => this.selected = !this.selected}" id="btn">
                    <div class="flipBtn">
                        <div class="dark">
                            <svg height="50" width="50">
                                <circle cx="25" cy="25" r="25" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" id="moon" class="moon" viewBox="0 0 512 512">
                                <path d="m494.835 336.171c-6.05-3.911-14.136-2.959-19.102 2.358-31.64 33.838-74.399 52.471-120.424 52.471-41.473 0-80.162-15.839-109.788-42.29l-24.708 4.559 4.014-26.812c-6.16-7.976-11.882-16.333-16.544-25.457h27.026c5.522 0 10.591-3.032 13.198-7.881 2.622-4.863 2.358-10.767-.674-15.366l-54.595-82.91c14.781-77.901 82.061-133.843 162.071-133.843 8.848 0 18.062.85 28.169 2.593 6.973 1.143 14.15-2.827 16.641-9.639s-.264-14.429-6.533-18.091c-39.039-22.807-83.409-35.863-128.277-35.863-129.819 0-255 107.196-255 256 0 149.417 125.757 256 255 256 103.022 0 195.352-62.406 235.21-157.431 2.813-6.694.425-14.443-5.684-18.398z" fill="#ecf2ff" />
                                <g fill="#d9e5ff">
                                    <path d="m500.519 354.569c2.813-6.694.425-14.443-5.684-18.398-6.05-3.911-14.136-2.959-19.102 2.358-31.64 33.838-74.399 52.471-120.424 52.471-32.773 0-63.802-9.897-90-27.1v148.1c103.023 0 195.352-62.406 235.21-157.431z" />
                                    <path d="m355.309 61c8.848 0 18.062.85 28.169 2.593 6.973 1.143 14.15-2.827 16.641-9.639s-.264-14.429-6.533-18.091c-39.039-22.807-83.409-35.863-128.277-35.863v87.362c25.939-16.766 56.876-26.362 90-26.362z" />
                                </g>
                                <g>
                                    <circle cx="325.309" cy="286" fill="#ffdf40" r="15" />
                                </g>
                                <g>
                                    <circle cx="445.309" cy="166" fill="#ffbe40" r="15" />
                                </g>
                                <path d="m157.877 341.371c-8.218-1.099-15.806 4.541-16.978 12.729-1.172 8.203 4.526 15.806 12.729 16.978 34.016 4.814 66.183-3.94 91.891-22.368-7.553-6.742-14.458-14.178-20.695-22.253-19.456 12.779-42.898 18.364-66.947 14.914z" fill="#45364d" />
                                <path d="m385.309 151c-24.901 0-45-20.101-45-45 0-8.401-6.599-15-15-15s-15 6.599-15 15c0 24.899-20.099 45-45 45-8.401 0-15 6.599-15 15 0 8.399 6.599 15 15 15 24.901 0 45 20.099 45 45 0 8.399 6.599 15 15 15s15-6.601 15-15c0-24.901 20.099-45 45-45 8.401 0 15-6.601 15-15 0-8.401-6.599-15-15-15z" fill="#ffdf40" />
                                <path d="m475.309 271h-15v-15c0-8.291-6.709-15-15-15s-15 6.709-15 15v15h-15c-8.291 0-15 6.709-15 15s6.709 15 15 15h15v15c0 8.291 6.709 15 15 15s15-6.709 15-15v-15h15c8.291 0 15-6.709 15-15s-6.709-15-15-15z" fill="#ffbe40" />
                                <path d="m155.915 215.395c-5.859-5.859-15.352-5.859-21.211 0-5.347 5.347-12.371 8.02-19.395 8.02s-14.048-2.673-19.395-8.02c-5.859-5.859-15.352-5.859-21.211 0s-5.859 15.352 0 21.211c11.191 11.191 25.898 16.787 40.605 16.787s29.414-5.596 40.605-16.787c5.861-5.86 5.861-15.352.002-21.211z" fill="#5f5266" />
                                <path d="m400.309 166c0 8.399-6.599 15-15 15-24.901 0-45 20.099-45 45 0 8.399-6.599 15-15 15v-150c8.401 0 15 6.599 15 15 0 24.899 20.099 45 45 45 8.401 0 15 6.599 15 15z" fill="#ffbe40" />
                            </svg>
                        </div>
                        <div class="light">
                            <svg height="50" width="50">
                                <circle cx="25" cy="25" r="25" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" id="sun" class="sun" viewBox="0 0 512 512">
                                <path d="m8.291 242.582c-5.083 2.549-8.291 7.734-8.291 13.418s3.208 10.869 8.291 13.418l99.232 49.116v-125.068z" fill="#ffbe40" />
                                <path d="m503.709 242.582-99.232-49.116v125.068l99.232-49.116c5.083-2.549 8.291-7.734 8.291-13.418s-3.208-10.869-8.291-13.418z" fill="#ff9f40" />
                                <path d="m439.926 420.956-34.731-104.194-88.433 88.433 104.194 34.731c5.288 1.796 11.292.439 15.352-3.618 4.013-4.014 5.42-9.961 3.618-15.352z" fill="#ff9f40" />
                                <path d="m106.806 316.762-34.732 104.194c-1.802 5.391-.396 11.338 3.618 15.352 4.048 4.048 10.049 5.418 15.352 3.618l104.194-34.731z" fill="#ffbe40" />
                                <path d="m436.308 75.692c-4.014-3.999-9.976-5.435-15.352-3.618l-104.194 34.731 88.433 88.433 34.731-104.194c1.802-5.391.395-11.338-3.618-15.352z" fill="#ff9f40" />
                                <path d="m91.044 72.074c-5.391-1.816-11.338-.381-15.352 3.618-4.014 4.014-5.42 9.961-3.618 15.352l34.731 104.194 88.433-88.433z" fill="#ffbe40" />
                                <path d="m256 404.477h-62.534l49.116 99.232c2.549 5.083 7.734 8.291 13.418 8.291s10.869-3.208 13.418-8.291l49.116-99.232z" fill="#ffbe40" />
                                <path d="m269.418 503.709 49.116-99.232h-62.534v107.523c5.684 0 10.869-3.208 13.418-8.291z" fill="#ff9f40" />
                                <path d="m269.418 7.625c-2.549-5.083-7.983-7.625-13.418-7.625s-10.869 2.542-13.418 7.625l-49.116 99.899h62.534 62.534z" fill="#ffbe40" />
                                <path d="m269.418 7.625c-2.549-5.083-7.983-7.625-13.418-7.625v107.523h62.534z" fill="#ff9f40" />
                                <circle cx="256" cy="256" fill="#ffdf40" r="165" />
                                <path d="m421 256c0-90.981-74.019-165-165-165v330c90.981 0 165-74.019 165-165z" fill="#ffbe40" />
                                <path d="m215.395 236.605c-10.693-10.693-28.096-10.693-38.789 0-5.859 5.859-15.352 5.859-21.211 0s-5.859-15.352 0-21.211c22.383-22.383 58.828-22.383 81.211 0 5.859 5.859 5.859 15.352 0 21.211-5.86 5.86-15.352 5.86-21.211 0z" fill="#5f5266" />
                                <path d="m335.395 236.605c-10.693-10.693-28.096-10.693-38.789 0-5.859 5.859-15.352 5.859-21.211 0s-5.859-15.352 0-21.211c22.383-22.383 58.828-22.383 81.211 0 5.859 5.859 5.859 15.352 0 21.211-5.86 5.86-15.352 5.86-21.211 0z" fill="#45364d" />
                                <path d="m327.177 313.085c-5.522-6.167-15-6.694-21.182-1.172-13.755 12.305-31.875 18.457-49.995 18.457s-36.24-6.152-49.995-18.457c-6.182-5.522-15.688-4.995-21.182 1.172-5.522 6.182-4.995 15.659 1.172 21.182 19.277 17.241 44.136 26.733 70.005 26.733s50.728-9.492 70.005-26.733c6.167-5.523 6.694-15 1.172-21.182z" fill="#5f5266" />
                                <path d="m327.177 313.085c-5.522-6.167-15-6.694-21.182-1.172-13.755 12.305-31.875 18.457-49.995 18.457v30.63c25.869 0 50.728-9.492 70.005-26.733 6.167-5.523 6.694-15 1.172-21.182z" fill="#45364d" />
                            </svg>
                        </div>
                    </div>
                </button>
            </div>
        </div>
      `;
  }
};
a.styles = v`

.content {
    width: 60%;
    height: fit-content;
    max-width: 600px;
    position: realative;
    margin: auto;
}

.info {
    padding: 20px;
    text-align: center;
}

.switch {
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
    width: 110px;
    height: 56px;
    background-color: var(--switch);
    box-shadow: inset 0px 0px 1px 1px var(--switch-shadow);
    border-radius: 50px;
}

button {
    position: relative;
    top: 3px;
    left: 3px;
    outline: none;
    border: none;
    background: none;
    transition: all 0.5s ease-in-out;
}

.flipBtn {
    width: 50px;
    height: 50px;
    transition: 0.6s;
    transform-style: preserve-3d;
    cursor: pointer;
}

.dark {
    position: absolute;
    top: 0px;
    left: 0px;
    opacity: 0;
    transition: all 0.8s;
    transform: ratateY(180deg);
}

.light{
    position: absolute;
    top: 0px;
    left: 0px;
}

.sun {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: auto;
}

.moon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-51%, -55%);
    width: 70%;
    height: auto;
}

.dark svg {
    fill: rgb(3, 0, 51);
    transition: fill ease-in-out 0.3s;
    stroke: none;
}

.light svg {
    fill: rgb(110, 190, 255);
    transition: fill ease-in-out 0.3s;
    stroke: none;
}

.active {
    left: 57px;
}

.active .flipBtn {
    transform: rotateY(180deg);
}

.active .dark {
    opacity: 1;
}

.active .light svg {
    transition: all 1s;
    opacity: 0;
}

/** For mobile devices **/
@media (max-width: 768px) {
    .content {
        width: 90%;
    }
}
    `;
i([
  m("#btn")
], a.prototype, "button", 2);
a = i([
  h("light-dark-switch-standard")
], a);
export {
  s as MDSwitch,
  a as Switch
};
