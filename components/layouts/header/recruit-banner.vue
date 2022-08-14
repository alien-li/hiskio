<template>
  <a
    v-if="!profile"
    class="hidden tablet:block mr-4"
    href="https://www.1111.com.tw/corp/73081297/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="https://frontend.f5ezcode.in/img/header-recruit.3e1f6fd.png"
      :alt="$t('common.recruiting')"
      loading="lazy"
    >
  </a>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('auth', ['profile']),
  },
};
</script>

<style lang="postcss" scoped>
img {
  width: 80px;
  height: auto;
}
</style>
