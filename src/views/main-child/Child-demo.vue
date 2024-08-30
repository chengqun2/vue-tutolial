<template>
  <slot name="header1">
    <div class="header">Child header</div>
    <div class="header">This child content will not display, because of the slot.</div>
  </slot>
  <div class="content">This is child component: {{ msg }}</div>
  <div class="button">
    <button @click="clickChild">OK</button>
  </div>
</template>
<script setup>
const props = defineProps({
  msg: String
})
import { defineEmits } from 'vue'
// 使用defineEmits创建名称，接受一个数组
const emit = defineEmits(['clickChild'])
const clickChild = () => {
  let param = {
    content: 'child-content'
  }
  //传递给父组件
  emit('clickChild', param)
}
</script>
<style scoped>
.header {
  color: red;
}

.content {
  background-color: red;
  font-size: 2rem;
}
</style>
