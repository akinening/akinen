<template>
  <div>
    <NavBar />
    <Nuxt />
    <ShareBar />
  </div>
</template>

<script>
import Vue from 'vue'
import NavBar from '~/components/NavBar.vue'
import ShareBar from '~/components/ShareBar.vue'
export default Vue.extend({
    components: { NavBar, ShareBar }
})
</script>