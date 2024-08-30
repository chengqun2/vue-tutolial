<template>
  <Child msg="A msg from Main component!" @clickChild="clickEven">
    <template #header1>
      <div class="header">Main header!</div>
    </template>
  </Child>
  <div class="content">This is main content!</div>
  <div>Content from child: {{ result }}</div>
</template>
<script setup>
import Child from './Child-demo.vue'
import { ref } from 'vue'
const result = ref('')
const clickEven = (val) => {
  result.value = val.content
}
</script>
<style scoped>
.header {
  color: green;
}

.content {
  background-color: green;
  font-size: 1rem;
}
</style>
