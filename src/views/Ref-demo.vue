<template>
  <div class="about">
    <h1>This is Ref</h1>
    <div>{{ state }}</div>
  </div>
</template>
<script setup>
/**
 * When you use ref in Vue 3, it returns a reactive object.
 * This object contains a single property, value,
 * which holds the actual value you passed to ref.
 * Vue automatically tracks changes to this value property
 * and updates the DOM accordingly.
 */
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
