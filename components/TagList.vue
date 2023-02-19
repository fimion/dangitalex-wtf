<template>
  <ul class="tag-list">
    <li class="tag" v-for="tag in tags" :key="tag"><nuxt-link :href="`/tag/${tag}`">#{{tag}}</nuxt-link></li>
  </ul>
</template>

<script>
export default {
  name: "TagList",
  props:{
    tags:{
      type:Array,
      required: true,
    }
  }
};
</script>

<style scoped>
.tag-list{
  list-style: none;
  padding-inline-start: 0;
  display: flex;
  gap: 1ch;
}
.tag{

}
</style>
