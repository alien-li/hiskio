<template>
  <div class="flex flex-col items-center">
    <p class="mb-5 text-base text-center">
      {{ $t('auth.sign-in-with-hiskio') }}
    </p>

    <HInput
      v-model="form.account"
      class="mb-2"
      :is-error="validation.account.isValid === false"
      :placeholder="$t('auth.please-enter-account')"
      @input="validateAccount"
    >
      <FillAvatar slot="prefix" />
    </HInput>

    <HInput
      v-model="form.password"
      type="password"
      :is-error="validation.password.isValid === false"
      :placeholder="$t('auth.please-enter-password')"
      @input="validatePassword"
      @enter="signIn"
    >
      <FillLock slot="prefix" />
    </HInput>

    <HCheckbox
      v-model="form.confirm"
      class="mt-5"
      @input="validateConfirm"
    >
      <i18n path="auth.agree-tou-privacy" tag="p">
        <template #tou>
          <a
            class="underline"
            href="https://hiskio.com/user-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ $t('auth.terms-of-use') }}
          </a>
        </template>
        <template #privacy>
          <a
            class="underline"
            href="https://hiskio.com/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ $t('auth.privacy-policy') }}
          </a>
        </template>
      </i18n>
    </HCheckbox>

    <h-button
      class="w-full mt-6 mb-5"
      @click="signIn"
    >
      {{ $t('auth.sign-in') }}
    </h-button>

    <a class="mx-auto text-gray-500 text-base">
      {{ $t('auth.forgot-password') }}
    </a>
  </div>
</template>

<script>
import { FillAvatar, FillLock } from '@/components/icons';
import HInput from '@/components/form/h-input.vue';
import HButton from '@/components/form/h-button.vue';
import HCheckbox from '@/components/form/h-checkbox.vue';

export default {
  components: {
    HInput,
    HButton,
    HCheckbox,
    FillLock,
    FillAvatar,
  },
  data: () => ({
    form: {
      account: '',
      password: '',
      confirm: true,
    },
    status: 'idle',
    validation: {
      confirm: {
        isValid: null,
      },
      account: {
        isValid: null,
      },
      password: {
        isValid: null,
      },
    },
  }),
  methods: {
    signIn() {
      const { form } = this;
      const { auth } = this.$apis;

      const isValid = this.validate();

      if (!isValid) {
        this.status = 'rejected';
        return;
      }

      auth.signIn(form)
        .then(this.handleLoginSuccess)
        .catch(this.handleLoginError);
    },
    handleLoginError(error) {
      const { $toasted } = this;
      const { response = {} } = error || {};
      const { message } = response.data;

      this.status = 'rejected';

      if (!message) {
        return;
      }

      if (typeof message === 'string') {
        $toasted.show(message);
        return;
      }

      Object.keys(message).forEach((key) => {
        $toasted.show(message[key]);
      });
    },
    handleLoginSuccess(response) {
      const accessToken = response.access_token;
      const expiresIn = response.expires_in;

      this.status = 'resolved';

      this.$cookies.set('accessToken', accessToken, {
        maxAge: expiresIn,
      });

      this.$store.dispatch('auth/setToken', accessToken);

      this.$store.dispatch('auth/setState', {
        isSignInModalActive: false,
      });

      this.$store.dispatch('auth/fetchProfile');
    },
    validate() {
      const { validation } = this;

      this.status = 'pending';

      this.validateConfirm();
      this.validateAccount();
      this.validatePassword();

      return Object.keys(validation).every((key) => !!validation[key].isValid);
    },
    validateConfirm() {
      const { form, status, validation } = this;
      const { confirm } = validation;
      const message = this.$t('auth.toast.not-agree-terms');

      confirm.isValid = form.confirm;

      if (!form.confirm && status !== 'idle') {
        this.$toasted.show(message);
      }
    },
    validateAccount() {
      const { form, validation } = this;
      const { account } = validation;

      account.isValid = form.account !== '';
    },
    validatePassword() {
      const { form, validation } = this;
      const { password } = validation;

      password.isValid = form.password !== '';
    },
  },
};
</script>

<style lang="postcss" scoped>
p {
  color: #595959;
}
</style>
