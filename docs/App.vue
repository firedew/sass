<template>
 <div class="fd-container">
   <ul>
     <li>
       <router-link to="/">Home</router-link>
     </li>
     <li>
       <router-link to="/grid">Grid</router-link>
     </li>
   </ul>
   <router-view />
 </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style lang="scss">
</style>
