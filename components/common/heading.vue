<template>
  <component :is="tag">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'h1',
    },
  },
};
</script>

<style lang="postcss" scoped>
h1 {
  font-size: 22px;
  font-weight: 500;
  line-height: 32px;
  color: #434343;
  margin: 0 0 20px;
}
</style>
