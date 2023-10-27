<script setup></script>

<template>
  <div class="menu-header">
    <div class="cover">
      <img src="@/assets/images/default.jpg" alt="" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.menu-header {
  height: 1%;
  min-height: 80px;
  border-bottom: 1px solid $theme;
  @include vertical-center;
  .cover {
    width: 50px;
    height: 50px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
  }
}
</style>
