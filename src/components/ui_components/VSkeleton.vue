<template>
  <div class="skeleton">
    <div class="skeleton__item first"></div>
    <div
      class="skeleton__item"
      :style="{ width: `${item}px` }"
      v-for="item in skeletonItems"
      :key="item"
    ></div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  skeletonItems: Array<number>;
}>();
</script>
<style scoped lang="scss">
.skeleton {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  &__item.first {
    height: 26px;
    width: 190px;
    margin-bottom: 8px;
  }

  &__item {
    height: 10px;
    background: linear-gradient(
      90deg,
      #3c3c3c 0%,
      #444444 51.04%,
      #333333 100%
    );
    border-radius: 4px;
  }
}
</style>
