<template>
  <div class="test" style="height: 400px">
    <scroll-list
      :config="config"
    />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    const config = ref({})
    const headerData = ['姓名', '年龄', '月薪']
    const headerStyle = [{ color: 'red', width: '100px' }]
    const headerColor = 'white'
    const rowStyle = [{ color: 'blue' }]
    const rowBg = ['rgb(240, 240, 240)', 'rgb(255, 255, 255)']
    const aligns = ['center', 'center', 'right']
    const headerFontSize = 24
    const rowFontSize = 20
    const rowColor = 'black'
    const data = []

    for (let i = 0; i < 10; i++) {
      data.push([
        '同学' + (i + 1),
        Math.floor(Math.random() * 10 + 20),
        Math.floor(Math.random() * 10000 + 20000)
      ])
    }

    config.value = {
      headerData,
      headerStyle,
      headerBg: 'rgb(80, 80, 80)',
      headerHeight: '40',
      headerIndex: true,
      headerFontSize,
      headerColor,
      rowStyle,
      rowBg,
      rowFontSize,
      rowColor,
      aligns,
      data
    }

    return {
      config
    }
  }
})
</script>
