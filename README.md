<p align="center">
  <a href="http://39.107.35.212:8083/">
    <img width="180" src="http://39.107.35.212/images/LOGO.png">
  </a>
</p>

<h1 align="center">ZF Design</h1>

A React Components Library

简体中文 | [English](./README-en_US.md)

## ✨ 特性

- 提炼自企业级中后台产品的交互语言和视觉风格
- 开箱即用的高质量 React 组件
- 使用 TypeScript 构建，提供完整的类型定义文件
- 全链路开发和设计工具体系

## 🖥 支持环境

* 现代浏览器和 IE9 及以上

## 📦 安装

```bash
npm install --save zfd

or 

yarn add zfd
```
## 🔨 示例

```jsx
import { Alert } from 'zfd';
ReactDOM.render(<Alert message='Success Text' type='success' />, mountNode);
```

引入样式：

```jsx
import 'zfd/dist/zfd.css'; // or 'zfd/dist/zfd.less'
```

按需加载组件：

```jsx
import Alert from 'zfd/es/alert';
import 'zfd/es/alert/style';
```

## ⌨️ 本地开发

或克隆到本地开发：

```bash
$ git clone https://github.com/Fea-Sin/zfd.git
$ cd zfd
$ npm install
$ npm start
```
