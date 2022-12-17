<template>
  <teleport to="#app">
    <transition name="slide-fade">
      <div
        class="v_modal"
        :class="modalClasses"
        v-if="value"
        @click="value = false"
      >
        <div class="v_modal__body" :class="modalBodyClasses">
          <div @click.stop class="v_modal__content">
            <slot> </slot>
          </div>
          <button v-if="!noClose" @click="value = false" class="close_btn">
            &times;
          </button>
        </div>
      </div>
    </transition>
  </teleport>
</template>
<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  noClose?: boolean;
  modelValue: boolean;
  layer?: "one" | "two";
  position?: "top" | "bottom" | "center";
}>();
const emit = defineEmits(["update:modelValue"]);
const value = computed<boolean>({
  get() {
    return props.modelValue;
  },
  set(v) {
    emit("update:modelValue", v);
  },
});
const modalClasses = computed(() => {
  return {
    "layer-one": props.layer === "one" || !props.layer,
    "layer-two": props.layer === "two",
  };
});
const modalBodyClasses = computed(() => {
  return {
    "flex-end": props.position === "bottom" || !props.position,
    "flex-start": props.position === "top",
    "flex-center": props.position === "center",
  };
});
</script>
<style scoped lang="scss">
.v_modal {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: end;
  &__body {
    display: flex;
    flex-direction: column;
  }
  &__content {
    margin-top: 2rem;
    height: fit-content;
  }
}
.flex-start {
  justify-content: start;
}
.flex-end {
  justify-content: end;
}
.flex-center {
  justify-content: center;
}
.layer-one {
  z-index: var(--modal-layer-one);
}
.layer-two {
  z-index: var(--modal-layer-two);
}
.close_btn {
  background-color: transparent;
  border: 1px solid transparent;
  color: var(--color-text);
  display: inline-block;
  position: absolute;
  right: 10px;
  top: 0;
  font-size: xx-large;
  line-height: 32px;
  cursor: pointer;
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-in;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(200px);
  opacity: 0;
}
</style>
