<template>
  <component
    :is="tag"
    class="hidden tablet:inline-grid grid-flow-col gap-1 mr-4 items-center transition-colors ease-out duration-150 cursor-pointer"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    isExternal: Boolean,
  },
  computed: {
    tag() {
      const { href } = this.$attrs;
      const { to, disabled } = this;

      if (disabled) {
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
  },
};
</script>
