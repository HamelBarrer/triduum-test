<script setup lang="ts">
const props = defineProps({
  setOpenModal: { type: Function, required: true },
});
</script>

<template>
  <div class="modal">
    <div class="modal__mask">
      <h3 class="modal__title">
        <slot name="title"></slot>
      </h3>
      <button class="modal__close" @click="props.setOpenModal">x</button>
      <div class="modal__content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  display: grid;
  place-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.33);
  transition: opacity 0.3s ease;
}

.modal__mask {
  position: relative;
  background-color: #fff;
  border-radius: 1rem;
  width: 20rem;
}

.modal__title {
  color: #333;
  text-align: center;
  font-weight: 600;
  text-transform: uppercase;
  padding: 1rem;
}

.modal__close {
  position: absolute;
  top: 0.1rem;
  right: 0.1rem;
  padding: 1rem;
  background-color: #fd5656;
  color: #fff;
  border-radius: 50%;
  font-weight: 600;
  font-size: 1rem;
}

.modal__content {
  overflow-y: auto;
  scrollbar-width: thin;
  color: #333;
  padding: 1rem;
  height: 20rem;
}
</style>
