<template>
  <ul>
    <li>
      <router-link to="/">Home</router-link>
    </li>
    <li>
      <router-link to="/components/grid">Grid</router-link>
    </li>
  </ul>
  <router-view />
</template>

<script>
export default {
  name: 'Components'
}
</script>
