<template>
  <div class="docs-example" ref="exampleRef">
    <slot/>
  </div>
  <div class="docs-code">
    <pre><code>{{ source }}</code></pre>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'

export default {
  name: 'Example',
  props: {
    source: { type: String, default: '' }
  },
  setup (props) {
    const exampleRef = ref(null);
    onMounted(() => {
      if(props.source) {
        exampleRef.value.innerHTML = props.source;
      }
    })

    return {
      exampleRef
    }
  }
}
</script>

<style lang="scss" scoped>
@import './lib/colors';

.docs-example {
  border: 1px solid $gray-200;
  padding: 16px;
  border-radius: 4px 4px 0 0;
}
.docs-code {
  background-color: $gray-100;
  border: 1px solid $gray-200;
  padding: 16px;
  border-radius: 0 0 4px 4px;
  margin-bottom: 16px;
}
pre {
  overflow-x: auto;
}
</style>
