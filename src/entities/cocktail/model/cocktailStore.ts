import { defineStore } from 'pinia';

import { fetchCocktails } from '@/shared/api/cocktails';
import { Cocktail } from '@/shared/types';

export const useCocktailStore = defineStore('cocktails', {
  state: () => ({
    cocktails: [] as Cocktail[],
    error: '',
    loading: false,
  }),
  actions: {
    async fetchCocktails(code: string) {
      this.loading = true;
      this.error = '';

      try {
        const data = await fetchCocktails(code);
        this.cocktails = data;
      } catch (e) {
        this.error = (e as Error).message;
      } finally {
        this.loading = false;
      }
    },
  },
});
