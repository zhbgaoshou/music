<script setup>
import Nav from "@/base/nav.vue";
import recSongList from "./component/rec-song-list.vue";
import { useMusicStore } from "@/store/index";

const musicStore = useMusicStore();

musicStore.getRecList("流行", 16);

const navList = [
  {
    id: 1,
    name: "流行",
  },
  {
    id: 2,
    name: "摇滚",
  },
  {
    id: 3,
    name: "日系",
  },
  {
    id: 4,
    name: "流行",
  },
  {
    id: 5,
    name: "摇滚",
  },
  {
    id: 6,
    name: "日系",
  },
  {
    id: 7,
    name: "流行",
  },
  {
    id: 8,
    name: "摇滚",
  },
  {
    id: 9,
    name: "日系",
  },
  {
    id: 10,
    name: "流行",
  },
  {
    id: 11,
    name: "摇滚",
  },
  {
    id: 12,
    name: "日系",
  },
];
</script>

<template>
  <div class="recomment">
    <Nav :navList="navList" class="rec-nav"></Nav>
    <recSongList :rec_list="musicStore.rec_list" />
  </div>
</template>

<style scoped lang="scss">
.recomment {
  padding: $padding;
}
.rec-nav::-webkit-scrollbar {
  display: block !important;
  height: 2px;
  background-color: transparent;
}

.rec-nav::-webkit-scrollbar-thumb {
  background-color: rgba($color: #000000, $alpha: 0.1);
  height: 5px;
  width: 5px;
}
</style>
