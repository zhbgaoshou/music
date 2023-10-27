<script setup>
import { useFooterStore } from "@/store";
import { useChangeOrder } from "@/hook/music-hook";
const footerStore = useFooterStore();
</script>

<template>
  <!-- 该页面的响应式方案在Footer里面 -->
  <div class="lyric" :class="{ active: footerStore.is_show_lyric }">
    <section class="lyric-main">
      <div class="lyric-main-left">
        <h4>歌词</h4>
      </div>
      <div class="lyric-main-rigtht"></div>
    </section>
    <!-- 功能模块 -->
    <div class="lyric-fun" style="display: none">
      <!-- 顺序 -->

      <el-tooltip
        :content="footerStore.order_text"
        placement="top"
        effect="light"
      >
        <div @click="useChangeOrder" style="display: inline-block">
          <svg
            v-show="footerStore.play_order === 1"
            class="feather feather-align-left"
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
            <line x1="17" x2="3" y1="10" y2="10" />
            <line x1="21" x2="3" y1="6" y2="6" />
            <line x1="21" x2="3" y1="14" y2="14" />
            <line x1="17" x2="3" y1="18" y2="18" />
          </svg>

          <svg
            v-show="footerStore.play_order === 2"
            class="feather feather-repeat"
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
            <polyline points="17 1 21 5 17 9" />
            <path d="M3 11V9a4 4 0 0 1 4-4h14" />
            <polyline points="7 23 3 19 7 15" />
            <path d="M21 13v2a4 4 0 0 1-4 4H3" />
          </svg>

          <svg
            v-show="footerStore.play_order === 3"
            class="feather feather-refresh-cw"
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
            <polyline points="23 4 23 10 17 10" />
            <polyline points="1 20 1 14 7 14" />
            <path
              d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"
            />
          </svg>
        </div>
      </el-tooltip>

      <!-- 歌单 -->
      <svg
        @click="footerStore.is_show_play_list = !footerStore.is_show_play_list"
        class="feather feather-grid"
        :class="{ 'list-btn-active': footerStore.is_show_play_list }"
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
        <rect height="7" width="7" x="3" y="3" />
        <rect height="7" width="7" x="14" y="3" />
        <rect height="7" width="7" x="14" y="14" />
        <rect height="7" width="7" x="3" y="14" />
      </svg>

      <!-- git -->
      <svg
        class="feather feather-github"
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
        <path
          d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
        />
      </svg>
    </div>
    <!-- 功能模块end -->
  </div>
</template>

<style scoped lang="scss">
.lyric {
  position: absolute;
  bottom: $foot-height;
  width: 100vw;
  height: 0;
  z-index: 10;
  transition: all 0.3s;
  background-color: #fff;
  overflow: hidden;

  .lyric-main {
    display: flex;
    justify-content: space-between;
    height: calc(100% - 60px);
    padding: 0 50px;

    .lyric-main-left {
      background-color: bisque;
      flex: 1;
    }

    .lyric-main-rigtht {
      background-color: aquamarine;
      flex: 1;
    }
  }

  .lyric-fun {
    position: absolute;
    bottom: $foot-height;
    right: 0;
    svg {
      margin: 0 15px 10px 15px;
    }
  }
}

.active {
  height: $plist-height;
}
</style>
