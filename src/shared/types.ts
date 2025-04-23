type Index = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;

type IngredientKeys = `strIngredient${Index}`;
type MeasureKeys = `strMeasure${Index}`;

export type Cocktail = {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strDrinkThumb: string;
} & {
  [K in IngredientKeys | MeasureKeys]: string | null;
};
