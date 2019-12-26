---
category: Components
subtitle: 图标
type: 通用
title: Icon
toc: false
---

语义化的矢量图形。

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 图标类型。遵循图标的命名规范 | string | - |
| style | 设置图标的样式，例如 `fontSize` 和 `color` | CSSProperties | - |
| theme | 图标主题风格，可选实心、描线、双色等主题风格，适用于官方图标 | 'filled' \| 'outlined' \| 'twoTone' | 'outlined' |
| spin | 是否有旋转动画 | boolean | false |
| rotate | 图标旋转角度(0.0.5新增，IE9 无效) | number | - |
| component | 控制如何渲染图标，通常是一个渲染根标签为 `<svg>` 的 `React` 组件，**会使 `type`属性失效**| ComponentType<CustomIconComponentProps\> | - |
| twoToneColor | 仅适用双色图标。设置双色图标的主要颜色 | string (十六进制颜色) | - |

## SVG 图标

在 `0.0.5` 之后，我们适用了 SVG 图标替换了原先的 font 图标，从而带来了以下优势：

- 完全离线化使用，不需要从 CDN 下载字体文件，图标不会因为网络问题呈现方块，也无需字体文件本地部署。
- 在低端设备上 SVG 有更好的清晰度
- 支持多色图标
- 对于内建图标的更换可以提供更多 API, 而不需要进行样式覆盖。

