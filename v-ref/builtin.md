---
permalink: /v-ref/builtin.html
title: "V语言-基础函数"
description: "V语言-基础函数 - 这是一个新兴的语言，虽然有时不是那么稳定，又或者许多功能还在实现途中，但是你不得不相信开源社区的强大！它来了，它改变着！ —— V lang"
lang: "zh_CN"
---
# V语言 - 基础函数

[本站首页](/)
[中文文档](/docs.html)
[手册目录](/menu/v.html)

## slice()

从已有的数组中返回选定的元素

### 语法

```
fn (s array) slice(start, _end int) array
```

参数|描述
---|---
 |一个数组对象，将根据后续参数，返回这数组中的选定元素
start|必需。规定从何处开始选取
end|必需。规定从何处结束选取

**返回值**

返回一个新的数组，包含从 start 到 end （不包括该元素）的元素

**注意**

- 这将会返回一个新的数组
- 如果开始在结束之后，这将会返回一个错误`invalid slice index: $start > $end`
- 如果开始为负数，这会访问到内存中奇怪的东西(数组越界)。也就是说现在这两参数，都是不能为负的

### 示例

```
fn main(){
    arr := [5,4,3,2,1]
    res := arr.slice(1,3)
    println(res)
}
```

以上代码将输出

```
[4,3]
```

**TODO**

下面这段代码将造成一些bug，请最好不要尝试，待bug修复后这段将删掉

```
fn main(){
    arr := [5,4,3,2,1]
    res := arr.slice(-1,3)
    println(res)
}
```

以上代码运行后，出现bug，错误输出为：

```
[114,5,4,3]
```

这里114是随机的，在您运行时可能为其它值。(数组越界)

## replace()

在字符串中替换一些字符

### 语法

```
fn (s string) replace(rep, with string) string
```

参数|描述
---|---
 |一个字符串对象，将根据后续参数，替换这个字符串的内容
rep|一个要被替换的子字符串
with|用来替换的文本

**返回值**
一个被替换后的字符串

fn (s string) to_i() int

fn (s string) split(delim string) []string

fn (s string) split_into_lines() []string

fn (s string) left(n int) string

fn (s string) right(n int) string

fn (s string) substr(start, end int) string

fn (s string) index(p string) int

fn (s string) last_index(p string) int

fn (s string) index_after(p string, start int) int

fn (s string) contains(p string) bool

fn (s string) starts_with(p string) bool

fn (s string) ends_with(p string) bool

fn (s string) to_lower() string

fn (s string) to_upper() string

fn (s string) trim_space() string

fn (s string) trim(c byte) string

fn (s mut []string) sort()

fn (s string) free()

fn (a[]string) join(del string) string

fn (s string) hash() int

fn exit(reason string)

fn isnil(v voidptr) bool
`isnil` returns true if an object is nil (only for C objects).

fn panic(s string)

fn println(s string)

fn eprintln(s string)

fn print(s string)

fn malloc(n int) byteptr

fn error(s string) Option

fn (m mut map) sort()

<script src="/script.js"></script>
