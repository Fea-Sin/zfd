---
order: 4
title:
  zh-CN: 图标
  en-US: Icon
---

## zh-CN

可口的图标让信息类型更加醒目

## en-US

A relevant icon will make information clearer and more friendly

```jsx
import { Alert } from 'zfd'; // eslint-disable-line

ReactDOM.render(
  <div>
    <Alert message='Success Tips' type='success' showIcon />
    <Alert message='Info Tips' type='info' showIcon />
    <Alert message='Warning Tips' type='warning' showIcon />
    <Alert message='Error Tips' type='error' showIcon />
    <Alert
      message='Success Tips'
      description='Detailed description Detailed description Detailed description'
      type='success'
      showIcon
    />
    <Alert
      message='Info Tips'
      description='Detailed description Detailed description Detailed description'
      type='info'
      showIcon
    />
    <Alert
      message='Warning Tips'
      description='Detailed description Detailed description Detailed description'
      type='warning'
      showIcon
    />
    <Alert
      message='Error Tips'
      description='Detailed description Detailed description Detailed description'
      type='error'
      showIcon
    />
  </div>,
  mountNode
)
```
