<template>
  <div class="fd-page">
    <app-navbar/>
    <div class="fd-page__content">
      <router-view/>
    </div>
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
