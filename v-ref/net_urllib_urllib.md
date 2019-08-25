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

## query_unescape()

TODO

### 语法

```
pub fn query_unescape(s string) ?string {
```

参数|描述
---|---
s|TODO

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

## path_unescape()

TODO

### 语法

```
pub fn path_unescape(s string) ?string {
```

参数|描述
---|---
s|TODO

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

## query_escape()

TODO

### 语法

```
pub fn query_escape(s string) string {
```

参数|描述
---|---
s|TODO

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

## path_escape()

TODO

### 语法

```
pub fn path_escape(s string) string {
```

参数|描述
---|---
s|TODO

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

## user()

TODO

### 语法

```
pub fn user(username string) *Userinfo {
```

参数|描述
---|---
username|TODO

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

## parse()

TODO

### 语法

```
pub fn parse(rawurl string) ?URL {
```

参数|描述
---|---
rawurl|TODO

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
pub fn (u &URL) str() string {
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

## parse_query()

TODO

### 语法

```
pub fn parse_query(query string) ?Values {
```

参数|描述
---|---
query|TODO

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

## encode()

TODO

### 语法

```
pub fn (v Values) encode() string {
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

## is_abs()

TODO

### 语法

```
pub fn (u &URL) is_abs() bool {
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

## parse()

TODO

### 语法

```
pub fn (u &URL) parse(ref string) ?URL {
```

参数|描述
---|---
 |TODO
ref|TODO

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

## resolve_reference()

TODO

### 语法

```
pub fn (u &URL) resolve_reference(ref &URL) ?URL {
```

参数|描述
---|---
 |TODO
ref|TODO

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
pub fn (u &URL) query() Values {
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

## request_uri()

TODO

### 语法

```
pub fn (u &URL) request_uri() string {
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

## hostname()

TODO

### 语法

```
pub fn (u &URL) hostname() string {
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

## port()

TODO

### 语法

```
pub fn (u &URL) port() string {
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

## strip_port()

TODO

### 语法

```
pub fn strip_port(hostport string) string {
```

参数|描述
---|---
hostport|TODO

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

## port_only()

TODO

### 语法

```
pub fn port_only(hostport string) string {
```

参数|描述
---|---
hostport|TODO

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

## valid_userinfo()

TODO

### 语法

```
pub fn valid_userinfo(s string) bool {
```

参数|描述
---|---
s|TODO

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

## ishex()

TODO

### 语法

```
pub fn ishex(c byte) bool {
```

参数|描述
---|---
c|TODO

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