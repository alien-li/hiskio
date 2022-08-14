<template>
  <Modal :is-active="isActive" @close="close">
    <div
      class="bg-white bg-no-repeat bg-top bg-cover max-w-full"
      data-modal-content=""
    >
      <div
        class="flex flex-col items-center mt-10 mb-7 mx-auto max-w-full"
        data-modal-body=""
      >
        <logo
          class="mb-7"
          data-logo=""
        />

        <TabList />
        <ThirdPartySignIn />
        <SignInForm />
      </div>
    </div>
  </Modal>
</template>

<script>
import { mapState } from 'vuex';
import Logo from '@/components/layouts/logo.vue';
import Modal from '@/components/modal/modal.vue';
import TabList from './tab-list.vue';
import SignInForm from './sign-in-form.vue';
import ThirdPartySignIn from './third-party-sign-in.vue';

export default {
  components: {
    Logo,
    Modal,
    TabList,
    SignInForm,
    ThirdPartySignIn,
  },
  computed: {
    ...mapState('auth', {
      isActive: ({ state }) => state.isSignInModalActive,
    }),
  },
  methods: {
    close() {
      this.$store.dispatch('auth/setState', {
        isSignInModalActive: false,
      });
    },
  },
};
</script>

<style lang="postcss" scoped>
[data-logo] {
  width: 120px;
}

[data-modal-content] {
  width: 450px;
  background-image: url("https://frontend.f5ezcode.in/images/login.png");
}

[data-modal-body] {
  width: 320px;
}
</style>
