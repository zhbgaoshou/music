<script setup>
import mvNav from "./component/mv-nav.vue";
import mvList from "./component/mv-list.vue";
import { useMusicStore } from "@/store";
const musicStore = useMusicStore();

musicStore.getMvList();
</script>

<template>
  <div class="newest-mv">
    <mvNav></mvNav>
    <mvList :mvList="musicStore.mv_list"></mvList>
  </div>
</template>

<style scoped lang="scss">
.newest-mv {
  padding: $padding;
}
</style>
