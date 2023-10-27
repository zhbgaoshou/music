<script setup>
import Audio from "@/components/Audio/index.vue";
import bus from "@/mitt/index";
import { useMusicStore } from "@/store/index";
import { useNext } from "@/hook/music-hook";
const musicStore = useMusicStore();

function up() {
  musicStore.curIndex == 0 ? ElMessage("这是第一首0.0") : musicStore.curIndex--;
}
</script>

<template>
  <div class="footer-mid" id="footer-mid">
    <!-- 上一首 -->
    <svg
      @click="up"
      class="feather feather-skip-back"
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
      <polygon points="19 20 9 12 19 4 19 20" />
      <line x1="5" x2="5" y1="19" y2="5" />
    </svg>

    <!-- 播放/暂停 -->
    <svg
      @click="bus.emit('isPlay')"
      v-show="!musicStore.playIcon"
      style="margin: 0 20px"
      class="feather feather-play-circle"
      fill="none"
      height="48"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      width="48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" />
    </svg>

    <svg
      @click="bus.emit('isPlay')"
      v-show="musicStore.playIcon"
      style="margin: 0 20px"
      class="feather feather-pause-circle"
      fill="none"
      height="48"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      width="48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="10" x2="10" y1="15" y2="9" />
      <line x1="14" x2="14" y1="15" y2="9" />
    </svg>

    <!-- 下一首 -->
    <svg
      @click="useNext"
      class="feather feather-skip-forward"
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
      <polygon points="5 4 15 12 5 20 5 4" />
      <line x1="19" x2="19" y1="5" y2="19" />
    </svg>
  </div>
  <Audio></Audio>
</template>

<style scoped lang="scss">
.footer-mid {
  @include box-center;
  flex: 1;
  margin: 0 15px;
}
</style>
