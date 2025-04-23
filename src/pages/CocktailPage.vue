<template>
  <div class="container">
    <MenuNav />
    <div class="content">
      <div class="loading-wrapper" v-if="loading">
        <div class="loader">Loading...</div>
      </div>
      <template v-else-if="error">
        <div class="error">Error: {{ error }}</div>
      </template>
      <template v-else>
        <CocktailCard
          v-for="drink in cocktails"
          :key="drink.idDrink"
          :drink="drink"
        />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';

import { useCocktailStore } from '@/entities/cocktail/model/cocktailStore';
import CocktailCard from '@/entities/cocktail/ui/CocktailCard.vue';
import MenuNav from '@/widgets/MenuNav.vue';

const route = useRoute();
const store = useCocktailStore();

const { cocktails, error, loading } = storeToRefs(store);

watch(
  () => route.path,
  (path) => {
    const code = path.replace('/', '');
    if (code) store.fetchCocktails(code);
  },
  { immediate: true }
);
</script>

<style scoped lang="scss">
.loading-wrapper {
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
}
</style>
