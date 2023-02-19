<template>
  <NuxtLayout>
    <ArticleCard class="article">
      <h1>{{ page.title }}</h1>
      <ContentDoc />
    </ArticleCard>
    <ArticleList v-if="!projects.pending" :articles="projects.data" />
  </NuxtLayout>
</template>
<script setup>
import ArticleList from "~/components/ArticleList.vue";
const {page} = useContent()
const route = useRoute();
const projects = reactive(await useAsyncData('tags-is-'+JSON.stringify(route.params.slug), ()=>queryContent('is')
  .where({tags:{$contains:route.params.slug}})
  .sort({'publishDate': -1})
  .find()));
</script>
<style scoped>
  .article{
    width: 100%;
  }
</style>
