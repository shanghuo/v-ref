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

## read_file()

TODO

### 语法

```
pub fn read_file(path string) ?string {
```

参数|描述
---|---
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

## file_size()

TODO

### 语法

```
pub fn file_size(path string) int {
```

参数|描述
---|---
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

## mv()

TODO

### 语法

```
pub fn mv(old, new string) {
```

参数|描述
---|---
old|TODO
new|TODO

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

## read_lines()

TODO

### 语法

```
pub fn read_lines(path string) []string {
```

参数|描述
---|---
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

## open()

TODO

### 语法

```
pub fn open(path string) ?File {
```

参数|描述
---|---
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

## create()

TODO

### 语法

```
pub fn create(path string) ?File {
```

参数|描述
---|---
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

## open_append()

TODO

### 语法

```
pub fn open_append(path string) ?File {
```

参数|描述
---|---
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

## write()

TODO

### 语法

```
pub fn (f File) write(s string) {
```

参数|描述
---|---
 |TODO
s|TODO

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

## write_bytes()

TODO

### 语法

```
pub fn (f File) write_bytes(data voidptr, size int) {
```

参数|描述
---|---
 |TODO
data|TODO
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

## write_bytes_at()

TODO

### 语法

```
pub fn (f File) write_bytes_at(data voidptr, size, pos int) {
```

参数|描述
---|---
 |TODO
data|TODO
size|TODO
pos|TODO

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

## writeln()

TODO

### 语法

```
pub fn (f File) writeln(s string) {
```

参数|描述
---|---
 |TODO
s|TODO

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

## flush()

TODO

### 语法

```
pub fn (f File) flush() {
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

## close()

TODO

### 语法

```
pub fn (f File) close() {
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

## exec()

TODO

### 语法

```
pub fn exec(cmd string) ?Result {
```

参数|描述
---|---
cmd|TODO

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

## system()

TODO

### 语法

```
pub fn system(cmd string) int {
```

参数|描述
---|---
cmd|TODO

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

## getenv()

TODO

### 语法

```
pub fn getenv(key string) string {
```

参数|描述
---|---
key|TODO

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

## setenv()

TODO

### 语法

```
pub fn setenv(name string, value string, overwrite bool) int {
```

参数|描述
---|---
name|TODO
value|TODO
overwrite|TODO

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

## unsetenv()

TODO

### 语法

```
pub fn unsetenv(name string) int {
```

参数|描述
---|---
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

## file_exists()

TODO

### 语法

```
pub fn file_exists(_path string) bool {
```

参数|描述
---|---
_path|TODO

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

## rm()

TODO

### 语法

```
pub fn rm(path string) {
```

参数|描述
---|---
path|TODO

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

## rmdir()

TODO

### 语法

```
pub fn rmdir(path string) {
```

参数|描述
---|---
path|TODO

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

## ext()

TODO

### 语法

```
pub fn ext(path string) string {
```

参数|描述
---|---
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

## dir()

TODO

### 语法

```
pub fn dir(path string) string {
```

参数|描述
---|---
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

## basedir()

TODO

### 语法

```
pub fn basedir(path string) string {
```

参数|描述
---|---
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

## filename()

TODO

### 语法

```
pub fn filename(path string) string {
```

参数|描述
---|---
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

## get_line()

TODO

### 语法

```
pub fn get_line() string {
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

## get_raw_line()

TODO

### 语法

```
pub fn get_raw_line() string {
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

## get_lines()

TODO

### 语法

```
pub fn get_lines() []string {
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

## get_lines_joined()

TODO

### 语法

```
pub fn get_lines_joined() string {
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

## user_os()

TODO

### 语法

```
pub fn user_os() string {
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

## home_dir()

TODO

### 语法

```
pub fn home_dir() string {
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

## write_file()

TODO

### 语法

```
pub fn write_file(path, text string) {
```

参数|描述
---|---
path|TODO
text|TODO

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

## clear()

TODO

### 语法

```
pub fn clear() {
```

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

## executable()

TODO

### 语法

```
pub fn executable() string {
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

## is_dir()

TODO

### 语法

```
pub fn is_dir(path string) bool {
```

参数|描述
---|---
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

## chdir()

TODO

### 语法

```
pub fn chdir(path string) {
```

参数|描述
---|---
path|TODO

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

## getwd()

TODO

### 语法

```
pub fn getwd() string {
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

## realpath()

TODO

### 语法

```
pub fn realpath(fpath string) string {
```

参数|描述
---|---
fpath|TODO

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

## walk_ext()

TODO

### 语法

```
pub fn walk_ext(path, ext string) []string {
```

参数|描述
---|---
path|TODO
ext|TODO

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

## signal()

TODO

### 语法

```
pub fn signal(signum int, handler voidptr) {
```

参数|描述
---|---
signum|TODO
handler|TODO

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

## fork()

TODO

### 语法

```
pub fn fork() int {
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

## wait()

TODO

### 语法

```
pub fn wait() int {
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

## file_last_mod_unix()

TODO

### 语法

```
pub fn file_last_mod_unix(path string) int {
```

参数|描述
---|---
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

## flush_stdout()

TODO

### 语法

```
pub fn flush_stdout() {
```

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

## print_backtrace()

TODO

### 语法

```
pub fn print_backtrace() {
```

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