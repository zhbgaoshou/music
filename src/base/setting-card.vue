<script setup>
import { ref } from "vue";
import { useFooterStore } from "@/store/index";
const footerStore = useFooterStore();
</script>

<template>
  <div class="setting-card">
    <!-- 音量 -->
    <div class="volume">
      <!-- 非静音 -->
      <svg
        v-if="footerStore.slider_value"
        @click="footerStore.slider_value = 0"
        class="feather feather-volume-2"
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
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
      </svg>

      <!-- 静音 -->
      <svg
        v-else
        @click="footerStore.slider_value = 50"
        class="feather feather-volume-x"
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
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <line x1="23" x2="17" y1="9" y2="15" />
        <line x1="17" x2="23" y1="9" y2="15" />
      </svg>

      <el-slider v-model="footerStore.slider_value" class="slider" />
    </div>
    <!-- 音量end -->
  </div>
</template>

<style scoped lang="scss">
.setting-card {
  position: absolute;
  z-index: 99;
  bottom: $foot-height;
  right: 0;
  width: 250px;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px 0 0 0;
  border-top: 1px solid #c8c7c7;
  border-left: 1px solid #c8c7c7;
  border-bottom: 1px solid #c8c7c7;
  transition: all 0.2s;

  .volume {
    @include vertical-center;
  }
  .slider {
    margin: 0 20px;
  }
}
</style>
