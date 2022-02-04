<template>
  <div class="fd-site">
    <app-navbar/>
    <router-view class="fd-page"/>
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
