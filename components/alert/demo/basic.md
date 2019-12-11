---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

简单使用，展示成功信息

## en-US

The simplest usage for short messages.

````jsx
import { Alert } from 'zfd'; // eslint-disable-line

ReactDOM.render(
  <Alert message="Success Text" type="success" />,
  mountNode
);
````

<style>
.ant-alert {
  margin-bottom: 16px;
}
</style>
