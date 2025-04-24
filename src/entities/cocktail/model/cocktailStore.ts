import { defineStore } from 'pinia';
import { fetchCocktails } from '@/shared/api/cocktails';
import { Cocktail } from '@/shared/types';

export const useCocktailStore = defineStore('cocktails', {
  state: () => ({
    cocktails: [] as Cocktail[],
    error: '',
    loading: false,
    cache: {} as Record<string, Cocktail[]>,
  }),

  actions: {
    async fetchCocktails(code: string) {
      this.loading = true;
      this.error = '';

      if (this.cache[code]) {
        this.cocktails = this.cache[code];
        this.loading = false;

        return;
      }

      try {
        const data = await fetchCocktails(code);
        this.cocktails = data;

        this.cache[code] = data;
      } catch (e) {
        this.error = e instanceof Error ? e.message : 'Unknown error';
      } finally {
        this.loading = false;
      }
    },
  },
});
