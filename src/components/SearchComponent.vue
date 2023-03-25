<script setup lang="ts">
import { useApiService } from '@/services/apiServices';
import { ref } from 'vue';

const props = defineProps({
  setWikipedias: { type: Function, required: true },
});

const apiService = useApiService();

const inputSearch = ref('');

const handleSubmit = async () => {
  const data = await apiService.fetchSearch(inputSearch.value);
  props.setWikipedias(data);

  const histories = localStorage.getItem('histories');
  const history = !histories ? [] : JSON.parse(histories);
  history.push(inputSearch.value);

  localStorage.setItem('histories', JSON.stringify(history));

  inputSearch.value = '';
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="form">
    <input
      type="text"
      v-model="inputSearch"
      placeholder="Buscar..."
      class="form__input"
    />
  </form>
</template>

<style scoped>
.form {
  display: flex;
  margin-bottom: 1.5rem;
}

.form__input {
  display: flex;
  border: 1px solid #333;
  border-radius: 0.6rem;
  padding: 1rem;
  width: 100%;
}
</style>
