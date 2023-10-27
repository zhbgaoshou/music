<script setup>
import { menuRoutes } from "@/router/index";
import { useRoute } from "vue-router";
import { useFooterStore } from "@/store/index";
const footerStore = useFooterStore();
const globalRoute = useRoute();
</script>

<template>
  <div class="footer-menu" id="footer-menu">
    <div class="container">
      <router-link
        @click="footerStore.is_show_lyric = false"
        :class="{ active: route.path === globalRoute.path }"
        class="item"
        v-for="route in menuRoutes"
        :key="route.name"
        :to="route.path"
      >
        <i :class="['iconfont', route.meta.icon]"></i>
        <span>{{ route.meta.lowTitle }}</span>
      </router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer-menu {
  position: static;
  z-index: 11;
  border-top: 1px solid $border-color;
  display: none;
  padding: 10px;
  background-color: $menu-bg-color;
  .container {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100%;

    .item {
      // padding: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: $menu-item-color;
      i {
        font-size: 24px;
      }
      span {
        font-size: 14px;
        font-family: "阿里妈妈方圆体 VF Regular";
      }
    }
  }
}

.active {
  color: rgb(230, 15, 15) !important;
  transform: scale(1.1);
}
</style>
