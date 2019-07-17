---
permalink: /v-ref/ui.html
title: "V语言-绘图函数"
description: "V语言-绘图函数 - 这是一个新兴的语言，虽然有时不是那么稳定，又或者许多功能还在实现途中，但是你不得不相信开源社区的强大！它来了，它改变着！ —— V lang"
lang: "zh_CN"
---
# V语言 - 绘图函数

[本站首页](/)
[中文文档](/docs.html)
[手册目录](/menu/v.html)

fn new_window(config WinCfg) *Window
`new_window` creates a native Window.

fn new_checkbox(text string, checked, enabled bool, parent *Window) CheckBox
`new_checkbox` creates a new checkbox.

fn new_button(text string, parent *Window, onclick ButtonClickFn) Button
`new_button` creates a new button.

fn draw_line(x, y, x2, y2 int)
`draw_line` draws a line.

fn draw_text(x, y int, text string, cfg gx.TextCfg)
`draw_text` draws `text` at {x, y}.

fn draw_image(x, y, w, h int, img gx.Image)
`draw_image` draws an image at {x, y}.

fn draw_empty_rect(x, y, w, h int, color gx.Color)

fn draw_rect(x, y, w, h int, color gx.Color)

fn draw_circle(x, y, d int, color gx.Color)

fn create_image(file string) gx.Image

fn text_width(text string) int
`text_width` returns width of `text` in pixels.

fn new_textbox(parent *Window, is_multi bool) TextBox

<script src="/script.js"></script>
