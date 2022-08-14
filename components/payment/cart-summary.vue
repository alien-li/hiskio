<template>
  <div class="cart-summary">
    <Heading>{{ $t('payment.subtotal') }}</Heading>
    <div class="summary-card">
      <p>${{ price | formatNumber }}</p>
      <HButton color-scheme="red">
        {{ $t('payment.checkout') }}
      </HButton>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import sumBy from 'lodash/sumBy';
import HButton from '@/components/form/h-button.vue';
import Heading from '@/components/common/heading.vue';
import formatNumber from '@/utils/filters/format-number';

export default {
  filters: {
    formatNumber,
  },
  components: {
    Heading,
    HButton,
  },
  computed: {
    ...mapState('payment', {
      price: (state) => sumBy(state.carts, 'salePrice'),
    }),
  },
};
</script>

<style lang="postcss" scoped>
.summary-card {
  border-radius: 6px;
  padding: 20px 16px;
  background: var(--colors-white);
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.05);
}

p {
  font-size: 28px;
  font-weight: 500;
  line-height: 41px;
  text-align: right;
  color: #434343;
}

button {
  width: 100%;
  margin: 16px 0 0;
}
</style>
