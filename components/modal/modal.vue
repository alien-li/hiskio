<template>
  <transition name="fade" @after-leave="deleteModal">
    <div
      v-if="isActive && isCreated"
      class="modal fixed overflow-y-auto overflow-x-hidden inset-0 z-10 text-center"
    >
      <div
        class="modal-mask fixed inset-0"
        @click="close"
      />
      <div
        class="modal-dialog my-4 mx-auto inline-flex items-center justify-center"
      >
        <div
          class="modal-content relative grid grid-cols-1 gap-6 w-full max-w-full rounded shadow bg-white"
        >
          <div class="modal-slot">
            <slot />
          </div>

          <button
            class="absolute top-6 right-6 text-gray-700"
            @click="close"
          >
            <OutlineClose />
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { OutlineClose } from '@/components/icons';

export default {
  name: 'Modal',
  components: {
    OutlineClose,
  },
  props: {
    isActive: Boolean,
  },
  data: () => ({
    isCreated: false,
  }),
  watch: {
    isActive() {
      this.createModal();
    },
  },
  beforeDestroy() {
    this.deleteModal();
  },
  mounted() {
    this.createModal();
  },
  methods: {
    close() {
      this.$emit('close');
    },
    createModal() {
      if (!this.isActive) {
        return;
      }

      document.body.appendChild(this.$el);
      document.body.classList.add('overflow-hidden');

      this.isCreated = true;
    },
    deleteModal() {
      document.body.classList.remove('is-clipped');
      this.removeElement(this.$el);
      this.isCreated = false;
    },
    removeElement(el) {
      if (el === undefined) {
        return;
      }
      if (typeof el.remove !== 'undefined') {
        el.remove();
      } else if (typeof el.parentNode !== 'undefined' && el.parentNode !== null) {
        el.parentNode.removeChild(el);
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
.modal {
  &::-webkit-scrollbar {
    background: transparent;
    height: 0;
    width: 0;
  }
}

.modal-mask {
  z-index: -1;
  background: rgba(0, 0, 0, 0.8);
}

.modal-dialog {
  max-width: calc(100% - 32px);
  min-height: calc(100% - 32px);
}

.modal-content {
  z-index: 1;
}
</style>
