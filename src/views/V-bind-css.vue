<template>
  <div class="text">v-bind() in CSS</div>
</template>

<script>
export default {
  data() {
    return {
      color: 'grey',
      fontSize: '2rem'
    }
  }
}
</script>

<style>
.text {
  color: v-bind(color);
  font-size: v-bind(fontSize);
}
</style>
