<template>
  <div class="country-category">
    <div
      class="category"
      v-for="(item, index) in data" :key="item"
      @click="onClick(index)"
    >
      <div
        class="selected"
        :style="{background: index === selected ? color[0] : 'none'}">
        {{item}}
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, onUnmounted } from 'vue'
export default defineComponent({
  name: 'TransformCategory',
  props: {
    data: Array,
    color: {
      type: Array,
      default () {
        return ['rgb(140, 160, 173)', 'rgb(80, 80, 80)']
      }
    }
  },
  setup (props) {
    const selected = ref(0)
    let task

    const onClick = (index) => {
      selected.value = index
    }

    const update = () => {
      task && clearInterval(task)
      task = setInterval(() => {
        if (selected.value >= props.data.length - 1) {
          selected.value = 0
        } else {
          selected.value++
        }
      }, 2000)
    }

    onMounted(update)
    onUnmounted(() => {
      task && clearInterval(task)
    })

    return {
      selected,
      onClick
    }
  }
})
</script>

<style lang="scss" scoped>
  .country-category {
    display: flex;
    width: 100%;
    height: 100%;

    .category {
      flex: 1;
      background: rgb(53, 57, 65);
      font-size: 24px;
      color: rgb(144, 160, 174);

      .hovered {
        background: rgb(80, 80, 80);
      }

      .selected {
        background: rgb(140, 160, 173);
        color: #fff;
        &:hover {
          background: rgb(80, 80, 80) !important;
        }
      }

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
