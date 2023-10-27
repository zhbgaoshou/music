<script setup>
import { useFooterStore } from "@/store/index";
const footerStore = useFooterStore();
</script>

<template>
  <div class="footer-left">
    <div
      class="song-cover"
      style="position: relative"
      @click="
        (footerStore.is_show_lyric = !footerStore.is_show_lyric),
          (footerStore.is_show_play_list = false)
      "
    >
      <!-- 收缩图标 -->
      <svg
        v-if="footerStore.is_show_lyric"
        class="feather feather-chevrons-down icon"
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
        <polyline points="7 13 12 18 17 13" />
        <polyline points="7 6 12 11 17 6" />
      </svg>

      <!-- 展开图标 -->
      <svg
        v-else
        class="feather feather-chevrons-up icon"
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
        <polyline points="17 11 12 6 7 11" />
        <polyline points="17 18 12 13 7 18" />
      </svg>
      <img src="@/assets/images/default.jpg" alt="" />
    </div>
    <div class="song-info">
      <h6>天后天后天后天后</h6>
      <p>00:00</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer-left {
  flex: 0 0 30%;
  @include vertical-center;
  .song-cover {
    width: 50px;
    height: 50px;
    img {
      @include img-style(5px);
    }
    .icon {
      @include center-position;
      color: #fff;
    }
  }
  .song-info {
    height: 100%;
    padding: 5px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 10px;
    font: {
      size: 14px;
    }
    h6 {
      width: 13.3333vw;
      font-weight: 500;
      @include ell-line;
    }
  }
}
</style>
