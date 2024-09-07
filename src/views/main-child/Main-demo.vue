<template>
  <Child msg="A msg from Main component!" @clickChild="clickEven">
    <!-- The # syntax is a shorthand for v-slot. -->
    <template #header1>
      <div class="header">Main header!</div>
    </template>
  </Child>
  <div class="content">This is main content!</div>
  <div>String from child: {{ resultStr }}</div>
  <div>Object from child: {{ resultObj }}</div>
</template>
<script setup>
import Child from './Child-demo.vue'
import { ref } from 'vue'
import { reactive } from 'vue'
const resultStr = ref('')
const resultObj = reactive({})
const clickEven = (val) => {
  resultStr.value = val.str
  resultObj.title = val.title
  resultObj.content = val.content
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
