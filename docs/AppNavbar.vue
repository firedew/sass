<template>
  <nav class="fd-navbar fd-navbar--elevated">
    <div class="fd-container">
      <router-link class="fd-navbar-brand" to="/">FireDew</router-link>
      <div class="fd-navbar-collapse">
        <ul class="fd-navbar-nav">
          <li class="fd-nav-item">
            <router-link class="fd-nav-link" to="/components">Components</router-link>
          </li>
        </ul>
      </div>
      <div>
        <a href="https://github.com/firedew/sass">
          <img alt="Github link" width="32" src="static/Github-light.svg"/>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
}
</script>

<style scoped>

</style>
