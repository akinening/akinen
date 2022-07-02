<template>
  <section class="section">
    <div class="content">
      <img class="hero" src="/ogp.png" alt="hero image" loading="lazy">
      <ul class="category">
        <li class="category__item">
          <nuxt-link to="/UX">#UXデザイン</nuxt-link>
        </li>
        <li class="category__item">
          <nuxt-link to="/UI">#UIデザイン</nuxt-link>
        </li>
        <li class="category__item">
          <nuxt-link to="/Strategy">#事業戦略</nuxt-link>
        </li>
        <li class="category__item">
          <nuxt-link to="/Management">#マネジメント</nuxt-link>
        </li>
      </ul>
      <ul class="cards">
        <li v-for="item in data" :key="item.slug" class="card">
          <a :href="item.path">
            <img class="card__img" :src="item.top_image" alt="" loading="lazy">
            <div class="card__title">{{ item.title }}</div>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
    async asyncData({ $content }) {
      const query = $content({ deep: true }).sortBy("created_at");
      const list = await query.fetch();
      const data = list.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      });
      data.reverse();
      return {
        data,
      };
    }
})
</script>

<style lang="stylus">
.hero
  width calc(100% - 24px)
  margin 24px 12px
  border-radius 10px

  @media (max-width: 768px)
    width 100%
    margin 0
    border-radius 0

.category
  display flex
  flex-direction row
  padding 0
  margin 20px 0 40px

  @media (max-width: 768px)
    flex-direction column

  &__item
    list-style none
    width 100%

    & > a
      display block
      text-align center
      padding 20px
      margin 0 10px
      font-weight bold
      color #27273F
      border-radius 10px
      background-color #f2f2f7
      transition all 0.2s ease

      &:hover
        color white !important
        background-color #27273F

      @media (max-width: 768px)
        padding 12px
        margin 4px 16px
</style>