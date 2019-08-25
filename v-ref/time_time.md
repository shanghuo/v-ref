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

## now()

TODO

### 语法

```
pub fn now() Time {
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

## random()

TODO

### 语法

```
pub fn random() Time {
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

## unix()

TODO

### 语法

```
pub fn unix(abs int) Time {
```

参数|描述
---|---
abs|TODO

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

## convert_ctime()

TODO

### 语法

```
pub fn convert_ctime(t tm) Time {
```

参数|描述
---|---
t|TODO

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

## format_ss()

TODO

### 语法

```
pub fn (t Time) format_ss() string {
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

## format()

TODO

### 语法

```
pub fn (t Time) format() string {
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

## smonth()

TODO

### 语法

```
pub fn (t Time) smonth() string {
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

## hhmm()

TODO

### 语法

```
pub fn (t Time) hhmm() string {
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

## hhmm12()

TODO

### 语法

```
pub fn (t Time) hhmm12() string {
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

## hhmmss()

TODO

### 语法

```
pub fn (t Time) hhmmss() string {
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

## ymmdd()

TODO

### 语法

```
pub fn (t Time) ymmdd() string {
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

## md()

TODO

### 语法

```
pub fn (t Time) md() string {
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

## clean()

TODO

### 语法

```
pub fn (t Time) clean() string {
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

## clean12()

TODO

### 语法

```
pub fn (t Time) clean12() string {
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
pub fn parse(s string) Time {
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

## new_time()

TODO

### 语法

```
pub fn new_time(t Time) Time {
```

参数|描述
---|---
t|TODO

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

## calc_unix()

TODO

### 语法

```
pub fn (t &Time) calc_unix() int {
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

## add_seconds()

TODO

### 语法

```
pub fn (t Time) add_seconds(seconds int) Time {
```

参数|描述
---|---
 |TODO
seconds|TODO

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

## relative()

TODO

### 语法

```
pub fn (t Time) relative() string {
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

## day_of_week()

TODO

### 语法

```
pub fn day_of_week(y, m, d int) int {
```

参数|描述
---|---
y|TODO
m|TODO
d|TODO

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

## day_of_week()

TODO

### 语法

```
pub fn (t Time) day_of_week() int {
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

## weekday_str()

TODO

### 语法

```
pub fn (t Time) weekday_str() string {
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

## ticks()

TODO

### 语法

```
pub fn ticks() i64 {
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

## sleep()

TODO

### 语法

```
pub fn sleep(seconds int) {
```

参数|描述
---|---
seconds|TODO

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

## usleep()

TODO

### 语法

```
pub fn usleep(n int) {
```

参数|描述
---|---
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

## sleep_ms()

TODO

### 语法

```
pub fn sleep_ms(n int) {
```

参数|描述
---|---
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

## is_leap_year()

TODO

### 语法

```
pub fn is_leap_year(year int) bool {
```

参数|描述
---|---
year|TODO

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

## days_in_month()

TODO

### 语法

```
pub fn days_in_month(month, year int) ?int {
```

参数|描述
---|---
month|TODO
year|TODO

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