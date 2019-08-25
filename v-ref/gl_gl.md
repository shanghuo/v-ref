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

## init_glad()

TODO

### 语法

```
pub fn init_glad() {
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

## viewport()

TODO

### 语法

```
pub fn viewport(a, b, c, d int) {
```

参数|描述
---|---
a|TODO
b|TODO
c|TODO
d|TODO

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

## clear_color()

TODO

### 语法

```
pub fn clear_color(r, g, b, a int) {
```

参数|描述
---|---
r|TODO
g|TODO
b|TODO
a|TODO

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

## create_shader()

TODO

### 语法

```
pub fn create_shader(typ int) int {
```

参数|描述
---|---
typ|TODO

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

## create_program()

TODO

### 语法

```
pub fn create_program() int {
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

## shader_source()

TODO

### 语法

```
pub fn shader_source(shader, a int, source string, b int) {
```

参数|描述
---|---
shader|TODO
a|TODO
source|TODO
b|TODO

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

## compile_shader()

TODO

### 语法

```
pub fn compile_shader(shader int) {
```

参数|描述
---|---
shader|TODO

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

## shader_compile_status()

TODO

### 语法

```
pub fn shader_compile_status(shader int) int {
```

参数|描述
---|---
shader|TODO

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

## attach_shader()

TODO

### 语法

```
pub fn attach_shader(program, shader int) {
```

参数|描述
---|---
program|TODO
shader|TODO

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

## link_program()

TODO

### 语法

```
pub fn link_program(program int) {
```

参数|描述
---|---
program|TODO

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

## get_program_link_status()

TODO

### 语法

```
pub fn get_program_link_status(program int) int {
```

参数|描述
---|---
program|TODO

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

## delete_shader()

TODO

### 语法

```
pub fn delete_shader(shader int) {
```

参数|描述
---|---
shader|TODO

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

## shader_info_log()

TODO

### 语法

```
pub fn shader_info_log(shader int) string {
```

参数|描述
---|---
shader|TODO

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

## get_program_info_log()

TODO

### 语法

```
pub fn get_program_info_log(program int) string {
```

参数|描述
---|---
program|TODO

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

## bind_vao()

TODO

### 语法

```
pub fn bind_vao(vao u32) {
```

参数|描述
---|---
vao|TODO

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

## bind_buffer()

TODO

### 语法

```
pub fn bind_buffer(typ int, vbo u32) {
```

参数|描述
---|---
typ|TODO
vbo|TODO

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

## gen_texture()

TODO

### 语法

```
pub fn gen_texture() u32 {
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

## active_texture()

TODO

### 语法

```
pub fn active_texture(t int) {
```

参数|描述
---|---
t|TODO

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

## bind_2d_texture()

TODO

### 语法

```
pub fn bind_2d_texture(texture u32) {
```

参数|描述
---|---
texture|TODO

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

## delete_texture()

TODO

### 语法

```
pub fn delete_texture(texture u32) {
```

参数|描述
---|---
texture|TODO

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

## buffer_data()

TODO

### 语法

```
pub fn buffer_data(typ, size int, arr voidptr, draw_typ int) {
```

参数|描述
---|---
typ|TODO
size|TODO
arr|TODO
draw_typ|TODO

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

## buffer_data_int()

TODO

### 语法

```
pub fn buffer_data_int(typ int, vertices []int, draw_typ int) {
```

参数|描述
---|---
typ|TODO
vertices|TODO
draw_typ|TODO

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

## buffer_data_f32()

TODO

### 语法

```
pub fn buffer_data_f32(typ int, vertices []f32, draw_typ int) {
```

参数|描述
---|---
typ|TODO
vertices|TODO
draw_typ|TODO

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

## set_vbo()

TODO

### 语法

```
pub fn set_vbo(vbo u32, vertices []f32, draw_typ int) {
```

参数|描述
---|---
vbo|TODO
vertices|TODO
draw_typ|TODO

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

## set_ebo()

TODO

### 语法

```
pub fn set_ebo(ebo u32, indices []int, draw_typ int) {
```

参数|描述
---|---
ebo|TODO
indices|TODO
draw_typ|TODO

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

## draw_arrays()

TODO

### 语法

```
pub fn draw_arrays(typ, start, len int) {
```

参数|描述
---|---
typ|TODO
start|TODO
len|TODO

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

## draw_elements()

TODO

### 语法

```
pub fn draw_elements(mode, count, typ, indices int) {
```

参数|描述
---|---
mode|TODO
count|TODO
typ|TODO
indices|TODO

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

## use_program()

TODO

### 语法

```
pub fn use_program(program int) {
```

参数|描述
---|---
program|TODO

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

## gen_vertex_array()

TODO

### 语法

```
pub fn gen_vertex_array() u32 {
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

## enable_vertex_attrib_array()

TODO

### 语法

```
pub fn enable_vertex_attrib_array(n int) {
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

## gen_buffer()

TODO

### 语法

```
pub fn gen_buffer() u32 {
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

## vertex_attrib_pointer()

TODO

### 语法

```
pub fn vertex_attrib_pointer(index, size int, typ int, normalized bool, _stride int, _ptr int) {
```

参数|描述
---|---
index|TODO
size|TODO
typ|TODO
normalized|TODO
_stride|TODO
_ptr|TODO

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

## tex_param()

TODO

### 语法

```
pub fn tex_param(key, val int) {
```

参数|描述
---|---
key|TODO
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

## enable()

TODO

### 语法

```
pub fn enable(val int) {
```

参数|描述
---|---
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

## disable()

TODO

### 语法

```
pub fn disable(val int) {
```

参数|描述
---|---
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

## scissor()

TODO

### 语法

```
pub fn scissor(a, b, c, d int) {
```

参数|描述
---|---
a|TODO
b|TODO
c|TODO
d|TODO

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

## generate_mipmap()

TODO

### 语法

```
pub fn generate_mipmap(typ int) {
```

参数|描述
---|---
typ|TODO

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