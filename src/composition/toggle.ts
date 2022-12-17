import { ref } from "vue";

export const useToggle = () => {
  const mode = ref(false);
  const toggleMode = () => {
    mode.value = !mode.value;
  };
  return {
    mode,
    toggleMode,
  };
};
