<template>
  <div class="default-layout flex flex-auto flex-col">
    <Header />
    <main class="flex flex-auto w-full items-center justify-center">
      <nuxt />
    </main>
    <SignInModal />
  </div>
</template>

<script>
import Header from '@/components/layouts/header/header.vue';
import SignInModal from '@/components/auth/sign-in/sign-in-modal.vue';

export default {
  components: {
    Header,
    SignInModal,
  },
};
</script>

<style lang="postcss" scoped>
.default-layout {
  background: #f5f5f5;
  & > main {
    z-index: 1;
    min-height: calc(100vh - var(--header-height));
  }
}
</style>
