<template>
  <v-text-field
      :key="props.input.formId"
      :label="props.input.label"
      :value="props.input.value"
      :placeholder="props.input.placeholder"
      :type="props.input.type"
      class="mb-4"
  ></v-text-field>
</template>
<script lang="ts" setup>
  const props = defineProps({
    input: {
      type: Object
    }
  })
  const emits = defineEmits(['change-value'])
</script>