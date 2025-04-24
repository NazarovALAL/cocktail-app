<template>
  <div class="error">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.error {
  color: $color-error;
  background: $color-error-bg;
  padding: 12px 16px;
  border: 1px solid $color-error;
  border-radius: 6px;
  margin-bottom: 20px;
  font-weight: bold;
}

@media (max-width: 768px) {
  .error {
    margin: 20px;
  }
}
</style>
