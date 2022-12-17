<template>
  <button class="v_button">
    <slot></slot>
  </button>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.v_button {
  display: inline-block;
  font-size: 14px;
  line-height: 17px;
  border-radius: 8px;
  border: 1px solid #ffffff;
  color: #2d2d2d;
  padding: 8px 15px;
  box-shadow: -2px -2px 8px #faf9f956, 2px 2px 8px #faf9f956;

  cursor: pointer;
}
.v_button:disabled {
  background: #9a9898;
  color: #444444;
}
.accept {
  background: #fa7272;
  border: 1px solid #fa7272;
  color: #ffffff;
  box-shadow: -2px -2px 8px #fa727256, 2px 2px 8px #fa727256;
}
.v_button.accept:disabled {
  background: #969595;
  color: #444444;
}
</style>
