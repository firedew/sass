<template>
  <div class="fd-container">
    <div class="fd-row fd-page__grow">
      <div class="fd-col-md-auto side-nav">
        <h2>Components</h2>
        <ul>
          <li>
            <router-link to="/components/grid">Grid</router-link>
          </li>
          <li>
            <router-link to="/components/images">Images</router-link>
          </li>
          <li>
            <router-link to="/components/ratio">Ratio</router-link>
          </li>
        </ul>
      </div>
      <div class="fd-col">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Components'
}
</script>

<style lang="scss" scoped>
.side-nav {
  border-right: 1px solid var(--fd-gray-300);
}
</style>
