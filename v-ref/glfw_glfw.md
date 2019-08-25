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

## pub fn ()

TODO

### 语法

```
pub fn pub fn (window * GLFWwindow, button, action, mods int)
type clickpubfn fn (window voidptr, button, action, mods int)

pub fn init() {
```

参数|描述
---|---
window|TODO
button|TODO
action|TODO
mods|TODO

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

## destroy()

TODO

### 语法

```
pub fn (w &Window) destroy() {
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

## terminate()

TODO

### 语法

```
pub fn terminate() {
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

## mouse_move()

TODO

### 语法

```
pub fn mouse_move(w * GLFWwindow, x, y double) {
```

参数|描述
---|---
w|TODO
x|TODO
y|TODO

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

## mouse_move()

TODO

### 语法

```
pub fn mouse_move(w voidptr, x, y f64) {
```

参数|描述
---|---
w|TODO
x|TODO
y|TODO

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

## window_hint()

TODO

### 语法

```
pub fn window_hint(key, val int) {
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

## create_window()

TODO

### 语法

```
pub fn create_window(c WinCfg) *Window {
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

## set_title()

TODO

### 语法

```
pub fn (w &Window) set_title(title string) {
```

参数|描述
---|---
 |TODO
title|TODO

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

## make_context_current()

TODO

### 语法

```
pub fn (w &Window) make_context_current() {
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

## swap_interval()

TODO

### 语法

```
pub fn swap_interval(interval int) {
```

参数|描述
---|---
interval|TODO

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

## wait_events()

TODO

### 语法

```
pub fn wait_events() {
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

## poll_events()

TODO

### 语法

```
pub fn poll_events() {
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

## set_should_close()

TODO

### 语法

```
pub fn set_should_close(w voidptr, close bool) {
```

参数|描述
---|---
w|TODO
close|TODO

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

## should_close()

TODO

### 语法

```
pub fn (w &Window) should_close() bool {
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

## swap_buffers()

TODO

### 语法

```
pub fn (w &Window) swap_buffers() {
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

## onmousemove()

TODO

### 语法

```
pub fn (w mut Window) onmousemove(cb voidptr) {
```

参数|描述
---|---
 |TODO
cb|TODO

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

## set_mouse_button_callback()

TODO

### 语法

```
pub fn (w mut Window) set_mouse_button_callback(cb voidptr) {
```

参数|描述
---|---
 |TODO
cb|TODO

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

## on_click()

TODO

### 语法

```
pub fn (w mut Window) on_click(cb voidptr) {
```

参数|描述
---|---
 |TODO
cb|TODO

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

## set_scroll_callback()

TODO

### 语法

```
pub fn (w &Window) set_scroll_callback(cb voidptr) {
```

参数|描述
---|---
 |TODO
cb|TODO

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

## on_scroll()

TODO

### 语法

```
pub fn (w &Window) on_scroll(cb voidptr) {
```

参数|描述
---|---
 |TODO
cb|TODO

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

## post_empty_event()

TODO

### 语法

```
pub fn post_empty_event() {
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

## onkeydown()

TODO

### 语法

```
pub fn (w mut Window) onkeydown(cb voidptr) {
```

参数|描述
---|---
 |TODO
cb|TODO

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

## onchar()

TODO

### 语法

```
pub fn (w mut Window) onchar(cb voidptr) {
```

参数|描述
---|---
 |TODO
cb|TODO

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

## get_time()

TODO

### 语法

```
pub fn get_time() f64 {
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

## key_pressed()

TODO

### 语法

```
pub fn key_pressed(wnd voidptr, key int) bool {
```

参数|描述
---|---
wnd|TODO
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

## get_clipboard_text()

TODO

### 语法

```
pub fn (w &Window) get_clipboard_text() string {
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

## set_clipboard_text()

TODO

### 语法

```
pub fn (w &Window) set_clipboard_text(s string) {
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

## get_cursor_pos()

TODO

### 语法

```
pub fn (w &Window) get_cursor_pos() Pos {
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

## user_ptr()

TODO

### 语法

```
pub fn (w &Window) user_ptr() voidptr {
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

## set_user_ptr()

TODO

### 语法

```
pub fn (w &Window) set_user_ptr(ptr voidptr) {
```

参数|描述
---|---
 |TODO
ptr|TODO

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

## C.glfwGetVideoMode()

TODO

### 语法

```
pub fn C.glfwGetVideoMode() *C.GLFWvidmode

pub fn get_monitor_size() Size {
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

## str()

TODO

### 语法

```
pub fn (size Size) str() string {
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

## get_window_user_pointer()

TODO

### 语法

```
pub fn get_window_user_pointer(gwnd voidptr) voidptr {
```

参数|描述
---|---
gwnd|TODO

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