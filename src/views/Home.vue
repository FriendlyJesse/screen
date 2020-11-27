<template>
  <div class="home">
    <auto-container
      :options="{width: 3840, height: 2160}"
    >
      <div class="test">
        111
      </div>
    </auto-container>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
.test {
  color: red;
  font-size: 140px;
}
</style>
