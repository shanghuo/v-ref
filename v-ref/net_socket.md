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

## socket()

TODO

### 语法

```
pub fn socket(family int, _type int, proto int) ?Socket {
```

参数|描述
---|---
family|TODO
_type|TODO
proto|TODO

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

## socket_udp()

TODO

### 语法

```
pub fn socket_udp() ?Socket {
```

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

## setsockopt()

TODO

### 语法

```
pub fn (s Socket) setsockopt(level int, optname int, optvalue *int) ?int {
```

参数|描述
---|---
 |TODO
level|TODO
optname|TODO
optvalue|TODO

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

## bind()

TODO

### 语法

```
pub fn (s Socket) bind(port int) ?int {
```

参数|描述
---|---
 |TODO
port|TODO

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

## listen()

TODO

### 语法

```
pub fn (s Socket) listen() ?int {
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

## listen_backlog()

TODO

### 语法

```
pub fn (s Socket) listen_backlog(backlog int) ?int {
```

参数|描述
---|---
 |TODO
backlog|TODO

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

## listen()

TODO

### 语法

```
pub fn listen(port int) ?Socket {
```

参数|描述
---|---
port|TODO

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

## accept()

TODO

### 语法

```
pub fn (s Socket) accept() ?Socket {
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

## connect()

TODO

### 语法

```
pub fn (s Socket) connect(address string, port int) ?int {
```

参数|描述
---|---
 |TODO
address|TODO
port|TODO

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

## dial()

TODO

### 语法

```
pub fn dial(address string, port int) ?Socket {
```

参数|描述
---|---
address|TODO
port|TODO

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

## send()

TODO

### 语法

```
pub fn (s Socket) send(buf byteptr, len int) int {
```

参数|描述
---|---
 |TODO
buf|TODO
len|TODO

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

## recv()

TODO

### 语法

```
pub fn (s Socket) recv(bufsize int) byteptr {
```

参数|描述
---|---
 |TODO
bufsize|TODO

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

## cread()

TODO

### 语法

```
pub fn (s Socket) cread( buffer byteptr, buffersize int ) int {
```

参数|描述
---|---
 |TODO
buffer|TODO
buffersize|TODO

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

## crecv()

TODO

### 语法

```
pub fn (s Socket) crecv( buffer byteptr, buffersize int ) int {
```

参数|描述
---|---
 |TODO
buffer|TODO
buffersize|TODO

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
pub fn (s Socket) close() ?int {
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

## write()

TODO

### 语法

```
pub fn (s Socket) write(str string) {
```

参数|描述
---|---
 |TODO
str|TODO

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

## read_line()

TODO

### 语法

```
pub fn (s Socket) read_line() string {
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