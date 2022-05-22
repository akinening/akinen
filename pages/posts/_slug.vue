<template>
  <article class="content">
    <img class="top-img" :src="post.top_image">
    <h1>{{ post.title }}</h1>
    <!-- <time v-html="post.updated_at.split('T')[0]"></time>

    <div v-for="tag in post.tags.split(',')" :key="tag">
        <a :href="'/tags/' + tag" class="tag">{{ tag }}</a>
    </div> -->

    <NuxtContent :document="post" />
  </article>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  async asyncData({ $content, params }) {
    // URIから変数を取得 /posts/{_slug}
    const slug = params.slug
    return {
      // content/posts/{_slug}.mdのマークダウンを取得
      post: await $content('posts/' + slug).fetch()
    }
  },
})
</script>

<style lang="stylus">
.content
  margin 0 auto
  max-width 960px

.top-img
  width 100%

.article
  &__img
    width 100%
    filter drop-shadow(0 0 4px rgba(0,0,0,0.2))
</style>