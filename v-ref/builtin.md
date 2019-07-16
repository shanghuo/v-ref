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

fn (s array) slice(start, _end int) array

fn (s string) replace(rep, with string) string

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
