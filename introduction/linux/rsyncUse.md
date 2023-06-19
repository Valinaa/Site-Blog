---
title: rsync命令使用文档
description: rsync是一个用于文件传输和备份的命令行工具, 它可以在本地或远程机器之间同步和复制文件。rsync具有高效、快速和灵活的特点，常用于数据备份、文件同步和远程文件传输等场景。
readingTime: true  # 单独设置是否展示文章的预计阅读时间
comment: true  # 单独为某篇文章设置是否开启评论
date: 2023-06-03  # 单独设置文章的发布时间
tag:
    - 教程  # 用于按标签给文章分类
tags:
    - 文件处理  # 用于按标签给文章分类
categories:
    - Linux  # 用于按分类给文章分类
sticky: 9  # 设置在首页展示的精选文章, 值越大展示越靠前
top: 6  # 设置在首页置顶展示的文章, 值越小越靠前
recommend: 5  # 设置文章左侧展示的推荐文章顺序, 值越小越靠前
---

## 基本格式

### rsync命令的基本格式有以下几种

```shell
# 本地备份数据
rsync [OPTION] SRC DEST
# 将本地数据备份到远程机器
rsync [OPTION] SRC [USER@]HOST:DEST
# 将远程机器上的数据备份到本地机器
rsync [OPTION] [USER@]HOST:SRC DEST
# 使用rsync协议将远程机器上的数据备份到本地机器
rsync [OPTION] [USER@]HOST::SRC DEST
# 使用rsync协议将本地数据备份到远程机器
rsync [OPTION] SRC [USER@]HOST::DEST
```

> 注意：rsync在远程传输数据前需要进行登陆认证，可使用 `ssh` 协议或 `rsync` 协议完成。使用单个冒号（:）默认使用ssh协议，使用两个冒号（::）使用rsync协议

## 工作模式

rsync有以下五种不同的工作模式：

1. 本地备份数据
   - 仅在本地备份数据，不涉及远程机器
2. 本地数据备份到远程机器
   - 将本地数据备份到远程机器上
3. 远程机器数据备份到本地机器
   - 将远程机器上的数据备份到本地机器上
4. 远程机器数据备份到本地机器（rsync协议）
   - 使用rsync协议将远程机器上的数据备份到本地机器上
5. 本地数据备份到远程机器（rsync协议）
   - 使用 `rsync` 协议将本地数据备份到远程机器上

> 这些模式的区别在于登陆认证时使用的验证方式不同

## 参数说明

rsync命令中的参数含义如下：

* `SRC`：要备份的目标数据所在的位置（路径）
* `DEST`：将数据备份到的位置
* `USER@`：远程同步操作时的系统登录用户名，默认为 `root`
* `OPTION`：可选参数，用于控制 `rsync`的具体行为

## 常用选项示例

### `-a`

使用 `-a` 选项实现目录之间的同步备份，示例：

```shell
# 同步备份test1目录到test2目录
rsync -a test1/ test2/
```

> 注意：为避免新建了test2目录并将test1放入其中，需在目标目录添加斜杠(/)

### `--delete`

使用 `--delete` 选项删除目标目录中源目录中不存在的文件，示例：

```shell
# 删除test1/123.txt文件
rm -f test1/123.txt

# 同步备份test1目录到test2目录（含删除操作）
rsync -av --delete test1/ test2/

# 查看test2目录内容
ls test2/
```

> 注意：使用--delete选项进行同步备份时，如果源目录发生变化，目标目录也会相应变化

### 其它指令

可使用 `man rsync` 查看所有选项及help信息
