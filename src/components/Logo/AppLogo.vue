<template>
  <div class="app-logo">
    <div class="flex-x-center" :style="imgDivStyle">
      <img src="@/assets/img/icon.png" :style="imgStyle" alt="logo" />
    </div>
    <h1 class="label" v-show="showLabel">PokeAdmin</h1>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  showLabel: {
    type: Boolean,
    default: () => true
  },
  size: {
    type: Number,
    default: 50
  },
  paddingLeft: {
    type: Number,
    default: 0
  }
})
const imgDivStyle = computed(() => {
  return {
    paddingLeft: !props.showLabel ? '0' : props.paddingLeft + 'px',
    flex: 0
  }
})
const imgStyle = computed(() => {
  return {
    width: props.size + 'px',
    height: props.size + 'px'
  }
})
</script>

<style lang="less" scoped>
.app-logo {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px 0;
  .img {
    padding-left: 20px;
    flex: 0;
  }
  .label {
    font-weight: 600;
    padding-left: 10px;
    flex: 1;
  }
}
</style>
