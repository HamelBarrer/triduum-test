<script setup lang="ts">
import { ref } from 'vue';
import ItemComponent from './components/ItemComponent.vue';
import SearchComponent from './components/SearchComponent.vue';
import type { fetchWikipedia } from './types/fetchWikipedia';
const wikipedias = ref<fetchWikipedia[]>([]);

const setWikipedias = (value: fetchWikipedia[]) => {
  wikipedias.value = value;
};
</script>

<template>
  <div class="max__content">
    <div class="content">
      <h2 class="title">Wikipedia</h2>
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
</template>

<style scoped>
.title {
  color: #333;
  margin: 1rem 0 1rem 0;
  text-align: center;
}
.content__list {
  overflow: auto;
  scrollbar-width: thin;
  height: 30rem;
}
</style>
