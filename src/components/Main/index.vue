<script setup>
import Content from "./component/content.vue";
import Menu from "./component/menu.vue";
import { useRoute } from "vue-router";
</script>

<template>
  <div class="main">
    <Menu v-if="useRoute().path !== '/mvdetail'" />
    <Content />
  </div>
</template>

<style scoped lang="scss">
.main {
  flex: 1;
  @include vertical-center;
  overflow: hidden;
}
</style>
