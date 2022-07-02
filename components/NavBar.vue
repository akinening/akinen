<template>
  <section class="nav">
    <a href="/">
      <img class="logo" src="/times-icon.svg" alt="">
    </a>
    <div class="menu">
      <nuxt-link class="menu__link" to="/">TOP</nuxt-link>
      <a class="menu__link" href="https://akinen.com">Akinen.com</a>

      <h2 class="menu__title">デザイン</h2>
      <!-- <nuxt-link class="menu__link" to="/UX">👤  UXデザイン</nuxt-link>
      <nuxt-link class="menu__link" to="/UI">📱  UIデザイン</nuxt-link>
      <nuxt-link class="menu__link" to="/その他">🍥  その他</nuxt-link> -->
      <nuxt-link class="menu__link" to="/UX">
        <img class="icon" src="/icon/person.svg" alt="Person">
        <p>UXデザイン</p>
      </nuxt-link>

      <nuxt-link class="menu__link" to="/UI">
        <img class="icon" src="/icon/iphone.svg" alt="Person">
        <p>UIデザイン</p>
      </nuxt-link>

      <nuxt-link class="menu__link" to="/その他">🍥  その他</nuxt-link>

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
  z-index 100
  position fixed
  top 0
  left 0
  width 200px
  height 100vh
  padding 0 20px
  background-color #F2F2F7

  @media (max-width: 768px)
    width 100%
    height 96px
    margin 0
    padding 0
    background none

.logo
  height 40px
  margin 48px 0 24px

  @media (max-width: 768px)
    display none

  &:hover
    opacity 0.8

.menu
  color #666

  @media (max-width: 768px)
    display none

  &__link
    display flex
    flex-direction row
    align-items center
    font-size 14px
    padding 0 8px
    border-radius 4px
    height 40px

    &:hover
      background-color #e2e2f0

  &__title
    font-size 20px
    margin 20px 0 8px

.hamburger
  display none

  @media (max-width: 768px)
    position absolute
    display block
    top 16px
    right 16px
    padding 12px
    border-radius 10px
    background-color rgba(white, 0.5)
    backdrop-filter blur(6px)

.icon
  height 20px
  margin-right 4px

.label
  margin 0
</style>
