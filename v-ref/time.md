---
permalink: /v-ref/time.html
title: "V语言-时间函数"
description: "V语言-时间函数 - 这是一个新兴的语言，虽然有时不是那么稳定，又或者许多功能还在实现途中，但是你不得不相信开源社区的强大！它来了，它改变着！ —— V lang"
lang: "zh_CN"
---
# V语言 - 时间函数

[本站首页](/)
[中文文档](/docs.html)
[手册目录](/menu/v.html)

fn now() Time

fn random() Time

fn unix(u string) Time

fn unixn(uni int) Time

fn (t Time) format() string

fn (t Time) hhmm() string

fn (t Time) hhmm12() string

fn parse(s string) Time
`parse` parses time in the following format: "2018-01-27 12:48:34"

fn (t Time) add_seconds(seconds int) Time

fn (t Time) relative() string

fn (t Time) day_of_week() int

<script src="/script.js"></script>
