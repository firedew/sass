<template>
  <nav class="fd-navbar fd-navbar--elevated">
    <div class="fd-container">
      <router-link class="fd-navbar-brand" to="/">FireDew</router-link>
      <div class="fd-navbar-collapse fd-flex">
        <ul class="fd-navbar-nav">
          <li class="fd-nav-item">
            <router-link class="fd-nav-link" to="/components">Components</router-link>
          </li>
        </ul>
        <a href="https://github.com/firedew/sass">
          <img class="fd-img fd-img--32x32" alt="Github link" src="static/Github-light.svg"/>
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
