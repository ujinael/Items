<template>
  <VComponentWrapper>
    <div class="v_search_bar">
      <div class="close_btn">&times;</div>
      <input class="v_input" type="text" />
    </div>
  </VComponentWrapper>
</template>
<script setup lang="ts">
import VComponentWrapper from "../components/ui_components/VComponentWrapper.vue";
</script>
<style scoped lang="scss">
.v_search_bar {
  position: relative;
  padding: 18px;
}
.v_input {
  padding: 0.25rem;
  display: inline-block;
  border: 1px solid transparent;
  background-clip: content-box;
  color: #ffffff5c;
  width: 699px;
  height: 36px;
  background: linear-gradient(90deg, #3c3c3c 0%, #444444 51.04%, #333333 100%);
  border-radius: 12px;
}
.v_input:focus {
  outline: none;
}
.close_btn {
  position: absolute;
  line-height: 12px;
  top: 4px;
  right: 14px;
  line-height: 24px;
  font-size: x-large;
  color: #ffffff;
  cursor: pointer;
}
</style>
