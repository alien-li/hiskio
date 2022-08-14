<template>
  <button class="inline-flex tablet:hidden text-gray-400 cursor-pointer">
    <OutlineMenu
      class="w-5 h-5"
    />
  </button>
</template>

<script>
import { mapState } from 'vuex';
import { OutlineMenu } from '@/components/icons';

export default {
  components: {
    OutlineMenu,
  },
  computed: {
    ...mapState('auth', ['profile']),
  },
};
</script>
