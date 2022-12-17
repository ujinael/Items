<template>
  <VComponentWrapper>
    <VModal v-model="mode">
      <VDetailItem
        @on-delete="store.deleteItem"
        v-if="selectedItem"
        :item="selectedItem"
      ></VDetailItem>
    </VModal>
    <div class="v_grid_view">
      <div
        class="v_grid_view__cell"
        v-for="(cell, index) of cells"
        :key="index"
        :style="cellStyles(cell)"
        @drop="onDrop($event, cell)"
        @dragenter.prevent
        @dragover.prevent
      ></div>
      <VGridViewItemCell
        class="v_grid_view__cell"
        v-for="item in items"
        :key="item.id"
        :item="item"
        @click="onItemClick(item)"
      ></VGridViewItemCell>
    </div>
  </VComponentWrapper>
</template>
<script setup lang="ts">
import { useItemsStore } from "@/stores/items_store/items.store";
import { storeToRefs } from "pinia";
import VComponentWrapper from "@/components/ui_components/VComponentWrapper.vue";
import VGridViewItemCell from "@/components/grid_view_components/VGridViewItemCell.vue";
import { onMounted, ref } from "vue";
import { GridCell } from "@/stores/items_store/entities/cell.entity";
import VModal from "@/components/ui_components/VModal.vue";
import { useToggle } from "@/composition/toggle";
import type { Item } from "@/stores/items_store/entities/item.entity";
import VDetailItem from "@/components/grid_view_components/VDetailItem.vue";
const { mode, toggleMode } = useToggle();
const store = useItemsStore();
const { items, selectedItem } = storeToRefs(store);
const cells = ref<GridCell[]>([]);
const initCells = () => {
  const array = [...new Array(5).keys()];
  array.forEach((x) => {
    array.forEach((y) => {
      cells.value.push(
        new GridCell({
          gridRowStart: y + 1,
          gridRowEnd: y + 2,
          gridColumnStart: x + 1,
          gridColumnEnd: x + 2,
        })
      );
    });
  });
};
const cellStyles = (cell: GridCell) => {
  return {
    ...cell.position,
  };
};
const onDrop = (event: DragEvent, cell: GridCell) => {
  if (!event.dataTransfer) return;

  const id = +event.dataTransfer.getData("itemId");
  const item = items.value.find((i) => i.id === id);
  if (item) {
    item.position.x = cell.position.gridColumnStart;
    item.position.y = cell.position.gridRowStart;
    store.saveItemsToStorage();
  }
};
const onItemClick = (item: Item) => {
  toggleMode();
  store.selectItem(item);
};
onMounted(() => {
  initCells();
  store.fetchItems();
});
</script>
<style scoped lang="scss">
.v_grid_view {
  height: 100%;
  width: 100%;
  display: grid;
  gap: 1px;
  background-color: #4d4d4d;
  grid-template-columns: repeat(5, 1fr);

  &__cell {
    background-color: var(--color-background-soft);
    width: 100%;
    height: 100%;
  }
}
</style>
