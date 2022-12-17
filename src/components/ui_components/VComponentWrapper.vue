<template>
  <div class="v_component_wrapper">
    <slot> </slot>
  </div>
</template>
<style lang="scss" scoped>
.v_component_wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: var(--color-background-soft);
  border-radius: var(--common-border-radius);
  border: var(--common-border);
}
</style>
