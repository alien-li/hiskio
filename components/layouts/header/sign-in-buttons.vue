<template>
  <div class="ml-3 hidden tablet:inline-flex">
    <HButton
      size="sm"
      class="mr-3"
      variant="outline"
      @click="signIn"
    >
      {{ $t('auth.sign-in') }}
    </HButton>
    <HButton size="sm" class="mr-4" @click="signIn">
      {{ $t('auth.sign-up') }}
    </HButton>
  </div>
</template>

<script>
export default {
  components: {
    HButton: () => import('@/components/form/h-button.vue'),
  },
  methods: {
    signIn() {
      this.$store.dispatch('auth/setState', {
        isSignInModalActive: true,
      });
    },
  },
};
</script>
