
<template>
  <div class="card">
    <div class="card-header">
      <div class="text">
        <h2 class="title">{{ drink.strDrink }}</h2>
        <p><strong>Category:</strong> {{ drink.strCategory }}</p>
        <p><strong>Alcoholic:</strong> {{ drink.strAlcoholic }}</p>
        <p><strong>Glass:</strong> {{ drink.strGlass }}</p>
        <p><strong>Instructions:</strong> {{ drink.strInstructions }}</p>
        <div v-if="ingredients.length">
          <p><strong>Ingredients:</strong></p>
          <ul>
            <li v-for="(val, index) in ingredients" :key="index">
              {{ val.measure }} {{ val.ingredient }}
            </li>
          </ul>
        </div>
      </div>
      <img class="thumbnail" :src="drink.strDrinkThumb" :alt="drink.strDrink" loading="lazy" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { countOfMeasures } from '@/shared/config';
import { Cocktail } from '@/shared/types';

const props = defineProps<{ drink: Cocktail }>()

const ingredients = computed(() => {
  const list = [];

  for (let i = 1; i <= countOfMeasures; i++) {
    const measure = (props.drink as Record<string, string | null>)[`strMeasure${i}`];
    const ingredient = (props.drink as Record<string, string | null>)[`strIngredient${i}`];

    if (ingredient) {
      list.push({ measure: measure || '', ingredient });
    }
  }

  return list;
});
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 20px;
  background: #fafafa;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  flex-wrap: nowrap;
}

.thumbnail {
  width: 180px;
  height: auto;
  max-height: 220px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #ccc;
  flex-shrink: 0;
}

.text {
  flex: 1;
  min-width: 0;
}

@media (max-width: 768px) {
  .card-header {
    flex-direction: column;
    align-items: center;
  }

  .thumbnail {
    width: 100%;
    max-width: 260px;
    height: auto;
    max-height: none;
    display: block;
    margin: 0 auto 16px auto;
  }

  .text {
    width: 100%;
    padding: 0 16px;
    order: 2;
    box-sizing: border-box;
  }
}
</style>
