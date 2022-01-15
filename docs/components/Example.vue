<template>
  <div class="firedew-example">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'Example'
}
</script>

<style lang="scss" scoped>
@import './lib/colors';

.firedew-example {
  border: 1px solid $gray-200;
  padding: 16px;
  border-radius: 4px;
}
</style>
