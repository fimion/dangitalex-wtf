import { defineNuxtConfig } from 'nuxt/config';
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxthq/studio'],
  content: {
    documentDriven: true
  },
  nitro:{
    preset:'netlify',
  }
})
