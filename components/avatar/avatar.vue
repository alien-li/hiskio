<template>
  <div class="w-8 h-8 rounded-full overflow-hidden bg-gray-300">
    <img
      :src="avatar"
      :alt="name"
      loading="lazy"
    >
  </div>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      default: '',
    },
  },
};
</script>
