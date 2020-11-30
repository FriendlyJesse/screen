<template>
  <div class="test" style="height: 100%; width: 100%">
    <JiangsuMapWarning />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import JiangsuMapWarning from '@/components/JiangsuMapWarning/index.vue'

export default defineComponent({
  components: {
    JiangsuMapWarning
  }
})
</script>
