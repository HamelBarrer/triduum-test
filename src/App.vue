<script setup lang="ts">
import { provide, ref, watchEffect } from 'vue';

import type { fetchWikipedia } from './types/fetchWikipedia';

import ItemComponent from './components/ItemComponent.vue';
import SearchComponent from './components/SearchComponent.vue';
import HistorySearch from './components/HistorySearch.vue';

const wikipedias = ref<fetchWikipedia[]>([]);
const filterWikipedias = ref<fetchWikipedia[]>([]);
const isHistory = ref(false);
const openModal = ref(false);
const textElement = ref('');
const textFilterWiki = ref('');

const setWikipedias = (value: fetchWikipedia[]) => {
  wikipedias.value = value;
  filterWikipedias.value = value;
};

const getHistoryLocalStorage = () => {
  const histories = localStorage.getItem('histories');
  isHistory.value = histories ? true : false;
};

const setOpenModal = () => {
  openModal.value = false;
};

const selectElement = (value: string) => {
  textElement.value = value;
  openModal.value = false;
};

const filterData = () => {
  filterWikipedias.value = wikipedias.value.filter(
    (wikipedia) =>
      wikipedia.title
        .toLocaleLowerCase()
        .includes(textFilterWiki.value.toLocaleLowerCase()) ||
      wikipedia.pageid
        .toString()
        .includes(textFilterWiki.value.toLocaleLowerCase())
  );
};

getHistoryLocalStorage();

provide('textElement', textElement);
provide('getHistoryLocalStorage', getHistoryLocalStorage);
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
      <SearchComponent
        :setWikipedias="setWikipedias"
        :textElement="textElement"
      />
      <div v-if="wikipedias.length !== 0" class="content__list">
        <form>
          <input
            type="text"
            class="input"
            placeholder="Filtrar por titulo o id"
            @input="filterData"
            v-model="textFilterWiki"
          />
        </form>
        <ItemComponent
          v-for="wikipedia in filterWikipedias"
          :key="wikipedia.pageid"
          :wiki="wikipedia"
        />
      </div>
    </div>
  </div>
  <div v-if="openModal">
    <Teleport to="#modal">
      <HistorySearch
        :setOpenModal="setOpenModal"
        :selectElement="selectElement"
      />
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

.input {
  border: 1px solid #333;
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
}
</style>
