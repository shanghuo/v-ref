---
permalink: /v-ref/filesystem.html
title: "V语言-文件系统"
description: "V语言-文件系统 - 这是一个新兴的语言，虽然有时不是那么稳定，又或者许多功能还在实现途中，但是你不得不相信开源社区的强大！它来了，它改变着！ —— V lang"
lang: "zh_CN"
---
# V语言 - 文件系统

[本站首页](/)
[中文文档](/docs.html)
[手册目录](/menu/v.html)

fn read_file(path string) string
`read_file` reads the file in `path` and returns the contents.
TODO return `?string`

fn file_size(path string) int
`file_size` returns the size of the file located in `path`.

fn read_lines(path string) []string
`read_lines` reads the file in `path` into an array of lines.

fn open(path string) File

fn create(path string) File
`create` creates a file at a specified location and returns a writable `File` object.

fn open_append(path string) File

fn system2(cmd string) int
`system2` starts the specified command, waits for it to complete, and returns its code.

fn system(cmd string) string
`system` starts the specified command, waits for it to complete, and returns its output.
TODO merge the two functions.

fn getenv(key string) string
`getenv` returns the value of the environment variable named by the key.

fn file_exists(path string) bool
`file_exists` returns true if `path` exists.

fn mkdir(path string)
`mkdir` creates a new directory with the specified path.

fn rm(path string)
`rm` removes file in `path`.

fn unzip(path, out string)

fn basedir(path string) string

fn filename(path string) string

fn home_dir() string
`home_dir` returns path to user's home directory

<script src="/script.js"></script>
