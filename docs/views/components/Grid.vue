<template>
  <h1>Grid system</h1>
  <p>Here we will show the grid system</p>
  <div>
    <example :source="example1" id="bs1"/>
    <example :source="example2" id="bs2"/>
  </div>
</template>

<script>
import Example from '../../components/Example'

export default {
  name: 'Grid',
  components: { Example },
  setup () {
    return {
      example1: `<div class="fd-row">
  <div class="fd-col"><div class="example-block">.fd-col</div></div>
  <div class="fd-col"><div class="example-block">.fd-col</div></div>
  <div class="fd-col"><div class="example-block">.fd-col</div></div>
</div>
<div class="fd-row">
  <div class="fd-col-2"><div class="example-block">.fd-col-2</div></div>
  <div class="fd-col"><div class="example-block">.fd-col</div></div>
  <div class="fd-col"><div class="example-block">.fd-col</div></div>
</div>
<div class="fd-row">
  <div class="fd-col-auto"><div class="example-block">.fd-col-auto</div></div>
  <div class="fd-col"><div class="example-block">.fd-col</div></div>
  <div class="fd-col-auto"><div class="example-block">.fd-col-auto</div></div>
</div>`,
      example2: `<div class="fd-row">
  <div class="fd-col"><div class="example-block">.fd-col</div></div>
  <div class="fd-col">
    <div class="example-block">
      .fd-row
      <div class="fd-row">
        <div class="fd-col"><div class="example-block">.fd-col</div></div>
        <div class="fd-col"><div class="example-block">.fd-col</div></div>
      </div>
    </div>
  </div>
  <div class="fd-col-auto"><div class="example-block">.fd-col-auto</div></div>
</div>`,
    }
  }
}
</script>

<style lang="scss" scoped>
@import './lib/colors';

.example-item {
  min-height: 30px;
  margin-bottom: 20px;
}

:deep(.example-block) {
  padding: 16px;
  border-radius: 4px;
  border: 1px solid $purple-200;
  background-color: $purple-100;
}


//:deep(.fd-row) {
//  border-top: 1px solid gray;
//  border-bottom: 1px solid gray;
//  background-color: aliceblue;
//}
//
//:deep([class^='fd-col']) {
//  border-left: 1px solid gray;
//  border-right: 1px solid gray;
//  background-color: aliceblue;
//}
</style>
