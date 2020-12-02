<template>
  <div class="rotating-earch">
    <vue-echarts :options="options" />
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import 'echarts-gl'

export default defineComponent({
  name: 'RotatingEarth',
  setup () {
    const options = ref({})

    const update = () => {
      options.value = {
        globe: {
          environment: require('./images/star-bg.jpg'), // 背景环境贴图
          baseTexture: require('./images/datav-gl-texture.jpg'), // 基础纹理贴图
          heightTexture: require('./images/datav-gl-texture.jpg'), // 高度纹理贴图
          displacementScale: 0.04, // 地球顶点位置
          shading: 'realistic', // 地球着色效果
          postEffect: {
            enable: true
          },
          light: {
            main: {
              intensity: 5,
              shadow: true
            },
            ambient: {
              intensity: 1
            }
          }
        }
      }
    }

    onMounted(() => {
      update()
    })

    return {
      options
    }
  }
})
</script>

<style lang="scss" scoped>
.rotating-earch {
  width: 100%;
  height: 100%;
}
</style>
