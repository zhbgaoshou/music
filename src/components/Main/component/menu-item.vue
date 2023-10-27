<script setup>
import { menuRoutes } from "@/router/index";
import { useRoute } from "vue-router";
const globalRoute = useRoute();
</script>

<template>
  <div class="menu-item">
    <router-link
      :class="{ active: route.path === globalRoute.path }"
      class="item"
      v-for="route in menuRoutes"
      :key="route.name"
      :to="route.path"
    >
      <i :class="['iconfont', route.meta.icon]"></i>
      <span>{{ route.meta.title }}</span>
    </router-link>
  </div>
</template>

<style scoped lang="scss">
.menu-item {
  display: flex;
  flex-direction: column;
  .item {
    @include box-center;
    height: 50px;
    color: $menu-item-color;
    transition: all 0.1s;

    i {
      transform: translateX(-10px);
    }

    span {
      font-family: "阿里妈妈方圆体 VF Regular";
    }

    &:hover {
      color: #000;
      transform: scale(1.1);
    }
  }
}

.active {
  color: rgb(230, 15, 15) !important;
  transform: scale(1.1);
}
</style>
