---
permalink: /v-ref/builtin-array.html
title: "V语言-数组方法"
description: "V语言-数组方法 - 这是一个新兴的语言，虽然有时不是那么稳定，又或者许多功能还在实现途中，但是你不得不相信开源社区的强大！它来了，它改变着！ —— V lang"
lang: "zh_CN"
---
# V语言 - 数组方法

[本站首页](/)
[中文文档](/docs.html)
[手册目录](/menu/v.html)

## _make()

TODO

### 语法

```
pub fn _make(len, cap, elm_size int) array {
```

参数|描述
---|---
len|TODO
cap|TODO
elm_size|TODO

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

## sort_with_compare()

TODO

### 语法

```
pub fn (a mut array) sort_with_compare(compare voidptr) {
```

参数|描述
---|---
 |TODO
compare|TODO

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

## insert()

TODO

### 语法

```
pub fn (a mut array) insert(i int, val voidptr) {
```

参数|描述
---|---
 |TODO
i|TODO
val|TODO

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

## prepend()

TODO

### 语法

```
pub fn (a mut array) prepend(val voidptr) {
```

参数|描述
---|---
 |TODO
val|TODO

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

## delete()

TODO

### 语法

```
pub fn (a mut array) delete(idx int) {
```

参数|描述
---|---
 |TODO
idx|TODO

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

## first()

TODO

### 语法

```
pub fn (a array) first() voidptr {
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

## last()

TODO

### 语法

```
pub fn (a array) last() voidptr {
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

## left()

TODO

### 语法

```
pub fn (s array) left(n int) array {
```

参数|描述
---|---
 |TODO
n|TODO

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

## right()

TODO

### 语法

```
pub fn (s array) right(n int) array {
```

参数|描述
---|---
 |TODO
n|TODO

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

## slice()

TODO

### 语法

```
pub fn (s array) slice(start, _end int) array {
```

参数|描述
---|---
 |TODO
start|TODO
_end|TODO

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

## set()

TODO

### 语法

```
pub fn (a mut array) set(idx int, val voidptr) {
```

参数|描述
---|---
 |TODO
idx|TODO
val|TODO

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

## _push_many()

TODO

### 语法

```
pub fn (arr mut array) _push_many(val voidptr, size int) {
```

参数|描述
---|---
 |TODO
val|TODO
size|TODO

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

## reverse()

TODO

### 语法

```
pub fn (a array) reverse() array {
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

## str()

TODO

### 语法

```
pub fn (a []int) str() string {
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
pub fn (a []int) free() {
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

## free()

TODO

### 语法

```
pub fn (a array) free() {
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

## str()

TODO

### 语法

```
pub fn (a []string) str() string {
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

## hex()

TODO

### 语法

```
pub fn (b []byte) hex() string {
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
