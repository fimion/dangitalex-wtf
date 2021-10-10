<template>
  <div class="article-list">
    <article v-for='project in projects' :key='project.path'>
      <div class='article-content'>
        <nuxt-link :to='project.path'>{{ project.title }}</nuxt-link>
        <p>{{ project.description }}</p>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const projects = await $content('is')
      .only(['title', 'description', 'path'])
      .sortBy('updatedAt', 'desc')
      .fetch()

    return { projects }

  }
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


article{
  border-radius: 10px;
  border: 5px black ridge;
  padding: 15px;
}

article:nth-child(2n){
  transform: rotateZ(-0.5deg);
}

article:nth-child(2n)>.article-content{
  transform: rotateZ(0.5deg);
}

article:nth-child(2n-1){
  transform: rotateZ(0.7deg);
}

article:nth-child(2n-1)>.article-content{
  transform: rotateZ(-0.7deg);
}

article:nth-child(3n){
  transform: rotateZ(-0.7deg);
}

article:nth-child(3n)>.article-content{
  transform: rotateZ(0.7deg);
}


</style>
