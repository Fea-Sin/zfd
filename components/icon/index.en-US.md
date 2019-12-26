---
category: Components
subtitle: General
title: Icon
toc: false
---

Semantic vector graphics.

## API

| property | Description | Type | Default |
| --- | --- | --- | --- |
| type | Type of the ztd design icon | string | - |
| style | Style properties of icon, like `fontSize` and `color` | CSSProperties | - |
| theme | Theme of the ant design icon  | 'filled' \| 'outlined' \| 'twoTone' | 'outlined' |
| spin | Rotate icon with animation | boolean | false |
| rotate | Rotate degrees (added in 3.13.0, not working in IE9) | number | - |
| component | The component used for the root node. This will override the **`type`** property. | ComponentType<CustomIconComponentProps\> | - |
| twoToneColor | Only support the two-tone icon. Specific the primary color. | string (hex color) | - |

## SVG icons

We introduced SVG icons in `0.0.5` version replacing font icons which brings benefits below:

- Complete offline usage of icon, no dependency of CDN font icon file and no more empty square during downloading than no need to deploy icon font files locally either.
- Much more display accuracy in lower-level screens.
- Support multiple colors for icon.
- No need to change built-in icons with overriding styles by providing more props in component.
