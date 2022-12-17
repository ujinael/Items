<template>
  <VComponentWrapper>
    <div class="v_aside">
      <div class="img_wrapper">
        <img class="img_content" src="@/assets/images/Img_blur.png" alt="" />
      </div>
      <VSkeleton :skeletonItems="skeletonItems"></VSkeleton>
    </div>
  </VComponentWrapper>
</template>
<script setup lang="ts">
import VSkeleton from "@/components/ui_components/VSkeleton.vue";
import VComponentWrapper from "@/components/ui_components/VComponentWrapper.vue";
const skeletonItems = [155, 190, 170, 160, 140, 80];
</script>
<style scoped lang="scss">
.v_aside {
  padding: 14px;
  width: 236px;
}

.skeleton {
  display: flex;
  margin-top: 26px;
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
