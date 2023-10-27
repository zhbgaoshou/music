<script setup>
import menuHeader from "./menu-header.vue";
import menuItem from "./menu-item.vue";
</script>

<template>
  <div class="menu">
    <menuHeader />
    <menuItem />
  </div>
</template>

<style scoped lang="scss">
.menu {
  height: 96%;
  width: 150px;
  background-color: $menu-bg-color;
  margin-left: 10px;
  border-radius: 10px;
  overflow: hidden;
  overflow-y: scroll;
}
</style>
