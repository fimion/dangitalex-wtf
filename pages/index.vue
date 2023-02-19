<script setup>
const projects = reactive(await useAsyncData('is', ()=>queryContent('is')
  //.only(['title', 'description', '_path'])
  .sort({'publishDate': -1})
  .find()));

useHead({
  title:"Alex's Very Professional Portfolio",
})
</script>
<template>
  <NuxtLayout>
<!--  <article>
    <pre>{{projects.data}}</pre>
  </article>-->
  <ArticleList v-if="!projects.pending" :articles="projects.data" />
  </NuxtLayout>
</template>
<style scoped>

</style>
