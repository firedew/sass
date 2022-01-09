<template>
  <app-navbar/>
  <div class="fd-container">
    <router-view/>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import AppNavbar from './AppNavbar'

export default defineComponent({
  name: 'App',
  components: { AppNavbar }
})
</script>

<style lang="scss">
</style>
