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

  <div class="article-list" v-if="!projects.pending">
    <ArticleCard angled
                 v-for="project in projects.data"
                 :key="project._path">
        <h2><nuxt-link :to='project._path'>{{ project.title }}</nuxt-link></h2>
        <p>{{ project.description }}</p>
    </ArticleCard>
  </div>
  </NuxtLayout>
</template>
<style scoped>
@media screen and (min-width: 640px){
  .article-list{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
  }
}

@media screen and (min-width: 1024px){
  .article-list{
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}

.article-list{
  --angle: 0;
}
</style>
