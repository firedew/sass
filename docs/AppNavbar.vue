<template>
  <navbar>
    <div class="fd-container">
      <router-link to="/">FireDew</router-link>
      <router-link to="/components">Components</router-link>
    </div>
  </navbar>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  name: 'AppNavbar',
  components: { Navbar }
}
</script>

<style scoped>

</style>
