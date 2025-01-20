import { defineStore } from "pinia";
import { ref } from "vue";


export const useAnimationStore = defineStore('animation', () => {
  const transitionName = ref('slide-right');

  const setTransitionName = (name: string) => {
    transitionName.value = name;
  }

  return { transitionName, setTransitionName }
})