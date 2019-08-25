---
permalink: /v-ref/TODO.html
title: "V语言-TODO"
description: "V语言-TODO - 这是一个新兴的语言，虽然有时不是那么稳定，又或者许多功能还在实现途中，但是你不得不相信开源社区的强大！它来了，它改变着！ —— V lang"
lang: "zh_CN"
---
# V语言 - TODO

[本站首页](/)
[中文文档](/docs.html)
[手册目录](/menu/v.html)

## open()

TODO

### 语法

```
pub fn open(name string, level int, mode string) ?zip_ptr {
```

参数|描述
---|---
name|TODO
level|TODO
mode|TODO

**返回值**

TODO

**注意**

TODO

### 示例

```
TODO
```

以上代码将输出

```
TODO
```

## close()

TODO

### 语法

```
pub fn (z mut zip_ptr) close() {
```

参数|描述
---|---
 |TODO

**注意**

TODO

### 示例

```
TODO
```

以上代码将输出

```
TODO
```

## open_entry()

TODO

### 语法

```
pub fn (zentry mut zip_ptr) open_entry(name string) /*?*/bool {
```

参数|描述
---|---
 |TODO
name|TODO

**返回值**

TODO

**注意**

TODO

### 示例

```
TODO
```

以上代码将输出

```
TODO
```

## close_entry()

TODO

### 语法

```
pub fn (zentry mut zip_ptr) close_entry() {
```

参数|描述
---|---
 |TODO

**注意**

TODO

### 示例

```
TODO
```

以上代码将输出

```
TODO
```

## name()

TODO

### 语法

```
pub fn (zentry mut zip_ptr) name() string {
```

参数|描述
---|---
 |TODO

**返回值**

TODO

**注意**

TODO

### 示例

```
TODO
```

以上代码将输出

```
TODO
```

## index()

TODO

### 语法

```
pub fn (zentry mut zip_ptr) index() ?int {
```

参数|描述
---|---
 |TODO

**返回值**

TODO

**注意**

TODO

### 示例

```
TODO
```

以上代码将输出

```
TODO
```

## isdir()

TODO

### 语法

```
pub fn (zentry mut zip_ptr) isdir() ?bool {
```

参数|描述
---|---
 |TODO

**返回值**

TODO

**注意**

TODO

### 示例

```
TODO
```

以上代码将输出

```
TODO
```

## size()

TODO

### 语法

```
pub fn (zentry mut zip_ptr) size() i64 {
```

参数|描述
---|---
 |TODO

**返回值**

TODO

**注意**

TODO

### 示例

```
TODO
```

以上代码将输出

```
TODO
```

## crc32()

TODO

### 语法

```
pub fn (zentry mut zip_ptr) crc32() u32 {
```

参数|描述
---|---
 |TODO

**返回值**

TODO

**注意**

TODO

### 示例

```
TODO
```

以上代码将输出

```
TODO
```

## write_entry()

TODO

### 语法

```
pub fn (zentry mut zip_ptr) write_entry(data []byte) bool {
```

参数|描述
---|---
 |TODO
data|TODO

**返回值**

TODO

**注意**

TODO

### 示例

```
TODO
```

以上代码将输出

```
TODO
```

## create_entry()

TODO

### 语法

```
pub fn (zentry mut zip_ptr) create_entry(name string) bool {
```

参数|描述
---|---
 |TODO
name|TODO

**返回值**

TODO

**注意**

TODO

### 示例

```
TODO
```

以上代码将输出

```
TODO
```

## read_entry()

TODO

### 语法

```
pub fn (zentry mut zip_ptr) read_entry() ?voidptr {
```

参数|描述
---|---
 |TODO

**返回值**

TODO

**注意**

TODO

### 示例

```
TODO
```

以上代码将输出

```
TODO
```

## extract_entry()

TODO

### 语法

```
pub fn (zentry mut zip_ptr) extract_entry(path string) /*?*/bool {
```

参数|描述
---|---
 |TODO
path|TODO

**返回值**

TODO

**注意**

TODO

### 示例

```
TODO
```

以上代码将输出

```
TODO
```

## total()

TODO

### 语法

```
pub fn (zentry mut zip_ptr) total() ?int {
```

参数|描述
---|---
 |TODO

**返回值**

TODO

**注意**

TODO

### 示例

```
TODO
```

以上代码将输出

```
TODO
```
<script src="/script.js"></script>