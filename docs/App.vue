<template>
 <div>
   <h1>FireDew SASS documentation</h1>
   <p>Welcome to the FireDew documentation pages.</p>
 </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style lang="scss">
$black: #646464;

h1 {
    color: $black;
}
</style>
