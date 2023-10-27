<script setup>
import discoverSlot from "@/slot/discover-slot.vue";
import rowSkeletonSlot from "@/slot/row-skeleton-slot.vue";
import { useMusicStore, useLoadingStore } from "@/store/index";
import { secondsToMinutes } from "@/utils/to";
const musicStore = useMusicStore();
musicStore.getDisMusic();
</script>

<template>
  <discoverSlot title="发现音乐">
    <rowSkeletonSlot
      :loadingFlag="useLoadingStore().dis_music_loading"
      :count="5"
    >
      <div class="container">
        <div
          v-for="disMusic in musicStore.dis_music_list"
          class="dis-newmusic"
          id="dis-newmusic"
          :key="disMusic.id"
        >
          <div class="cover">
            <img :src="disMusic.picUrl" alt="" />
          </div>
          <span>{{ disMusic.name }}</span>
          <span>{{ disMusic.song.artists[0].name }}</span>
          <span class="dis-newmusic-3">专辑</span>
          <span>{{
            secondsToMinutes(Math.round(disMusic.song.duration / 1000))
          }}</span>
        </div>
      </div>
    </rowSkeletonSlot>
  </discoverSlot>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .dis-newmusic {
    cursor: pointer;
    @include vertical-center;
    flex: 0 0 45%;
    margin: 10px;
    height: 80px;

    .cover {
      width: 60px;
      height: 60px;

      img {
        @include img-style(10px);
      }
    }

    span {
      // display: flex;
      margin: 0 10px;
      flex: 1 0 0;
      // max-width: 80px;
      font-size: 12px;

      @include ell-line;
    }
    .dis-newmusic-3 {
      display: none;
    }
  }
}
</style>
