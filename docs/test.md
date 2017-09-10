---
layout: ui
title: 扩展-颜色
---

实际中，仅依靠CSS常用的颜色功能并不能迅速帮我们锁定需要的颜色。特别在很多时候，设计师在设计图中并没有明显标注某个控件其他状态颜色值时，我们不得不依靠设计工具，获取相近色。可这种方法并不是理想方法，很多时候让你的颜色（特别对颜色不感冒的同学）偏离你的主题色。

## 目录


<!-- toc -->

## Sass的颜色函数

在Sass中提供了一系列有关于HSL的颜色函数，以供大家使用，其中常用的有saturation、lightness、adjust-hue、lighten、darken等等。接下来我们先来了解一下HSL颜色函数包括哪些具体的函数，所起的作用是什么。

| `hsl($hue,$saturation,$lightness)` |
|---|
|通过色相（hue）、饱和度(saturation)和亮度（lightness）的值创建一个颜色|

| `hsla($hue,$saturation,$lightness,$alpha)` |
|---|
|通过色相（hue）、饱和度(saturation)、亮度（lightness）和透明（alpha）的值创建一个颜色|

| `hue($color)` |
|---|
|从一个颜色中获取色相（hue）值|

| `saturation($color)` |
|---|
|从一个颜色中获取饱和度（saturation）值|

| `lightness($color)` |
|---|
|从一个颜色中获取亮度（lightness）值|

| `adjust-hue($color,$degrees)` |
|---|
|通过改变一个颜色的色相值，创建一个新的颜色|

| `lighten($color,$amount)` |
|---|
|通过改变颜色的亮度值，让颜色变亮，创建一个新的颜色|

| `darken($color,$amount)` |
|---|
|通过改变颜色的亮度值，让颜色变暗，创建一个新的颜色|

| `saturate($color,$amount)` |
|---|
|通过改变颜色的饱和度值，让颜色更饱和，从而创建一个新的颜色|

| `desaturate($color,$amount)` |
|---|
|通过改变颜色的饱和度值，让颜色更少的饱和，从而创建出一个新的颜色|

| `grayscale($color)` |
|---|
|将一个颜色变成灰色，相当于desaturate($color,100%)|

| `complement($color)` |
|---|
|返回一个补充色，相当于adjust-hue($color,180deg)|

| `invert($color)` |
|---|
|反回一个反相色，红、绿、蓝色值倒过来，而透明度不变|

## 示例

```sass
// 通过h200,s30%，l60%创建一个颜色
$color: hsl(200,30%,60%);
$color: #7aa3b8;

// 通过h200,s30%，l60%,a80%创建一个颜色
$color: hsla(200,30%,60%,.8);
$color: rgba(122, 163, 184, 0.8);

// 得到#7ab颜色的色相值
$color: hue(#7ab);
$color: 195 deg;

// 得到#7ab颜色的饱和度值
$color: saturation(#7ab);
$color: 33.33333%

// 得到#7ab颜色的亮度值
$color: lightness(#7ab);
$color: 60%;

// 改变#f36颜色的色相值为150deg
$color: adjust-hue(#f36,150deg);
$color: #33ff66;

// 把#f36颜色亮度提高50%
$color: lighten(#f36,50%);
$color: #ffffff;

// 把#f36颜色亮度降低50%
$color: darken(#f36,50%);
$color: #33000d;

// 把#f36颜色饱和度提高50%
$color: saturate(#f36,50%);
$color: #ff3366;

// 把#f36颜色饱和度降低50%
$color: desaturate(#f36,50%);
$color: #cc667f;

// 把#f36颜色变成灰色
$color: grayscale(#f36);
$color: #999999;

// #f36的补充色
$color: complement(#f36);
$color: #33ffcc;

// #f36的反色
$color: invert(#f36);
$color: #00cc99;

```

## 扩展阅读

> **文档地址:** [Sass基础——颜色函数](http://www.w3cplus.com/preprocessor/sass-color-function.html)