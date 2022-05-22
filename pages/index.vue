<template>
  <section class="section">
    <NavBar />
    <div class="content">
      <ul class="cards">
        <li class="card" v-for="item in list" :key="item.slug">
          <a :href="item.path">
            <img class="card__img" :src="item.top_image" alt="">
            <div class="card__title">{{ item.title }}</div>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
import NavBar from '~/components/NavBar.vue'
export default Vue.extend({
    async asyncData({ $content }) {
        const list = await $content({ deep: true }).fetch();
        return { list };
    },
    components: { NavBar }
})
</script>

<style lang="stylus">
a, a:visited
  color #333
  text-decoration none

.section
  display flex
  flex-direction row

  @media (max-width: 768px)
    flex-direction column

.content
  margin 0 auto
  max-width 960px

.cards
  display flex
  flex-direction row
  padding 0

  @media (max-width: 768px)
    flex-direction column

.card
  list-style none
  width 100%
  background-color white
  filter drop-shadow(0 0 4px rgba(0,0,0,0.16))
  border-radius 10px
  overflow hidden
  margin 16px

  &__img
    width 100%

  &__title
    margin 16px
    font-weight bold
</style>