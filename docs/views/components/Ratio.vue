<template>
  <h1>Ratio</h1>
  <code>fd-ratio</code>
  <div>
    <example>
      <code>fd-ratio--1x1</code>
      <div class="example-image fd-ratio fd-ratio--1x1">
        <img alt="example 480x480" src="https://via.placeholder.com/480x480.png">
      </div>
    </example>
    <example>
      <code>fd-ratio--4x3</code>
      <div class="example-image fd-ratio fd-ratio--4x3">
        <img alt="example 640x480" src="https://via.placeholder.com/640x480.png">
      </div>
    </example>
    <example>
      <code>fd-ratio--16x9</code>
      <div class="example-image fd-ratio fd-ratio--16x9">
        <img alt="example 640x360" src="https://via.placeholder.com/640x360.png">
      </div>
    </example>
  </div>
</template>

<script>
import Example from '../../components/Example'

export default {
  name: 'Ratio',
  components: { Example }
}
</script>

<style lang="scss" scoped>
.example-image {
  max-width: 300px;
}
</style>
