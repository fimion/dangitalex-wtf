<template>
  <NuxtLayout>
    <article>
      <h1>{{ page.title }}</h1>
      <p>{{ page.description }}</p>
      <ContentDoc />
    </article>
  </NuxtLayout>
</template>
<script setup>
const {page} = useContent()
</script>
