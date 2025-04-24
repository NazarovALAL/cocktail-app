import { extractIngredients } from '../ingredients';
import { Cocktail } from '@/shared/types';

describe('extractIngredients', () => {
  it('должен извлечь ингредиенты и меры из объекта Cocktail', () => {
    const mockDrink = {
      idDrink: '1',
      strDrink: 'Test Cocktail',
      strCategory: 'Category',
      strAlcoholic: 'Alcoholic',
      strGlass: 'Glass',
      strInstructions: 'Mix and serve',
      strDrinkThumb: 'http://example.com/image.jpg',
      strIngredient1: 'Vodka',
      strMeasure1: '50ml',
      strIngredient2: 'Orange Juice',
      strMeasure2: '100ml',
      strIngredient3: null,
      strMeasure3: null,
    } as Cocktail;

    const result = extractIngredients(mockDrink);

    expect(result).toEqual([
      { measure: '50ml', ingredient: 'Vodka' },
      { measure: '100ml', ingredient: 'Orange Juice' },
    ]);
  });

  it('должен возвращать пустой массив, если нет ингредиентов', () => {
    const emptyDrink = {
      idDrink: '2',
      strDrink: 'Empty',
      strCategory: '',
      strAlcoholic: '',
      strGlass: '',
      strInstructions: '',
      strDrinkThumb: '',
    } as unknown as Cocktail;

    const result = extractIngredients(emptyDrink);

    expect(result).toEqual([]);
  });
});
