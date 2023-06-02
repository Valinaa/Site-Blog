---
title: 本主题Markdown Frontmatter参数使用规范
description: 用于配置文档布局及展示
hidden: true  # 控制文章是否出现在首页列表里
readingTime: true  # 单独设置是否展示文章的预计阅读时间
comment: true  # 单独为某篇文章设置是否开启评论
date: 2023-06-02  # 单独设置文章的发布时间
tag:
    - markdown  # 用于按标签给文章分类
tags:
    - 配置  # 用于按标签给文章分类
categories:
    - 教程  # 用于按分类给文章分类
sticky: 2  # 设置在首页展示的精选文章，值越大展示越靠前
top: 5  # 设置在首页置顶展示的文章，值越小越靠前
recommend: 1  # 设置文章左侧展示的推荐文章顺序，值越小越靠前
---

## 布局

```yaml
---
layout: home|article
---
```

## Home

```yaml
---
layout: home # 指定为首页布局
blog:
    name: 'My Blogs'  # 设置首页的博客名称
    motto: Valinaa的博客  # 设置首页的博客口号
    inspiring: 基于 Vitepress 的博客主题🎨  # 设置首页的博客启发语
    pageSize: 2  # 设置首页列表每页展示数量
---
```

## Article

```yaml
---
title: 更新日志  # 文章在首页卡片列表里展示的标题
description: 简单介绍主题的由来和实现原理  # 文章在首页卡片列表里展示的描述信息
cover: url  # 文章在首页卡片列表里展示的封面图片
hiddenCover: true  # 控制文章页是否展示封面
hidden: true  # 控制文章是否出现在首页列表里
author: Valinaa Chan  # 单独设置文章的作者信息
readingTime: true  # 单独设置是否展示文章的预计阅读时间
comment: false  # 单独为某篇文章设置是否开启评论
date: 2023-06-02  # 单独设置文章的发布时间
tag:
  + 日志  # 用于按标签给文章分类
tags:
  + 信息  # 用于按标签给文章分类
categories:
  + 测试分类  # 用于按分类给文章分类
sticky: 1  # 设置在首页展示的精选文章，值越大展示越靠前
top: 1  # 设置在首页置顶展示的文章，值越小越靠前
recommend: 1  # 设置文章左侧展示的推荐文章顺序，值越小越靠前
---
```
