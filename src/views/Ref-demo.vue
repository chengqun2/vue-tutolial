<template>
  <div class="about">
    <h1>This is Ref</h1>
    <div>{{ state }}</div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
const state = ref('hello')
onMounted(() => {
  state.value = 'www'
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
