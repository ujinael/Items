<template>
  <div class="app">
    <RouterView></RouterView>
  </div>
</template>
<script setup lang="ts">
import { RouterView } from "vue-router";
</script>
<style lang="scss">
@import "@/assets/main.scss";
.app {
  cursor: url("@/assets/simpli_cursor.svg");
}
</style>
