<template>
  <h1>Grid system</h1>
  <p>Here we will show the grid system</p>
  <div>
    <h2>Example</h2>
    <div class="fd-row example-item">
      <div class="fd-col">.fd-col</div>
      <div class="fd-col">.fd-col</div>
      <div class="fd-col">.fd-col</div>
    </div>

    <div class="fd-row example-item">
      <div class="fd-col-1">.fd-col-1</div>
      <div class="fd-col">.fd-col</div>
      <div class="fd-col">.fd-col</div>
    </div>

    <div class="fd-row example-item">
      <div class="fd-col-auto">.fd-col-auto</div>
      <div class="fd-col">.fd-col</div>
      <div class="fd-col-auto">.fd-col-auto</div>
    </div>
    <div class="fd-row example-item">
      <div class="fd-col">.fd-col</div>
      <div class="fd-col">
        <div class="fd-row">
          <div class="fr-col">.fd-col</div>
          <div class="fr-col">.fd-col</div>
        </div>
      </div>
      <div class="fd-col-auto">.fd-col-auto</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Grid'
}
</script>

<style lang="scss" scoped>
.example-item {
  min-height: 30px;
  margin-bottom: 20px;
}
::v-deep {
  &.fd-row {
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    background-color: aliceblue;
  }

  &[class^="fd-col"] {
    border-left: 1px solid gray;
    border-right: 1px solid gray;
    background-color: aliceblue;
  }
}
</style>
