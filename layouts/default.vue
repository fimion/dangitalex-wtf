<script>
export default {
  head() {
    return {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: true,
        },
        {
          rel: 'preconnect',
          href: 'https://cdn.jsdelivr.net/',
          crossorigin: true,
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Gluten:wght@100..900&family=Grandstander:ital,wght@0,100..900;1,100..900&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/comic-mono@0.0.1/index.css',
        }
      ]
    }
  }
}
</script>

<template>
  <div class='default-layout'>
    <header>
      <h1>
        <nuxt-link to='/'>Alex's Very Professional Portfolio</nuxt-link>
      </h1>
    </header>
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<style scoped>
@media screen and (prefers-reduced-motion: no-preference) {
  header{
    transform: rotateZ(0.5deg) translateY(3px);
  }
}

</style>

<style lang="scss">
html, body {
  font-family: 'Grandstander', sans-serif;
  background-color: darkcyan;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Gluten', cursive;
}

code, code[class*="language-"], pre[class*="language-"]{
  font-family: 'Comic Mono', monospace;
}

a{
  color: #00f;
  &:hover,&:visited,&:link,&:focus{
    color: #00f;
  }
}

header{
  a{
    color: #fff;
    filter: drop-shadow(0 2px 5px #004a4a) drop-shadow(0 2px 1px #003a3a);
    &:hover,&:visited,&:link,&:focus{
      color: #fff;
    }
  }
}



*:not(pre)>code{
  background-color: #bde7fd;
}

article{
  margin-bottom: 8px;
  border-radius: 10px;
  border: 5px deeppink ridge;
  background-color: white;
  padding: 15px;
  filter: drop-shadow(0 2px 5px #004a4a)  drop-shadow(0 2px 1px #003a3a);
}
</style>
