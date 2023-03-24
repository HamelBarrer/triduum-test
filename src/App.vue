<script setup lang="ts">
import { ref } from 'vue';
import { useApiService } from './services/apiServices';
import type { fetchWikipedia } from './types/fetchWikipedia';

const inputSearch = ref('');
const wikipedias = ref<fetchWikipedia[]>([]);

const apiService = useApiService();

const handleSubmit = async () => {
  const data = await apiService.fetchSearch(inputSearch.value);
  wikipedias.value = data;
};
</script>

<template>
  <h2>Hello world</h2>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="inputSearch" placeholder="Buscar..." />
    <button type="button"></button>
  </form>
  <div v-if="wikipedias.length !== 0">
    <div v-for="wikipedia in wikipedias" :key="wikipedia.pageid">
      <span>{{ wikipedia.pageid }}</span>
      <span>{{ wikipedia.title }}</span>
      <div v-html="wikipedia.snippet"></div>
    </div>
  </div>
</template>

<style scoped></style>
