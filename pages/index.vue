<template>
  <div class="home-page flex flex-col items-center justify-center w-full h-full">
    <section
      v-if="carts && carts.length > 0"
      class="carts-section"
    >
      <div class="section-content">
        <CartList />
        <CartSummary />
      </div>
    </section>
    <section class="fundraising-section">
      <div class="section-content">
        <Heading>
          {{ $t('common.fundraising-courses') }}
        </Heading>
        <CourseCard
          v-for="course in courses"
          :key="course.id"
          :course="course"
        />
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import CartList from '@/components/payment/cart-list.vue';
import CartSummary from '@/components/payment/cart-summary.vue';
import CourseCard from '@/components/course/course-card.vue';
import Heading from '@/components/common/heading.vue';

export default {
  name: 'Home',
  components: {
    Heading,
    CartList,
    CourseCard,
    CartSummary,
  },
  async asyncData({ app, error }) {
    const { course: courseApi } = app.$apis;
    let courses;

    await courseApi.getFundraisingCourses()
      .then((items) => {
        courses = items.map((item) => ({
          id: item.id,
          title: item.title,
          salePrice: item.price,
          listPrice: item.fixed_price,
          prices: item.prices,
          image: item.image,
          lecturers: item.lecturers,
          processRate: parseInt((item.consumers / item.fundraising_tickets) * 100, 10),
          duration: item.duration,
          estimateDuration: item.estimate_duration,
        }));
      })
      .catch((e) => error({ statusCode: e?.response?.status || 500 }));

    return { courses: courses || [] };
  },
  computed: {
    ...mapState('payment', {
      carts: (state) => state.carts,
    }),
  },
};
</script>

<style lang="postcss" scoped>
section {
  width: 100%;
  padding: 60px 30px;
  @media screen and (max-width: 1024px) {
    padding: 60px 16px;
  }
}

.section-content {
  width: 1168px;
  max-width: 100%;
  margin: 0 auto;
}

.carts-section {
  .section-content {
    display: grid;
    grid-template-columns: calc(66% - 8px) calc(34% - 8px);
    gap: 16px;
    @media screen and (max-width: 1024px) {
      grid-template-columns: 100%;
    }
  }
}

.fundraising-section {
  h1 {
    margin: 0 0 4px;
    grid-column: 1 / -1;
  }
  .section-content {
    display: grid;
    grid-template-columns: repeat(auto-fill, 280px);
    gap: 16px;
    @media screen and (max-width: 640px) {
      justify-content: center;
    }
  }
}
</style>
