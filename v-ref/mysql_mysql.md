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

## connect()

TODO

### 语法

```
pub fn connect(server, user, passwd, dbname string) DB {
```

参数|描述
---|---
server|TODO
user|TODO
passwd|TODO
dbname|TODO

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

## query()

TODO

### 语法

```
pub fn (db DB) query(q string) Result {
```

参数|描述
---|---
 |TODO
q|TODO

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
pub fn (db DB) close() {
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

## fetch_row()

TODO

### 语法

```
pub fn (r Result) fetch_row() *byteptr {
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

## num_fields()

TODO

### 语法

```
pub fn (r Result) num_fields() int {
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

## rows()

TODO

### 语法

```
pub fn (r Result) rows() []Row {
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

## free()

TODO

### 语法

```
pub fn (r Result) free() {
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
<script src="/script.js"></script>