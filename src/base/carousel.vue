<script setup>
import { nextTick } from "vue";
// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";
import { useMusicStore } from "@/store/index";
const musicStore = useMusicStore();
musicStore.getBannerList();

// import styles bundle
import "swiper/css/bundle";

nextTick(() => {
  new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    autoplay: {
      delay: 3000,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
</script>

<template>
  <!-- Slider main container -->
  <div class="swiper">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide" v-for="banner in musicStore.bannerList">
        <img :src="banner.imageUrl" alt="" />
      </div>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<style scoped lang="scss">
.swiper {
  width: 100%;
  border-radius: 10px;

  img {
    @include img-style(10px);
  }
}
</style>
