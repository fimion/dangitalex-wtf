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
          href: 'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100..900;1,100..900&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap'
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
      <slot />
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

/* @link https://utopia.fyi/type/calculator?c=320,18,1.2,2048,30,1.25,7,0,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12 */

:root {
  --step-0: clamp(1.13rem, calc(0.99rem + 0.69vw), 1.88rem);
  --step-1: clamp(1.35rem, calc(1.17rem + 0.92vw), 2.34rem);
  --step-2: clamp(1.62rem, calc(1.38rem + 1.21vw), 2.93rem);
  --step-3: clamp(1.94rem, calc(1.63rem + 1.59vw), 3.66rem);
  --step-4: clamp(2.33rem, calc(1.92rem + 2.08vw), 4.58rem);
  --step-5: clamp(2.80rem, calc(2.26rem + 2.71vw), 5.72rem);
  --step-6: clamp(3.36rem, calc(2.66rem + 3.51vw), 7.15rem);
  --step-7: clamp(4.03rem, calc(3.12rem + 4.55vw), 8.94rem);
  --ff-serif: "Lora", serif;
  --ff-sans-serif: "Lato", sans-serif;
}

html, body {
  font-family: var(--ff-sans-serif);
  background-color: darkcyan;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--ff-serif);
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
