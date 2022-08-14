<template>
  <component
    :is="tag"
    :to="to"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
    class="rounded px-4 transition-colors duration-150 ease-out"
    :class="rootClasses"
    :data-variant="variant"
    :data-color-scheme="colorScheme"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'Button',
  inheritAttrs: false,
  props: {
    to: {
      type: [String, Object],
      default: null,
    },
    size: {
      type: String,
      default: 'md',
    },
    variant: {
      type: String,
      default: 'solid',
    },
    colorScheme: {
      type: String,
      default: 'primary',
    },
    isOutlined: Boolean,
    isExternal: Boolean,
  },
  computed: {
    tag({ to, isDisabled }) {
      const { href } = this.$attrs;

      if (isDisabled) {
        return 'button';
      }

      if (href) {
        return 'a';
      }

      if (to) {
        return 'nuxt-link';
      }

      return 'button';
    },
    rootClasses({ size }) {
      let classes = [];

      switch (size) {
        case 'sm':
          classes = [...classes, 'h-8', 'text-sm'];
          break;
        default:
          classes = [...classes, 'h-10', 'text-base'];
          break;
      }

      return classes;
    },
    isDisabled() {
      const { disabled = false } = this.$attrs;
      return disabled !== false;
    },
  },
};
</script>

<style lang="postcss" scoped>
a, button {
  color: var(--button-color);
  border-color: var(--button-border-color);
  border-width: var(--button-border-width);
  background-color: var(--button-background-color);

  &:hover {
    background-color: var(--button-background-hover-color);
  }

  --button-border-width: 0px;

  &[data-color-scheme="red"] {
    --button-color: var(--colors-white);
    --button-border-color: var(--colors-red-500);
    --button-background-color: var(--colors-red-500);
    --button-background-hover-color: var(--colors-red-400);
    &[data-variant="outline"] {
      --button-color: var(--colors-red-500);
      --button-border-color: var(--colors-red-500);
      --button-background-hover-color: var(--colors-red-300);
    }
  }

  &[data-color-scheme="red-light"] {
    --button-color: var(--colors-red-500);
    --button-border-color: var(--colors-red-300);
    --button-background-color: var(--colors-red-300);
    --button-background-hover-color: var(--colors-red-200);
    &[data-variant="outline"] {
      --button-border-color: var(--colors-red-500);
      --button-background-hover-color: var(--colors-red-300);
    }
  }

  &[data-color-scheme="primary"] {
    --button-color: var(--colors-white);
    --button-border-color: var(--colors-primary-400);
    --button-background-color: var(--colors-primary-400);
    --button-background-hover-color: var(--colors-primary-300);
    &[data-variant="outline"] {
      --button-color: var(--colors-primary-400);
      --button-border-color: var(--colors-primary-400);
      --button-background-hover-color: var(--colors-gray-200);
    }
  }

  &[data-variant="outline"] {
    --button-border-width: 1px;
    --button-background-color: var(--colors-white);
  }
}
</style>
