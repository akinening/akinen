---
title: Vue.jsでChrome拡張機能をつくった話
created_at: 1900-01-01
tags: その他
top_image: /design/slide-2/1.png
icon: /favicon.ico
---

本スライドは<a href="https://speakerdeck.com/akinen/created-a-chrome-extension-in-vue-dot-js">「第25回ゆるはち.it: Vue.js / Nuxt.jsについてゆるく話す」の登壇資料</a>です。<br>
<br>
こんにちは、あきねんです。<br>
今までデザインの便利サイトをブックマークしていたのですが、その数が大量になり、結局使わないという問題に直面しました。<br>
そこで、Webアプリ化してホームに設定すれば、毎回開くので便利なのでは？と思い至り、Chrome拡張を作ることにしました。
<img class="article__img" src="/design/slide-2/2.png">
今回は、Vue.jsで↑のようなChrome拡張機能をつくったプロセスをご紹介します。

## ① Figmaでデザイン
まず、FigmaでUIを作成します。せっかく個人開発なので、dribbbleっぽいデザインにしてみました。

## ② Vue.jsで実装
各ページでコンポーネントはほぼ一緒なので、共通化できる部分は共通化しながら作成しました。<br>
vue-routerでルーティングを制御し、SPA(Single Page Application)に。CSSはStylusを使用しています。

## ③ Chrome拡張に対応させる

<img class="article__img" src="/design/slide-2/8.png">
<img class="article__img" src="/design/slide-2/9.png">

## ④ ストアに申請する

<img class="article__img" src="/design/slide-2/10.png">
<img class="article__img" src="/design/slide-2/11.png">

## まとめ

<img class="article__img" src="/design/slide-2/12.png">
