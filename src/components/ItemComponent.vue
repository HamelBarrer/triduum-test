<script setup lang="ts">
const props = defineProps({
  wiki: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="item">
    <div class="item__header">
      <div class="item__title">{{ wiki.title }}</div>
      <div class="item__title">{{ wiki.pageid }}</div>
    </div>

    <div v-html="wiki.snippet" class="item__snippet"></div>
  </div>
</template>

<style scopred>
.item {
  transition: all 0.2s;
  padding: 1rem;
}

.item:hover {
  background-color: #3333332c;
  border-radius: 0.6rem;
  cursor: pointer;
}

.item__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.item__title {
  color: #333;
  font-weight: 600;
}

.item__snippet {
  color: #333;
}
</style>
