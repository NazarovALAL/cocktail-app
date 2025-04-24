<template>
  <nav class="sidebar">
    <RouterLink
      v-for="item in cocktailCodes"
      :key="item"
      :to="`/${item.toLowerCase()}`"
      class="menu-item"
      :class="{ active: isActive(`/${item.toLowerCase()}`) }"
    >
      {{ item }}
    </RouterLink>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { cocktailCodes } from '@/shared/config';

const route = useRoute();

const isActive = (path: string) => route.path === path;
</script>

<style scoped lang="scss">
.sidebar {
  width: 200px;
  min-width: 200px;
  background: $color-background;
  border-right: 1px solid $color-border;
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  box-sizing: border-box;
}

.menu-item {
  padding: 12px 16px;
  text-decoration: none;
  color: $color-primary;
  transition:
    background 0.2s,
    color 0.2s;

  &:hover {
    background-color: $color-hover;
  }

  &.active {
    background: $color-border;
    font-weight: bold;
  }
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    min-width: 100%;
    flex-direction: row;
    border-right: none;
    border-bottom: 1px solid $color-border;
    overflow-x: auto;
  }

  .menu-item {
    flex: 1;
    text-align: center;
  }
}
</style>
