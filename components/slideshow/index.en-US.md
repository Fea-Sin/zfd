---
category: Components
subtitle: 滑动展示
type: General
title: SlideShow
---

## 何时使用

滑动展示内容，上滑收起内容

## API

| 参数 | 说明 | 类型 | 默认值                         |
| --- | --- | --- | ------------------------------ |
| title | panel ｜ string \| React.Node | - |
| onEnd | 动画执行完回调 | (exists: boolean) => {} | - |
| duration | 下拉上滑动画执行时间 | number | 500 |
| icon | 下拉上滑箭头配置 | React.Node | <Icon type="caret-up" /> |
| visible | 外部数据控制展开与否 | boolean | false |
| onChange | 动态切换展示内容，配合 `visible` 使用 | () => voide | - |






