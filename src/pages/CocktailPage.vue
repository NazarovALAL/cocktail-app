<template>
  <div class="container">
    <MenuNav />
    <div class="content">
      <div v-if="loading" class="loading-wrapper">
        <div class="loader">Loading...</div>
      </div>
      <template v-else-if="error">
        <div class="error">Error: {{ error }}</div>
      </template>
      <template v-else>
        <CocktailCard v-for="drink in cocktails" :key="drink.idDrink" :drink="drink" />
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

    if (code) {
      store.fetchCocktails(code);
    }
  },
  { immediate: true },
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

.error {
  color: $color-error;
  background: $color-error-bg;
  padding: 12px 16px;
  border: 1px solid $color-error;
  border-radius: 6px;
  margin-bottom: 20px;
  font-weight: bold;
}

@media (max-width: 768px) {
  .error {
    margin: 20px;
  }
}
</style>
