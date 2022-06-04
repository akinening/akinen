<template>
  <section class="section">
    <NavBar />
    <article class="content">
      <img class="top-img" :src="post.top_image">
      <h1>{{ post.title }}</h1>
      <!-- <time v-html="post.updated_at.split('T')[0]"></time>

      <div v-for="tag in post.tags.split(',')" :key="tag">
          <a :href="'/tags/' + tag" class="tag">{{ tag }}</a>
      </div> -->

      <NuxtContent :document="post" />
    </article>
  </section>
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
    head() {
      return {
        title: this.post.title,
        meta: [
          // Open Graph
          { hid: 'og:title', property: 'og:title', content: this.post.title },
          { hid: 'og:description', property: 'og:description', content: '#timesは、デザイン, PM, エンジニアリングのTipsを集めたサイトです。' },
          { hid: 'og:image', property: 'og:image', content: 'https://times.akinen.com' + this.post.top_image },
          // Twitter Card
          { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
          { hid: 'twitter:site', name: 'twitter:site', content: '@_akinen' },
          { hid: 'twitter:title', name: 'twitter:title', content: this.post.title },
          { hid: 'twitter:description', name: 'twitter:description', content: '#timesは、デザイン, PM, エンジニアリングのTipsを集めたサイトです。' },
          // サムネイル指定
          { name: 'thumbnail', content: 'https://times.akinen.com' + this.post.top_image }
        ]
      }
    }
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

.top-img
  width 100%

.article
  &__img
    width 100%
    margin 20px
    filter drop-shadow(0 0 4px rgba(0,0,0,0.16))
</style>