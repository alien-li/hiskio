<template>
  <div class="inline-grid mr-auto grid-flow-col items-center gap-2">
    <OutlineSearch />
    <input
      type="text"
      class="hidden tablet:block bg-transparent w-100px"
      :placeholder="$t('common.search')"
    >
  </div>
</template>

<script>
import { OutlineSearch } from '@/components/icons';

export default {
  components: {
    OutlineSearch,
  },
};
</script>

<style lang="postcss" scoped>
svg {
  color: #8c8c8c;
}
</style>
