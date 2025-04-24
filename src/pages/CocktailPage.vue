<template>
  <div class="container">
    <MenuNav />
    <div class="content">
      <div v-if="loading" class="loading-wrapper">
        <AppLoader v-if="loading" />
      </div>
      <template v-else-if="error">
        <AppErrorBlock>Error: {{ error }}</AppErrorBlock>
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
import AppLoader from '@/shared/ui/AppLoader.vue';
import AppErrorBlock from '@/shared/ui/AppErrorBlock.vue';

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
