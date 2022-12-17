<template>
  <div class="v_double_squares" :style="componentStyles">
    <div
      class="v_double_squares__square bottom"
      :style="bottomSquareStyles"
    ></div>
    <div class="v_double_squares__square top" :style="topSquareStyles"></div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  width?: number;
  color?: string;
}>();
const componentStyles = computed(() => {
  return {
    width: `${props.width ?? 54}px`,
    height: `${props.width ?? 54}px`,
  };
});
const bottomSquareStyles = computed(() => {
  return {
    ...squareStyles.value,
    background: props.color ?? "#AA9765",
  };
});
const topSquareStyles = computed(() => {
  return {
    ...squareStyles.value,
    background: `${props.color ?? "#AA9765"}35`,
  };
});
const squareStyles = computed(() => {
  return {
    width: `${(props.width ?? 54) / 1.125}px`,
    height: `${(props.width ?? 54) / 1.125}px`,
  };
});
</script>
<style scoped lang="scss">
.v_double_squares {
  position: relative;
  &__square {
    position: absolute;
  }
  &__square.bottom {
    bottom: 0;
    left: 0;
    z-index: 300;
  }
  &__square.top {
    backdrop-filter: blur(6px);
    position: absolute;
    top: 0;
    right: 0;
    z-index: 301;
  }
}
</style>
