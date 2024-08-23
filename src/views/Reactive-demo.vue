<template>
  <div class="about">
    <h1>This is About</h1>
    <div v-html="state.htmlContent"></div>
  </div>
</template>
<script setup>
import { reactive } from 'vue'
const state = reactive({
  htmlContent: '<strong>hello</strong><br/>123456'
})
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
