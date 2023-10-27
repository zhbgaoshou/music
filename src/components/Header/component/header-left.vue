<script setup>
import screenfull from "screenfull";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useFooterStore } from "@/store";
const footerStore = useFooterStore();
const router = useRouter();

let isFull = ref(true);
function screenFull(type) {
  switch (type) {
    case "full":
      if (isFull.value) {
        screenfull.toggle();
        isFull.value = !isFull.value;
      }
      break;
    case "exit":
      if (!isFull.value) {
        screenfull.exit();
        isFull.value = !isFull.value;
      }
      break;
    default:
      router.replace("/");
      break;
  }
}
</script>

<template>
  <!-- 当屏幕小于等于576px是显示 -->
  <svg
    v-if="!footerStore.is_show_lyric"
    @click="router.back()"
    style="display: none"
    class="feather feather-arrow-left show-menu"
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
    <line x1="19" x2="5" y1="12" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>

  <svg
    v-else
    @click="
      (footerStore.is_show_lyric = false),
        (footerStore.is_show_play_list = false)
    "
    class="feather feather-arrow-down-circle show-menu"
    style="display: none"
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
    <circle cx="12" cy="12" r="10" />
    <polyline points="8 12 12 16 16 12" />
    <line x1="12" x2="12" y1="8" y2="16" />
  </svg>
  <!-- end  -->
  <div class="header-left">
    <!-- 返回首页 -->
    <svg
      @click="screenFull('home')"
      class="feather feather-home"
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
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>

    <svg
      @click="screenFull('full')"
      class="feather feather-maximize"
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
        d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
      />
    </svg>

    <svg
      @click="screenFull('exit')"
      class="feather feather-minus"
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
      <line x1="5" x2="19" y1="12" y2="12" />
    </svg>

    <svg
      @click="router.go(-1)"
      class="feather feather-chevron-left"
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
      <polyline points="15 18 9 12 15 6" />
    </svg>

    <svg
      @click="router.go(1)"
      class="feather feather-chevron-right"
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
      <polyline points="9 18 15 12 9 6" />
    </svg>
  </div>
</template>

<style scoped lang="scss">
.header-left {
  flex: 1;
  svg {
    padding: 1.3333vw;

    &:first-child {
      margin-left: 0;
    }
  }
}
</style>
