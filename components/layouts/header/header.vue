<template>
  <header class="sticky w-full inset-0 shadow-sm px-4">
    <nav class="flex h-full mx-auto max-w-full items-center">
      <nuxt-link
        to="/"
        class="mr-2"
        data-logo=""
      >
        <Logo class="w-66px tablet:w-100px" />
      </nuxt-link>

      <RecruitBanner />

      <TextItem
        class="text-gray-700 hover:text-primary-400"
        href="https://hiskio.com/"
        is-external
      >
        <FillGrid />
        {{ $t('common.course') }}
      </TextItem>

      <SearchBar />

      <TextItem
        class="text-gray-600 hover:font-semibold"
        href="https://hiskio.com/teach"
        is-external
      >
        {{ $t('common.want-teach') }}
      </TextItem>

      <TextItem
        class="text-gray-600 hover:font-semibold"
        href="https://hiskio.com/account/courses?tab=continue"
        is-external
      >
        {{ $t('common.my-learning') }}
      </TextItem>

      <CartButton />

      <Avatar
        v-if="isLogin"
        class="hidden tablet:inline-flex"
        :avatar="profile.avatar"
        :name="profile.username"
      />

      <SignInButtons v-else />

      <MenuButton />
    </nav>
  </header>
</template>

<script>
import { mapState } from 'vuex';
import { FillGrid } from '@/components/icons';
import Avatar from '@/components/avatar/avatar.vue';
import Logo from '../logo.vue';
import TextItem from './text-item.vue';
import RecruitBanner from './recruit-banner.vue';
import SearchBar from './search-bar.vue';
import CartButton from './cart-button.vue';
import MenuButton from './menu/menu-button.vue';
import SignInButtons from './sign-in-buttons.vue';

export default {
  components: {
    Logo,
    FillGrid,
    Avatar,
    TextItem,
    RecruitBanner,
    SearchBar,
    CartButton,
    MenuButton,
    SignInButtons,
  },
  computed: {
    ...mapState('auth', {
      profile: (state) => state.profile,
      isLogin: (state) => state.profile !== null,
    }),
  },
};
</script>

<style lang="postcss" scoped>
header {
  height: var(--header-height);
  z-index: 2;
}

nav {
  width: 1280px;
}
</style>
