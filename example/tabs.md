---
title: tabs插件示例
description: 演示基础的tabs使用
readingTime: true  # 单独设置是否展示文章的预计阅读时间
comment: true  # 单独为某篇文章设置是否开启评论
date: 2023-06-19  # 单独设置文章的发布时间
tag:
    - 配置  # 用于按标签给文章分类
tags:
    - 教程  # 用于按标签给文章分类
sticky: 6  # 设置在首页展示的精选文章, 值越大展示越靠前
top: 4  # 设置在首页置顶展示的文章, 值越小越靠前
recommend: 3  # 设置文章左侧展示的推荐文章顺序, 值越小越靠前
---

## 示例

```md
:::tabs
== 我是第一个标签
a content
== 我是第二个标签
b content
:::
```

:::tabs
== 我是第一个标签
a content
== 我是第二个标签
b content
:::

:::tabs
== api-examples

## Runtime API Examples

This page demonstrates usage of some of the runtime APIs provided by VitePress.

The main `useData()` API can be used to access site, theme, and page data for the current page. It works in both `.md` and `.vue` files:

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## Results

### Theme Data

<pre>{{ theme }}</pre>

### Page Data

<pre>{{ page }}</pre>

### Page Frontmatter

<pre>{{ frontmatter }}</pre>
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

### Results

#### Page Data

<pre>{{ page }}</pre>

#### Page Frontmatter

<pre>{{ frontmatter }}</pre>

### More

Check out the documentation for the [full list of runtime APIs](https://vitepress.dev/reference/runtime-api#usedata).

== markdown-examples

## Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

### Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

**Input**

```
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

**Output**

```js{4}
export default {
  data () {

    return {
      msg: 'Highlighted!'
    }

  }
}
```
