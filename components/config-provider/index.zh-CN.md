---
category: Components
subtitle: 全局化配置
cols: 1
type: 其他
title: ConfigProvider
---

为组件提供统一的全局化配置。

## 使用

ConfigProvider 使用 React 的 [context](https://facebook.github.io/react/docs/context.html) 特性，只需在应用外层包围一次即可全局生效。

```jsx
import { ConfigProvider } from 'zfd';

return (
  <ConfigProvider>
    <App />
  </ConfigProvider>
)
```

部分组件为了支持波纹效果，使用了动态样式。如果开启了 Content Security Policy (CSP)，你可以通过 `csp` 属性来进行配置:

```jsx
<ConfigProvider csp={{ nonce: 'YourNonceCode' }}>
  <Button>My Button</Button>
</ConfigProvider>
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autoInsertSpaceInButton | 设置为 `false` 时，移除按钮中 2 个汉字之间的空格 | boolean | true |
| csp | 设置 [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) 配置 | { nonce: string } | - |
| renderEmpty | 自定义组件空状态。参考 [空状态](/components/empty/) | Function(triggerNode) | () => document.body |
| prefixCls | 设置统一样式前缀 | string | zf |
