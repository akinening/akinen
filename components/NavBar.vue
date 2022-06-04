<template>
  <section class="nav">
    <a href="/">
      <img class="logo" src="/times-icon.svg" alt="">
    </a>
    <div class="menu">
      <a class="menu__link" href="/">TOP</a>
      <a class="menu__link" href="">このサイトについて</a>
      <a class="menu__link" href="https://akinen.com">Akinen.com</a>

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
      <a class="menu__link" href="https://zenn.dev/012">🧘  Zenn（外部リンク）</a>
    </div>

    <img class="hamburger" src="/menu.svg">
  </section>
</template>

<style lang="stylus">
.nav
  position relative
  height 100%
  margin 0 20px 0 20px

  @media (max-width: 768px)
    width auto
    height auto
    margin 0

.logo
  height 40px
  margin 24px 0

  @media (max-width: 768px)
    margin 24px 0 0 20px

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

.hamburger
  display none

  @media (max-width: 768px)
    position absolute
    display block
    top 32px
    right 24px
</style>
