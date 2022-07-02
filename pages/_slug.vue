<template>
  <section class="section">
    <div class="content">
      <ul class="cards">
        <li v-for="item in data" :key="item.slug" class="card">
          <a :href="item.path">
            <img class="card__img" :src="item.top_image" alt="" width="100%" height="auto" loading="lazy">
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
    async asyncData({ $content, params }) {
      const query = $content({ deep: true }).sortBy("created_at");
      const list = await query.fetch();
      const article = list.filter(post => post.tags[0] === params.slug)
      const data = article.sort(function (a, b) {
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
.body-class
  margin 0
  overscroll-behavior-y none

a, a:visited
  color #333
  text-decoration none

// 共通ここまで

// .section

.content
  margin-left 264px
  margin-right 116px
  max-width 960px

  @media (max-width: 768px)
    margin 0
    width 100%

.cards
  display flex
  flex-direction row
  flex-wrap wrap
  padding 0

  @media (max-width: 768px)
    flex-direction column

.card
  list-style none
  width calc(50% - 24px)
  background-color white
  filter drop-shadow(0 0 4px rgba(0,0,0,0.16))
  border-radius 10px
  box-sizing border-box
  overflow hidden
  margin 12px
  transition all 0.2s ease

  @media (max-width: 768px)
    width fit-content
  
  &:hover
    filter drop-shadow(0 0 2px rgba(0,0,0,0.08))

  &__img
    width 100%

  &__title
    margin 16px
    font-weight bold
</style>