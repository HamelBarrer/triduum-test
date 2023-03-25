<script setup lang="ts">
import ModelComponent from './ModelComponent.vue';

const props = defineProps({
  setOpenModal: { type: Function, required: true },
});

const histories = JSON.parse(
  localStorage.getItem('histories') as string
).reverse();
</script>

<template>
  <ModelComponent :setOpenModal="setOpenModal">
    <template #title>Historial</template>
    <hr />
    <template #content>
      <div v-for="history in histories">
        <div class="item">{{ history }}</div>
      </div>
    </template>
  </ModelComponent>
</template>

<style scoped></style>
