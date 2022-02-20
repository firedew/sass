<template>
  <div class="fd-container">
    <div class="fd-row fd-page__grow">
      <div class="fd-col-md-auto side-nav">
        <h2>Components</h2>
        <ul class="fd-nav-list">
          <li v-for="component in components">
            <router-link
              class="fd-nav-link"
              :to="component.path"
            >
              {{ component.label }}
            </router-link>
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
  name: 'Components',
  setup () {
    return {
      components: [
        { label: 'Grid', path: '/components/grid' },
        { label: 'Images', path: '/components/images' },
        { label: 'Ratio', path: '/components/ratio' },
        { label: 'Nav links', path: '/components/nav-links' },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.side-nav {
  border-right: 1px solid var(--fd-gray-300);
}
</style>
