<template>
  <form @submit.prevent="onSubmit" class="v_confirm">
    <input
      class="v_confirm__input"
      placeholder="Введите количество"
      type="text"
      v-model.number="deletedCount"
    />
    <sub class="validator_message" v-if="tooMuchCount"
      >Не более {{ item.count }}</sub
    >
    <div class="buttons">
      <VButton @click.stop="emit('cancel')">Отмена</VButton>
      <VButton
        class="accept"
        :disabled="tooMuchCount || !notString"
        type="submit"
        >Подтвердить</VButton
      >
    </div>
  </form>
</template>
<script setup lang="ts">
import type { Item } from "@/stores/items_store/entities/item.entity";
import VButton from "@/components/ui_components/VButton.vue";
import { computed, ref } from "vue";
const props = defineProps<{
  item: Item;
}>();
const emit = defineEmits<{
  (event: "cancel"): void;
  (event: "onConfirm", count: number): void;
}>();
const notString = computed(() => {
  return typeof deletedCount.value !== "string";
});
const tooMuchCount = computed(() => {
  return props.item.count < deletedCount.value;
});
const deletedCount = ref<number | string>("");
const onSubmit = () => {
  if (tooMuchCount.value || typeof deletedCount.value === "string") return;
  emit("onConfirm", deletedCount.value);
};
</script>
<style scoped lang="scss">
.v_confirm {
  background-color: var(--color-background-soft);
  border-top: var(--common-border);
  border-left: var(--common-border);
  width: 250px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  &__input {
    display: inline-block;
    width: 210px;
    height: 40px;
    left: 0px;
    top: 0px;
    background: #262626;
    border: 1px solid #4d4d4d;
    border-radius: 4px;
    color: #ffffff;
    padding: 12px;
  }
  &__input:focus-visible {
    outline: none;
  }
}
.buttons {
  display: flex;
  gap: 1rem;
}
.validator_message {
  color: red;
}
</style>
