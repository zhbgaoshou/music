<script setup>
const props = defineProps({
  navList: {
    type: Object,
  },
});
</script>

<template>
  <ul class="list">
    <li class="item" v-for="nav in navList" :key="nav.id">{{ nav.name }}</li>
  </ul>
</template>

<style scoped lang="scss">
.list {
  overflow-x: scroll;
  @include vertical-center();
  height: 50px;
  // border-bottom: 1px solid $border-color;

  .item {
    flex: 1 0 50px;
    padding: 0 $padding;
    cursor: pointer;
    font-size: 14px;
  }
}
</style>
