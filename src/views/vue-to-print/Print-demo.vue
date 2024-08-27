<script setup lang="ts">
// #region script
import { useVueToPrint } from 'vue-to-print'
import { reactive, ref } from 'vue'
import ComponentToPrint from './ComponentToPrint.vue'

const componentRef = ref()
const state = reactive({ text: '=== Parent text ===' })

const { handlePrint } = useVueToPrint({
  content: componentRef,
  documentTitle: 'AwesomeFileName',
  removeAfterPrint: true
})
// #endregion script
</script>

// #region template
<template>
  <ion-button @click="handlePrint">Print</ion-button>
  <div ref="componentRef">
    <ComponentToPrint :text="state.text" />
  </div>
</template>

<style scoped></style>
// #endregion template
