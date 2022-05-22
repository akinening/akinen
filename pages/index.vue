<template>
  <div class="content">
    <ul>
      <li class="card" v-for="item in list" :key="item.slug">
        <a :href="item.path">
          <img class="card__img" :src="item.top_image" alt="">
          <div>{{ item.title }}</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  async asyncData({ $content }) {
    const list = await $content({ deep: true }).fetch()
    return { list }
  },
})
</script>

<style lang="stylus">
.content
  margin 0 auto
  max-width 960px

.card
  width 100%
  list-style none

  &__img
    width 100%
</style>