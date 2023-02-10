<script setup>
const props = defineProps({
  angled:{
    type:Boolean,
  }
})

const angle = computed(()=>(props.angled ? {'--angle':`${((Math.random() - 0.5) * 3)}deg`}:{}))
</script>
<template>
  <article v-bind="$attrs" :style="{...angle}">
    <slot name="head" />
    <div class="article-content">
      <slot />
    </div>
  </article>
</template>
<style scoped>
article{
  max-width: 60ch;
}
@media screen and (prefers-reduced-motion: no-preference) {
  article {
    transition: transform 0.3s ease-in-out;
    transform: rotateZ(var(--angle, 0));
  }

  .article-content {
    transition: transform 0.3s ease-in-out;
    transform: rotateZ(calc(var(--angle, 0) * -0.4));
  }
}
</style>
