<script setup>
import Child from './Slot-child-demo.vue'
// import { ref } from 'vue'
// const showModal = ref(false)
</script>
<template>
  <Child>
    <template #header1>
      <h1>This is the header content!</h1>
    </template>
  </Child>
</template>
