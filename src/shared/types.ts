type Index = `${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15}`;

type IngredientKey = `strIngredient${Index}`;
type MeasureKey = `strMeasure${Index}`;

export type Cocktail = {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strDrinkThumb: string;
} & {
  // eslint-disable-next-line no-unused-vars
  [keys in IngredientKey | MeasureKey]: string | null;
};
