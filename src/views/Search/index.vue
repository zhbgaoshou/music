<script setup>
import { ref } from "vue";
import NewSongList from "@/views/Newest/component/new-song-list.vue";
import RecSongList from "@/views/Recomment/component/rec-song-list.vue";
import MvList from "../NewestMV/component/mv-list.vue";
const activeName = ref("first");

function goRoute(a, b) {
  console.log(a);
  console.log(b);
}
</script>

<template>
  <div class="search-page">
    <div class="search-page-head">
      <h4>Header</h4>
    </div>
    <div class="search-page-main">
      <el-tabs @tab-click="goRoute" v-model="activeName">
        <el-tab-pane label="歌曲" name="first">
          <NewSongList></NewSongList>
        </el-tab-pane>
        <el-tab-pane label="歌单" name="second">
          <RecSongList></RecSongList>
        </el-tab-pane>
        <el-tab-pane label="MV" name="third">
          <MvList></MvList>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<style scoped lang="scss">
.search-page {
  padding: $padding;

  .search-page-head {
    height: 50px;
    border-bottom: 1px solid #ededed;
  }

  .search-page-main {
    margin-top: 10px;
  }
}
</style>
