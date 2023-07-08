# light-dark-switch

light-dark-switch是根据html标签类名驱动的Web Component，它可以在任何位置使用。
- 类名优先
- 直接使用
- TS支持

_light-dark-switch使用vite + lit + @material/web/switch组件构建。提供对TypeScript的支持。_

# Quick Start

## Install

```
npm i light-dark-switch
```

## Import

在index.html中引入

```html
<script type="module" src='light-dark-switch/index'></script>
```

或者在main.js/ts中引入
```js
import 'light-dark-switch/index'
```

## Usage

```html
<script type="module" src='light-dark-switch/index'></script>

<light-dark-switch sync selected></light-dark-switch>
```

# Documents
## Properties
|Property Name|Document|
|:--|:--|
|sync|使按钮在html的dark类名变更后**同步**|
|selected|使按钮在**首次渲染后的选择状态**为已选择（selected）|
|disabled|使按钮**不可用**|