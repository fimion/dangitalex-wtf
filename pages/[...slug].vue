<template>
  <article>
    <h1>{{ page.title }}</h1>
    <p>{{ page.description }}</p>
    <ContentDoc />
  </article>
</template>
<script setup>
const {page} = useContent()
</script>
