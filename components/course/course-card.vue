<template>
  <div class="course-card bg-white rounded-md overflow-hidden">
    <div
      class="course-thumbnail relative overflow-hidden"
    >
      <img
        :src="course.image"
        :alt="course.title"
        loading="lazy"
      >
      <div class="grid gap-3 grid-flow-col absolute z-10 right-0 bottom-0">
        <button
          class="text-white hover:text-yellow-400"
        >
          <OutlineBookmark />
        </button>
        <button
          class="hover:text-yellow-400"
          :class="[isInCarts ? 'text-yellow-400' : 'text-white']"
          @click="onCartClick"
        >
          <FillCart />
        </button>
      </div>
    </div>
    <div class="p-3 course-info">
      <h2>
        {{ course.title }}
      </h2>
      <div
        class="course-lecturer flex items-center"
      >
        <Avatar
          :avatar="course.lecturers[0].avatar"
          :name="course.lecturers[0].username"
        />
        <p>
          {{ course.lecturers[0].username }}
        </p>
      </div>
      <div class="course-status">
        <p>
          <span>剩 {{ remainingDays }} 天</span>
          <span>
            已募資 {{ course.processRate }}%
          </span>
        </p>
        <div class="course-process">
          <span :style="{ width: `${course.processRate}%` }" />
        </div>
      </div>
      <p class="course-prices">
        <span>${{ course.salePrice }}</span>
        <del>${{ course.listPrice }}</del>
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import differenceInDays from 'date-fns/differenceInDays';
import { FillCart, OutlineBookmark } from '@/components/icons';

export default {
  components: {
    Avatar: () => import('@/components/avatar/avatar.vue'),
    FillCart,
    OutlineBookmark,
  },
  props: {
    course: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState('payment', ['carts']),
    isInCarts({ carts, course }) {
      return carts.some(({ id }) => id === course.id);
    },
    remainingDays({ course }) {
      const { prices } = course;

      const intervals = prices
        .filter(({ fundraising }) => fundraising)
        .sort((a, b) => new Date(b.schedule_at) - new Date(a.schedule_at));

      return differenceInDays(
        new Date(intervals[0].schedule_at),
        new Date(),
      );
    },
  },
  methods: {
    onCartClick() {
      const { course } = this;
      this.$toggleCartItem(course);
    },
  },
};
</script>

<style lang="postcss" scoped>
.course-card {
  width: 280px;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.05);
}

.course-thumbnail {
  width: 100%;
  height: 154px;
  z-index: 1;

  img {
    object-fit: cover;
    z-index: -1;
  }

  div {
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(250, 250, 250, 0));
    padding: 8px;
    width: 100%;
    justify-content: flex-end;
  }
}

.course-info {
  height: 210px;
}

.course-lecturer {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: fit-content(100%) auto;
  gap: 10px;
  color: #8C8C8C;
  margin: 6px 0 10px;
}

.course-status {
  display: flex;
  flex-direction: column;
  margin: 0 0 10px;
  p {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #595959;
    margin: 0 0 4px;
  }
}

.course-process {
  height: 10px;
  background: #F0F0F0;
  border-radius: 6px;
  span {
    display: block;
    height: 100%;
    max-width: 100%;
    border-radius: inherit;
    background: linear-gradient(90deg, #EB6767 -0.01%, #E34A4A 99.7%);
  }
}

.course-prices {
  span {
    font-weight: 500;
    font-size: 22px;
    line-height: 27px;
    color: #434343;
    margin: 0 4px 0 0;
  }
  del {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #BFBFBF;
  }
}

h2 {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.45;
  color: #454545;
  max-height: 58px;
}
</style>
