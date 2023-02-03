<template>
  <div class="article-list" v-if="!projects.pending">
    <article v-for="project in projects.data"
             :key="project._path"
             :style="`--angle:${getAngle()}deg`">
      <div class='article-content'>
        <nuxt-link :to='project._path'>{{ project.title }}</nuxt-link>
        <p>{{ project.description }}</p>
      </div>
    </article>
  </div>
</template>

<script setup>
const projects = reactive(await useAsyncData('is', ()=>queryContent('is')
      .only(['title', 'description', '_path'])
      .sort({'updatedAt': -1})
      .find()));

function getAngle(){
  return ((Math.random() - 0.5) * 3);
}

</script>

<style scoped>
@media screen and (min-width: 640px){
  .article-list{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    grid-auto-rows: 200px;
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

@media screen and (prefers-reduced-motion: no-preference) {
  article {
    transition: transform 0.3s ease-in-out;
    transform: rotateZ(var(--angle, 0));
  }

  .article-content {
    transition: transform 0.3s ease-in-out;
    transform: rotateZ(calc(var(--angle, 0) * -1));
  }
}
</style>
