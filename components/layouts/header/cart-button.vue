<template>
  <button class="text-gray-400 hover:text-primary-400 mr-4">
    <FillCart />
  </button>
</template>

<script>
import { FillCart } from '@/components/icons';

export default {
  name: 'CartButton',
  components: {
    FillCart,
  },
};
</script>
