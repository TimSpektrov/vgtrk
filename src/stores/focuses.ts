import {ref} from 'vue'
import { defineStore } from 'pinia'

type TFocusInput = string | null
export const useFocusedStore = defineStore('focused', () => {
  const focusInput = ref<TFocusInput>(null)
  const setFocusInputStore = (focus: TFocusInput) => focusInput.value = focus

  return { focusInput, setFocusInputStore }
})
