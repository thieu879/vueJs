<template>
  <div class="base-input">
    <slot name="prefix"></slot>
    <input
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      @input="handleInput"
    />
    <slot name="suffix"></slot>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  modelValue: {
    type: [String, Number],
    required: true
  }
});

const emit = defineEmits(['update:modelValue']);

const handleInput = (event) => {
  emit('update:modelValue', event.target.value);
};
</script>

<style scoped>
.base-input {
  display: flex;
  align-items: center;
}

.base-input input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}
</style>
