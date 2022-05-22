<template>
  <article>
    <img :src="post.top_image">
    <h1>{{ post.title }}</h1>
    <!-- <time v-html="post.updated_at.split('T')[0]"></time>

    <div v-for="tag in post.tags.split(',')" :key="tag">
        <a :href="'/tags/' + tag" class="tag">{{ tag }}</a>
    </div> -->

    aaa
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
      post: await $content(slug).fetch()
    }
  },
})
</script>