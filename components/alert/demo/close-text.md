---
order: 5
title:
  zh-CN: 自定义关闭
  en-US: Customized Close Text
---

## zh-CN

可以自定义关闭，自定义的关闭文字会替换原来的关闭 `Icon`

## en-US

Replace the default icon with customized text

```jsx
import { Alert } from 'zfd'; // eslint-disable-line

ReactDOM.render(
  <Alert message='Info Text' type='info' closeText='Close Now' />,
  mountNode
)
```
