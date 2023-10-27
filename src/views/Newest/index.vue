<script setup>
import newSongList from "./component/new-song-list.vue";
import Nav from "@/base/nav.vue";
import { useMusicStore } from "@/store/index";
import { ref } from "vue";

const musicStore = useMusicStore();

musicStore.getNewSong();

console.log(musicStore.newSong_list);

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
];
</script>

<template>
  <div class="newest">
    <Nav :navList="navList" class="new-nav"></Nav>
    <newSongList :newSongList="musicStore.newSong_list" />
  </div>
</template>

<style scoped lang="scss">
.newest {
  padding: $padding;
}
</style>
