<template>
  <ul class="grid grid-cols-2 w-full mb-6">
    <li
      :data-active="tab === 'sign-in'"
      @click="tab = 'sign-in'"
    >
      <span class="mb-2">
        {{ $t('auth.sign-in') }}
      </span>
    </li>
    <li
      :data-active="tab === 'sign-up'"
      @click="tab = 'sign-up'"
    >
      <span class="mb-2">
        {{ $t('auth.sign-up') }}
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  data: () => ({
    tab: 'sign-in',
  }),
};
</script>

<style lang="postcss" scoped>
ul {
  display: flex;
}

li {
  @apply
    flex
    flex-col
    flex-auto
    items-center
    text-3xl
    font-medium
    leading-normal
    cursor-pointer;
  color: #d9d9d9;
  &::after {
    @apply w-1/2 h-1 opacity-0;
    content: "";
    background: #178fac;
  }
}

[data-active] {
  color: #178fac;
  &::after {
    @apply opacity-100;
  }
}
</style>
