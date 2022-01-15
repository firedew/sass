<template>
  <div class="fd-row">
    <div class="fd-col-md-2">
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
</template>

<script>
export default {
  name: 'Components'
}
</script>
