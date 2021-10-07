<script>
export default {
  head(){
    return {
      link:[
        {
          rel:"preconnect",
          href:"https://fonts.googleapis.com",
        },
        {
          rel:"preconnect",
          href:"https://fonts.gstatic.com",
          crossorigin:true,
        },
        {
          rel:"stylesheet",
          href:"https://fonts.googleapis.com/css2?family=Gluten:wght@100..900&family=Grandstander:ital,wght@0,100..900;1,100..900&display=swap",
        },
      ]
    }
  }
}
</script>

<template>
  <div class="default-layout">
    <header>
        <h1><nuxt-link to="/">Alex's Very Professional Portfolio</nuxt-link></h1>
    </header>
    <main>
        <Nuxt />
    </main>
  </div>
</template>

<style>
html,body{
  font-family: 'Grandstander', sans-serif;
}
h1,h2,h3,h4,h5,h6{
    font-family: 'Gluten', cursive;
  }
</style>