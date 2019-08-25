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

## str2bf()

TODO

### 语法

```
pub fn str2bf(input string) BitField {
```

参数|描述
---|---
input|TODO

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

## string()

TODO

### 语法

```
pub fn (input BitField) string() string {
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

## new()

TODO

### 语法

```
pub fn new(size int) BitField {
```

参数|描述
---|---
size|TODO

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

## del()

TODO

### 语法

```
pub fn del(instance *BitField) {
```

参数|描述
---|---
instance|TODO

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

## getbit()

TODO

### 语法

```
pub fn (instance BitField) getbit(bitnr int) int {
```

参数|描述
---|---
 |TODO
bitnr|TODO

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

## setbit()

TODO

### 语法

```
pub fn (instance mut BitField) setbit(bitnr int) {
```

参数|描述
---|---
 |TODO
bitnr|TODO

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

## clearbit()

TODO

### 语法

```
pub fn (instance mut BitField) clearbit(bitnr int) {
```

参数|描述
---|---
 |TODO
bitnr|TODO

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

## setall()

TODO

### 语法

```
pub fn (instance mut BitField) setall() {
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

## clearall()

TODO

### 语法

```
pub fn (instance mut BitField) clearall() {
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

## togglebit()

TODO

### 语法

```
pub fn (instance mut BitField) togglebit(bitnr int) {
```

参数|描述
---|---
 |TODO
bitnr|TODO

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

## bfand()

TODO

### 语法

```
pub fn bfand(input1 BitField, input2 BitField) BitField {
```

参数|描述
---|---
input1|TODO
input2|TODO

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

## bfnot()

TODO

### 语法

```
pub fn bfnot(input BitField) BitField {
```

参数|描述
---|---
input|TODO

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

## bfor()

TODO

### 语法

```
pub fn bfor(input1 BitField, input2 BitField) BitField {
```

参数|描述
---|---
input1|TODO
input2|TODO

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

## bfxor()

TODO

### 语法

```
pub fn bfxor(input1 BitField, input2 BitField) BitField {
```

参数|描述
---|---
input1|TODO
input2|TODO

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

## join()

TODO

### 语法

```
pub fn join(input1 BitField, input2 BitField) BitField {
```

参数|描述
---|---
input1|TODO
input2|TODO

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

## print()

TODO

### 语法

```
pub fn print(instance BitField) {
```

参数|描述
---|---
instance|TODO

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

## getsize()

TODO

### 语法

```
pub fn (instance BitField) getsize() int {
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

## clone()

TODO

### 语法

```
pub fn clone(input BitField) BitField {
```

参数|描述
---|---
input|TODO

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

## cmp()

TODO

### 语法

```
pub fn cmp(input1 BitField, input2 BitField) bool {
```

参数|描述
---|---
input1|TODO
input2|TODO

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

## popcount()

TODO

### 语法

```
pub fn (instance BitField) popcount() int {
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

## hamming ()

TODO

### 语法

```
pub fn hamming (input1 BitField, input2 BitField) int {
```

参数|描述
---|---
input1|TODO
input2|TODO

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

## pos()

TODO

### 语法

```
pub fn (haystack BitField) pos(needle BitField) int {
```

参数|描述
---|---
 |TODO
needle|TODO

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
pub fn (input BitField) slice(_start int, _end int) BitField {
```

参数|描述
---|---
 |TODO
_start|TODO
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

## reverse()

TODO

### 语法

```
pub fn (instance mut BitField) reverse() BitField {
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

## resize()

TODO

### 语法

```
pub fn (instance mut BitField) resize(size int) {
```

参数|描述
---|---
 |TODO
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

## rotate()

TODO

### 语法

```
pub fn (instance BitField) rotate(offset int) BitField {
```

参数|描述
---|---
 |TODO
offset|TODO

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