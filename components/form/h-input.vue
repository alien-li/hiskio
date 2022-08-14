<template>
  <div
    class="h-input flex w-full h-10 py-2 px-2.5  rounded-md overflow-hidden"
    :class="{
      'border': isError,
      'border-red-500': isError,
    }"
  >
    <div class="flex items-center w-full">
      <span
        v-if="$slots.prefix"
        class="inline-flex w-6 h-6 mr-2 items-center justify-center"
      >
        <slot name="prefix" />
      </span>
      <input
        ref="input"
        class="w-full h-full bg-transparent text-sm flex-auto"
        :type="type"
        :value="computedValue"
        v-bind="$attrs"
        @input="onInput"
        @keyup.enter="$emit('enter')"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Input',
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: [Number, String],
      default: '',
    },
    isError: Boolean,
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
  methods: {
    setValue(event) {
      if (event.target) {
        this.computedValue = event.target.value;
      }
    },
    onInput(event) {
      this.$nextTick(() => this.setValue(event));
    },
  },
};
</script>

<style lang="postcss" scoped>
.h-input {
  background: #fafafa;
}

[data-error="true"] {
  ::placeholder {
    color: $red;
  }
}

svg {
  color: #bfbfbf;
}
</style>
