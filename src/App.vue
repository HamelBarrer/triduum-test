<script setup lang="ts">
import { ref } from 'vue';

import type { fetchWikipedia } from './types/fetchWikipedia';

import ItemComponent from './components/ItemComponent.vue';
import SearchComponent from './components/SearchComponent.vue';
import HistorySearch from './components/HistorySearch.vue';

const wikipedias = ref<fetchWikipedia[]>([]);
const isHistory = ref(false);
const openModal = ref(false);

const setWikipedias = (value: fetchWikipedia[]) => {
  wikipedias.value = value;
};

const getHistoryLocalStorage = () => {
  const histories = localStorage.getItem('histories');
  isHistory.value = histories ? true : false;
};

const setOpenModal = () => {
  openModal.value = false;
};

getHistoryLocalStorage();
</script>

<template>
  <div class="max__content">
    <div class="content">
      <div class="content__title">
        <h2 class="title">Wikipedia</h2>
        <button
          v-if="isHistory"
          class="button__histori"
          @click="openModal = true"
        >
          Historial
        </button>
      </div>
      <SearchComponent :setWikipedias="setWikipedias" />
      <div v-if="wikipedias.length !== 0" class="content__list">
        <ItemComponent
          v-for="wikipedia in wikipedias"
          :key="wikipedia.pageid"
          :wiki="wikipedia"
        />
      </div>
    </div>
  </div>
  <div v-if="openModal">
    <Teleport to="#modal">
      <HistorySearch :setOpenModal="setOpenModal" />
    </Teleport>
  </div>
</template>

<style scoped>
.title {
  color: #333;
  margin: 1rem 0 1rem 0;
  text-align: center;
}

.button__histori {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: #2abf54;
  color: #fff;
  padding: 0.5rem;
  border-radius: 0.3rem;
  font-weight: 600;
}
</style>
