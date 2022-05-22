<template>
  <section class="nav">
    <a class="logo" href="/">#times</a>
    <div class="menu">
      <a class="menu__link" href="/">TOP</a>
      <a class="menu__link" href="">このサイトについて</a>
      <a class="menu__link" href="">外部リンク</a>

      <h2 class="menu__title">デザイン</h2>
      <a class="menu__link" href="">📱  UIデザイン</a>
      <a class="menu__link" href="">👤  UXデザイン</a>
      <a class="menu__link" href="">🍥  その他</a>

      <h2 class="menu__title">PM</h2>
      <a class="menu__link" href="">💭  事業戦略</a>
      <a class="menu__link" href="">📈  データ・KPI</a>
      <a class="menu__link" href="">‍💼  マネジメント</a>
      <a class="menu__link" href="">🍥  その他</a>

      <h2 class="menu__title">技術</h2>
      <a class="menu__link" href="">💻  Vue.js</a>
      <a class="menu__link" href="">⛰️️  Nuxt.js</a>
      <a class="menu__link" href="">🍥  その他</a>
    </div>
  </section>
</template>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css2?family=Zilla+Slab:ital,wght@0,500;0,600;1,600&display=swap')

.nav
  height 100%
  margin-right 40px

  @media (max-width: 768px)
    width auto
    height auto
    margin 0

.logo
  display block
  font-family 'Zilla Slab'
  font-weight bold
  font-style italic
  font-size 48px
  margin-bottom 24px

  @media (max-width: 768px)
    margin 0

.menu
  color #666

  @media (max-width: 768px)
    display none

  &__link
    display block
    font-size 14px
    margin-bottom 8px

  &__title
    font-size 20px
    margin 20px 0 8px
</style>
