<template>
  <label class="relative flex text-sm cursor-pointer">
    <input
      v-model="computedValue"
      type="checkbox"
      class="hidden"
      :value="nativeValue"
      :true-value="trueValue"
      :false-value="falseValue"
      v-bind="$attrs"
    >
    <span
      class="flex items-center mr-1.5 justify-center w-5 h-5 rounded-sm flex-none bg-primary-400"
      data-check=""
    >
      <OutlineCheck class="absolute text-white w-4 h-4" />
    </span>
    <slot />
  </label>
</template>

<script>
import { OutlineCheck } from '@/components/icons';

export default {
  name: 'Checkbox',
  components: {
    OutlineCheck,
  },
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number, Boolean, Function, Object, Array],
      default: '',
    },
    nativeValue: {
      type: [String, Number, Boolean, Function, Object, Array],
      default: '',
    },
    trueValue: {
      type: [String, Number, Boolean, Function, Object, Array],
      default: true,
    },
    falseValue: {
      type: [String, Number, Boolean, Function, Object, Array],
      default: false,
    },
  },
  data() {
    return {
      newValue: this.value,
    };
  },
  computed: {
    computedValue: {
      get() {
        return this.newValue;
      },
      set(value) {
        this.newValue = value;
        this.$emit('input', value);
      },
    },
  },
  watch: {
    value(value) {
      this.newValue = value;
    },
  },
};
</script>

<style lang="postcss" scoped>
label {
  color: #8C8C8C;
}

[data-check] {
  svg {
    @apply absolute opacity-0;
  }
}

input:checked {
  + [data-check] {
    svg {
      @apply opacity-100;
    }
  }
}
</style>
