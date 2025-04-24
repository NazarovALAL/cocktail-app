export async function fetchCocktails(code: string) {
  const baseUrl = import.meta.env.VITE_API_BASE;
  const url = `${baseUrl}api/json/v1/1/search.php?s=${code}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch cocktails');
  }

  const data = await response.json();
  return data.drinks || [];
}
