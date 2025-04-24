import { Cocktail } from '@/shared/types';
import { countOfMeasures } from '@/shared/config';

export function extractIngredients(drink: Cocktail) {
  const list: { measure: string; ingredient: string }[] = [];

  for (let i = 1; i <= countOfMeasures; i++) {
    const measure = (drink as Record<string, string | null>)[`strMeasure${i}`];
    const ingredient = (drink as Record<string, string | null>)[`strIngredient${i}`];

    if (ingredient) {
      list.push({ measure: measure || '', ingredient });
    }
  }

  return list;
}
