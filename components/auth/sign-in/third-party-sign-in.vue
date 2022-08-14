<template>
  <div class="grid gap-2 w-full mb-6">
    <button>
      <ColorFacebook />
      <span>
        {{ $t('auth.sign-in-with-facebook') }}
      </span>
    </button>
    <button>
      <ColorGoogle />
      <span>
        {{ $t('auth.sign-in-with-google') }}
      </span>
    </button>
    <button>
      <ColorGithub />
      <span>
        {{ $t('auth.sign-in-with-github') }}
      </span>
    </button>
    <button>
      <ColorLinkedin />
      <span>
        {{ $t('auth.sign-in-with-linkedin') }}
      </span>
    </button>
  </div>
</template>

<script>
import {
  ColorFacebook,
  ColorGoogle,
  ColorGithub,
  ColorLinkedin,
} from '@/components/icons';

export default {
  components: {
    ColorFacebook,
    ColorGoogle,
    ColorGithub,
    ColorLinkedin,
  },
};
</script>

<style lang="postcss" scoped>
button {
  @apply grid grid-flow-col justify-center items-center gap-3 w-full py-2.5 border rounded-md;
  color: #595959;
}

span {
  @apply text-left;
  width: 150px;
}
</style>
