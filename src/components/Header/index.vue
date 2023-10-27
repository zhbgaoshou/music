<script setup>
import headerLeft from "./component/header-left.vue";
import headerRight from "./component/header-right.vue";
</script>

<template>
  <div class="header" id="head">
    <headerLeft />
    <headerRight />
  </div>
</template>

<style scoped lang="scss">
.header {
  @include vertical-center;
  padding: 0 2.6667vw;
  justify-content: space-between;
  background-color: $header-bg-color;
  height: $head-height;
}
</style>
