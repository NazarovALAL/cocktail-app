<template>
  <div class="card">
    <div class="card-wrapper">
      <div class="card-body">
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
import { computed } from 'vue';

import { Cocktail } from '@/shared/types';
import { extractIngredients } from '@/shared/utils/ingredients';

const props = defineProps<{ drink: Cocktail }>();

const ingredients = computed(() => extractIngredients(props.drink));
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 20px;
  background: $color-background;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 8px $color-shadow;
}

.card-wrapper {
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
  border: 1px solid $color-border;
  flex-shrink: 0;
}

.card-body {
  flex: 1;
  min-width: 0;
}

@media (max-width: 768px) {
  .card-wrapper {
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

  .card-body {
    width: 100%;
    padding: 0 16px;
    order: 2;
    box-sizing: border-box;
  }
}
</style>
