<template>
  <h1>Navigation</h1>
  <p>Throughout your application you can have links in various places. This section shows all options contained within FireDew for placing navigation links on your website.</p>
  <Example :source="navList" id="bs1" />
</template>

<script>
import Example from '../../components/Example'
export default {
  name: 'NavLinks',
  components: { Example },
  setup () {
    return {
     navList: `<ul class="fd-nav-list">
  <li><a class="fd-nav-link">Item 1</a></li>
  <li><a class="fd-nav-link">Item 2</a></li>
  <li><a class="fd-nav-link">Item 3</a></li>
</ul>`
    }
  }
}
</script>
