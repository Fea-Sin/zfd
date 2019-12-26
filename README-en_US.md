<p align="center">
  <a href="http://39.107.35.212:8083/">
    <img width="180" src="http://39.107.35.212/images/LOGO.png">
  </a>
</p>

<h1 align="center">ZF Design</h1>

A React Components Library

[简体中文](./README.md) | English

## ✨ Features

- An enterprise-class UI design system for web applications
- A set of high-quality React components out of the box
- Written in TypeScript with predictable static types
- The whole package of development and desing resources and tools

## 🖥 Environment Support

* Modern browsers and Internet Explorer 9+ (with [polyfills](https://ant.design/docs/react/getting-started#Compatibility))

## 📦 Install

```bash
npm install --save zfd

or 

yarn add zfd
```

## 🔨 Usage

```jsx
import { Alert } from 'zfd';
ReactDOM.render(<Alert message='Success Text' type='success' />, mountNode);
```

And import style manually:

```jsx
import 'zfd/dist/zfd.css'; // or 'zfd/dist/zfd.less'
```

Import components on demand:

```jsx
import Alert from 'zfd/es/alert';
import 'zfd/es/alert/style';
```

## ⌨️ Development

Or clone locally:

```bash
$ git clone https://github.com/Fea-Sin/zfd.git
$ cd zfd
$ npm install
$ npm start
```
