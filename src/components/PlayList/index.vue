<script setup>
import { useMusicStore, useFooterStore } from "@/store/index";
const musicStore = useMusicStore();
const footerStore = useFooterStore();
musicStore.getSongList();

function playSong(song, index) {
  musicStore.curIndex = index;
  musicStore.curSong = song;
}
</script>

<template>
  <div class="plist">
    <div class="plist-head">
      <h6>播放列表</h6>
      <!-- 关闭 -->
      <svg
        @click="footerStore.is_show_play_list = false"
        class="feather feather-x close"
        fill="none"
        height="24"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="18" x2="6" y1="6" y2="18" />
        <line x1="6" x2="18" y1="6" y2="18" />
      </svg>
    </div>
    <ul class="plist-main">
      <li
        v-for="(song, index) in musicStore.songList"
        :key="song.id"
        class="plist-item"
        @click="playSong(song, index)"
      >
        <span
          class="span-name"
          :class="{ active: index == musicStore.curIndex }"
          >{{ song.name }}</span
        >
        <span class="span-mid"></span>
        <span
          class="span-aut"
          :class="{ active: index == musicStore.curIndex }"
          >{{ song.singer }}</span
        >
        <i></i>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.plist {
  border-radius: 10px 0 0 10px;
  position: absolute;
  transition: all 0.3s;
  bottom: $foot-height;
  z-index: 20;
  height: $plist-height;
  width: $plist-width;
  background-color: #fff;
  box-shadow: -5px 0px 10px -5px #d4d3d3b6;
  overflow: hidden;

  .plist-head {
    display: flex;
    justify-content: space-between;
    height: 20%;
    border-bottom: 1px solid #cecece;
    padding: 10px;
  }

  .plist-main {
    height: calc(100% - 20%);
    overflow: auto;
    margin-top: 10px;

    .plist-item {
      @include vertical-center;
      padding: 20px;
      cursor: pointer;

      &:last-child {
        margin-bottom: 20px;
      }

      &:hover {
        background-color: $theme;
      }

      .span-mid {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: rgb(202, 201, 200);
        margin: 0 20px;
      }

      .span-aut {
        font-size: 12px;
        color: #afafaf;
      }
      .span-name {
        font-size: 14px;
        color: #000000b6;
      }
    }
  }
}

.active {
  color: $active !important;
}
</style>
