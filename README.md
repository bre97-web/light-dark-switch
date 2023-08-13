# light-dark-switch

light-dark-switch是根据html标签类名驱动的Web Component，它可以在任何位置使用。

# Quick Start
## Install
```
npm i light-dark-switch
```

## Import
in index.html

```html
<script src='./node/moduels/light-dark-switch/light-dark-switch.js'></script>
```

in main.js
```js
import 'light-dark-switch/light-dark-switch.js'
```

in main.ts
```ts
import 'light-dark-switch/light-dark-switch'
```

## Usage

```html
<light-dark-switch></light-dark-switch>
<light-dark-switch selected></light-dark-switch>
<light-dark-switch enable-sync></light-dark-switch>
<light-dark-switch disabled></light-dark-switch>
```

# Documents
## Properties
|Property Name|Document|
|:--|:--|
|enable-sync|使按钮在html的dark类名变更后**同步**|
|selected|使按钮在**首次渲染后的选择状态**为已选择（selected）,它会被html的实际类名影响|
|disabled|使按钮**不可用**|

## Methods
|Method|Returns|
|:--|--:|
|select()|void|
|unSelect()|void|
|enableSync()|void|
|disableSync()|void|
|isSelected()|boolean|
|isDisabled()|boolean|
|isSync()|boolean|

