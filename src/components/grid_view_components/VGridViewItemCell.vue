<template>
  <div class="v_grid_item__wrapper" :style="itemStyles">
    <div
      class="v_grid_item"
      @dragstart="onDragStart($event, item)"
      draggable="true"
      @dragend="dragEnd"
      :class="{ moving: dragMode }"
    >
      <VDoubleSquare
        class="squares"
        :width="54"
        :color="item.color"
      ></VDoubleSquare>
      <div class="counter">
        {{ item.count }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import VDoubleSquare from "@/components/ui_components/VDoubleSquare.vue";
import type { Item } from "@/stores/items_store/entities/item.entity";
import { computed, ref } from "vue";
const props = defineProps<{
  item: Item;
}>();

const itemStyles = computed(() => {
  const gridArea = `${props.item.position.y}/${props.item.position.x}/${
    props.item.position.y + 1
  }/${props.item.position.x + 1}`;
  return {
    gridArea,
  };
});
const dragMode = ref(false);
const onDragStart = (event: DragEvent, item: Item) => {
  if (!event.dataTransfer) return;
  dragMode.value = true;
  event.dataTransfer.dropEffect = "move";
  event.dataTransfer.effectAllowed = "copyMove";
  event.dataTransfer.setData("itemId", item.id + "");
};
const dragEnd = () => {
  dragMode.value = false;
};
</script>
<style scoped lang="scss">
.v_grid_item__wrapper {

  position: relative;
  height: 100%;
  width: 100%;
}
.v_grid_item {

  height: 100%;
  width: 100%;
  box-sizing: border-box;
}
.v_grid_item.moving {
  border-radius: var(--common-border-radius);
}
.squares {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.counter {
  position: absolute;
  right: 0;
  bottom: 0;
  border-top: var(--common-border);
  border-left: var(--common-border);
  border-top-left-radius: 6px;
  font-size: 10px;
  line-height: 12px;
  padding: 2px 4px;
}
</style>
