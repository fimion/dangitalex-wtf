<template>
  <NuxtLayout>
    <ArticleCard>
      <h1>{{ page.title }}</h1>
      <p>{{ page.description }}</p>
      <ContentDoc />
    </ArticleCard>
  </NuxtLayout>
</template>
<script setup>
const {page} = useContent()
</script>
