---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

简单使用，展示信息

## en-US

````jsx
import { SlideShow } from 'zfd'; // eslint-disable-line

const title = <div className='zf-demo-slideshow-title'>重点检查</div>

ReactDOM.render(
  <SlideShow
    title={title}
  >
    hello world
  </SlideShow>,
  mountNode
);
````
<style>
  .zf-demo-slideshow-title {
    color: #3E7AFA;
  }
</style>

