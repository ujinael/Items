<template>
  <div class="v_detail">
    <VModal position="bottom" layer="two" :no-close="true" v-model="mode">
      <VDeleteConfirm
        @cancel="toggleMode()"
        @on-confirm="onConfirm"
        :item="item"
      ></VDeleteConfirm>
    </VModal>
    <VDoubleSquare :width="130" :color="item.color"></VDoubleSquare>
    <VSkeleton
      :skeleton-items="[...new Array(6).keys()].map((_) => 180)"
    ></VSkeleton>
    <div class="buttons">
      <VButton class="accept" @click="toggleMode">Удалить</VButton>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Item } from "@/stores/items_store/entities/item.entity";
import VDoubleSquare from "@/components/ui_components/VDoubleSquare.vue";
import VButton from "@/components/ui_components/VButton.vue";
import VSkeleton from "@/components/ui_components/VSkeleton.vue";
import { useToggle } from "@/composition/toggle";
import VModal from "@/components/ui_components/VModal.vue";
import VDeleteConfirm from "./VDeleteConfirm.vue";
const props = defineProps<{
  item: Item;
}>();

const emit = defineEmits<{
  (event: "onDelete", item: Item): void;
}>();
const { mode, toggleMode } = useToggle();
const onConfirm = (deletedCount: number) => {
  const deletedItem = new Item(
    props.item.id,
    props.item.count - deletedCount,
    props.item.position,
    props.item.color
  );
  emit("onDelete", deletedItem);
  toggleMode();
};
</script>
<style scoped lang="scss">
.v_detail {
  height: 100vh;
  width: 250px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
  background-color: var(--color-background-soft-blur);
  backdrop-filter: blur(6px);
  border-left: var(--common-border);
}
</style>
