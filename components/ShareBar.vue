<template>
  <section class="right">
    <div class="share">
      <p>SHARE</p>
      <a href="http://twitter.com/share?url=https://times.akinen.com&hashtags=times_akinen" class="btn">
        <img class="btn__icon" src="/SNS/twitter.png" alt="Twitterでシェアする">
      </a>
      <a href="https://www.facebook.com/share.php?u=https://times.akinen.com" class="btn">
        <img class="btn__icon" src="/SNS/facebook.png" alt="Facebookでシェアする">
      </a>
    </div>
  </section>
</template>

<style lang="stylus">
.right
  z-index 100
  position fixed
  top 0
  right 0
  height 100vh

  @media (max-width: 768px)
    display none

.share
  display flex
  flex-direction column
  text-align center
  margin 20px
  background-color #F2F2F7
  border-radius 10px

.btn
  padding 10px 20px

  &:hover
    opacity 0.6

  &__icon
    width 48px
    height 48px
</style>
