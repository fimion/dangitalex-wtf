<script setup>
useHead({
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: "anonymous",
    },
    {
      rel: 'preconnect',
      href: 'https://cdn.jsdelivr.net/',
      crossorigin: "anonymous",
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap'
    },
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/comic-mono@0.0.1/index.css',
    }
  ]
})
</script>

<template>
  <div class='default-layout'>
    <main>
      <slot />
    </main>
  </div>
</template>
<style lang="scss">

/* @link https://utopia.fyi/type/calculator?c=320,18,1.125,2048,22,1.2,7,0,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12 */

:root {
  --step-0: clamp(1.13rem, calc(1.08rem + 0.23vw), 1.38rem);
  --step-1: clamp(1.27rem, calc(1.19rem + 0.36vw), 1.65rem);
  --step-2: clamp(1.42rem, calc(1.32rem + 0.52vw), 1.98rem);
  --step-3: clamp(1.60rem, calc(1.46rem + 0.72vw), 2.38rem);
  --step-4: clamp(1.80rem, calc(1.61rem + 0.97vw), 2.85rem);
  --step-5: clamp(2.03rem, calc(1.77rem + 1.29vw), 3.42rem);
  --step-6: clamp(2.28rem, calc(1.94rem + 1.69vw), 4.11rem);
  --step-7: clamp(2.57rem, calc(2.13rem + 2.19vw), 4.93rem);
  // Font Families
  --ff-serif: "Playfair Display", serif;
  --ff-sans-serif: "Raleway", sans-serif;
  --ff-mono: 'Comic Mono', monospace;
  // Colors
  // Blues
  --c-blue-400: #00f;
  // Cyans
  --c-cyan-100: #ccffff;
  --c-cyan-200: #b3ffff;
  --c-cyan-300: #99ffff;
  --c-cyan-400: #7FFFFF;
  --c-cyan-500: #66f1f1;
  --c-cyan-600: #4dd8d8;
  --c-cyan-700: #33bebe;
  --c-cyan-800: #1aa5a5;
  --c-cyan-900: #008b8b;
  --c-cyan-950: #004a4a;
  --c-cyan-975: #003a3a;
  // Grays
  --c-white: #ffffff;
  --c-gray-100: #e6e6e6;
  --c-gray-200: #cccccc;
  --c-gray-300: #b3b3b3;
  --c-gray-400: #999999;
  --c-gray-500: #808080;
  --c-gray-600: #666666;
  --c-gray-700: #4d4d4d;
  --c-gray-800: #333333;
  --c-gray-900: #1a1a1a;
  --c-black: #000000;

  // drop shadows
  --ds-cyan-900: drop-shadow(0 0.1em 0.25em var(--c-cyan-950)) drop-shadow(0 0.1em 0.05em var(--c-cyan-975));
}

html, body {
  font-family: var(--ff-sans-serif);
  background-color: var(--c-cyan-900);
}

h1, .h1,
h2, .h2,
h3, .h3,
h4, .h4,
h5, .h5,
h6, .h6 {
  font-family: var(--ff-serif);
}

code, code[class*="language-"], pre[class*="language-"]{
  font-family: var(--ff-mono);
}

body{
  font-size: var(--step-0);
}

h1,.h1{
  font-size: var(--step-5);
}
h2,.h2{
  font-size: var(--step-4);
}
h3,.h3{
  font-size: var(--step-3);
}
h4,.h4{
  font-size: var(--step-2);
}
h5,.h5{
  font-size: var(--step-1);
}
h6,.h6{
  font-size: var(--step-0);
}

a{
  color: var(--c-blue-400);

  &:hover,&:visited,&:link,&:focus{
    color: var(--c-blue-400);
  }
}

header{
  h1{
    text-align: center;
  }
  a{
    color: var(--c-white);
    filter: var(--ds-cyan-900);

    &:hover,&:visited,&:link,&:focus{
      color: var(--c-white);
    }
  }
}



*:not(pre)>code{
  background-color: var(--c-cyan-200);
}

article{
  margin-bottom: 0.6em;
  border-radius: 0.5em;
  border: 0.333em var(--c-gray-200) ridge;
  background-color: var(--c-white);
  padding: 0.75em;
  filter: var(--ds-cyan-900);
}
@media screen and (prefers-reduced-motion: no-preference) {
  header, .copyright{
    transform: rotateZ(0.5deg) translateY(3px);
  }
}

.body-wrapper{
  display: grid;
  place-items: center;
}

.default-layout, header, footer{
  max-width: 60ch;
  width: 100%;
}

.intro{
  max-width: 60ch;
}
.copyright{
  color:var(--c-white);
  text-align: center;
}
</style>
