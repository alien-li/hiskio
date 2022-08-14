<template>
  <div class="cart-list">
    <Heading>{{ $t('payment.carts') }}</Heading>
    <ul>
      <li class="list-head">
        <span>{{ $t('payment.item') }}</span>
        <span>{{ $t('payment.sale-price') }}</span>
        <span>{{ $t('payment.checkout-amount') }}</span>
      </li>
      <li
        v-for="course in carts"
        :key="course.id"
        class="list-item"
      >
        <div class="course-info">
          <div class="thumbnail">
            <img
              :src="course.image"
              :alt="course.title"
              loading="lazy"
            >
          </div>
          <h2>{{ course.title }}</h2>
        </div>
        <div class="list-price">
          <del>${{ course.listPrice | formatNumber }}</del>
          <span>${{ course.salePrice | formatNumber }}</span>
        </div>
        <div class="sale-price">
          ${{ course.salePrice | formatNumber }}
        </div>
        <button @click="remove(course)">
          <FillTrash />
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { FillTrash } from '@/components/icons';
import Heading from '@/components/common/heading.vue';
import formatNumber from '@/utils/filters/format-number';

export default {
  filters: {
    formatNumber,
  },
  components: {
    Heading,
    FillTrash,
  },
  computed: {
    ...mapState('payment', {
      carts: (state) => state.carts,
    }),
  },
  methods: {
    remove(course) {
      this.$toggleCartItem(course);
    },
  },
};
</script>

<style lang="postcss" scoped>
.cart-list {
  width: 100%;
}

h2 {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: #595959;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  margin: 0 20px 0 12px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    margin: 0 0 0 8px;
  }
}

ul {
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  background: var(--colors-white);
}

li {
  align-items: center;
  &:not(:last-child) {
    border-bottom: 1px solid #d9d9d9;
  }
}

del {
  color: #bfbfbf;
  font-size: 14px;
  line-height: 20px;
  @media screen and (max-width: 768px) {
    display: none;
  }
}

img {
  object-fit: cover;
}

button {
  color: #bfbfbf;
  margin: 0 0 0 auto;
  @media screen and (max-width: 768px) {
    grid-area: remove-button;
  }
}

.list-head {
  display: grid;
  grid-template-columns: 50% 30% 1fr fit-content(100%);
  font-size: 16px;
  line-height: 23px;
  color: #8C8C8C;
  padding: 12px 20px;
  @media screen and (max-width: 768px) {
    display: none;
  }
}

.list-item {
  display: grid;
  grid-template-columns: 50% 30% 1fr fit-content(100%);
  padding: 12px;
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr fit-content(100%);
    grid-template-areas:
      "course-info remove-button"
      "list-price sale-price";
    gap: 10px 6px;
  }
}

.thumbnail {
  width: 120px;
  height: 68px;
  flex: 0 0 auto;
  border-radius: 6px;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    width: 64px;
    height: 32px;
  }
}

.course-info {
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    grid-area: course-info;
    align-items: flex-start;
  }
}

.list-price {
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    grid-area: list-price;
  }
  span {
    font-size: 18px;
    line-height: 26px;
    color: #8C8C8C;
    @media screen and (max-width: 768px) {
      font-size: 13px;
      line-height: 19px;
    }
  }
}

.sale-price {
  font-size: 22px;
  font-weight: 500;
  line-height: 32px;
  color: #595959;
  @media screen and (max-width: 768px) {
    font-size: 15px;
    line-height: 22px;
    grid-area: sale-price;
  }
}
</style>
