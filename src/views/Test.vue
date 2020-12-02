<template>
  <div class="test" style="height: 100%; width: 100%">
    <order-map />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import OrderMap from '@/components/OrderMap/index.vue'

export default defineComponent({
  components: {
    OrderMap
  }
})
</script>
