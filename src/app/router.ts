import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import CocktailPage from '@/pages/CocktailPage.vue';
import { cocktailCodes } from '@/shared/config';
import NotFoundPage from '@/pages/NotFoundPage.vue';

const getDefaultRoute = (): string => {
  if (Array.isArray(cocktailCodes) && cocktailCodes.length > 0) {
    return `/${cocktailCodes[0].toLowerCase()}`;
  }

  return '/';
};

const cocktailRoutes: RouteRecordRaw[] = cocktailCodes.map((code) => ({
  path: `/${code.toLowerCase()}`,
  component: CocktailPage,
}));

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: getDefaultRoute },
    ...cocktailRoutes,
    {
      path: '/:pathMatch(.*)*',
      component: NotFoundPage,
    },
  ],
});
