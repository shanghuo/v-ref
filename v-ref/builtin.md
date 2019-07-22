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
start|必需，正整数。规定从何处开始选取
end|必需，正整数。规定从何处结束选取

**返回值**

返回一个新的数组，包含从 start 到 end （不包括该元素）的元素

**注意**

- 这将会返回一个新的数组
- 如果开始在结束之后，或者开始小于0，这都将会返回错误

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

### 示例

```
fn main(){
    str:='hello world'
    res:=str.replace('hello','hi')
    println(res)
}
```

以上代码将输出

```
hi world
```

## to_i()

将字符串转换为整数

### 语法

```
fn (s string) to_i() int
```

参数|描述
---|---
 |一个字符串对象，把这个字符串转换为整数

**返回值**

字符串转换为int类型的结果

**注意**

- 这个方法在编写参考手册时，未在V源码中找到，但出现在了V语言的官网中
- 尝试用`int()`代替，但该方法对于非数字对象会丢弃

### 示例

```
fn main(){
    str:='123'
    res:=str.int()
    println(res+1)
}
```

以上代码将输出

```
124
```

## split()

把字符串分割为字符串数组

### 语法

```
fn (s string) split(delim string) []string
```

参数|描述
---|---
 |一个字符串对象，作为将被分割的字符串
delim|一个分割字符串的标志(子字符串)

**返回值**

分割后的字符串数组

### 示例

```
fn main(){
    str:='hello world, hi world!'
    res:=str.split('world')
    println(res)
}
```

以上代码将输出

```
["hello", ", hi", "!"]
```

## split_into_lines()

把字符串按行分割为字符串数组

### 语法

```
fn (s string) split_into_lines() []string
```

参数|描述
---|---
 |一个字符串对象，作为将被分割的字符串

**返回值**

将字符串按行分割后，得到的字符串数组

### 示例

```
fn main(){
    str:='hello world\nhi world!'
    res:=str.split_into_lines()
    println(res)
}
```

以上代码将输出

```
["hello world", "hi world!"]
```

## left()

提取字符串左侧N个字符

### 语法

```
fn (s string) left(n int) string
```

参数|描述
---|---
 |一个字符串，作为将被截取的字符串
n|一个整数，截取后的字符串位数

**返回值**

截取后的字符串

**注意**
这不会产生新的字符串。
因为：字符串是不可变的。这意味着子字符串函数非常有效： 不执行复制，不需要额外的分配

### 示例

```
fn main(){
    str:='hello world'
    res:=str.left(7)
    println(res)
}
```

以上代码将输出

```
hello w
```

## right()

提取字符串右侧N个字符

### 语法

```
fn (s string) right(n int) string
```

参数|描述
---|---
 |一个字符串，作为将被截取的字符串
n|一个整数N，从字符串第N位开始截取

**返回值**

截取后的字符串

**注意**
这不会产生新的字符串。
因为：字符串是不可变的。这意味着子字符串函数非常有效： 不执行复制，不需要额外的分配

### 示例

```
fn main(){
    str:='hello world'
    res:=str.right(7)
    println(res)
}
```

以上代码将输出

```
orld
```

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
