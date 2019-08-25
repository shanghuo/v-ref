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

## new_flag_parser()

TODO

### 语法

```
pub fn new_flag_parser(args []string) &FlagParser {
```

参数|描述
---|---
args|TODO

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

## application()

TODO

### 语法

```
pub fn (fs mut FlagParser) application(n string) {
```

参数|描述
---|---
 |TODO
n|TODO

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

## version()

TODO

### 语法

```
pub fn (fs mut FlagParser) version(n string) {
```

参数|描述
---|---
 |TODO
n|TODO

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

## description()

TODO

### 语法

```
pub fn (fs mut FlagParser) description(n string) {
```

参数|描述
---|---
 |TODO
n|TODO

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

## skip_executable()

TODO

### 语法

```
pub fn (fs mut FlagParser) skip_executable() {
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

## bool_()

TODO

### 语法

```
pub fn (fs mut FlagParser) bool_(n string, a byte, v bool, u string) bool {
```

参数|描述
---|---
 |TODO
n|TODO
a|TODO
v|TODO
u|TODO

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

## bool()

TODO

### 语法

```
pub fn (fs mut FlagParser) bool(n string, v bool, u string) bool {
```

参数|描述
---|---
 |TODO
n|TODO
v|TODO
u|TODO

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

## int_()

TODO

### 语法

```
pub fn (fs mut FlagParser) int_(n string, a byte, i int, u string) int {
```

参数|描述
---|---
 |TODO
n|TODO
a|TODO
i|TODO
u|TODO

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

## int()

TODO

### 语法

```
pub fn (fs mut FlagParser) int(n string, i int, u string) int {
```

参数|描述
---|---
 |TODO
n|TODO
i|TODO
u|TODO

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

## float_()

TODO

### 语法

```
pub fn (fs mut FlagParser) float_(n string, a byte, f f32, u string) f32 {
```

参数|描述
---|---
 |TODO
n|TODO
a|TODO
f|TODO
u|TODO

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

## float()

TODO

### 语法

```
pub fn (fs mut FlagParser) float(n string, f f32, u string) f32 {
```

参数|描述
---|---
 |TODO
n|TODO
f|TODO
u|TODO

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

## string_()

TODO

### 语法

```
pub fn (fs mut FlagParser) string_(n string, a byte, v, u string) string {
```

参数|描述
---|---
 |TODO
n|TODO
a|TODO
v|TODO
u|TODO

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
pub fn (fs mut FlagParser) string(n, v, u string) string {
```

参数|描述
---|---
 |TODO
n|TODO
v|TODO
u|TODO

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

## limit_free_args()

TODO

### 语法

```
pub fn (fs mut FlagParser) limit_free_args(min, max int) {
```

参数|描述
---|---
 |TODO
min|TODO
max|TODO

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

## usage()

TODO

### 语法

```
pub fn (fs FlagParser) usage() string {
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

## finalize()

TODO

### 语法

```
pub fn (fs FlagParser) finalize() ?[]string {
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