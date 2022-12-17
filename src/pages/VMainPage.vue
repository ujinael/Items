<template>
  <div class="page">
    <VAside />
    <VGridView></VGridView>
    <VSearchBar class="search_view" />
  </div>
</template>
<script setup lang="ts">
import VAside from "@/views/VAsideView.vue";
import VSearchBar from "@/views/VSearchBarView.vue";
import VGridView from "@/views/VGridView.vue";
</script>
<style scoped lang="scss">
.page {
  height: 100%;
  padding: 32px;
  display: grid;
  grid-template-columns: min-content 1fr;
  gap: 24px;
}
.search_view {
  grid-area: 2/1/3/3;
}
</style>
