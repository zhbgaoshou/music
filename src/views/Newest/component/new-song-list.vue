<script setup>
import { secondsToMinutes } from "@/utils/to";

const props = defineProps(["newSongList"]);
</script>

<template>
  <ul class="new-song-list">
    <li v-for="(newSong, index) in props.newSongList" class="new-song-item">
      <img :src="newSong.album.blurPicUrl" alt="" />
      <p>{{ newSong.name }}</p>
      <p>{{ newSong.artists[0].name }}</p>
      <p class="new-zhuanji">专辑</p>
      <p>{{ secondsToMinutes(Math.floor(newSong.bMusic.playTime / 1000)) }}</p>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.new-song-list {
  margin: 20px 0;

  :hover {
    background-color: #ededed;
    border-radius: 3px;
  }
  .new-song-item {
    @include vertical-center;
    justify-content: space-between;
    height: 50px;
    padding: 30px 10px;
    margin: 10px 0;
    cursor: pointer;

    img {
      width: 40px;
      height: 40px;
      object-fit: cover;
      border-radius: 15px;
    }

    p {
      @include ell-line;
      width: 20%;
      font-size: 12px;
    }
  }
}
</style>
