<template>
  <section class="section">
    <NavBar />
    <div class="content">
      <ul class="cards">
        <li class="card" v-for="item in data" :key="item.slug">
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
        // const list = await $content({ deep: true }).fetch();
        // return { list };
      const query = $content({ deep: true }).sortBy("created_at");
      const list = await query.fetch();
      const data = list.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      });
      data.reverse();
      return {
        data,
      };
    },
    components: { NavBar }
})
</script>

<style lang="stylus">
.body-class
  margin 0

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
  flex-wrap wrap
  padding 0

  @media (max-width: 768px)
    flex-direction column

.card
  list-style none
  width calc(50% - 32px)
  background-color white
  filter drop-shadow(0 0 4px rgba(0,0,0,0.16))
  border-radius 10px
  box-sizing border-box
  overflow hidden
  margin 16px

  @media (max-width: 768px)
    width fit-content

  &__img
    width 100%

  &__title
    margin 16px
    font-weight bold
</style>