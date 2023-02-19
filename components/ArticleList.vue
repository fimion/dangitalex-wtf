<template>
  <div class="article-list">
    <ArticleCard angled
                 v-for="article in (articles)"
                 :key="article._path">
      <h2><nuxt-link :to='article._path'>{{ article.title }}</nuxt-link></h2>
      <p>{{ article.description }}</p>
      <TagList :tags="article.tags" />
    </ArticleCard>
  </div>
</template>

<script>
import TagList from "~/components/TagList.vue";

export default {
  name: "ArticleList",
  components: { TagList },
  props:{
    articles:{
      type:Object,
      required: true,
    }
  }
};
</script>

<style scoped>
@media screen and (min-width: 640px){
  .article-list{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
  }
}



.article-list{
  --angle: 0;
}


</style>
